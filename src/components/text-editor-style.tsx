import styled from "styled-components";
import "../global-styles";

export const TxtBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  gap: 1rem;
`;

export const DwnldBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const DwnldInput = styled.input`
  height: 3rem;
`;

export const ChrctBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PagesBlock = styled.div`
  margin-top: 1rem;
`;

export const EditLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-family: var(--fontText);
  font-size: var(--fontSize14);
  border-radius: 1%;
  width: 100%;
`;

export const EditChrctInput = styled.input`
  height: 3rem;
  margin: 0.5rem 0;
`;

export const InputText = styled.textarea`
  width: 21.5rem;
  height: 33.7rem;
  margin: 0.7rem 0;
  border: 0.1rem solid rgba(102, 102, 102, 0.7);
  padding: 1rem;

  @media (max-width: 767px) and (min-width: 320px) {
    width: 100%;
  }
`;

export const TextBook = styled.textarea`
  height: 18.5rem;
  padding: 1rem;
  margin-top: 1rem;
  border: 0.1rem solid rgba(102, 102, 102, 0.7);
  resize: none;
`;

export const WrapBtnImg = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 0.5rem;
`;

export const NumPage = styled.p`
  font-size: 1.2rem;
  font-family: var(--fontTitle);
  display: flex;
  justify-content: center;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  @media (max-width: 767px) and (min-width: 320px) {
    margin-top: 5rem;
  }
  @media (max-width: 1023px) and (min-width: 768px) {
    margin-top: 5rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 767px) and (min-width: 320px) {
    display: flex;
  }
  @media (max-width: 1023px) and (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: var(--fontTitle);
  font-size: 2.5rem;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 767px) and (min-width: 320px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 1023px) and (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const BtnWrapper = styled.div`
  display: block;
  @media (max-width: 767px) and (min-width: 320px) {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
`;

export const SubTitle = styled.span`
  font-family: var(--fontSubtitle);
  font-size: var(--fontSize18);
  font-weight: 700;
`;
