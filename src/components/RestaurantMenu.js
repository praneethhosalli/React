import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../../utils/useResMenu";

const RestaurantMenu = () => {
  const { resid } = useParams();
  const resInfo = useResMenu(resid);

  const restaurantData = resInfo?.data?.cards?.[2]?.card?.card?.info;

  const itemCards =
    resInfo?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
      ?.card?.card?.itemCards;

  if (resInfo === null) return <Shimmer />;

  return (
    <div>
      <div>
        <h1>{restaurantData.name}</h1>
        <div className="restaurant-details">
          <p>Cost for Two: {restaurantData.costForTwoMessage}</p>
          <p>
            Rating: {restaurantData.avgRatingString} (
            {restaurantData.totalRatingsString})
          </p>
          <p>Cuisines: {restaurantData.cuisines?.join(", ")}</p>
          <p>
            Location: {restaurantData.locality}, {restaurantData.city}
          </p>
          <p>
            Delivery Time: {restaurantData.sla?.minDeliveryTime / 8}-
            {restaurantData.sla?.maxDeliveryTime / 8} minutes
          </p>
          <p>Status: {restaurantData.isOpen ? "Open" : "Closed"}</p>
        </div>
      </div>

      <h2>Menu:</h2>

      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {item.card.info.price / 100}/-
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
