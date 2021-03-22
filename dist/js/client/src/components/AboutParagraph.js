"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Paragraph_1 = require("../styled-components/Paragraph");
const Colors_1 = __importDefault(require("../utils/Colors"));
const Box_1 = require("../styled-components/Box");
const AboutParagraph = () => {
    return (<div className="?about_me_text">
			<Box_1.Box width="600px" height="325px" background={Colors_1.default.lighter_navy} color={Colors_1.default.pink_main} size="16px" radius="0px">
				<div className="?about_me_box">
					<Paragraph_1.AboutMeParagraph color={Colors_1.default.dark_slate_border_purple} style={{ marginTop: '4rem' }}>
						<b style={{ color: Colors_1.default.pink_main }}>▹</b>Welcome to my personal
						portfolio. I am Pravesh Kunwar, a rising 17 year old web developer
						who loves to create programs and write code. <br></br>
						<br></br>
						<b style={{ color: Colors_1.default.pink_main }}>▹</b>I started coding when I
						was 13, and have never stopped then. <br></br>
						<br></br>
						<b style={{ color: Colors_1.default.pink_main }}>▹</b>Now, its become my
						passion, and something that I look forward to doing everyday.
					</Paragraph_1.AboutMeParagraph>
				</div>
				<div className="?about_me_box_2">
					<Paragraph_1.AboutMeParagraph color={Colors_1.default.dark_slate_border_purple} style={{ marginTop: '4rem' }}>
						<b style={{ color: Colors_1.default.pink_main }}>▹ More Info: </b>
						As I was wandering around on my laptop at 13 years old, I saw this
						programming ad on Web Development. Curious, I clicked on the ad and
						lead me to the infamous website Codeacademy.com. Soon enough, I got
						into web development.
						<br></br>
						<br></br>
						<b style={{ color: Colors_1.default.pink_main }}>▹</b>Now, with my current
						knowledge, I spend a lot of my time from creating websites with
						React.JS or Discord bots.
					</Paragraph_1.AboutMeParagraph>
				</div>
			</Box_1.Box>
		</div>);
};
exports.default = AboutParagraph;
