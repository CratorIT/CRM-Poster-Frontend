'use client';
import { useEffect, useState } from 'react'; // Import useState
import Image from 'next/image';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { LoadingSpinner } from '@/components/ui/loading';
import { Button } from '@/components/ui/button';

const logoLink = 'https://ik.imagekit.io/uoi0avgvg/Crator%20Tech/Company%20Logo/WhatsApp%20Image%202024-02-24%20at%2022.25.25_b3a487b7.jpg?updatedAt=1710239255953';

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false); // Add this line
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // localStorage.setItem();
      router.push('/');
    }, 3000);
  };

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      {/* <!-- login container --> */}
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        {/* <!-- form --> */}
        <div className="md:w-1/2 px-8 md:px-16">
          <form action="" className="flex flex-col gap-4">
            <input className="p-2 mt-8 rounded-xl border" type="email" name="email" placeholder="Email" />
            <div className="relative">
              <input className="p-2 rounded-xl border w-full" type="password" name="password" placeholder="Password" />
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              </svg>
            </div>
            <Button className="rounded-xl text-xl text-white py-2 hover:scale-105 duration-300 text-center items-center flex justify-center" onClick={handleLogin}>
              {isLoading ? <LoadingSpinner /> : 'Login'}
            </Button>
          </form>
        </div>

        {/* <!-- image --> */}
        <div className="md:block hidden w-1/2">
          <Image className="rounded-2xl" src={logoLink} alt="Crator Logo" width={1000} height={1000} />
        </div>
      </div>
    </section>
  );
}
