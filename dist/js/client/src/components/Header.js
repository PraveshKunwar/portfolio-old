"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Header_1 = require("../styled-components/Header");
const Colors_1 = __importDefault(require("../utils/Colors"));
const Profile_1 = __importDefault(require("../styled-components/Profile"));
//@ts-ignore
const profile_jpg_1 = __importDefault(require("../assets/images/profile.jpg"));
const Header = () => {
    return (<div className="#header">
			<Profile_1.default src={profile_jpg_1.default}/>
			<Header_1.LandingHeader h1_color={Colors_1.default.slate} b_color={Colors_1.default.pink_main}>
				Hi, my name is Pravesh Kunwar. <br></br>
				<b>I create things with code.</b>
			</Header_1.LandingHeader>
		</div>);
};
exports.default = Header;
