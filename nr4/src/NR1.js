import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import RestrauntCard from "./components/RestrauntCard.js";



// const styleCard={
//   backgroundColor:"grey",

// };


// console.log(resObj);
// console.log(resObj[0].info.name)
const footer = () => {
  return <div className="links"></div>;
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
