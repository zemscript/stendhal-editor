import styled from "styled-components";
import "../../../global-styles";

const ButtonImg: React.FC<ButtonImgProps> = ({ buttonImg, onClick, title, disabled = false }) => {
  return (
    <Btn onClick={onClick} title={title} disabled={disabled}>
      {buttonImg}
    </Btn>
  );
};

interface ButtonImgProps {
  buttonImg: React.ReactElement;
  onClick: () => void;
  title?: string;
  disabled: boolean;
}

export default ButtonImg;

const Btn = styled.button`
  background-color: var(--colorMain);
  display: flex;
  color: #ffffff;
  border: 0.1rem solid;
  padding: 0.5rem;
  border-radius: 1rem;
  font-family: var(--fontText);
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  align-items: center;
  justify-content: center;
  user-select: none;

  &:hover {
    background-color: var(--colorHover);
  }

  &:active {
    background-color: var(--colorActive);
  }
`;
