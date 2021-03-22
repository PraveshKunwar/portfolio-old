"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Header_1 = require("../styled-components/Header");
const Colors_1 = __importDefault(require("../utils/Colors"));
const AboutHeader = () => {
    return (<div className="#aboutme_header">
			<Header_1.AboutMeHeader color={Colors_1.default.dark_slate_border_purple} size="30px" top="2rem" weight={700}>
				Welcome. I am Pravesh Kunwar.
			</Header_1.AboutMeHeader>
		</div>);
};
exports.default = AboutHeader;
