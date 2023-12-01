// Portfolio.js
import React from "react";
import PortfolioItem from "./PortfolioItem";
import { pb } from "@/lib/pb_conn";

const Portfolio = async () => {
  const portfolio_list = await pb.collection("projects").getFullList({
    sort: "-created",
    expand: "stack",
  });
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl sm:text-4xl font-bold my-2">
            Projects we have delivered
          </h1>
          <p className="text-gray-600 my-1 text-center">
            Over the past 2 years, we have designed and built a wide range of
            high-quality products from scratch. Our team has finished various
            web and mobile apps related to various spheres including e-learning,
            healthcare, e-commerce, advertising, augmented reality, action
            sports, finance and sharing economy. See out Portfolio below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-12">
          {portfolio_list.map((item, index) => {
            return <PortfolioItem key={index} portfolio_item={item} />;
          })}
          {/* {Array(5)
            .fill(null)
            .map((item, index) => {
              return <PortfolioItem key={index} />;
            })} */}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
