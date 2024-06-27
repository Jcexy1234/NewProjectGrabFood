import React from "react";
import Card from "./Card";
import { useEffect, useState } from "react";

const Restaurant = ({ restaurants }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {restaurants &&
        restaurants.map((restaurant) => (
          <Card
            key={restaurant.id}
            img={restaurant.img}
            title={restaurant.title}
            type={restaurant.type}
          />
        ))}
    </div>
  );
};

export default Restaurant;

//const resto = {
//img: "https://food-cms.grab.com/compressed_webp/merchants/3-C3UDTBN1JACYUE/hero/46f8409e-5134-4516-a82c-6ef487b70976__store_cover__2023__10__04__13__01__11.webp",
//title: "Pad Thai Old Town ",
// type: "อาหารตามสั่ง,ผัดไทย",
// };
// const resto2 = {
// img: "https://food-cms.grab.com/compressed_webp/items/THITE20240619185524019106/detail/96ac0f48_5Hfull_size.webp",
//  title: "Domino's Pizza - บางลำภู",
// type: "พิซซ่า,ไก่ทอด,ฟาสต์ฟู้ด",
//  };
// const resto3 = {
// img: "https://food-cms.grab.com/compressed_webp/merchants/3-C6EZMEV2WBJUEJ/hero/ea1c9f43-5b98-412f-9f5a-2848c10d1e3d__store_cover__2024__03__06__12__41__13.webp",
// title: "ล้นชาม ตามสั่ง - พระบรมมหาราชวัง",
//type: "อาหารตามสั่ง",
// };
// const resto4 = {
//img: "https://food-cms.grab.com/compressed_webp/merchants/AWh64KYIZXYdMpch2Zem/hero/Cover_7411dabc271045cc986ccb1fd508e132_1717959704893772191.webp",
//title: "McDonald's (แมคโดนัลด์) - ราชดำเนิน",
//type: "แฮมเบอร์เกอร์, ไก่ทอด, ฟาสต์ฟู้ด",
//  };
// const resto5 = {
//  img: "https://food-cms.grab.com/compressed_webp/merchants/3-C3KAVF5HLBT1J2/hero/bfdaf4342d35410392c52aa3c1a0e13d_1717996493161276388.webp",
// title: "KFC (เคเอฟซี) - Siriraj",
//  type: "ไก่ทอด, ฟาสต์ฟู้ด",
// };
// const resto6 = {
//img: "https://food-cms.grab.com/compressed_webp/merchants/3-C2AHMA4JHCLAAA/hero/fd7f3911842c4e25ac237259aefe185d_1610436647371588230.webp",
// title: "หมูปลาร้า อเล็ก - แยกคอกวัว",
// type: "ปิ้งย่าง/บาร์บีคิว",
// };

// return (
//  <div className="flex flex-wrap justify-center gap-4">
// <Card img={resto.img} title={resto.title} type={resto.type} />
// <Card img={resto2.img} title={resto2.title} type={resto2.type} />
// <Card img={resto3.img} title={resto3.title} type={resto3.type} />
// <Card img={resto4.img} title={resto4.title} type={resto4.type} />
//<Card img={resto5.img} title={resto5.title} type={resto5.type} />
//<Card img={resto6.img} title={resto6.title} type={resto6.type} />
// </div>
// );
//};
