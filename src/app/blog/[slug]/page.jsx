import React from 'react'
import { pb } from "@/lib/pb_conn";
const BlogArticle = async ({params}) => {
  let article_item = await pb
  .collection("articles")
  .getFirstListItem(`slug="${params.slug}"`, {
    expand: "stack,category",
  });
// let category = await pb
//   .collection("articles")
//   .getFirstListItem(`id="${article_item.category}"`, {
//     expand: "stack,category",
//   });
  return (
    <>
    <div className='container'>
        <h1 className='text-2xl pt-5'>ChatGPT</h1>
        <a href="#" className='my-3' >by Irtaza Qayyum | Apr 26, 2023 | Technology</a>
        <div className='my-5'>
            <img src="./images/chatGPT.jpg" width={"100%"} height={"auto"} alt="" />
        </div>
        <div className='pb-5' dangerouslySetInnerHTML={{ __html: article_item.content }}
          ></div>

           

        </div>
    
    </>
  )
}
export default BlogArticle;
