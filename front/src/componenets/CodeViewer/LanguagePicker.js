import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as React from "react";

const LanguagePicker = ({icon, title}) => <>
    <div className="flex flex-row">
        <div className="w-6 ml-2"><FontAwesomeIcon icon={icon} /></div>
        <div>{title}</div>
    </div>
</>;

export default LanguagePicker