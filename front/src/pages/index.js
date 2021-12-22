import * as React from "react";
import Window from "../componenets/Window";
import {faFolder} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "gatsby"


const IndexPage = () => {
    return <Window title={"Testim mocks example"}>
        <div className="flex flex-row py-5 px-5">
            <Link to="/get-joke" className={"flex flex-col items-center px-5"}>
                <FontAwesomeIcon icon={faFolder} className={"text-7xl"}/>
                get-joke
            </Link>

            <Link to="/get-joke-mock" className={"flex flex-col items-center px-5"}>
                <FontAwesomeIcon icon={faFolder} className={"text-7xl"}/>
                get-joke-mock
            </Link>
        </div>
    </Window>
}

export default IndexPage