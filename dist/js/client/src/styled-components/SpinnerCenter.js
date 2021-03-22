"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const SpinnerCenter = styled_components_1.default.div `
	display: flex;
	justify-content: center;
	align-items: center;
	> div {
		width: 200px;
		height: 200px;
		margin-top: 30vh;
	}
`;
exports.default = SpinnerCenter;
