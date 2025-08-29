import Res_card from "./Res_card";
import Shimmer from "./Shimmer";
import { resfetch } from "../../utils/constance";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [listofres, setlistofres] = useState([]);
  const [filteredres, setfilteredres] = useState([]);
  const [searchtext, setsearchtext] = useState("");

  useEffect(() => {
    console.log("hello");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(resfetch);

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

  if (listofres.length === 0) return <Shimmer />;

  return (
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
              const filter = listofres.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );
              setfilteredres(filter);
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
            const top = listofres.filter((res) => res.info.avgRating > 4);
            setfilteredres(top);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>

      <div className="res-container">
        {filteredres.map((i) => (
          <Link to={"/restaurant/" + i.info.id} key={i.info.id}>
            <Res_card resdata={i} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
