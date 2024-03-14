import { columns } from './columns';
import { DataTable } from '@/components/ui/data-table';
import AddProduct from './addProduct';

const data = [
  {
    id: '1',
    name: 'Product 1',
    category: 'Electronics',
    type: 'Laptop',
    price: 799.99,
    mrp: 999.99,
    soldCount: 1254,
    popularityCount: 2345,
    isPopular: true,
    isActive: true,
  },
  {
    id: '2',
    name: 'Product 2',
    category: 'Clothing',
    type: 'Shirt',
    price: 24.99,
    mrp: 29.99,
    soldCount: 876,
    popularityCount: 1567,
    isPopular: false,
    isActive: true,
  },
  {
    id: '3',
    name: 'Product 3',
    category: 'Home & Kitchen',
    type: 'Blender',
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
  return (
    <div className="container mx-auto py-10">
      <AddProduct />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
