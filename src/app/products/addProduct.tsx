'use client';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export default function AddProduct() {
  const [form, setForm] = useState({ productName: '', type: '', price: '', category: '', weight: '', description: '' });

  /// handlers

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...form, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(form);
  };
  return (
    <Dialog>
      <DialogTrigger className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md ">Add Product</DialogTrigger>

      <DialogContent>
        <DialogTitle>Add New Product</DialogTitle>

        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
              <Input className="bg-gray-50" placeholder="Type product name" name="productName" value={form?.productName} onChange={handleChange} />
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
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item Weight (gm)</label>
              <Input placeholder="gm" className="bg-gray-50" />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
              <Textarea className="bg-gray-50"></Textarea>
            </div>
          </div>
          <Button onClick={handleSubmit} className="mt-4">
            Submit
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
