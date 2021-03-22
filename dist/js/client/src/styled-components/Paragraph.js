"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutMeParagraph = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.AboutMeParagraph = styled_components_1.default.p `
	font-size: ${(props) => (props.size ? props.size : '16px')};
	margin-top: ${(props) => (props.top ? props.top : false)};
	color: ${(props) => (props.color ? props.color : false)};
	text-align: center;
	font-family: 'Inter', 'Roboto', 'Oswald';
	animation: fadeIn ease 3s;
	-webkit-animation: fadeIn ease 3s;
	-moz-animation: fadeIn ease 3s;
	-o-animation: fadeIn ease 3s;
	-ms-animation: fadeIn ease 3s;
	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@-moz-keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@-webkit-keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@-o-keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@-ms-keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;
