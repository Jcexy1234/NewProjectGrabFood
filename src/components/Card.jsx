import React from "react";

const Card = ({ img, title, type }) => (
  <div>
    <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
      <div className="card card-compact bg-base-100 w-80  shadow-xl h-96">
        <figure>
          <img src={img} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{type}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card;