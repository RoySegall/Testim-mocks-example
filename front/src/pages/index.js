import * as React from "react";
import Window from "../componenets/Window";
import {faFolder} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { Link } from "gatsby"


const IndexPage = () => {
    return <Window title={"Testim mocks example"}>
        <div className="flex">
            <div className=" py-5 px-5">
                <Link to="/get-joke" className={"flex flex-col items-center"}>
                    <FontAwesomeIcon icon={faFolder} className={"text-7xl"}/>
                    get-joke
                </Link>
            </div>

        </div>

    </Window>
}

export default IndexPage