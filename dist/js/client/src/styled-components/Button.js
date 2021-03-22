"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowMore = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.ShowMore = styled_components_1.default.button `
	border-radius: ${(props) => props.radius ? props.radius : '0px'};
	text-align: center;
	border-width: 0px;
	display: block;
	margin-left: auto;
	margin-right: auto;
	font-size: 30px;
	background: linear-gradient(to left, #b52660 50%, #112240 50%) right;
	background-size: 200%;
	transition: 0.5s ease-out;
	&:visited {
		color: ${(props) => (props.color ? props.color : false)};
	}
	&:focus {
		outline: none;
	}
	&:hover {
		background-position: left;
	}
	> a {
		text-decoration: none;
		font-family: 'Inter', 'Roboto', 'Oswald';
		color: ${(props) => (props.color ? props.color : false)};
	}
`;
