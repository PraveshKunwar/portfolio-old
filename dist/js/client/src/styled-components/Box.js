"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
//@ts-ignore
const SFMono_Regular_otf_1 = __importDefault(require("../assets/fonts/SFMono_Regular.otf"));
exports.Box = styled_components_1.default.div `
	@font-face {
		font-family: 'SF Mono';
		src: local('SF Mono'), url(${SFMono_Regular_otf_1.default});
	}
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	flex-wrap: wrap;
	> div {
		margin: 25px;
		margin-bottom: ${(props) => props.bottom ? props.bottom : false};
		width: ${(props) => (props.width ? props.width : false)};
		height: ${(props) => (props.height ? props.height : false)};
		background: ${(props) => props.background ? props.background : false};
		font-size: ${(props) => (props.size ? props.size : '16px')};
		color: ${(props) => (props.color ? props.color : false)};
		border-radius: ${(props) => props.radius ? props.radius : '10px'};
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
		text-align: center;
		font-family: 'Inter', 'Roboto', 'Oswald', 'SF Mono';
	}
`;
