'use client';
import { useState } from 'react'; // Import useState
import Image from 'next/image';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { LoadingSpinner } from '@/components/ui/loading';

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
      router.push('/');
    }, 3000);
  };
  return (
    <div
      className="bg-[#121212] h-screen w-screen flex flex-col
     items-center justify-center gap-5"
    >
      <Image className="rounded-[50%]" src={logoLink} width={180} height={180} alt="crm Logo" />
      <div className="container  shadow-lg rounded-md p-2 flex flex-col items-center w-[300px] gap-2">
        <form onSubmit={handleLogin} className="flex flex-col gap-2">
          <input className="rounded-sm p-4 bg-[#2b2b2b] text-white" type="text" placeholder="Username" id="username-input" />
          <div className="relative">
            <input className="rounded-sm p-4 bg-[#2b2b2b] text-white" type={showPassword ? 'text' : 'password'} placeholder="Password" id="password-input" />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute text-white right-3 top-4">
              {showPassword ? <EyeIcon /> : <EyeOffIcon />}
            </button>
          </div>
          <button className="bg-white rounded-md p-3 mt-3 font-medium items-center flex justify-center" type="submit">
            {isLoading ? <LoadingSpinner size={32} /> : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}
