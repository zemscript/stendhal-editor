import { useState } from "react";
import * as st from "./text-editor-style";
import BtnText from "./UI/Button/button-text";
import BtnImg from "./UI/Button/button-img";

import left from "./img/left.svg";
import right from "./img/right.svg";
import download from "./img/download.svg";
import ModalButton from "./UI/Modal/modal";

function TextEditor() {
  const [inputText, setInputText] = useState("");
  const [pages, setPages] = useState([""]);
  const [filename, setFilename] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [charsPerPage, setCharsPerPage] = useState(200);

  const removeParagraphs = () => {
    const formattedText = inputText.replace(/\n+/g, " ");
    setInputText(formattedText);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const handleFilenameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilename(event.target.value);
  };

  const handleCharsPerPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const chars = parseInt(event.target.value, 10);
    if (!isNaN(chars) && chars > 0) {
      setCharsPerPage(chars);
    } else {
      setCharsPerPage(1);
    }
  };

  const handleDownload = () => {
    const contentTitle = pages
      .find((page) => page.startsWith("title:"))
      ?.split(":")[1]
      ?.trim();
    const downloadTitle = filename || contentTitle || "untitled";

    const fileContent = `title: ${downloadTitle}\nauthor: name\npages:\n${pages
      .map((page) => `#- ${page}`)
      .join("\n")}`;
    const element = document.createElement("a");
    const file = new Blob([fileContent], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = downloadTitle.endsWith(".stendhal") ? downloadTitle : downloadTitle + ".stendhal";
    element.click();
  };

  const handleFormatText = () => {
    const formattedPages = [];
    let currentIndex = 0;
    const fullText = inputText;

    while (currentIndex < fullText.length) {
      let endIndex = Math.min(currentIndex + charsPerPage, fullText.length);
      if (endIndex < fullText.length && fullText[endIndex] !== " " && fullText[endIndex - 1] !== " ") {
        while (endIndex > currentIndex && fullText[endIndex] !== " ") {
          endIndex--;
        }
      }
      formattedPages.push(fullText.substring(currentIndex, endIndex).trim());
      currentIndex = endIndex + (fullText[endIndex] === " " ? 1 : 0);
    }

    setPages(formattedPages.length ? formattedPages : [""]);
    setCurrentPage(0);
  };

  const handlePrevPage = () => {
    setCurrentPage((current) => Math.max(current - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((current) => Math.min(current + 1, pages.length - 1));
  };

  return (
    <st.Section>
      <st.Wrapper>
        <st.TitleWrapper>
          <st.Title>StendhalEditor</st.Title>
          <ModalButton></ModalButton>
        </st.TitleWrapper>
        <st.Flex>
          <st.TxtBlock>
            <st.EditLabel>
              <st.SubTitle>Введите текст:</st.SubTitle>
              <st.InputText as="textarea" value={inputText} onChange={handleTextChange} />
            </st.EditLabel>
            <st.BtnWrapper>
              <BtnText onClick={removeParagraphs} buttonText="Удалить абзацы"></BtnText>
            </st.BtnWrapper>
          </st.TxtBlock>
          <st.TxtBlock>
            <st.ChrctBlock>
              <st.EditLabel>
                <st.SubTitle>Количество символов на странице:</st.SubTitle>
                <st.EditChrctInput type="number" value={charsPerPage} onChange={handleCharsPerPageChange} min="1" />
              </st.EditLabel>
              <st.BtnWrapper>
                <BtnText onClick={handleFormatText} buttonText="Распределить текст по страницам"></BtnText>
              </st.BtnWrapper>
            </st.ChrctBlock>
            <st.PagesBlock>
              <st.EditLabel>
                <st.SubTitle>Текст страницы:</st.SubTitle>
                <st.TextBook value={pages[currentPage] || ""} readOnly />{" "}
              </st.EditLabel>
              <st.WrapBtnImg>
                <BtnImg
                  onClick={handlePrevPage}
                  disabled={currentPage <= 0}
                  title="Назад"
                  buttonImg={<img src={left} alt="Кнопка, чтобы перейти на прошлую страницу"></img>}
                ></BtnImg>
                <st.NumPage>
                  Страница {currentPage + 1} из {pages.length}
                </st.NumPage>
                <BtnImg
                  onClick={handleNextPage}
                  disabled={currentPage >= pages.length - 1}
                  title="Вперёд"
                  buttonImg={<img src={right} alt="Кнопка, чтобы перейти на следующую страницу"></img>}
                ></BtnImg>
              </st.WrapBtnImg>
            </st.PagesBlock>
            <st.DwnldBlock>
              <st.EditLabel>
                <st.DwnldInput
                  type="text"
                  value={filename}
                  onChange={handleFilenameChange}
                  placeholder="Название файла..."
                />
              </st.EditLabel>
              <BtnImg
                onClick={handleDownload}
                disabled={false}
                title="Скачать"
                buttonImg={<img src={download} alt="Кнопка, чтобы скачать файл"></img>}
              ></BtnImg>
            </st.DwnldBlock>
          </st.TxtBlock>
        </st.Flex>
      </st.Wrapper>
    </st.Section>
  );
}

export default TextEditor;
