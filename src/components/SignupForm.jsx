"use client";
import React, { useState } from "react";
import PasswordField from "./PasswordField";
import axios from "axios";
import { toast } from "react-toastify";
import { Select, SelectItem, Input, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SignupForm = () => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    business_name: "Samsung",
    business_category: null,
    email: "muqeetmughal786@gmail.com",
    phone_number: "+923096699016",
    address: "Lahore",
    password: "1234",
    password2: "1234",
  });
  const router = useRouter();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.password2) {
      toast.error("Passwords dont match");
    } else {
      axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup/`, {
          ...formData,
        })
        .then((_) => {
          router.push("/login");
          toast.success("Business registered successfully");
        })
        .catch((err) => {
          if (err?.response?.data?.msg) {
            toast.error(err.response.data.msg);
          } else {
            toast.error("Check your form again");
          }
        });
    }

    // Add your signup logic here
    console.log("Signing up with:", formData);

    // You can use the formData object to make an API call or perform any other signup logic.
    // For simplicity, I'm just logging the form data to the console.
  };

  React.useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/reviews/business_category/`)
      .then((resp) => {
        setCategories(resp.data);
      })
      .catch((err) => {
        setCategories([]);
      });
  }, []);

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="max-w-md w-full p-6 bg-white shadow-md rounded-medium">
          <div className="heading mb-6 text-center">
            <h2 className="text-xl font-semibold text-gray-800">Signup</h2>
            <p className="px-6 text-sm">
              It only takes a few seconds to create your account and start
              making difference with your anonymous reviews
            </p>
          </div>
          <div className="flex justify-center my-1 space-x-2">
            <span>Already have an account?</span>
            <span>
              <Link
                href="/login"
                className="text-sm text-primary hover:underline pb-1 underline"
              >
                Login Instead
              </Link>
            </span>
          </div>
          <form className="pt-2">
            <div className="mb-10">
              <Input
                radius="full"
                size="lg"
                type="text"
                label="Business Name"
                name="business_name"
                value={formData.business_name}
                onChange={handleInputChange}
                isRequired
                labelPlacement="outside"
                placeholder="abc inc."
              />
            </div>
            <div className="mb-10">
              <Select
                label="Select Business Category"
                radius="full"
                size="lg"
                name="business_category"
                labelPlacement="outside"
                placeholder="Choose Business Category"
                value={formData.business_category}
                onChange={handleInputChange}
              >
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <div className="mb-10">
              <Input
                radius="full"
                size="lg"
                type="text"
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                isRequired
                labelPlacement="outside"
                placeholder="Email Address"
              />
            </div>
            <div className="mb-10">
              <Input
                radius="full"
                size="lg"
                type="text"
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                isRequired
                labelPlacement="outside"
                placeholder="+1 (123) 456 7890"
              />
            </div>
            <div className="mb-10">
              <Input
                radius="full"
                size="lg"
                type="text"
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                isRequired
                labelPlacement="outside"
                placeholder="Only Alphabets, Letters and symbols (- # . ,)"
              />
            </div>
            <div className="mb-10">
              <PasswordField
                label="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter Password"
              />
            </div>
            <div className="mb-10">
              <PasswordField
                label="Confirm Password"
                name="password2"
                value={formData.password2}
                onChange={handleInputChange}
                placeholder="Confirm Password"
                isRequired={false}
              />
            </div>
            <div className="mb-10">
              <Button
                className="text-white bg-primary hover:opacity-75"
                radius="full"
                fullWidth
                size="md"
                // onClick={handleSignUp}
              >
                Signup
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
