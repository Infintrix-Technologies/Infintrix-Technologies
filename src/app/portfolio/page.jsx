// Portfolio.js
import React from "react";
import PortfolioItem from "./PortfolioItem";
import { pb } from "@/lib/pb_conn";
import Header from "@/components/Header";
export const metadata = {
  title: 'Portfolio',
  description: 'portfolio',
}

const Portfolio = async () => {
  const portfolio_list = await pb.collection("projects").getFullList({
    sort: "-created",
    expand: "stack",
    cache: "no-store",
  });
  return (
    <>
      {/* <Header
        pageTitle={`Projects we have delivered`}
        pageDescription={`Over the past 2 years, we have designed and built a wide range of
            high-quality products from scratch. Our team has finished various
            web and mobile apps related to various spheres including e-learning,
            healthcare, e-commerce, advertising, augmented reality, action
            sports, finance and sharing economy. See out Portfolio below.`}
      /> */}
      <div className="container mx-auto">
      <div>
    <div className="bg_img">
      <h1 className="text-center text-5xl font-bold py-8">Projects We Have Delivered</h1>
      <p className="text-center">Over the past 2 years, we have designed and built a wide range of
            high-quality products from scratch.</p>
            
    </div>
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
