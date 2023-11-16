import React, { useState } from "react";
import { Link } from "react-router-dom";
import {filterData} from "../utils/helper"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useSelector } from "react-redux";
import useOnline from "../utils/hooks/useOnline";
import UserOffline from "./UserOfflinePage";
import NoService from "./NoServicePage";
import OfferCard from "../components/OfferCard";
import ShimmerComp from "../components/ShimmerComp";
import RestaurantCard from "../components/RestaurantCard";
import useRestaurantData from "../utils/hooks/useRestaurantData";

const MainContent = () => {
  const [allRestaurants, filterRes, allOffers, error] = useRestaurantData();
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const [searchTxt, setSearchTxt] = useState("");
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const searchData = (searchText, restaurants) => {
    if (searchText != "") {
      const filteredData = filterData(searchText, restaurants);
      setFilteredRestaurants(filteredData);
    } else {
      setFilteredRestaurants(restaurants);
    }
  };

  const isOnline = useOnline();
  // Here it is early return so as the browser has to diaplay this here
  if (!isOnline || error === "Failed to fetch") return <UserOffline />;

  if (!allRestaurants) return <NoService />;

  return (
    <div className="">
      {isMenuOpen && (
        <div className="absolute z-10 bg-gradient-to-b from-teal-50 to-white h-96 w-full top-14 ease-in-out duration-300 shadow-lg p-10  rounded-b-2xl">
          <h1>hiii harshit</h1>
        </div>
      )}
      <div className="py-1">
        <Carousel
          useKeyboardArrows={true}
          className="crsl flex"
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
          centerMode={true}
          stopOnHover={true}
          centerSlidePercentage={40}
          showIndicators={true}
        >
          {allOffers.map((offer, idx) => (
            <OfferCard offer={offer} key={idx} />
          ))}
        </Carousel>
      </div>
      <div className="flex items-center justify-center  p-5 ">
        <input
          type="text"
          className="px-3 py-2 rounded-l-md focus:outline-none w-1/2 md:w-1/4 shadow-md"
          placeholder="Type Restaurant Name"
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
        />
        <button
          className="bg-amber-500 shadow-md text-white px-3 py-2 rounded-r-md w-1/6 md:w-1/12"
          onClick={() => {
            searchData(searchTxt, allRestaurants);
          }}
        >
          Search
        </button>
      </div>
      {allRestaurants?.length === 0 ? (
        <ShimmerComp />
      ) : (
        <div className="flex flex-wrap justify-center">
          {(filteredRestaurants === null ? filterRes : filteredRestaurants).map(
            (res) => {
              return (
                // <RestaurantCard
                //   name={res.data.name}
                //   cuisines={res.data.cuisines}
                //   image={res.data.cloudinaryImageId}
                //   lastmileDistanceString={res.data.lastMileTravelString}
                //   rating={res.data.totalRatingsString}
                //   key={res.data.id}
                // />
                // <RestaurantCard {...res?.info} key={res?.info?.id} /> // using spread operator
                <Link to={"/restaurant/" + res?.info?.id} key={res?.info?.id}>
                  <RestaurantCard {...res?.info} />
                </Link> // using spread operator
              );
            }
          )}
        </div>
      )}
    </div>
  );
};

export default MainContent;
