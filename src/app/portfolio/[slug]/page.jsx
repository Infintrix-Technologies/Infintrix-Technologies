import TechStackItem from "@/components/TechStackItem";
import { pb } from "@/lib/pb_conn";
import React from "react";
export const metadata = {
  title: 'Portfolio',
  description: 'portfolio',
}

const CaseStudyPage = async ({ params }) => {
  let portfolio_item = await pb
    .collection("projects")
    .getFirstListItem(`slug="${params.slug}"`, {
      expand: "stack,category",
    });
  let category = await pb
    .collection("project_categories")
    .getFirstListItem(`id="${portfolio_item.category}"`, {
      expand: "stack,category",
    });
  return (
    <>
      <div className="container mx-auto max-w-5xl">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">{portfolio_item.name}</h1>
          <div>
            <h2>Category:</h2>
            <p>{category.name}</p>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: portfolio_item.content }}
          className="dynamic-content"
        />
        <div>
          <h2 className="text-center text-4xl font-bold">Technology Stack</h2>
          <div className="flex justify-evenly">
            {portfolio_item.expand.stack.map((stack_item, i) => (
              <TechStackItem key={i} stack_item={stack_item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudyPage;
export const fetchCache = "default-no-store";
