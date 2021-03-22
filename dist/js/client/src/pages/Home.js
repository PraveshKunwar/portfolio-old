"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const AboutHeader_1 = __importDefault(require("../components/AboutHeader"));
const AboutParagraph_1 = __importDefault(require("../components/AboutParagraph"));
const Header_1 = __importDefault(require("../components/Header"));
const ScrollToProjects_1 = __importDefault(require("../components/ScrollToProjects"));
const Projects_1 = __importDefault(require("../components/Projects"));
const Sticky_1 = __importDefault(require("../components/Sticky"));
const Button_1 = require("../styled-components/Button");
const Hr_1 = __importDefault(require("../styled-components/Hr"));
const Colors_1 = __importDefault(require("../utils/Colors"));
const Box_1 = require("../styled-components/Box");
const Home = () => {
    return (<div className="#home">
			<Sticky_1.default />
			<Header_1.default />
			<ScrollToProjects_1.default />
			<AboutHeader_1.default />
			<AboutParagraph_1.default />
			<Button_1.ShowMore color="#FFFFFF" radius="10px">
				<a href="/about_me">Learn More</a>
			</Button_1.ShowMore>
			<Box_1.Box width="600px" height="325px" background={Colors_1.default.lighter_navy} color={Colors_1.default.pink_main} size="16px" radius="0px">
				<Hr_1.default init_color={Colors_1.default.slate} hover_color={Colors_1.default.pinkish_purp}/>
			</Box_1.Box>
			<Projects_1.default />
		</div>);
};
exports.default = Home;
