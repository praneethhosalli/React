import React from "react";
import ReactDOM from "react-dom/client";

const Header = () =>{
    return (
        <div className="Header">
            <div className="Logo-container">
                <img className="Logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-yPxmHYHF8tgtmWhpC59Jk2PLpzbxaL-9bA&s" />
            </div>

            <div className="Nav_items">
                <ul>
                    <li>Home</li>
                    <li>Cart</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                </ul>
                
            </div>
        </div>

    )
}

const res_card = {
    backgroundColor:"#f0f0f0"
}

const Res_container = () =>(
    <div className="Res_container" style={res_card} >
        <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597" />
        <h3 > Cinese Wok</h3>
    </div>

)

const Body = ()=>(
    <div className="Body">
        <div className="Search-bar">
            Search
        </div>

        <div className="res-container">
            <Res_container/>


        </div>

    </div>
)

const Applayout = ()=>(
    <div className="AppLayout">
        <Header/>
        <Body/>
        
    
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< Applayout/>);

