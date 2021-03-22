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
const node_fetch_1 = __importDefault(require("node-fetch"));
const Colors_1 = __importDefault(require("../utils/Colors"));
const Box_1 = require("../styled-components/Box");
const Github = () => {
    const [data, setData] = react_1.useState();
    react_1.useEffect(() => {
        node_fetch_1.default('/api/github')
            .then((res) => res.json())
            .then((data) => {
            setData(data);
        });
    });
    return (<div className="?github">
			<Box_1.Box width="400px" height="250px" background={Colors_1.default.lighter_navy} color={Colors_1.default.dark_slate_border_purple} size="16px" radius="0px">
				<div className="commit_stage_1">
					<p style={{ marginTop: '1rem' }}>
						<b style={{ color: Colors_1.default.pink_main }}>▹ </b>Ultimatum | Commits
					</p>
					<p></p>
				</div>
			</Box_1.Box>
		</div>);
};
exports.default = Github;
