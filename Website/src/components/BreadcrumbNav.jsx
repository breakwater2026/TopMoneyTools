import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronRight } from "lucide-react";

export default function BreadcrumbNav({ items = [] }) {
  const defaultItems = [
    { label: "Home", to: "/" },
  ];
  const allItems = [...defaultItems, ...items];

  return (
    <Breadcrumb className="mb-6">
      <BreadcrumbList>
        {allItems.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              {index === allItems.length - 1 ? (
                <BreadcrumbPage className="text-[#889988]">
                  {item.label}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link to={item.to} className="text-[#A3FFD6] hover:text-[#88E6B8]">
                    {item.label}
                  </Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {index < allItems.length - 1 && (
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4 text-[#889988]" />
              </BreadcrumbSeparator>
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
