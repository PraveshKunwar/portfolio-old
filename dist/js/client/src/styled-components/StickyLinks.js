"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const StickyLinks = styled_components_1.default.div `
	font-size: ${(props) => props.font_size ? props.font_size : '30px'};
	display: flex;
	flex-direction: column;
	position: fixed;
	> div {
		padding: 16px;
	}
	@media screen and (max-width: 768px) {
		opacity: 0;
	}
`;
exports.default = StickyLinks;
