"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const Colors_1 = __importDefault(require("../utils/Colors"));
const Welcome = styled_components_1.default.h1 `
	color: ${(props) => props.color ? props.color : Colors_1.default.pink_main};
	font-size: 45px;
	text-align: center;
	margin-top: 1rem;
	-webkit-animation: fadeIn ease 5s;
	-moz-animation: fadeIn ease 5s;
	-o-animation: fadeIn ease 5s;
	-ms-animation: fadeIn ease 5s;
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
exports.default = Welcome;
