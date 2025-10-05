import Res_card from "./Res_card";
import useOnline from "../../utils/useOnline";
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
    // console.log("hello");
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
    // console.log(json);
  };

  const onlineStatus = useOnline();

  if (onlineStatus === false) {
    return <h1>Looks like u are offline :( Pls check ur internet </h1>;
  }


  if (listofres.length === 0) return <Shimmer />;
  if (!listofres ) return <Shimmer />;
  if(listofres === null) return <Shimmer />;

  return (
    <div className="Body m-8  p-4">
      <div className="Filter flex gap-4">
        {/* res-search */}
        <div className="search">
          <input
            type="text"
            className="search-box rounded border-2 border-gray-500 m-4 w-xl p-2"
            value={searchtext}
            onChange={(e) => {
              const value = e.target.value;
              setsearchtext(value);
              const filter = listofres.filter((res) =>
                res.info.name.toLowerCase().includes(value.toLowerCase())
              );
              setfilteredres(filter);
            }}
          />
          <button
            className="searchbutton"
            onClick={() => {
              // const filter = listofres.filter((res) =>
              //   res.info.name.toLowerCase().includes(searchtext.toLowerCase())
              // );

              setfilteredres(listofres)
              // setfilteredres(filter);
            }}
          >
            ↩
          </button>
        </div>

        {/* top-res-filter */}
        <button
          className="Filter_button border-2 border-gray-500 rounded-2xl m-2 p-2"
          onClick={() => {
            // setlistofres()
            if (filteredres.length < listofres.length) {
              setfilteredres(listofres);
            } else {
              const top = listofres.filter((res) => res.info.avgRating > 4);
              setfilteredres(top);
            }
          }}
        >
          {filteredres.length < listofres.length
            ? "Show all res  "
            : "Show only top rated res ⭐"}
        </button>
      </div>

      <div className="res-container flex flex-wrap  ">
        {filteredres.map((i) => (
          <Link
            className=" m-2 hover:scale-110  p-2 w-55 h-auto flex-wrap rounded-xl bg-gray-200 "
            to={"/restaurant/" + i.info.id}
            key={i.info.id}
          >
            <Res_card resdata={i} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
