"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ArrowDownward_1 = __importDefault(require("@material-ui/icons/ArrowDownward"));
const ScrollTo_1 = __importDefault(require("../styled-components/ScrollTo"));
const Link_1 = __importDefault(require("../styled-components/Link"));
const Colors_1 = __importDefault(require("../utils/Colors"));
const Hr_1 = __importDefault(require("../styled-components/Hr"));
const ScrollToProjects = () => {
    return (<div>
			<ScrollTo_1.default className="?scroll_to">
				<Link_1.default data-scroll color={Colors_1.default.slate} href="#projects">
					<ArrowDownward_1.default fontSize="large"/>
					<br></br>
					<p>Projects</p>
				</Link_1.default>
				<Hr_1.default init_color={Colors_1.default.slate} hover_color={Colors_1.default.pinkish_purp}/>
			</ScrollTo_1.default>
		</div>);
};
exports.default = ScrollToProjects;
