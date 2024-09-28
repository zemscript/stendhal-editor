import styled from "styled-components";
import Navigation from "./components/UI/header/header";
import PasswordGenerator from "./components/text-editor";

function App() {
  return (
    <MainSection>
      <Navigation></Navigation>
      <Content>
        <PasswordGenerator></PasswordGenerator>
      </Content>
    </MainSection>
  );
}

export default App;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
`;
