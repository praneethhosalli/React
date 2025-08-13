import Res_card from "./Res_card";
import reslist from "../../utils/mockdata";
import { useState } from "react";
import { useEffect } from "react";



// let listofres = [
//     {
//                                         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//                                         "info": {
//                                             "id": "726147",
//                                             "name": "Bakingo",
//                                             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/3/0c6264f7-050e-4ebf-afa4-5c41f9ee9c13_726147.JPG",
//                                             "locality": "Dilsukh Nagar",
//                                             "areaName": "Saroornagar",
//                                             "costForTwo": "₹299 for two",
//                                             "cuisines": [
//                                                 "Bakery",
//                                                 "Desserts",
//                                                 "Beverages",
//                                                 "Snacks"
//                                             ],
//                                             "avgRating": 4.6,
//                                             "parentId": "3818",
//                                             "avgRatingString": "4.6",
//                                             "totalRatingsString": "9.1K+",
//                                             "sla": {
//                                                 "deliveryTime": 44,
//                                                 "lastMileTravel": 7.9,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "40-45 mins",
//                                                 "lastMileTravelString": "7.9 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-08-05 00:00:00",
//                                                 "opened": true
//                                             }

//                                         }
//     },
//     {
//                                         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//                                         "info": {
//                                             "id": "726148",
//                                             "name": "KFC",
//                                             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/3/0c6264f7-050e-4ebf-afa4-5c41f9ee9c13_726147.JPG",
//                                             "locality": "Dilsukh Nagar",
//                                             "areaName": "Saroornagar",
//                                             "costForTwo": "₹299 for two",
//                                             "cuisines": [
//                                                 "Bakery",
//                                                 "Desserts",
//                                                 "Beverages",
//                                                 "Snacks"
//                                             ],
//                                             "avgRating": 3.9,
//                                             "parentId": "3818",
//                                             "avgRatingString": "4.6",
//                                             "totalRatingsString": "9.1K+",
//                                             "sla": {
//                                                 "deliveryTime": 44,
//                                                 "lastMileTravel": 7.9,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "40-45 mins",
//                                                 "lastMileTravelString": "7.9 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-08-05 00:00:00",
//                                                 "opened": true
//                                             }

//                                         }
//     }
// ]



const Body = ()=>{
    const [listofres , setlistofres] = useState(reslist);

    useEffect(() =>{
        console.log("hello");
        fetchData();
    } ,[]);

    const fetchData = async() => {
    const data = await fetch(
        "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3182993&lng=78.5721999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    
    const json = await data.json();
    setlistofres(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(json);
};

    console.log("byee");
    
    return (
    
    <div className="Body">
        
        <div className="Filter">
            <button className="Filter_button" onClick={()=>{
                // setlistofres()
                const filteredres = listofres.filter(
                    (res) => res.info.avgRating>4
                );
                setlistofres(filteredres);
                console.log(listofres);
            }} 
            >Top Rated Restaurents</button>
        </div>

        <div className="res-container">
            {
                listofres.map((i) => (
                <Res_card key ={i.info.id} resdata={i} />))
            }
        
        </div>

    </div>
)
}

export default Body;