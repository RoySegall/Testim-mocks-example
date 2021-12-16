import * as React from "react";
import "../css/index.scss";
import Languages from "../componenets/Languages";
import IDE from "../componenets/IDE";

const IndexPage = () => {
  return <main className="container w-screen">
    <IDE/>
    <Languages />
  </main>
}

export default IndexPage
