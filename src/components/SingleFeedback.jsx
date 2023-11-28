import React from "react";
import { Button } from "@nextui-org/react";
import { BsChatSquareTextFill } from "react-icons/bs";
import {
  MdOutlineNoteAdd,
  MdOutlineDelete,
  MdOutlineStarBorder,
  MdEdit,
} from "react-icons/md";
const SingleFeedback = () => {
  return (
    <div className="flex flex-col p-2 rounded-xl justify-between my-4 bg-slate-50 hover:bg-slate-100 border sm:cursor-pointer">
      <div className="flex items-center">
        <div className="hidden sm:block p-2 bg-gray-950 text-white text-2xl rounded-lg ">
          <BsChatSquareTextFill className="" />
        </div>
        <div>
          <p className="px-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam.
          </p>
          <p className="px-4 bg-gray-200 ml-8 rounded-lg mt-3 p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center sm:justify-end">
        <Button
          className="mx-1/2"
          variant="light"
          isIconOnly
          endContent={<MdEdit className="text-2xl text-green-500" />}
        />
        <Button
          className="mx-1/2"
          variant="light"
          isIconOnly
          endContent={<MdOutlineNoteAdd className="text-2xl text-cyan-500" />}
        />
        <Button
          className="mx-1/2"
          variant="light"
          isIconOnly
          endContent={
            <MdOutlineStarBorder className="text-2xl text-yellow-500" />
          }
        />
        <Button
          className="mx-1/2"
          variant="light"
          isIconOnly
          endContent={<MdOutlineDelete className="text-2xl text-red-500" />}
        />
      </div>
    </div>
  );
};

export default SingleFeedback;
