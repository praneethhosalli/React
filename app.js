import React from "react";
import ReactDOM from "react-dom/client";

const h1 = (<h1> Namaste React using JSX</h1>);


// react fun comp :

const Head = () =>{
    return (
    <h1>Hello World</h1>
    )
};

const Middle = function(){
    return (

        <h2>Middler</h2>

    );
};

// recat element

const ele = (
    <h4 id ="ele">React Element </h4>
);

const Tail = () => (

    <h4>Bye Bye </h4>

);

const number = 1000 ;

const Headingcompoment2 = () =>(

    // component composition 
    <>
    < Head/>
    <Head></Head>
    {Head()}
    <div>  
        <h1>React funtional component 1 </h1> 
        <h1>React funtional component  2</h1>
    </div>
    
    < Middle/>

    <div>  
        <h1>React funtional component1 </h1> 
        {ele} 
        <h1>React funtional component2 </h1>
    </div>

    <Tail/>



    
    </>
   
  
);

// const Headingcompoment2 = ()=> <h1> React funtinal component </h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(< Headingcompoment2/>);

