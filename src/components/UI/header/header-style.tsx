import styled from "styled-components";
import { Breadcrumb } from "antd";

export const Nav = styled(Breadcrumb)`
  display: flex;
  justify-content: center;
  padding: 1rem 0;

  ol {
    justify-content: center;
  }

  li {
    margin: 0.5rem 0;
  }
`;

export const NavText = styled.span`
  font-size: 1.6rem;
  color: var(--colorText);
`;

export const Divider = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: var(--colorText);
`;
