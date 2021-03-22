"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Personal_1 = __importDefault(require("../components/Personal"));
const Sticky_1 = __importDefault(require("../components/Sticky"));
function AboutMe() {
    return (<div id="?about-me">
			<Sticky_1.default />
			<Personal_1.default />
		</div>);
}
exports.default = AboutMe;
