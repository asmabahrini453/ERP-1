"use client"

import Image from "next/image"
import footerlogo from "@/assets/images/devpro.png"

export function Footer() {
  return (
    <footer className=" w-full border-t bg-white py-4 px-8">
      <div className="flex items-center justify-end">
        <p className="text-sm text-gray-500 mr-1">
        &copy; 2025, Tous droits réservés à DevPro Solutions
        </p>
        <Image
         src={footerlogo}
          alt="Logo"
      
          className="h-6 w-auto"
        />
      </div>
    </footer>
  )
}

