'use client'
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { UserHook } from '@/components/hook/userHook';
import { useEffect } from "react";
import dotenv from "dotenv";
dotenv.config();


export default function Home({
    params: { id }
}: {
    params: { id: string }
}) {
    const { getUserId,setGetUserId } = UserHook();
    console.log("gggggg",getUserId);
    const router=useRouter()
    
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post(`https://be-e-commerce-tohe.onrender.com/api/auth/login-success/${id}`);
                router.push("/dashboard")
                const user = response.data.user;               
                setGetUserId(user); // Set the whole user object
                localStorage.setItem("accessToken", response.data.accessToken);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Adding `id` to dependencies

  return(
    <div className='grow '>
        <h1 className='text-center text-[35px] mt-[100px] text-red-500'>loading...!</h1>
    </div>
  )
}
