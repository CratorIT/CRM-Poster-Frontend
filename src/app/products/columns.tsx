'use client';

import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, CheckIcon, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EditProduct from './editProduct';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Product = {
  id: string;
  name: string;
  category: string;
  type: string;
  price: number;
  mrp: number;
  soldCount: number;
  popularityCount: number;
  isPopular: boolean;
  isActive: boolean;
};

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'category',
    header: 'Category',
  },
  {
    accessorKey: 'type',
    header: 'Type',
  },
  {
    accessorKey: 'price',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const price = parseFloat(row.getValue('price'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR',
      }).format(price);

      return <div className=" font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'mrp',
    header: 'MRP',
    cell: ({ row }) => {
      const mrp = parseFloat(row.getValue('mrp'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR',
      }).format(mrp);

      return <div className=" font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'soldCount',
    header: 'Sold Count',
  },
  {
    accessorKey: 'popularityCount',
    header: 'popularity',
  },
  {
    accessorKey: 'isPopular',
    header: 'isPopular',
    cell: ({ row }) => {
      const isPopular = row.getValue('isPopular');
      return <div className="cursor-pointer ">{isPopular ? <CheckIcon /> : <Plus className="transform rotate-45" />}</div>;
    },
  },
  {
    accessorKey: 'isActive',
    header: 'isActive',
    cell: ({ row }) => {
      const isActive = row.getValue('isActive');
      return <div className="cursor-pointer ">{isActive ? <CheckIcon /> : <Plus className="transform rotate-45" />}</div>;
    },
  },
  {
    accessorKey: 'action',
    header: 'Edit',
    cell: ({ row }) => {
      const product = row.original;

      return <EditProduct />;
    },
  },
];
