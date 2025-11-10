"use client";
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Modal from "../common/Modal";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import {
  Bookmark as BookMarkIcon,
  Heart as HeartIcon,
  X as CrossIcon,
} from "lucide-react";
import Link from "next/link";

const SocialTrends = () => {
  const [influencers, setInfluencers] = useState([
    {
      image: "/socialTrends/TanviThakker.png",
      name: "Tanvi Thakkar",
      instaId: "tanvithakker",
      instaLikes: 807,
      collectionLink: "/",
      message:
        "As they say, you attract the right thing when you have a sense of who you are. I love being in my element after a hard day of work and just enjoy my own company. What makes me feel great are these stylish pair of spectacles from @chashma_bazaar that make my time fulfilling, that let me be 'me'",
    },
    {
      image: "/socialTrends/AnkitBathla.png",
      name: "Ankit Bathla",
      instaId: "ankitbathla10",
      instaLikes: 934,
      collectionLink: "/",
      message:
        "Authenticity is magnetic and you attract the right things only when you stay true to yourself. @chashma_bazaar has the perfect eyewear collection that helps me put out the best authentic version of myself.",
    },
    {
      image: "/socialTrends/MalvikaGupta.png",
      name: "Malvika Gupta",
      instaId: "styleonwings",
      instaLikes: 1076,
      collectionLink: "/",
      message:
        "I am always up for 50 shades of the sun but only with a good pair of shades. @chashma_bazaar has the best collection and trust me guys one pair is never going to be enough.",
    },
    {
      image: "/socialTrends/NibeditaPaal.png",
      name: "Nibedita Paal",
      instaId: "i_nibedita",
      instaLikes: 987,
      collectionLink: "/",
      message:
        "Looking for a pair of spectacles that will turn heads and elevate your look? I have found the perfect ones with @chashma_bazaar that fits like a dream and gives me a chic look.",
    },
    {
      image: "/socialTrends/HarshPandit.png",
      name: "Harsh Pandit",
      instaId: "harsh.pandit",
      instaLikes: 1765,
      collectionLink: "/",
      message:
        "hanneling my inner rockstar with @chashma_bazaar Check out their amazing collection that helps you elevate the style and beat the heat at the same time.",
    },
    {
      image: "/socialTrends/AkashChoudhary.png",
      name: "Akash Choudhary",
      instaId: "iakashchoudhary",
      instaLikes: 1987,
      collectionLink: "/",
      message:
        "Focus on what is important, like a good pair of spectacles for my everyday wear. I found the perfect pair from @chashma_bazaar that resonates with my personal style.",
    },
    {
      image: "/socialTrends/PalakPurswani.png",
      name: "Palak Purswani",
      instaId: "palak.purswani",
      instaLikes: 643,
      collectionLink: "/",
      message:
        "With the right glasses you can conquer the world. I found the perfect pair from @chashma_bazaar that elevates my style.",
    },
    {
      image: "/socialTrends/SunayanaFozdar.png",
      name: "Sunayana Fozdar",
      instaId: "sunayanaf",
      instaLikes: 1544,
      collectionLink: "/",
      message:
        "I believe that with the right glasses, one can conquer the world. I am doing just that, looking my best with the perfect pair from @chashma_bazaar",
    },
    {
      image: "/socialTrends/PoojaGor.png",
      name: "Pooja Gor",
      instaId: "poojagor",
      instaLikes: 2168,
      collectionLink: "/",
      message:
        "I have been looking for that perfect pair of spectacles since forever. My long wait ended with this coolest pair of glasses from @chashma_bazaar and trust me guys these add an edge to your style like no other.",
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [currentInfluencer, setCurrentInfluencer] = useState();

  const handleModalToggle = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className="w-full flex items-center flex-col gap-8 px-16 mt-24">
      <h3 className="text-textsemidark font-semibold text-xl">
        #GoSocial With The Trends
      </h3>
      <Carousel opts={{ align: "start", loop: true }} className="w-11/12">
        <CarouselContent className="-ml-4">
          {influencers.map((influencer, index) => {
            return (
              <CarouselItem
                key={index}
                className="basis-1/4 pl-4 flex flex-col gap-2 text-textmid text-sm items-center"
              >
                <button
                  onClick={() => {
                    setCurrentInfluencer(influencer);
                    handleModalToggle();
                  }}
                  className="w-72 h-96 relative flex justify-center items-center overflow-hidden hover:bg-white"
                >
                  <Image width={288} height={288} className="absolute hover:scale-125 scale-110 transition-all duration-300" alt={influencer.name} src={influencer.image}/>
                </button>
                <p>{influencer.name.toUpperCase()}</p>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Modal visible={showModal} handleModalToggle={handleModalToggle}>
        <div className="flex h-screen p-4">
          <div className="w-[522px] flex justify-center items-center h-full overflow-hidden">
            <img
              className="object-contain"
              src={currentInfluencer?.image}
              alt={currentInfluencer?.name}
            />
          </div>
          <div className="bg-white h-full w-96 relative">
            <button
              className="absolute right-2 top-2"
              onClick={handleModalToggle}
            >
              <CrossIcon className="text-textmid h-4 w-4" />
            </button>
            <div className="w-full p-4 flex flex-col gap-4 ">
              <div className="flex gap-2 items-center">
                <div className=" w-12 h-12 rounded-full overflow-hidden border-2 border-[#e23359] flex justify-center items-center">
                  <Image
                    width={60}
                    height={60}
                    src={"/images/chashmabazaar_logo.png"}
                    alt="chashma bazaar"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-1">
                    <p className="text-textdark font-semibold">
                      chashma_bazaar
                    </p>
                    &bull;
                    <p className="text-blue-500 font-semibold">Follow</p>
                  </div>
                  <p className="text-textmid text-xs">
                    {currentInfluencer?.name} Collection
                  </p>
                </div>
              </div>
              <Separator />
              <div>
                <div className="text-sm">
                  <span className="text-blue-800">#Reposted</span> from{" "}
                  <span className="text-blue-800">
                    @{currentInfluencer?.instaId}
                  </span>
                  {" - "}
                  {currentInfluencer?.message.split("@chashma_bazaar")[0]}
                  <span className="text-blue-800">@chashma_bazaar</span>
                  {currentInfluencer?.message.split("@chashma_bazaar").length >
                    1 && currentInfluencer?.message.split("@chashma_bazaar")[1]}
                </div>
                <p className="text-sm">Check out their collection today</p>
                <p className="text-sm text-blue-800">#chashma_bazaar</p>
              </div>
              <Separator />
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-2 items-center">
                  <HeartIcon />
                  <p className="text-xs font-medium">
                    {currentInfluencer?.instaLikes} likes
                  </p>
                </div>
                <BookMarkIcon />
              </div>
            </div>
            <Link
              href={currentInfluencer?.collectionLink || "/"}
              className="absolute flex justify-center items-center text-xs font-semibold w-full p-3 bg-blue-500 text-white bottom-0"
            >
              View this Collection
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SocialTrends;
