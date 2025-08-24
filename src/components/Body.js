import Res_card from "./Res_card";
import Shimmer from "./Shimmer";
import { useState } from "react";
import { useEffect } from "react";

const Body = () => {
  const [listofres, setlistofres] = useState([]);
  const[filteredres , setfilteredres] = useState([]);


  const [searchtext, setsearchtext] = useState("");

  useEffect(() => {
    console.log("hello");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3182993&lng=78.5721999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setlistofres(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setfilteredres(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants

    );
    console.log(json);
  };

  console.log("byee");

  return listofres.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="Filter">
        {/* res-search */}
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchtext}
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
          />
          <button
            className="searchbutton"
            onClick={() => {
              const filteredres = listofres.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );
              setfilteredres(filteredres);
            }}
          >
            Search
          </button>
        </div>
        {/* top-res-filter */}
        <button
          className="Filter_button"
          onClick={() => {
            // setlistofres()
            const top = listofres.filter(
              (res) => res.info.avgRating > 4
            );
            setfilteredres(top);
            
          }}
        >
          Top Rated Restaurents
        </button>
      </div>

      <div className="res-container">
        {filteredres.map((i) => (
          <Res_card key={i.info.id} resdata={i} />
        ))}
      </div>
    </div>
  );
};

export default Body;
