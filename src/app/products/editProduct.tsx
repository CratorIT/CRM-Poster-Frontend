'use client';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
export default function EditProduct() {
  const [form, setForm] = useState({
    SKU: '',
    productName: '',
  });

  return (
    <Sheet>
      <SheetTrigger className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md ">Open</SheetTrigger>
      <SheetContent className="w-[700px] overflow-auto">
        <div className="flex w-full justify-between items-center my-3">
          <div className="flex items-center space-x-2">
            <Switch />
            <label>Edit </label>
          </div>
          <Button className="mt-4">Update</Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 ">
          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">SKU</label>
            <Input className="bg-gray-50" placeholder="Product SKU" name="productName" />
          </div>

          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
            <Input className="bg-gray-50" placeholder="Type product name" name="productName" />
          </div>
          <div className="w-full flex">
            <div className="px-4 flex items-center space-x-2">
              <Switch />
              <label>Active </label>
            </div>
            <div className="px-4 flex items-center space-x-2">
              <Switch />
              <label>isPopular</label>
            </div>
          </div>
          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Popularity Count</label>
            <Input className="bg-gray-50" placeholder="Popularity Count" name="productName" />
          </div>
          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
            <Select>
              <SelectTrigger className="bg-gray-50">
                <SelectValue placeholder="Select Product Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Poster">Poster</SelectItem>
                <SelectItem value="Toy">Toy</SelectItem>
                <SelectItem value="Tshirt">Tshirt</SelectItem>
                <SelectItem value="KeyChain">KeyChain</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
            <Input placeholder="Enter Price" className="bg-gray-50" />
          </div>
          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">MRP</label>
            <Input placeholder="Enter Price" className="bg-gray-50" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
            <Select>
              <SelectTrigger className="bg-gray-50">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">SuperHero</SelectItem>
                <SelectItem value="dark">Science</SelectItem>
                <SelectItem value="system">Quotes</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">SubCategory</label>
            <Textarea className="bg-gray-50"></Textarea>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item Weight (gm)</label>
            <Input placeholder="gm" className="bg-gray-50" />
          </div>
          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dimension (cm)</label>
            <div className="flex  w-full gap-1">
              <Input type="number" placeholder="Length" className="bg-gray-50 w-[33%]" />
              <Input type="number" placeholder="Width" className="bg-gray-50 w-[33%]" />
              <Input type="number" placeholder="Height" className="bg-gray-50 w-[33%]" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
            <Textarea className="bg-gray-50"></Textarea>
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Meta Tag</label>
            <Textarea className="bg-gray-50"></Textarea>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
