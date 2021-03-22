"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const Background = styled_components_1.default.div `
	background-color: ${(props) => props.background ? props.background : '#1a202c'};
`;
exports.default = Background;
