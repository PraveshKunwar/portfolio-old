"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const Hr = styled_components_1.default.hr `
	opacity: 1;
	border: 8px solid;
	border-color: ${(props) => props.init_color ? props.init_color : false};
	border-radius: 5px;
	transition: border-color 0.3s ease-in-out;
	margin-top: 1rem;
	width: 50%;
	animation: fadeIn ease 2s;
	-webkit-animation: fadeIn ease 2s;
	-moz-animation: fadeIn ease 2s;
	-o-animation: fadeIn ease 2s;
	-ms-animation: fadeIn ease 2s;
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
	&:hover {
		border-color: ${(props) => props.hover_color ? props.hover_color : '#333'};
	}
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;
exports.default = Hr;
