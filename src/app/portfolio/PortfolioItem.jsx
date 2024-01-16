import { Image } from "@nextui-org/react";
import Link from "next/link";
import { pb } from "@/lib/pb_conn";
import TechStackItem from "@/components/TechStackItem";

const PortfolioItem = async ({ portfolio_item }) => {
  return (
    <Link
      href={`/portfolio/${portfolio_item.slug}`}
      className="flex flex-col p-4 rounded-lg shadow-md hover:bg-gray-50 hover:z-10 cursor-pointer transition duration-300 ease-in-out transform sm:hover:scale-105 border-2 border-secondary"
    >
      <div className="content">
        <h2 className="text-2xl text-center font-bold mb-4">{portfolio_item.name}</h2>
        {/* <p className="text-gray-600 mb-4 text-lg leading-6">
          Over the past 10 years, we have designed and built a wide range of
          high-quality products from scratch. Our team has finished various web
          and mobile apps related to various spheres including e-learning.
        </p> */}
        <div className="stack flex justify-center gap-4 my-6">
          {portfolio_item.expand.stack.map((stack_item, i) => (
            <TechStackItem key={i} stack_item={stack_item} />
          ))}
        </div>
      </div>

      <Image
        src={`${pb.baseUrl}/api/files/${portfolio_item.collectionName}/${portfolio_item.id}/${portfolio_item.featured_image}`}
        alt={`${portfolio_item.name} Case Study`}
      />
    </Link>
  );
};

export default PortfolioItem;
