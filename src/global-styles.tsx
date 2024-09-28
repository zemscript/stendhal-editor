import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --fontTitle: 'Montserrat', sans-serif;
        --fontSubtitle: 'Istok Web', sans-serif;
        --fontText: 'Roboto', sans-serif;
        --fontSize12: 1.2rem;
        --fontSize14: 1.4rem;
        --fontSize16: 1.6rem;
        --fontSize18: 1.8rem;
        --colorMain: #0E7E68;
        --colorHover: #0C6B5C;
        --colorActive: #0A594F;
        --colorText: #595959;
        --colorIcon: #9198a1;
        --colorBackgroundL: #0d1117;
        --colorBackgroundD: #010409;
    }
`;

export default GlobalStyles;
