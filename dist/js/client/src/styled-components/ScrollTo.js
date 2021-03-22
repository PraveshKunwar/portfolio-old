"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const ScrollTo = styled_components_1.default.div `
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 3rem;
	color: green;
	font-family: 'Inter';
	text-align: center;
	> div > {
		text-align: center;
	}
`;
exports.default = ScrollTo;
