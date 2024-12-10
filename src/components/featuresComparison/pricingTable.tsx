import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { features } from "./features";

const header = ["Ozellikler", "Temel", "Standart", "Premium"];

export default function PricingTable() {
  return (
    <article className="text-white hidden md:block">
      <Table className="border border-solid border-black-15 rounded-xl">
        <TableHeader>
          <TableRow className="border-b border-solid border-black-15 bg-black-06 text-white font-semibold text-lg xl:text-xl">
            {header.map((item) => (
              <TableHead key={item} className="p-6 xl:p-[30px] border-solid border-black-15 border">
                {item}
                {item === "Standart" && <Badge className="bg-red-45 text-white rounded-sm ml-3">Popüler</Badge>}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map((feature) => (
            <TableRow key={feature.name} className="border-b border-solid border-black-15 hover:bg-black-06 text-sm lg:text-base xl:text-lg font-medium text-grey-60">
              <TableCell className="p-6 xl:p-[30px] border-solid border-black-15 border">{feature.name}</TableCell>
              <TableCell className="p-6 xl:p-[30px] border-solid border-black-15 border">{feature.basic}</TableCell>
              <TableCell className="p-6 xl:p-[30px] border-solid border-black-15 border">{feature.standard}</TableCell>
              <TableCell className="p-6 xl:p-[30px] border-solid border-black-15 border">{feature.premium}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </article>
  );
}
