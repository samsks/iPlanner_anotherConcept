import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600&display=swap');

:root{
    --fontFamily-0: 'Nunito', sans-serif;

    --color-primary: #1C87FF;
    --color-primary-99:#1C87FF99;
    --color-secondary: #03B898;
    --color-third: #E34981;

    --sky-1: #F8FBFF;
    --sky-2: #E8F3FF;
 
    --grey-5: #171717;
    --grey-4: #212529;
    --grey-3: #868E96;
    --grey-2: #D9D9D9;
    --grey-1: #E9ECEF;
    --grey-0: #F8F9FA;
    --white: #ffffff;

    --grey-325: #868E9625;

    //toaster

      --toastify-color-light: var(--grey-0);
      --toastify-color-dark: var(--grey-4);
      --toastify-color-info: var(--color-primary);
      --toastify-color-success: var(--color-secondary);
      --toastify-color-warning: var(--color-third);
      --toastify-color-error: var(--color-third);
      --toastify-color-transparent: var(--grey-325);

      --toastify-icon-color-info: var(--toastify-color-info);
      --toastify-icon-color-success: var(--toastify-color-success);
      --toastify-icon-color-warning: var(--toastify-color-warning);
      --toastify-icon-color-error: var(--toastify-color-error);

      --toastify-toast-width: 250px;
      --toastify-toast-background: var();
      --toastify-toast-min-height: 56px;
      --toastify-toast-max-height: 500px;
      --toastify-font-family: var(--fontFamily-0);
      --toastify-z-index: 9999;

      --toastify-text-color-light: var(--grey-4);
      --toastify-text-color-dark: var(--grey-0);

      //Usado para o tema colorido
      --toastify-text-color-info: var(--grey-0);
      --toastify-text-color-success: var(--grey-0);
      --toastify-text-color-warning: var(--grey-0);
      --toastify-text-color-error: var(--grey-0);

      --toastify-spinner-color: var(--grey-3);
      --toastify-spinner-color-empty-area: var(--grey-0);

      // Quando o tipo é informado
      // toast("**hello**")
      --toastify-color-progress-light: linear-gradient(
        to right,
        #4cd964,
        #5ac8fa,
        #007aff,
        #34aadc,
        #5856d6,
        #ff2d55
      );
      // Usado quando o tipo não é informado
      --toastify-color-progress-dark: var(--color-primary);
      --toastify-color-progress-info: var(--toastify-color-info);
      --toastify-color-progress-success: var(--toastify-color-success);
      --toastify-color-progress-warning: var(--toastify-color-warning);
      --toastify-color-progress-error: var(--toastify-color-error);

}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
}

  body::-webkit-scrollbar {
    width: 10px;
  }

  body::-webkit-scrollbar-track {
    background: var(--grey-0);
    border: 2px solid var(--grey-0);
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--sky-2);
    border-radius: 20px;
    border: 2px solid var(--grey-0);
  }


//Reset
html, body, div, span, h1, h2, h3, h4, p, a, em, img, small, strong, ol, ul, li, 
fieldset, button, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, 
figure, figcaption, footer, header, menu, nav, section, audio, video, input, select, option{
    margin: 0;
    border: 0;
    padding: 0;
    font-size: 100%;
    font-family: 'Nunito', sans-serif;
    color: var(--grey-4);

    text-decoration: none;
    display: block;
    box-sizing: border-box;
    line-height: 1;
    list-style: none;
    border: 0;
}
html,body{
    width: 100vw;
    height: 100vh;
}

`;
