"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Loading_1 = __importDefault(require("./components/Loading"));
const Routes_1 = __importDefault(require("./router/Routes"));
//@ts-ignore
const smooth_scroll_1 = __importDefault(require("smooth-scroll"));
const App = () => {
    const [loading, setLoading] = react_1.useState(false);
    react_1.useEffect(() => {
        new smooth_scroll_1.default('a[href*="#"]', { speed: 1000, speedAsDuration: true });
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
        document.body.style.backgroundColor = '#0a192f';
    }, []);
    return (<div className="#personal-portfolio">
			{loading ? <Loading_1.default /> : <Routes_1.default />}
		</div>);
};
exports.default = App;
