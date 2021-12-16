import * as React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula as codeStyle } from 'react-syntax-highlighter/dist/esm/styles/hljs';

codeStyle.hljs.background = "none";
codeStyle.hljs.padding = "0";

const CodeViewer = ({language = 'javascript', code, filename}) => {
    return <div className="flex flex-col w-3/4 h-2/6 border border-rose-400 shadow-2xl shadow-lg shadow-black/50">
        <div className="p-2 bg-neutral-600 border-b border-rose-400 text-white font-extralight text-xl">
            <div className={"flex flex-row justify-between align-center"}>
                {filename}
                <div className={"flex flex-row"}>
                    <div className="bg-red-400 w-4 h-4 rounded-full"> </div>
                    <div className="bg-yellow-400 w-4 h-4 rounded-full mx-1"> </div>
                    <div className="bg-green-400 w-4 h-4 rounded-full"> </div>
                </div>
            </div>
        </div>
        <div className="flex flex-row h-full">
            <div className="bg-neutral-600 text-white w-2/12 py-4 border-r border-rose-400 pl-2 font-extralight">
                <ul>
                    <li>JavaScript</li>
                    <li>PHP</li>
                    <li>Python</li>
                </ul>
            </div>
            <div className="bg-file-content text-white w-full ">
                <SyntaxHighlighter language={language} style={codeStyle}>
                    {code}
                </SyntaxHighlighter>
            </div>
        </div>
    </div>
}

export default CodeViewer