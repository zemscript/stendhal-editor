import styled from "styled-components";
import "../../../global-styles";

const ButtonText: React.FC<ButtonTextProps> = ({ buttonText, onClick }) => {
  return <Btn onClick={onClick}>{buttonText}</Btn>;
};

interface ButtonTextProps {
  buttonText: string;
  onClick: () => void;
}

export default ButtonText;

const Btn = styled.button`
  background-color: var(--colorMain);
  display: flex;
  color: #ffffff;
  border: 0.1rem solid;
  padding: 1rem;
  border-radius: 1rem;
  font-family: var(--fontText);
  font-size: var(--fontSize14);
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  align-items: center;
  justify-content: center;
  width: 100%;
  user-select: none;

  &:hover {
    background-color: var(--colorHover);
  }

  &:active {
    background-color: var(--colorActive);
  }

  @media (max-width: 767px) and (min-width: 320px) {
    width: 35rem;
  }
`;
