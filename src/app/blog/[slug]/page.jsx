
import React from 'react'
import { pb } from "@/lib/pb_conn";
import dayjs from 'dayjs';
import { Image } from '@nextui-org/react';
export const metadata = {
  title: 'Blog',
  description: 'blog',
}
const BlogArticle = async ({params}) => {

  try{
    let article_item = await pb
    .collection("articles")
    .getFirstListItem(`slug="${params.slug}"`, {
      // expand: "category",
      cache: "no-store",
    });
    
  let category = await pb
    .collection("blog_categories")
    .getFirstListItem(`id="${article_item.category}"`,{
      // expand: "category",
      cache: "no-store",
    });
    let user = await pb
    .collection("users")
    .getFirstListItem(`id="${article_item.author}"`,{
      // expand: "category",
      cache: "no-store",
    });

    return (
      <>
      <div className='container mx-auto'>
      <div>
      <div className="">
        <h1 className="text-center text-5xl font-bold pt-8 pb-4">{article_item.title}</h1>
      </div>
      </div>
        <div className='flex justify-center mb-5'>
        <div className='max-w-3xl p-8 bg-white shadow-lg rounded-md'>
          <p className='pb-5'>{user.name} | {category.name} | {dayjs(article_item.created).format('dddd, YYYY-MM-DD')}</p>
          <Image shadow="sm" radius="lg" width="100%" className="w-full object-cover" src={`${pb.baseUrl}/api/files/${article_item.collectionName}/${article_item.id}/${article_item.featured_image}`} alt={`${article_item.name} Article`} />
  
          {/* <a href="#" className='my-3' >by Irtaza Qayyum | Apr 26, 2023 | Technology</a> */}
          <div className='my-5'>
              <img src="./images/chatGPT.jpg" width={"100%"} height={"auto"} alt="" />
          </div>
          <div className='pb-5' dangerouslySetInnerHTML={{ __html: article_item.content }}
            >
  
            </div>
  
            </div>  
          </div>
          </div>
      
      </>
    )

  }
  catch
  {
    return "404"
  }



}
export default BlogArticle;
