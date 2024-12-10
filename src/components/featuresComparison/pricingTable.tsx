import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { features } from "./features";

export default function PricingTable() {
  return (
    <article className="text-white hidden lg:block">
      <Table className="border border-solid border-black-15 rounded-xl">
        <TableHeader className="">
          <TableRow className="border-b border-solid border-black-15 bg-black-06 text-white font-semibold text-xl">
            <TableHead className="p-[30px] border-solid border-black-15 border">Özellikler</TableHead>
            <TableHead className="p-[30px] border-solid border-black-15 border">Temel</TableHead>
            <TableHead className="p-[30px] border-solid border-black-15 border">
              <span>Standart</span>
              <Badge className="bg-red-45 text-white rounded-sm ml-3">Popüler</Badge>
            </TableHead>
            <TableHead className="p-[30px] border-solid border-black-15 border">Premium</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map((feature) => (
            <TableRow key={feature.name} className="border-b border-zinc-800 hover:bg-zinc-900/50 text-lg font-medium text-grey-60">
              <TableCell className="p-[30px] border-solid border-black-15 border">{feature.name}</TableCell>
              <TableCell className="p-[30px] border-solid border-black-15 border">{feature.basic}</TableCell>
              <TableCell className="p-[30px] border-solid border-black-15 border">{feature.standard}</TableCell>
              <TableCell className="p-[30px] border-solid border-black-15 border">{feature.premium}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </article>
  );
}
