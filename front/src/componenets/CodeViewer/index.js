import * as React from "react";
import {useCallback, useMemo, useState} from "react";
import { faPhp, faJs, faPython } from '@fortawesome/free-brands-svg-icons'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 as codeStyle } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import LanguagePicker from "./LanguagePicker";
import Window from "../Window";
import {Helmet} from "react-helmet";

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

    return <Window title={`${filename}.${extension[language]}`}>
        <Helmet title={filename} />
        <div className="flex flex-row h-full">
            <div className="bg-neutral-600 text-white w-2/12 h-9 py-4 border-r border-black font-extralight">
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
            <div className="w-full pl-2">
                <div style={{height: "30em", overflow: "auto"}}>
                    <SyntaxHighlighter language={language} style={codeStyle}>
                        {code}

                    </SyntaxHighlighter>
                </div>

            </div>
        </div>
    </Window>
}

export default CodeViewer