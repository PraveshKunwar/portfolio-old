"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Home_1 = __importDefault(require("../pages/Home"));
const AboutMe_1 = __importDefault(require("../pages/AboutMe"));
const Contact_1 = __importDefault(require("../pages/Contact"));
const Resume_1 = __importDefault(require("../components/Resume"));
const Routes = () => {
    return (<react_router_dom_1.BrowserRouter>
			<react_router_dom_1.Switch>
				<react_router_dom_1.Route path="/" exact>
					<Home_1.default />
				</react_router_dom_1.Route>
				<react_router_dom_1.Route path="/about_me">
					<AboutMe_1.default />
				</react_router_dom_1.Route>
				<react_router_dom_1.Route path="/contact">
					<Contact_1.default />
				</react_router_dom_1.Route>
				<react_router_dom_1.Route path="/resume">
					<Resume_1.default />
				</react_router_dom_1.Route>
			</react_router_dom_1.Switch>
		</react_router_dom_1.BrowserRouter>);
};
exports.default = Routes;
