"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const Profile = styled_components_1.default.img `
	margin-top: 10rem;
	width: 256px;
	height: 256px;
	border-radius: 50%;
	display: block;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 1rem;
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
`;
exports.default = Profile;
