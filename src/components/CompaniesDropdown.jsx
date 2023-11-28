"use client";
import React, { useEffect, useState } from "react";

import { authOptions } from "@/lib/auth";
import { Button, Divider, Select, SelectItem } from "@nextui-org/react";
import axios from "axios";
import { useRouter } from "next/navigation";

const CompaniesDropdown = () => {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/reviews/business/`)
      .then((resp) => {
        setCompanies(resp.data);
        setLoading(false);
      })
      .catch((err) => {
        setCompanies([]);
        setLoading(false);
      });
  }, []);
  return (
    <div className="relative md:px-0 px-10">
      <Select
        label="Search Company Name to give feedback"
        className="w-full md:w-1/2"
        variant="faded"
        radius="full"
        disableAnimation
        disabled={isLoading}
        onChange={(e) => router.push(`/c/${e.target.value}`)}
      >
        {companies.map((company) => (
          <SelectItem key={company.name} value={company.name}>
            {company.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default CompaniesDropdown;
