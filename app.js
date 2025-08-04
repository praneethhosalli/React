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

const Res_card = ({resname , cuisine , stars , est}) =>{
    // console.log(props);
    return (
        <div className="res_card" style={res_card} >
        <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597" />
        <h3 > {resname}</h3>
        <h4>{cuisine}</h4>
        <h4>{stars}</h4>
        <h4>{est}</h4>
    </div>

    )
}

const Body = ()=>(
    <div className="Body">
        <div className="Search-bar">
            Search
        </div>

        <div className="res-container">
            <Res_card resname="Bawarchi" cuisine = "Hyderabadi ,spicy, indian" stars = "4.5 stars" est="34 mins" />
            <Res_card resname="Chinese wok" cuisine = "china ,asian, fastfood " stars = "4.4 stars" est="48 mins" />

 
       
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

