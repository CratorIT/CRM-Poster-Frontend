'use client';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { useState, useMemo } from 'react';
import Image from 'next/image';
export default function EditProduct() {
  const [form, setForm] = useState({
    SKU: '',
    productName: '',
    mainImage: { url: 'https://i.pinimg.com/736x/59/24/b7/5924b7c168559965fd925b62ff284813.jpg', alt: 'ironMan Poster super hero' },
    sideImage1: { url: 'https://m.media-amazon.com/images/I/81vvUYezGWL._AC_UF1000,1000_QL80_.jpg', alt: 'jujutsu kaisen anime' },
    sideImage2: { url: '', alt: '' },
  });

  const imageCaraousalList = useMemo(() => {
    const imageList = [];
    imageList.push({ ...form?.mainImage, id: 'mainImage', name: 'Main Image' });
    imageList.push({ ...form?.sideImage1, id: 'sideImage1', name: 'Side Image 1' });
    imageList.push({ ...form?.sideImage2, id: 'sideImage2', name: 'Side Image 2' });

    return imageList;
  }, [form]);

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
        {/* {Image caraousal} */}
        <div className="w-full my-3 items-center flex justify-center">
          <Carousel className="w-[50%]">
            <CarouselContent>
              {imageCaraousalList?.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <h1>{item.name}</h1>
                    <Card className="flex flex-col justify-center items-center">
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <img src={item.url} alt={item.alt} />
                      </CardContent>
                      <div className="flex flex-col gap-1 w-[80%] justify-center items-center mb-1 ">
                        <Input className="bg-gray-50" type="file" />
                        <Input className="bg-gray-50" type="text" placeholder="enter Image alt tag" />
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
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
