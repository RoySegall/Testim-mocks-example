import * as React from "react";
import {useCallback, useMemo, useState} from "react";
import { faPhp, faJs, faPython } from '@fortawesome/free-brands-svg-icons'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula as codeStyle } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import LanguagePicker from "./LanguagePicker";

codeStyle.hljs.background = "none";
codeStyle.hljs.padding = "0";

const CodeViewer = ({codes, filename}) => {
    const [language, setLanguage] = useState('javascript');
    const extension = {
        javascript: 'js',
        php: 'php',
        python: 'py',
    };
    const code = useMemo(() => {
        if (Object.keys(codes).includes(language)) {
            return codes[language];
        }

        return '';
    }, [language]);

    const getListItemClass = useCallback((listItemLanguage) => listItemLanguage === language && 'bg-neutral-200 text-sky-700 rouded-md rounded', [language]);

    return <div className="flex flex-col w-3/4 mh-2/6 border border-black shadow-2xl shadow-lg shadow-black/50 rounded">
        <div className="p-2 bg-neutral-600 border-b border-black text-white font-extralight text-xl">
            <div className={"flex flex-row justify-between align-center"}>
                {filename}.{extension[language]}
                <div className={"flex flex-row items-center"}>
                    <div className="bg-red-400 w-4 h-4 rounded-full"> </div>
                    <div className="bg-yellow-400 w-4 h-4 rounded-full mx-1"> </div>
                    <div className="bg-green-400 w-4 h-4 rounded-full"> </div>
                </div>
            </div>
        </div>
        <div className="flex flex-row h-full">
            <div className="bg-neutral-600 text-white w-2/12 py-4 border-r border-black font-extralight">
                <ul>
                    <li onClick={() => setLanguage('javascript')} className={`cursor-pointer mx-2 pb-1`}>
                        <div className={getListItemClass('javascript')}><LanguagePicker icon={faJs} title='JavaScript' /></div>
                    </li>
                    <li onClick={() => setLanguage('php')} className={`cursor-pointer mx-2 pb-1`}>
                        <div className={getListItemClass('php')}><LanguagePicker icon={faPhp} title='PHP' /></div>
                    </li>
                    <li onClick={() => setLanguage('python')} className={`cursor-pointer mx-2 pb-1`}>
                        <div className={getListItemClass('python')}><LanguagePicker icon={faPython} title='Python' /></div>
                    </li>
                </ul>
            </div>
            <div className="bg-file-content text-white w-full pl-2">
                <SyntaxHighlighter language={language} style={codeStyle}>
                    {code}
                </SyntaxHighlighter>
            </div>
        </div>
    </div>
}

export default CodeViewer