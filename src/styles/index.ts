import { createGlobalStyle } from "styled-components"

import Fonts from "./fonts"
import Reset from "./reset"

interface IStyles {
  colors?: {
    app?: {
      background?: string
      text?: string
      font?: string
    }
  }
}

const Styles = createGlobalStyle<IStyles>`
	${Fonts}
	${Reset}

	:root {
		--font-app: 'Roboto', sans-serif;
  		--color-background: #2c2c2c;
		--color-text: #ffffff;
		--color-violet: #ed00e7;
		--color-primary: #ff9d9d;
		--color-violet-dark: #b019ad;
		--color-violet-light: #f7c8ff;
	}

	html {
		font-family: ${(props) => props.colors?.app?.font || "var(--font-app)"};
		background: ${(props) =>
      props.colors?.app?.background || "var(--color-background)"};
		color: ${(props) => props.colors?.app?.text || "var(--color-text)"}; 
		height: 100%;
	}

	
	::-webkit-scrollbar {
		width: 7px;
		background-color: var(--color-background);
	}

	::-webkit-scrollbar-thumb {
		background-color: var(--color-primary);
		border-radius: 9em;
	}
`

export default Styles
