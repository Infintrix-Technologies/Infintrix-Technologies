import React from 'react'
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";


export default function Blog() {
    const list = [
        {
            title: "How ChatGPT Impacts Software Development",
            img: ("https://devflovv.com/wp-content/uploads/2023/04/ChatGPT-impacts-Software-development-400x250.jpg"),
            price: "Technology",
            description: "ChatGPT (Conversational Graph Parsing Tree) is a type of AI tool that enables developers to create natural language processing (NLP) and natural language understanding (NLU) applications. It...",
            read: "read more"
        },
        {
            title: "How ChatGPT Impacts Software Development",
            img: ("https://devflovv.com/wp-content/uploads/2023/04/ChatGPT-impacts-Software-development-400x250.jpg"),
            price: "Technology",
            description: "ChatGPT (Conversational Graph Parsing Tree) is a type of AI tool that enables developers to create natural language processing (NLP) and natural language understanding (NLU) applications. It...",
            read: "read more"
        },
        {
            title: "How ChatGPT Impacts Software Development",
            img: ("https://devflovv.com/wp-content/uploads/2023/04/ChatGPT-impacts-Software-development-400x250.jpg"),
            price: "Technology",
            description: "ChatGPT (Conversational Graph Parsing Tree) is a type of AI tool that enables developers to create natural language processing (NLP) and natural language understanding (NLU) applications. It...",
            read: "read more"
        },
        {
            title: "How ChatGPT Impacts Software Development",
            img: ("https://devflovv.com/wp-content/uploads/2023/04/ChatGPT-impacts-Software-development-400x250.jpg"),
            price: "Technology",
            description: "ChatGPT (Conversational Graph Parsing Tree) is a type of AI tool that enables developers to create natural language processing (NLP) and natural language understanding (NLU) applications. It...",
            read: "read more"
        },
        {
            title: "How ChatGPT Impacts Software Development",
            img: ("https://devflovv.com/wp-content/uploads/2023/04/ChatGPT-impacts-Software-development-400x250.jpg"),
            price: "Technology",
            description: "ChatGPT (Conversational Graph Parsing Tree) is a type of AI tool that enables developers to create natural language processing (NLP) and natural language understanding (NLU) applications. It...",
            read: "read more"
        },
        {
            title: "How ChatGPT Impacts Software Development",
            img: ("https://devflovv.com/wp-content/uploads/2023/04/ChatGPT-impacts-Software-development-400x250.jpg"),
            price: "Technology",
            description: "ChatGPT (Conversational Graph Parsing Tree) is a type of AI tool that enables developers to create natural language processing (NLP) and natural language understanding (NLU) applications. It...",
            read: "read more"
        },
        {
            title: "How ChatGPT Impacts Software Development",
            img: ("https://devflovv.com/wp-content/uploads/2023/04/ChatGPT-impacts-Software-development-400x250.jpg"),
            price: "Technology",
            description: "ChatGPT (Conversational Graph Parsing Tree) is a type of AI tool that enables developers to create natural language processing (NLP) and natural language understanding (NLU) applications. It...",
            read: "read more"
        },
        {
            title: "How ChatGPT Impacts Software Development",
            img: ("https://devflovv.com/wp-content/uploads/2023/04/ChatGPT-impacts-Software-development-400x250.jpg"),
            price: "Technology",
            description: "ChatGPT (Conversational Graph Parsing Tree) is a type of AI tool that enables developers to create natural language processing (NLP) and natural language understanding (NLU) applications. It...",
            read: "read more"
        },
        
    ];
    return (
        <>
            <div className='container'>
                <div className="gap-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                    {list.map((item, index) => (
                        <Card shadow="sm" key={index} isPressable>
                            <CardBody className="overflow-visible p-0">
                                <Image
                                    shadow="sm"
                                    radius="lg"
                                    width="100%"
                                    alt={item.title}
                                    className="w-full object-cover"
                                    src={item.img}
                                />
                            </CardBody>
                            <div>
                                <h1 className='font-bold text-blue-400 text-lg text-left py-3 px-3'>{item.title}</h1>
                                <p className="text-left font-semibold ps-3">{item.price}</p>
                                <p className='text-left py-3 px-3'>{item.description}</p>
                                <div className='text-left text-base pb-3 ps-3'>
                                <a href='#'>{item.read}</a>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
                
            </div>
        </>
    )
}
