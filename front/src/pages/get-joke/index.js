import * as React from "react";
import "../../css/index.scss";
import CodeViewer from "../../componenets/CodeViewer";

const foo = `
  function foo() {
    console.log('a')
  }
`;

const IndexPage = () => {
  return <main className="bg-neutral-100 w-100 h-screen flex flex-row w-screen justify-center items-center">
    <CodeViewer language={'javascript'} code={foo} filename="text.js" />
  </main>
}

export default IndexPage
