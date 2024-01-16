import React from "react";
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import Link from "next/link";
import { pb } from "@/lib/pb_conn";
export const metadata = {
  title: 'Blog',
  description: 'blog',
}

const Blog = async () => {
  const records = await pb.collection("articles").getFullList({
    sort: "-created",
    expand: "stack",
    cache: "no-store",
  });

  //     {
  //         title: "How ChatGPT Impacts Software Development",
  //         img: ("https://devflovv.com/wp-content/uploads/2023/04/ChatGPT-impacts-Software-development-400x250.jpg"),
  //         price: "Technology",
  //         description: "ChatGPT (Conversational Graph Parsing Tree) is a type of AI tool that enables developers to create natural language processing (NLP) and natural language understanding (NLU) applications. It...",
  //         read: "read more"
  //     },
  //     {
  //         title: "How ChatGPT Impacts Software Development",
  //         img: ("https://devflovv.com/wp-content/uploads/2023/04/ChatGPT-impacts-Software-development-400x250.jpg"),
  //         price: "Technology",
  //         description: "ChatGPT (Conversational Graph Parsing Tree) is a type of AI tool that enables developers to create natural language processing (NLP) and natural language understanding (NLU) applications. It...",
  //         read: "read more"
  //     },
  //     {
  //         title: "How ChatGPT Impacts Software Development",
  //         img: ("https://devflovv.com/wp-content/uploads/2023/04/ChatGPT-impacts-Software-development-400x250.jpg"),
  //         price: "Technology",
  //         description: "ChatGPT (Conversational Graph Parsing Tree) is a type of AI tool that enables developers to create natural language processing (NLP) and natural language understanding (NLU) applications. It...",
  //         read: "read more"
  //     },
  //     {
  //         title: "How ChatGPT Impacts Software Development",
  //         img: ("https://devflovv.com/wp-content/uploads/2023/04/ChatGPT-impacts-Software-development-400x250.jpg"),
  //         price: "Technology",
  //         description: "ChatGPT (Conversational Graph Parsing Tree) is a type of AI tool that enables developers to create natural language processing (NLP) and natural language understanding (NLU) applications. It...",
  //         read: "read more"
  //     },
  //     {
  //         title: "How ChatGPT Impacts Software Development",
  //         img: ("https://devflovv.com/wp-content/uploads/2023/04/ChatGPT-impacts-Software-development-400x250.jpg"),
  //         price: "Technology",
  //         description: "ChatGPT (Conversational Graph Parsing Tree) is a type of AI tool that enables developers to create natural language processing (NLP) and natural language understanding (NLU) applications. It...",
  //         read: "read more"
  //     },
  //     {
  //         title: "How ChatGPT Impacts Software Development",
  //         img: ("https://devflovv.com/wp-content/uploads/2023/04/ChatGPT-impacts-Software-development-400x250.jpg"),
  //         price: "Technology",
  //         description: "ChatGPT (Conversational Graph Parsing Tree) is a type of AI tool that enables developers to create natural language processing (NLP) and natural language understanding (NLU) applications. It...",
  //         read: "read more"
  //     },
  //     {
  //         title: "How ChatGPT Impacts Software Development",
  //         img: ("https://devflovv.com/wp-content/uploads/2023/04/ChatGPT-impacts-Software-development-400x250.jpg"),
  //         price: "Technology",
  //         description: "ChatGPT (Conversational Graph Parsing Tree) is a type of AI tool that enables developers to create natural language processing (NLP) and natural language understanding (NLU) applications. It...",
  //         read: "read more"
  //     },
  //     {
  //         title: "How ChatGPT Impacts Software Development",
  //         img: ("https://devflovv.com/wp-content/uploads/2023/04/ChatGPT-impacts-Software-development-400x250.jpg"),
  //         price: "Technology",
  //         description: "ChatGPT (Conversational Graph Parsing Tree) is a type of AI tool that enables developers to create natural language processing (NLP) and natural language understanding (NLU) applications. It...",
  //         read: "read more"
  //     },

  // ];
  return (
    <>
      <div className="container mx-auto">
      <div className="bg_img">
      <h1 className="text-center text-5xl font-bold pt-8">Our Blogs</h1>
      </div>
        <div className="gap-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {records.map((item, index) => (
            <Card shadow="sm" key={index}>
              <CardBody className="overflow-visible flex-none p-0">
                <Image shadow="sm" radius="lg" width="100%" className="w-full object-cover" src={`${pb.baseUrl}/api/files/${item.collectionName}/${item.id}/${item.featured_image}`} alt={`${item.name} Article`} />
              </CardBody>
              <div>
                <Link href={`/blog/${item.slug}`}>
                  {" "}
                  <h1 className="font-bold text-blue-400 text-lg text-left py-3 px-3">{item.title}</h1>
                </Link>
                <p className="text-left px-3 pb-4">{item.excerpt}</p>
                
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};
export default Blog;
