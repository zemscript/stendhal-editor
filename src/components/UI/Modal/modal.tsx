import React, { useState } from "react";
import { Modal } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import ButtonImg from "../Button/button-img";

const ModalButton: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <ButtonImg onClick={showModal} buttonImg={<QuestionCircleOutlined />} disabled={false} />
      <Modal open={open} title="Инструкция" onCancel={handleCancel} footer={[null]}>
        <div>
          <ol>
            <li>
              Скачайте мод <a href="https://modrinth.com/mod/stendhal">Stendhal</a> с Modrinth, если ещё не сделали это.
            </li>
            <li>
              Вставьте нужный текст и удалите абзацы с помощью кнопки. Выберите подходящее количество символов на
              страницах. Этот параметр выставляет значение для <span>ВСЕХ</span> страниц, а не для какой-то конкретной.
              Приложение <span>не поддерживает</span> работу со стихами и титульными листами.
            </li>
            <li>
              С помощью кнопок со стрелками можно переключать страницы. Это поможет увидеть то, что будет написано на
              каждой странице.
            </li>
            <li>
              Введите название для файла и скачайте его, нажав на кнопку рядом. Добавьте файл в папку
              minecraft\config\stendhal\books. Если в игре есть пустая страница, то попробуйте уменьшить количество
              символов.
            </li>
          </ol>
        </div>
      </Modal>
    </>
  );
};

export default ModalButton;
