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
const react_bootstrap_1 = require("react-bootstrap");
const Welcome_1 = __importDefault(require("../styled-components/Welcome"));
const SpinnerCenter_1 = __importDefault(require("../styled-components/SpinnerCenter"));
const Loading = () => {
    const [final, setFinal] = react_1.useState(false);
    react_1.useEffect(() => {
        setFinal(true);
        setTimeout(() => {
            setFinal(false);
        }, 3000);
    }, []);
    return (<div className="#loading...">
			<SpinnerCenter_1.default>
				<react_bootstrap_1.Spinner animation="border" role="status" id="spinner" variant="danger"></react_bootstrap_1.Spinner>
			</SpinnerCenter_1.default>
			{final ? <Welcome_1.default>...</Welcome_1.default> : false}
		</div>);
};
exports.default = Loading;
