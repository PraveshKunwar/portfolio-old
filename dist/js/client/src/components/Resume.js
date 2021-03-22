"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
//@ts-ignore
const react_pdf_1 = require("react-pdf");
//@ts-ignore
react_pdf_1.pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${react_pdf_1.pdfjs.version}/pdf.worker.js`;
const Resume = () => {
    return <div className="#resume">asd</div>;
};
exports.default = Resume;
