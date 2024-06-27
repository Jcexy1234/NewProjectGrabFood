import React from "react";
import React, { useEffect, useState } from "react";
const Search = ({ restaurants, setFilteredRestaurants }) => {
  const [keyword, setkeywoard] = useState("");

  const handleChange = async (e) => {
    setkeywoard(e.target.value);
    // const result = await filter(restaurants,keyword);
    if (e.target.value === "") {
      setFilteredRestaurants(restaurants);
      return;
    }
    const result = restaurants.filter((restaurant) => {
      return (
        restaurant.titel.toLowerCase().includes(keyword.toLowerCase()) ||
        restaurant.type.toLowerCase().includes(keyword.toLowerCase())
      );
    });
    console.log(result);
    setRestaurants(result);
  };

  // const filter = (restaurants, keyword) => {
  //const result = [];
  //TODD
  //for (let i = 0; i <= restaurants.length; i++) {
  //console.log(restaurants[i]?.titel);
  //console.log(restaurants[i]?.type);
  //console.log(keyword);
  //console.log(keyword);

  if (
    restaurants[i]?.titel.tolowerCase().includes(keyword.tolowerCase()) ||
    restaurants[i]?.type.tolowerCase().includes(keyword.tolowerCase())
  ) {
    result.push(restaurants[i]);
  }
};
return result;
///};

//filter(restaurants, keyword);

return (
  <>
    <label className="input input-bordered flex items-center gap-2 w-5/6">
      <input
        type="text"
        className="grow"
        placeholder="Search"
        onChange={handleChange}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="w-4 h-4 opacity-70"
      >
        <path
          fillRule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clipRule="evenodd"
        />
      </svg>
    </label>
  </>
);
//};

export default Search;
