import Image from "next/image";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Search as SearchIcon, ShoppingCart as ShoppingCartIcon } from "lucide-react";

const Navbar = ({className}) => {
  return (
    <div className={"w-full "+className}>
      <div className="w-full bg-white py-2 px-8 flex justify-between border-b-2 items-center">
        <Link href={"/"} className="h-16">
          <Image
            src={`/images/chashmabazaar_logo.png`}
            width={120}
            height={120}
            alt="chashma bazaar"
          />
        </Link>
        <Input
          placeholder="Search for eyeglasses, sunglasses and more..."
          className=" w-[512px]"
        >
          <SearchIcon className=" text-gray-400"/>
        </Input>
        <div className="flex gap-4 px-8 items-center">
          <Button
            variant="ghost"
            className="text-textmid hover:bg-none hover:text-textdark"
          >
            Help
          </Button>
          <Button
            variant="ghost"
            className="text-textmid hover:bg-none hover:text-textdark"
          >
            Sign In
          </Button>
          <Button variant="ghost">
            <ShoppingCartIcon className="text-textmid w-5 h-5"/>
          </Button>
        </div>
      </div>
      <Menubar className="bg-mid rounded-none py-6 justify-around border-0">
        <MenubarMenu >
          <MenubarTrigger className="cursor-pointer text-white font-medium data-[state=open]:bg-med data-[state=open]:text-textwhite focus:bg-mid focus:text-textwhite">EYEGLASSES</MenubarTrigger>
          <MenubarContent>
            <div className="flex text-textdark">
              <div className="border-r-2 py-4 px-6">
                <p className="text-textmenu font-semibold">Shop by Gender</p>
                <Link href={"/eyeglasses?gender=male"} className="text-textmid hover:text-mid font-medium py-4 px-4 flex gap-8">
                  <Image width={25} height={25} alt="men" src={"/images/man_icon.svg"}/>
                  <p className="text-xs text-textmenu hover:text-primary">MEN</p>
                </Link>
                <Link href={"/eyeglasses?gender=female"} className="text-textmid hover:text-mid font-medium py-4 px-4 flex gap-8">
                  <Image width={25} height={25} alt="men" src={"/images/woman_icon.svg"}/>
                  <p className="text-xs text-textmenu hover:text-primary">WOMEN</p>
                </Link>
                <Link href={"/eyeglasses?gender=kids"} className="text-textmid hover:text-mid font-medium py-4 px-4 flex gap-8">
                  <Image width={25} height={25} alt="men" src={"/images/child_icon.svg"}/>
                  <p className="text-xs text-textmenu hover:text-primary">KIDS</p>
                </Link>
              </div>
              <div className="border-r-2 py-4 px-6 grid grid-cols-2 w-96">
              <p className="text-textmenu font-semibold col-span-2">Shop by Brand</p>
                <Link href={"/eyeglasses?brand=farenheit"} className="text-xs text-textmenu hover:text-primary flex">FARENHEIT</Link>
                <Link href={"/eyeglasses?brand=nerdlane"} className="text-xs text-textmenu hover:text-primary flex">NERDLANE</Link>
                <Link href={"/eyeglasses?brand=seventh-street"} className="text-xs text-textmenu hover:text-primary flex">SEVENTH STREET</Link>
                <Link href={"/eyeglasses?brand=opium"} className="text-xs text-textmenu hover:text-primary flex">OPIUM</Link>
                <Link href={"/eyeglasses?brand=police"} className="text-xs text-textmenu hover:text-primary flex">POLICE</Link>
                <Link href={"/eyeglasses?brand=vistazo"} className="text-xs text-textmenu hover:text-primary flex">VISTAZO</Link>
                <Link href={"/eyeglasses?brand=puma"} className="text-xs text-textmenu hover:text-primary flex">PUMA</Link>
                <Link href={"/eyeglasses?brand=tommy-hilfiger"} className="text-xs text-textmenu hover:text-primary flex">TOMMY HILFIGER</Link>
              </div>
              <div className="py-4 px-6 w-48 flex flex-col gap-4">
              <p className="text-textmenu font-semibold col-span-2">Shop by Shape</p>
                <Link href={"/eyeglasses?shape=hexagon"} className="text-xs text-textmenu hover:text-primary flex">HEXAGON</Link>
                <Link href={"/eyeglasses?shape=round"} className="text-xs text-textmenu hover:text-primary flex">ROUND</Link>
                <Link href={"/eyeglasses?shape=rectangle"} className="text-xs text-textmenu hover:text-primary flex">RECTANGLE</Link>
                <Link href={"/eyeglasses?shape=cateye"} className="text-xs text-textmenu hover:text-primary flex">CATEYE</Link>
                <Link href={"/eyeglasses?shape=oval"} className="text-xs text-textmenu hover:text-primary flex">OVAL</Link>
                <Link href={"/eyeglasses?shape=wayfarer"} className="text-xs text-textmenu hover:text-primary flex">WAYFARER</Link>
              </div>
              <div className="py-4 px-6 w-48 flex flex-col gap-4">
              <p className="text-textmenu font-semibold col-span-2">Shop by Style</p>
                <Link href={"/eyeglasses?style=full-frame"} className="text-xs text-textmenu hover:text-primary flex">FULL FRAME</Link>
                <Link href={"/eyeglasses?style=half-frame"} className="text-xs text-textmenu hover:text-primary flex">HALF FRAME</Link>
                <Link href={"/eyeglasses?style=rimless"} className="text-xs text-textmenu hover:text-primary flex">RIMLESS</Link>
              </div>
            </div>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu >
          <MenubarTrigger className="cursor-pointer text-white font-medium data-[state=open]:bg-med data-[state=open]:text-textwhite focus:bg-mid focus:text-textwhite">SUNGLASSES</MenubarTrigger>
          <MenubarContent>
            <div className="flex text-textdark">
              <div className="border-r-2 py-4 px-6">
                <p className="text-textmenu font-semibold">Shop by Gender</p>
                <Link href={"/"} className="text-textmid hover:text-mid font-medium py-4 px-4 flex gap-8">
                  <Image width={25} height={25} alt="men" src={"/images/man_icon.svg"}/>
                  <p className="text-xs text-textmenu hover:text-primary">MEN</p>
                </Link>
                <Link href={"/"} className="text-textmid hover:text-mid font-medium py-4 px-4 flex gap-8">
                  <Image width={25} height={25} alt="men" src={"/images/woman_icon.svg"}/>
                  <p className="text-xs text-textmenu hover:text-primary">WOMEN</p>
                </Link>
                <Link href={"/"} className="text-textmid hover:text-mid font-medium py-4 px-4 flex gap-8">
                  <Image width={25} height={25} alt="men" src={"/images/child_icon.svg"}/>
                  <p className="text-xs text-textmenu hover:text-primary">KIDS</p>
                </Link>
              </div>
              <div className="border-r-2 py-4 px-6 grid grid-cols-2 w-96">
              <p className="text-textmenu font-semibold col-span-2">Shop by Brand</p>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">FARENHEIT</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">NERDLANE</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">SEVENTH STREET</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">OPIUM</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">POLICE</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">VISTAZO</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">PUMA</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">TOMMY HILFIGER</Link>
              </div>
              <div className="py-4 px-6 w-48 flex flex-col gap-4">
              <p className="text-textmenu font-semibold col-span-2">Shop by Shape</p>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">HEXAGON</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">ROUND</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">RECTANGLE</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">CATEYE</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">OVAL</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">WAYFARER</Link>
              </div>
              <div className="py-4 px-6 w-48 flex flex-col gap-4">
              <p className="text-textmenu font-semibold col-span-2">Shop by Style</p>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">FULL FRAME</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">HALF FRAME</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">RIMLESS</Link>
              </div>
            </div>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu >
          <MenubarTrigger className="cursor-pointer text-white font-medium data-[state=open]:bg-med data-[state=open]:text-textwhite focus:bg-mid focus:text-textwhite">COMPUTER GLASSES</MenubarTrigger>
          <MenubarContent>
            <div className="flex text-textdark">
              <div className="border-r-2 py-4 px-6">
                <p className="text-textmenu font-semibold">Shop by Gender</p>
                <Link href={"/"} className="text-textmid hover:text-mid font-medium py-4 px-4 flex gap-8">
                  <Image width={25} height={25} alt="men" src={"/images/man_icon.svg"}/>
                  <p className="text-xs text-textmenu hover:text-primary">MEN</p>
                </Link>
                <Link href={"/"} className="text-textmid hover:text-mid font-medium py-4 px-4 flex gap-8">
                  <Image width={25} height={25} alt="men" src={"/images/woman_icon.svg"}/>
                  <p className="text-xs text-textmenu hover:text-primary">WOMEN</p>
                </Link>
                <Link href={"/"} className="text-textmid hover:text-mid font-medium py-4 px-4 flex gap-8">
                  <Image width={25} height={25} alt="men" src={"/images/child_icon.svg"}/>
                  <p className="text-xs text-textmenu hover:text-primary">KIDS</p>
                </Link>
              </div>
              <div className="border-r-2 py-4 px-6 grid grid-cols-2 w-96">
              <p className="text-textmenu font-semibold col-span-2">Shop by Brand</p>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">FARENHEIT</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">NERDLANE</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">SEVENTH STREET</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">OPIUM</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">POLICE</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">VISTAZO</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">PUMA</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">TOMMY HILFIGER</Link>
              </div>
              <div className="py-4 px-6 w-48 flex flex-col gap-4">
              <p className="text-textmenu font-semibold col-span-2">Shop by Shape</p>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">HEXAGON</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">ROUND</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">RECTANGLE</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">CATEYE</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">OVAL</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">WAYFARER</Link>
              </div>
              <div className="py-4 px-6 w-48 flex flex-col gap-4">
              <p className="text-textmenu font-semibold col-span-2">Shop by Style</p>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">FULL FRAME</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">HALF FRAME</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">RIMLESS</Link>
              </div>
            </div>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu >
          <MenubarTrigger className="cursor-pointer text-white font-medium data-[state=open]:bg-med data-[state=open]:text-textwhite focus:bg-mid focus:text-textwhite">CONTACT LENSES</MenubarTrigger>
          <MenubarContent>
            <div className="flex text-textdark">
              <div className="border-r-2 py-4 px-6">
                <p className="text-textmenu font-semibold">Shop by Gender</p>
                <Link href={"/"} className="text-textmid hover:text-mid font-medium py-4 px-4 flex gap-8">
                  <Image width={25} height={25} alt="men" src={"/images/man_icon.svg"}/>
                  <p className="text-xs text-textmenu hover:text-primary">MEN</p>
                </Link>
                <Link href={"/"} className="text-textmid hover:text-mid font-medium py-4 px-4 flex gap-8">
                  <Image width={25} height={25} alt="men" src={"/images/woman_icon.svg"}/>
                  <p className="text-xs text-textmenu hover:text-primary">WOMEN</p>
                </Link>
                <Link href={"/"} className="text-textmid hover:text-mid font-medium py-4 px-4 flex gap-8">
                  <Image width={25} height={25} alt="men" src={"/images/child_icon.svg"}/>
                  <p className="text-xs text-textmenu hover:text-primary">KIDS</p>
                </Link>
              </div>
              <div className="border-r-2 py-4 px-6 grid grid-cols-2 w-96">
              <p className="text-textmenu font-semibold col-span-2">Shop by Brand</p>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">FARENHEIT</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">NERDLANE</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">SEVENTH STREET</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">OPIUM</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">POLICE</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">VISTAZO</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">PUMA</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">TOMMY HILFIGER</Link>
              </div>
              <div className="py-4 px-6 w-48 flex flex-col gap-4">
              <p className="text-textmenu font-semibold col-span-2">Shop by Shape</p>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">HEXAGON</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">ROUND</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">RECTANGLE</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">CATEYE</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">OVAL</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">WAYFARER</Link>
              </div>
              <div className="py-4 px-6 w-48 flex flex-col gap-4">
              <p className="text-textmenu font-semibold col-span-2">Shop by Style</p>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">FULL FRAME</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">HALF FRAME</Link>
                <Link href={"/"} className="text-xs text-textmenu hover:text-primary flex">RIMLESS</Link>
              </div>
            </div>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      
    </div>
  );
};

export default Navbar;
