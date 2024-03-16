'use client';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, CheckIcon, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import EditProduct from './editProduct';
import AddProduct from './addProduct';
import { useState } from 'react';

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

const data = [
  {
    id: 'PS00001',
    name: 'IRON MAN A4 Poster',
    category: 'SuperHero',
    type: 'Poster',
    price: 799.99,
    mrp: 999.99,
    soldCount: 1254,
    popularityCount: 2345,
    isPopular: true,
    isActive: true,
  },
  {
    id: 'PS00002',
    name: 'Naruto Poster A4',
    category: 'Anime',
    type: 'Poster',
    price: 24.99,
    mrp: 29.99,
    soldCount: 876,
    popularityCount: 1567,
    isPopular: false,
    isActive: true,
  },
  {
    id: 'KC000023',
    name: 'Thor Hammer Keychain',
    category: 'SuperHero',
    type: 'keychain',
    price: 59.99,
    mrp: 79.99,
    soldCount: 432,
    popularityCount: 987,
    isPopular: true,
    isActive: false,
  },
  // Add more dummy products as needed
];

export default function Products() {
  /// local state
  const [openEdit, setOpenEdit] = useState(false);
  const [id, setId] = useState('');

  //
  /// columns
  const columns: ColumnDef<Product>[] = [
    {
      accessorKey: 'id',
      header: 'SKU',
    },
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
      header: 'details',
      cell: ({ row }) => {
        const product = row.original;

        return <EditProduct />;
      },
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <AddProduct />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
