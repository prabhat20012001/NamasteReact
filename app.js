import React from "react"
import ReactDOM from "react-dom/client"

const Title=()=>(
    <h1 className="head" tabIndex={5}>
        Namaste jsx using Jsx
    </h1>
)

const JsxHeading=()=>(
<h1 id="heading">
<Title/>

    Namaste React jsx heading</h1>)
// console.log(jsxHeading)
const root=ReactDOM.createRoot(document.getElementById("root"))




root.render(<JsxHeading/>)
