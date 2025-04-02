"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logo from "@/assets/images/erplogo.png";
import notification from "@/assets/icons/notification.png";
import message from "@/assets/icons/message.png";
import calendar from "@/assets/icons/calendar.png";
import updown from "@/assets/icons/updown.png";

import Image from "next/image";

export function Header() {
  return (
    <header className="h-16 border-b bg-white flex items-center justify-between  px-4 relative">
      <div className="flex items-center gap-1 ">
        <Image src={Logo} alt="logo" height={50} width={50} />
        <span className="font-bold tracking-tight text-[#383861] hidden md:flex">ERP PRO</span>
      </div>

      <div className=" sm:w-[40%]  md:w-[30%] sm:ml-12">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-3 sm:w-3 text-gray-500" />
          <Input className="pl-8 bg-[#F6F7FA] w-full sm:text-[12px]" placeholder="Effectuer une recherche..." type="search" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <DropdownMenu >
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="hidden lg:w-16 md:flex md:items-center">
              <img src="/france.png" alt="FR" className="w-4 h-4 mr-[6px]" />
              Fr
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <img src="/united-kingdom.png" alt="EN" className="w-4 h-4 mr-1" />
              English
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="hidden md:flex md:justify-center md:items-center md:p-2 md:gap-3 md:cursor-pointer">
          <Image src={message} alt="message" />
          <Image src={notification} alt="notification" />
          <Image src={calendar} alt="calendrier" />
        </div>

        <div className="hidden lg:border lg:rounded-sm lg:p-1 lg:flex lg:items-center gap-2">
          <div className="mr-8 ml-2">
            <h4 className="text-[16px] text-[#383861] font-semibold">Asma Bahrini</h4>
            <p className="text-[12px] text-muted-foreground">TN, Tunisie</p>
          </div>
          <Avatar>
            <AvatarImage src="/asma.jpg" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Image src={updown} alt="see more" className="ml-1 mr-2 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
