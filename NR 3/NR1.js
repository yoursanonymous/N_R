import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "helloo");
const elem=<div>bdhhduuu</div>
const jsxHeading = (
  <h1 className="head" tabIndex="1">
    {elem}
    react in jsx
  </h1>
);
const Title = () => (
  <h1 className="head" tabIndex="5">
    {elem}
    Namaste React
  </h1>
);
const num=1000;
const rooot = ReactDOM.createRoot(document.getElementById("root"));
//react functional component
const HeadingComponent = () => (
  <div>
    {10000000000000}
    <h2>{100+200}</h2>
    <Title />
    <h1>nr functional component</h1>
    <h2>bolo balle balle</h2>
  </div>
);
// const HeadingComponent = function() {
//   return (
//   <div>
//     <Title />
//     <h1>nr functional component</h1>
//     <h2>bolo balle balle</h2>
//   </div>
// )
// };
const Another = () => <h2>bolo balle balle</h2>;
//another react functional component
const Fn = () => true;
rooot.render(<Title />);
rooot.render(jsxHeading);
rooot.render(<HeadingComponent/>)