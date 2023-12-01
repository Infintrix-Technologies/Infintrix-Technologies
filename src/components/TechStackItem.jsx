import React from "react";
import { Image } from "@nextui-org/react";
import { pb } from "@/lib/pb_conn";

const TechStackItem = ({ stack_item }) => {
  return (
    <>
      <div className="flex flex-col items-center mx-2">
        <Image
          src={`${pb.baseUrl}/api/files/${stack_item.collectionName}/${stack_item.id}/${stack_item.icon}`}
          alt={stack_item.name}
          width={50}
        />
        <p>{stack_item.name}</p>
      </div>
    </>
  );
};

export default TechStackItem;
