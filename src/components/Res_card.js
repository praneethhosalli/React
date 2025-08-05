import { reslogo } from "../../utils/constance";

const Res_card = ({resdata}) =>{
    // console.log(props);
    const{cloudinaryImageId ,name ,cuisines , avgRating,costForTwo  , locality } = resdata?.info;
    return (
        <div className="res_card"  >
        <img className="res-logo" src={reslogo + cloudinaryImageId} />
        <h3 className="restaname" > {resdata.info.name}</h3>
        <h4>{resdata.info.cuisines.join(", ")}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{resdata.info.sla.deliveryTime} minutes</h4>
        <h4>{locality}</h4>
    </div>

    )
}

export default Res_card;