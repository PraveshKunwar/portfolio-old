"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const StickyLinks_1 = __importDefault(require("../styled-components/StickyLinks"));
const Link_1 = __importDefault(require("../styled-components/Link"));
const Colors_1 = __importDefault(require("../utils/Colors"));
const Socials_1 = __importDefault(require("../utils/Socials"));
const GitHub_1 = __importDefault(require("@material-ui/icons/GitHub"));
const Instagram_1 = __importDefault(require("@material-ui/icons/Instagram"));
const YouTube_1 = __importDefault(require("@material-ui/icons/YouTube"));
const Twitter_1 = __importDefault(require("@material-ui/icons/Twitter"));
const Sticky = () => {
    return (<StickyLinks_1.default color={Colors_1.default.pink_main} className="?stick_links">
			<div>
				<Link_1.default href={Socials_1.default.github} color={Colors_1.default.pink_main} rel="noreferrer" target="_blank">
					<GitHub_1.default fontSize="inherit"/>
				</Link_1.default>
			</div>
			<div>
				<Link_1.default href={Socials_1.default.instagram} color={Colors_1.default.pink_main} rel="noreferrer" target="_blank">
					<Instagram_1.default fontSize="inherit"/>
				</Link_1.default>
			</div>
			<div>
				<Link_1.default href={Socials_1.default.youtube} color={Colors_1.default.pink_main} rel="noreferrer" target="_blank">
					<YouTube_1.default fontSize="inherit"/>
				</Link_1.default>
			</div>
			<div>
				<Link_1.default href={Socials_1.default.twitter} color={Colors_1.default.pink_main} rel="noreferrer" target="_blank">
					<Twitter_1.default fontSize="inherit"/>
				</Link_1.default>
			</div>
		</StickyLinks_1.default>);
};
exports.default = Sticky;
