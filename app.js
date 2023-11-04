import React from "react"
import ReactDOM from "react-dom/client"

const title=(
    <h1 className="head" tabIndex={5}>
        Namaste jsx using Jsx
    </h1>
)

const number=1000
const JsxHeading=()=>(
    <div id="container">
    {title}
<h1 id="heading">Namaste React jsx heading</h1>
    </div>
    )


const root=ReactDOM.createRoot(document.getElementById("root"))




root.render(<JsxHeading/>)
