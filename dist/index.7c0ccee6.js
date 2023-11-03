/**
 * <div id="parent">
 *   <div id="child">
 *          <h1> i am h1 tag</h1>
 *          <h1> i am another h2 tag</h1>
 *    </div>
 *  <div id="child2">
 *          <h1> i am h1 tag</h1>
 *          <h1> i am another h2 tag</h1>
 *    </div>
 * </div>
 * 
 * 
 * 
 */ const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }),
    [
        React.createElement("h1", {}, "i am an h1 tag"),
        React.createElement("h1", {}, "i am another h1 tag")
    ],
    React.createElement("div", {
        id: "child"
    }),
    [
        React.createElement("h1", {}, "i am an h1 tag"),
        React.createElement("h1", {}, "i am another h1 tag")
    ]
]);
console.log(parent) //will return object
;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent) // const heading=React.createElement("h1",{id:"heading",class:"heading"},"hello world from react!")
 // console.log(heading)  //will return object
 // const root=ReactDOM.createRoot(document.getElementById("root"))
 // root.render(heading) //render method is responsible to take the object and put it up and convert into heading tag and put it up in the dom
;

//# sourceMappingURL=index.7c0ccee6.js.map
