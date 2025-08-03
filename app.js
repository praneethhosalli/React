import React from "react";
import ReactDOM from "react-dom/client";

// jsx

const h1 = (<h1> Namaste React using JSX</h1>);


// react fun comp :

const Headingcompoment2 = () =>(
    <>
    <div>  
        <h1>React funtional component 1 </h1> 
        <h1>React funtional component  2</h1>
    </div>
    <div>  
        <h1>React funtional component1 </h1> 
        <h1>React funtional component2 </h1>
    </div>
    
    </>
   
  
);

// const Headingcompoment2 = ()=> <h1> React funtinal component </h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(< Headingcompoment2/>);

