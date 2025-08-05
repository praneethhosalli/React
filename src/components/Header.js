import { applogo } from "../../utils/constance";

export const Header = () =>{
    return (
        <div className="Header">
            <div className="Logo-container">
                <img className="Logo" src={applogo} />
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



export default Header ;
