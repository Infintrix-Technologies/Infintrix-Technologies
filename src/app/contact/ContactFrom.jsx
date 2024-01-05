"use client"
import React from 'react'
import Link from "next/link";
import PocketBase from "pocketbase";
import { Input, Textarea, Button } from "@nextui-org/react";
import { toast } from "react-toastify";


const ContactFrom = () => {
    const initState = {
        name: "",
        email: "",
        phone: "",
        message: "",
        subject: "",
      };
      const pb = new PocketBase("https://infintrix.pockethost.io");
      const [isLoading, setLoading] = React.useState(false);
      const [formData, setFormData] = React.useState(initState);
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
      const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
    
        
    
        // Add your logic here to handle the form submission.
        // You can send the form data to your server or perform any desired actions.
    
        if ( formData.name&&formData.email&&formData.message&&formData.subject ) {
            const saveContactPromise = pb.collection("contacts").create(formData);
           toast.promise(saveContactPromise, {
            pending: "Submitting contact form ⏳",
            success: "Form Submitted 👌",
            error: "Failed to submit form 🤯",
          })
          .then(() => {
            setFormData(initState);
            setLoading(false);
          });
          
          
        }
        else{
            toast.error("Name, Email, Subject and Message fields are required")
        }
       
      };
  return (
    <>
      <form
          method="POST"
          onSubmit={handleSubmit}
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-10"
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <div className="mt-2.5">
                  <Input
                    type="text"
                    name="name"
                    label="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{width: "100%"}}
                  />
                </div>
              </div>
              

              <div className="sm:col-span-2">
                <div className="mt-2.5">
                  <Input
                    type="email"
                    name="email"
                    label="Email"
                    onChange={handleChange}
                    value={formData.email}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="mt-2.5">
                  <Input
                    type="tel"
                    name="phone"
                    label="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="mt-2.5">
                  <Input
                    type="text"
                    name="subject"
                    label="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="mt-2.5">
                  <Textarea
                    name="message"
                    rows="4"
                    label="Message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <Button
                disabled={isLoading}
                color="primary"
                type="submit"
                className="text-white cursor-pointer"
              >
                Send message
              </Button>
            </div>
          </div>
        </form>
        
    </>
  )
}

export default ContactFrom
