import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    ${'' /* font-family: 'New Tegomin', serif; */}
    -webkit-text-stroke: inherit;
    -webkit-text-stroke: initial;
    -webkit-text-stroke: unset;
    -webkit-tap-highlight-color: transparent;
    
  }
  ${
		'' /* ::-webkit-scrollbar {
		height: 12px;
		width: 12px;
		background: rgb(75, 74, 74);
    user-select: none; 
   -webkit-user-select: none; 
   -khtml-user-select: none; 
   -moz-user-select: none; 
   -ms-user-select: none;
	}

	::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.secondaryColor};
		-webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
		box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
 
	}

	::-webkit-scrollbar-corner {
		background: rgb(75, 74, 74);
	} */
	}
    ${
			'' /* ::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}
  ::-webkit-scrollbar {
		width: 12px;
		background: rgb(75, 74, 74);
    user-select: none;
   -webkit-user-select: none; 
   -khtml-user-select: none; 
   -moz-user-select: none; 
   -ms-user-select: none; 
	}

	::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.secondaryColor};
		-webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
		box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
    border-radius: 10px;

 
	}

	::-webkit-scrollbar-corner {
		background: rgb(75, 74, 74);

	} */
		}

  ${
		'' /* * {
    scrollbar-width: auto;
    scrollbar-color: #8f54a0 #464444;
  }

  *::-webkit-scrollbar {
    width: 16px;
  }

  *::-webkit-scrollbar-track {
    background: #464444;

  }

  *::-webkit-scrollbar-thumb {
    background-color: #8f54a0;
    border-radius: 10px;
    border: 3px solid #ffffff;
  } */
	}
  button, option.form-option, body{
    font-family: 'New Tegomin', serif;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.bodyBg};
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.primaryColor};
    overflow: hidden;
    background-image: url('/images/light wood background.webp');
    #root{
    	.App {
    width: 100vw;
    height: 100vh;
    width: clamp(32rem, 100vw, 100vw);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: auto;
	overflow: hidden;
  padding-bottom: 1rem;
  background-repeat: repeat;
	background-size: contain;
${'' /* background-image: url('./images/light wood background.webp'); */}
position: relative;
  &#dark {
		background-image: url('/images/dark wood background.webp');
	}
	&#light {
    background-image: url('/images/light wood background.webp');
    ${'' /* background-image: url('/images/light wood background.webp'); */}
	}
  &.mobile{
    row-gap:0;
    &#dark {
		background-image: url('/images/black wood.webp');
	}
	&#light {
    background-image: url('/images/white wood.webp');
	}
  }
  .test-modal{
    position: absolute;
    top: 50%;
    left:50%;
    height: 20rem;
    width: 20rem;
    padding: 2rem;
    background-color: blue;
    transform: translate(-50%,-50%);
    z-index: 2000000;
  }
  }
  }
  }

	${
		'' /* .App {
    width: 100vw;
    height: 100vh;
    width: clamp(32rem, 100vw, 100vw);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: auto;
	overflow: hidden;
  padding-bottom: 1rem;
  background-repeat: repeat;
	background-size: contain;
position: relative;
  &#dark {
		background-image: url('/images/dark wood background.webp');
	}
	&#light {
    background-image: url('/images/light wood background.webp');
	}
  &.mobile{
    row-gap:0;
    &#dark {
		background-image: url('/images/black wood.webp');
	}
	&#light {
    background-image: url('/images/white wood.webp');
	}
  }
  .test-modal{
    position: absolute;
    top: 50%;
    left:50%;
    height: 20rem;
    width: 20rem;
    padding: 2rem;
    background-color: blue;
    transform: translate(-50%,-50%);
    z-index: 2000000;
  }
  } */
	}
  .widget-container{
    padding: 1rem 2rem;
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	background-repeat: no-repeat;
	background-size: cover;
	row-gap: 0.5rem;
	box-shadow: 3px 3px 4px rgb(0 0 0);
	overflow-y: hidden;
	&#dark {
		background-image: url('/images/black wood.webp');
	}
	&#light {
		background-image: url('/images/white wood.webp');
	}
  &.mobile {
		border-radius: 0.4rem;
		padding: 1rem;
	}
  }
  h2,h3{
    font-size: 1.6rem;

  }
  h3,h4{
    font-size: 1.4rem;
  }

  button {
		background-color: ${({ theme }) => theme.btnBg};
    ${'' /* font-family: 'New Tegomin', serif; */}
		padding: 1rem 3rem;
		text-transform: uppercase;
		border: none;
		outline: none;
		border-radius: 0.4rem;
		align-items: center;
		font-size: 2.5rem;
		cursor: pointer;
    color: ${({ theme }) => theme.btnColor};
    .btn-hidden-text{
      font-size: 0px;
    }
	}
 a {
    text-decoration: none;
  }
  .status-icon{
    color: ${({ theme }) => theme.primaryColor};
  }
  label, input {
    font-weight: bolder;
  }
  input, textarea {
    font-weight: bolder;
    box-sizing: border-box;
    padding: 1rem;
    border: 2px solid ${({ theme }) => theme.borderLight};
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
    border-radius: 0.4rem;
    background-color: ${({ theme }) => theme.inputBg};
    ${'' /* background-color: rgba(168, 105, 69, 0.57); */}
    box-shadow: rgb(0 0 0 / 30%) 2px 2px 2px, rgb(0 0 0 / 10%) -2px -2px 2px;
    ::placeholder {
  color: ${({ theme }) => theme.primaryColor};
  opacity: 1; 
}
:-ms-input-placeholder { 
color: ${({ theme }) => theme.primaryColor};
}
::-ms-input-placeholder { 
color: ${({ theme }) => theme.primaryColor};
}
${
	'' /* 
input:-webkit-autofill,
input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
} */
}
${
	'' /* input[data-autocompleted] {
    background-color: transparent !important;
} */
}
  }
  input:focus, textarea:focus {
  border: 2px solid ${({ theme }) => theme.borderDark};
}
.form-input {
				width: 100%;
        text-transform: capitalize;
			}
      .input-grow {
				resize: none;
				width: --webkit-fill-available;
				width: 100%;
				margin-top: 1rem;
        ::placeholder {
					color: ${({ theme }) => theme.primaryColor};
					font-size: 1.4rem;
					opacity: 1;
				}
				:-ms-input-placeholder {
					color: ${({ theme }) => theme.primaryColor};
				}
				::-ms-input-placeholder {
					color: ${({ theme }) => theme.primaryColor};
				}
			}
  input[type='range'] {
      overflow: hidden;
      appearance: none;
      -webkit-appearance: none;
      background-color: ${({ theme }) => theme.secondaryColor};
    }
    
    input[type='range']::-webkit-slider-runnable-track {
      height: 10px;
      -webkit-appearance: none;
      color:${({ theme }) => theme.secondaryColor};
      margin-top: -1px;
    }
    
    input[type='range']::-webkit-slider-thumb {
      width: 10px;
      -webkit-appearance: none;
      height: 10px;
      cursor: ew-resize;
    }
 
  div.error {
    padding: 1rem;
    background: ${({ theme }) => theme.bgError};
    border: 2px solid ${({ theme }) => theme.error};
    color: ${({ theme }) => theme.error};
    border-radius: 4px;
    ${'' /* margin-top: 2rem; */}
    ${'' /* flex: 1 1 48%; */}
  }
  input.error {
    border: 2px solid ${({ theme }) => theme.error};
    
  }
  .stroke{
    -webkit-text-stroke: 1px ${({ theme }) => theme.secondaryColor};
  font-family: 'Arial';
  }
  .mono-font{
    font-family: 'Roboto Mono', monospace;
  }
  label .field-required{
    color: ${({ theme }) => theme.error};
    font-size: 1.8rem;
  }
  .br{
    border-radius: 4px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  }
  .br-inset{
    background-color: ${({ theme }) => theme.bgLightGrey};
    border-radius: 4px;
    box-shadow: inset 1px 1px 1px rgba(0,0,0,0.3), inset -1px -1px 1px rgba(0,0,0,0.1);
  }
  .br-field{
    border-radius: 5px;
    box-shadow: inset -1px -1px 2px rgba(0,0,0,0.3), inset 1px 1px 1px rgba(0,0,0,0.1);
  }
  input[type="checkbox"] {
  -webkit-appearance: none;
  appearance: none;
  padding: unset;
  ${'' /* background-color: rgba(168, 105, 69, 0.57); */}
  margin: 0;
  font: inherit;
width: 3.9rem;
  height: 3.9rem;
  border-radius: 0.4rem;
  display: grid;
  place-content: center;
  cursor: pointer;
}
input[type="checkbox"]::before {
  content: "";
  width: 1em;
  height: 1em;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em ${({ theme }) => theme.secondaryColor};
  transform-origin: bottom left;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
}
input[type="checkbox"]:checked::before {
  transform: scale(1);
}
input[type="checkbox"]:disabled {
  --form-control-color:  ${({ theme }) => theme.error};

  color: ${({ theme }) => theme.error};
  cursor: not-allowed;
}
input[type="date"]{
  height: 3.9rem;
    padding: 0 0 0 1rem;
}
::-webkit-calendar-picker-indicator{
    background-color: ${({ theme }) => theme.btnBg};
   padding: 20px 10px; 
    cursor: pointer;
    color: ${({ theme }) => theme.secondaryColor};
    height: 1.6rem;
    width: 1.6rem;
    border-left: 2px solid ${({ theme }) => theme.btnBorder};
}
      select.form-select {
        cursor: inherit;
				line-height: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -moz-border-radius: 0.4rem;
  border-radius: 0.4rem;
  outline: none;
  padding: 10px 20px 10px 5px;
  position: relative;
  width: 100%;
  box-sizing: border-box;
    border: 2px solid ${({ theme }) => theme.borderLight};
    ${'' /* border: 2px solid rgba(16, 16, 16,0.5); */}
  -webkit-transition: 0.5s;
  transition: 0.5s;
    background-color: ${({ theme }) => theme.inputBg};
    ${'' /* background-color: rgba(168, 105, 69, 0.57); */}
    box-shadow: rgb(0 0 0 / 30%) 2px 2px 2px, rgb(0 0 0 / 10%) -2px -2px 2px;
    text-transform: capitalize;
font-weight: bolder;
padding: 10px 20px 10px 10px;
}
select.form-select:focus {
  border: 2px solid ${({ theme }) => theme.borderDark};
}
option.form-option {
					font-size: 1.6rem;
					color: ${({ theme }) => theme.primaryColor};
          font-weight: bolder;
					background-color: ${({ theme }) => theme.optionBg};
					${'' /* background-color: rgba(36, 14, 0, 0.08); */}
					border: 1px solid ${({ theme }) => theme.borderDark};
          ${'' /* border: 2px solid rgba(16, 16, 16, 0.5); */}
					border-radius: 1rem 0 0 1rem;
          text-transform: capitalize;
          ${'' /* font-family: 'New Tegomin',serif; */}
          cursor: pointer;
          &:nth-child(odd){
            background-color:  ${({ theme }) => theme.optionBgOdd};
          }
					&:focus {
						border: 1px solid ${({ theme }) => theme.darkBrown};
						outline: none;
					}
				}
.form-dropdown {
  position: relative;
  flex: 1;
}
.form-dropdown:after {
  background-color: ${({ theme }) => theme.btnBg};
  -moz-border-radius: 0 3px 3px 0;
  border-radius: 0 3px 3px 0;
  color: ${({ theme }) => theme.secondaryColor};
  content: '▼';
  font-weight: 900;
  display: block;
  font-size: 1.4rem;
  width: 3.5rem;
  height: 3.5rem;
  padding: 7px 0;
  position: absolute;
  pointer-events: none;
  top: 2px;
  bottom: 0;
  text-align: center;
  right: 2px;
  cursor: pointer;
  z-index: 1;
  border-left: 2px solid ${({ theme }) => theme.btnBorder};
}
input[type="file"] {
        position: absolute;
        z-index: 1;
        left: 0;
        width: 100%;
        height: 3.9rem;
      }
      .file-input {
				width: 100%;
				position: relative;
				height: 3.9rem;
			} 
      ::-webkit-file-upload-button {
  background: ${({ theme }) => theme.btnBg};
  color: ${({ theme }) => theme.btnIcon};
  outline: none;
  border: none;
  padding:0rem  0.7rem;
}
				

// btn
.custom-btn {
					color: ${({ theme }) => theme.btnColor};
					border-radius: 5px;
					padding: 7px 10px;
					${'' /* padding: 8px 10px; */}
					font-size: 1.8rem;
					font-weight: 900;
					font-style: normal;
					text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.4);
					text-decoration: none;
					background: transparent;
					cursor: pointer;
					position: relative;
					display: inline-block;
					box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 1),
						0px 1px 3px rgba(0, 0, 0, 0.3);
					outline: none;
					border: 1px solid #ba6;
					border: 2px solid #14130d;
					line-height: 1;
				}
				.custom-btn:active {
					-webkit-transform: translateY(2px);
					transform: translateY(2px);
				}
				.btn-silver {
					border-color: #7c7c7c;
					background-image: -webkit-repeating-linear-gradient(
							left,
							hsla(0, 0%, 100%, 0) 0%,
							hsla(0, 0%, 100%, 0) 6%,
							hsla(0, 0%, 100%, 0.1) 7.5%
						),
						-webkit-repeating-linear-gradient(left, hsla(0, 0%, 0%, 0) 0%, hsla(
										0,
										0%,
										0%,
										0
									)
									4%, hsla(0, 0%, 0%, 0.03) 4.5%),
						-webkit-repeating-linear-gradient(left, hsla(0, 0%, 100%, 0) 0%, hsla(
										0,
										0%,
										100%,
										0
									)
									1.2%, hsla(0, 0%, 100%, 0.15) 2.2%),
						linear-gradient(
							180deg,
							hsl(0, 0%, 78%) 0%,
							hsl(0, 0%, 90%) 47%,
							hsl(0, 0%, 78%) 53%,
							hsl(0, 0%, 70%) 100%
						);
				}
        .btn-6 {
			border-color: rgba(16, 16, 16,0.5);
			${
				'' /* background: linear-gradient(
				top,
				rgba(38, 38, 38, 0.8),
				#e6e6e6 25%,
				#ffffff 38%,
				#c5c5c5 63%,
				#f7f7f7 87%,
				rgba(38, 38, 38, 0.8)
			); */
			}
			${
				'' /* background: -webkit-linear-gradient(
				top,
				${({ theme }) => theme.btnGradient1},
				#e6e6e6 25%,
				#ffffff 38%,
				rgba(0, 0, 0, 0.25) 63%,
				#e6e6e6 87%,
				rgba(38, 38, 38, 0.4)
			); */
			}
			background: -webkit-linear-gradient(
				top,
				rgba(38, 38, 38, 0.5),
				#e6e6e6 25%,
				#ffffff 38%,
				rgba(0, 0, 0, 0.25) 63%,
				#e6e6e6 87%,
				rgba(38, 38, 38, 0.4)
			); 
			
		}
    button.page-number-btn:disabled,
button.page-number-btn[disabled]{
  color: #7c7c7c !important;
  cursor:not-allowed;
}
    button:disabled,
button[disabled]{
  color: #7c7c7c !important;
  cursor: not-allowed;
}

        .backdrop{
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: #000000e1;
          display: flex;
          align-items:center;
          justify-content: center;
          z-index: 200000;
        }

        .text-center{
          width: 100%;
          text-align: center;
          
        }
        .loader-center{
          width: 100%;
          height: 100%;
          margin-top: 10rem;
          flex: 1;
          text-align: center;
          display: flex;
          justify-content: center;
        }

        .test-data{
          display: flex;
          justify-content: space-evenly;
        }




        .toast-success{
          border: 2px solid #1d0b01;
          ${'' /* background-color: blue; */}
          font-size: 1.8rem;
          font-weight: bolder;
          text-transform: capitalize;
          color: #1d0b01;
          border-radius: 1rem;
          padding: 0.5rem 1rem;
          display: flex;
          flex-wrap: nowrap;
          min-width: fit-content;
          align-items: center;

        }
`;
