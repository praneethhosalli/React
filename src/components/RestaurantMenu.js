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

  // console.log( `ur data = ${restaurantData}`  )
  console.log(`ur data = ${itemCards}`);

  if (!restaurantData) return <Shimmer />;

  if (resInfo === null) return <Shimmer />;

  return (
    <div className="m-2 p-2">
      <div>
        <h1 className="text-4xl font-semibold py-4 p-2">
          {restaurantData.name}
        </h1>
        <div className="restaurant-details border-1 border-gray-200 m-2 p-2 rounded-2xl ">
          <p className="py-2 text-gray-500">
            Cost for Two: {restaurantData.costForTwoMessage}
          </p>

          <p className="py-2 text-gray-500 flex items-center">
            {<svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className="w-4 h-4"
          >
            <path
              fill="#FFD43B"
              d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z"
            />
          </svg>
        }  :   {restaurantData.avgRatingString} {} (
            {restaurantData.totalRatingsString})
          </p>
          <p className="py-2 text-gray-500">
            Cuisines: {restaurantData.cuisines?.join(", ")}
          </p>
          <p className="py-2 text-gray-500">
            Location: {restaurantData.locality}, {restaurantData.city}
          </p>
          <p className="py-2 text-gray-500">
            Delivery Time: {restaurantData.sla?.minDeliveryTime / 1}-
            {restaurantData.sla?.maxDeliveryTime / 1} minutes
          </p>
          <p className="py-2 text-gray-500">
            Status: {restaurantData.isOpen ? "Open" : "Closed"}
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold">Menu:</h2>

      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {item.card.info.price / 100}/-
          </li>
        )) || <li>No menu</li>}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
