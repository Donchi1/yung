"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import * as Icons from "react-icons/md";
import Image from 'next/image';
import { useGetCurrentUser } from './hooks/GetCurrentUser';
import { auth } from '@/db/firebaseDb';
import Text from './custom/Text';
import { useAppStore } from '@/store/appStore';
import { usePathname } from 'next/navigation';

interface MenuItem {
  id: number;
  href: string;
  icon: JSX.Element;
  text: string;
  action?: () => void;
}

function AdminSidebar() {
  const {openSidebar, currentUser} = useAppStore()
  const pathname = usePathname()




  const handleLogout = async () => {
    await auth.signOut();
    location.assign("/auth/admin/login");
  };

  const menuItems: MenuItem[] = [
    { id: 1, href: "/admin/dashboard", icon: <Icons.MdHome size={25} />, text: "Home" },
    { id: 2, href: "/admin/profile", icon: <Icons.MdPerson size={25} />, text: "Profile" },
    { id: 3, href: "/admin/packages", icon: <Icons.MdLuggage size={25} />, text: "Packages" },
    { id: 4, href: "/admin/contacts", icon: <Icons.MdEmail size={25} />, text: "Contacts" },
    { id: 5, href: "/admin/subcribers", icon: <Icons.MdUnsubscribe size={25} />, text: "Subcribers" },
    { id: 6, href: "/admin/quotations", icon: <Icons.MdMessage size={25} />, text: "Quotations" },
    { id: 7, href: "#", icon: <Icons.MdLogout size={25} />, text: "Logout", action: handleLogout }
  ];

  return (
    <div className={`${openSidebar ? "absolute lg:static" : "lg:static"} flex-1 lg:z-0 z-50 min-h-[calc(100vh-12vh)] lg:w-auto w-[50%] absolute h-screen transition-all duration-500 ease-linear`}  id="navbarContent">
      <div className={`${openSidebar ? "right-[50%] left-0 opacity-1 transition-color " : "lg:right-[80%] -left-[100%] lg:left-0 " } ease-linear duration-500  overflow-y-auto h-[90%] lg:h-full fixed  top-[12vh]  lg:right-[80%] bg-sec-bg pt-[1rem]`}>
        <div className='ml-4 pl-2 mb-4'>
          <Image src={currentUser?.photo || "/imgs/team-male1.jpg"} alt='admin' className='rounded-full' height={80} width={80} />
          <Text>Supper Admin: <span className='text-primary-color uppercase'>{currentUser?.firstname}</span></Text>
          <Text className='!text-[14px] text-light-color/70'>{currentUser?.email}</Text>
        </div>
        <hr />
        <div className="flex flex-col gap-[.5rem] h-auto mt-4">
          {menuItems.map((item: MenuItem) => (
            <li key={item.id} className="w-full py-[3.8px]  list-none ">
              <Link  href={item.href} onClick={() => item.action && item.action()} className={`${pathname === item.href && "bg-primary-color hover:!bg-primary-color" } w-[83%] text-light-color mx-auto hover:transition-all ease-linear duration-500 rounded-lg hover:bg-main-bg flex gap-4 px-2 py-2 items-center`}>
                {item.icon} {item.text}
              </Link>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminSidebar;