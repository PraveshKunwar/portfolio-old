"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectHeader = exports.AboutMeHeader = exports.LandingHeader = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.LandingHeader = styled_components_1.default.h1 `
	text-align: center;
	font-family: 'Inter', 'Roboto', 'Oswald';
	font-size: 45px;
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

	color: ${(props) => (props.h1_color ? props.h1_color : '#333')};
	> b {
		color: ${(props) => (props.b_color ? props.b_color : false)};
	}
	@media screen and (max-width: 768px) {
		font-size: 30px;
	}
`;
exports.AboutMeHeader = styled_components_1.default.h2 `
	text-align: center;
	font-family: 'Inter', 'Roboto', 'Oswald';
	font-weight: ${(props) => (props.weight ? props.weight : 400)};
	margin-top: ${(props) => (props.top ? props.top : '1rem')};
	margin-bottom: ${(props) => props.bottom ? props.bottom : '1rem'};
	transition: background 0.3s ease-in-out;
	color: ${(props) => (props.color ? props.color : false)};
	font-size: ${(props) => (props.size ? props.size : false)};
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
exports.ProjectHeader = styled_components_1.default.h2 `
	text-align: center;
	font-family: 'Inter', 'Roboto', 'Oswald';
	font-weight: ${(props) => (props.weight ? props.weight : 400)};
	margin-top: ${(props) => (props.top ? props.top : '1rem')};
	margin-bottom: ${(props) => props.bottom ? props.bottom : '1rem'};
	transition: background 0.3s ease-in-out;
	color: ${(props) => (props.color ? props.color : false)};
	font-size: ${(props) => (props.size ? props.size : false)};
	animation: fadeIn ease 4s;
	-webkit-animation: fadeIn ease 4s;
	-moz-animation: fadeIn ease 4s;
	-o-animation: fadeIn ease 4s;
	-ms-animation: fadeIn ease 4s;
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
