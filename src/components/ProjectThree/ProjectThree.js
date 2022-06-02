/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { ChevronRightIcon, ShoppingCartIcon } from "@heroicons/react/solid";
import productData from "../../utils/productData";

const ProjectThree = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800">
        <header className="">
          <nav className="container h-24 px-4 lg:px-0 max-w-7xl mx-auto border-b border-gray-700 flex items-center justify-between">
            <div>
              <h1 className="text-3xl text-gray-200 font-bold">audiophile</h1>
            </div>
            <div className="text-gray-300 uppercase flex items-center justify-center space-x-5 flex-1 text-xs font-semibold mr-28">
              <Link href="/">Home</Link>
              <Link href="/">Headphones</Link>
              <Link href="/">Speakers</Link>
              <Link href="/">Earphones</Link>
            </div>
            <div>
              <ShoppingCartIcon className="text-white h-6 w-6" />
            </div>
          </nav>
        </header>

        <section className="container px-4 lg:px-0 max-w-7xl mx-auto grid grid-cols-2 items-center mt-16">
          <div className="flex flex-col space-y-10 items-start">
            <p className="uppercase text-gray-500 text-sm tracking-[0.7rem]">
              New Product
            </p>
            <h1 className="text-gray-100 uppercase text-7xl font-semibold">
              XX99 Mark II Headphones
            </h1>
            <p className="text-sm text-gray-400 w-[66%] tracking-wide">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
              error mollitia, repellat officiis quidem vitae praesentium dolore
              blanditiis facere delectus,
            </p>

            <button className="bg-orange-400 uppercase rounded-sm text-white px-10 text-sm py-4 focus:outline-none  tracking-[0.2rem]">
              see Product
            </button>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/images/Product.png"
              alt="product"
              className="h-[500px]"
            />
          </div>
        </section>
      </div>
      <section className="py-10">
        <div className="container px-4 lg:px-0 max-w-7xl mx-auto">
          <h1 className="text-4xl tracking-[0.2rem] text-gray-500 py-10">
            Top Products
          </h1>

          {/* main card */}

          <div className="grid grid-cols-3 gap-20 w-full mt-20">
            {productData.map((item) => (
              <div
                key={item.title}
                className="group cursor-pointer bg-gray-100 py-5 rounded-md flex flex-col space-y-3 items-center justify-center transition-all delay-100 duration-300 ease-in-out hover:bg-gray-50"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-32 -mt-20"
                />

                <div className="flex flex-col items-center space-y-3">
                  <h1 className="font-bold text-gray-500 tracking-[.2rem]">
                    {item.title}
                  </h1>
                  <div className="flex items-center font-semibold text-sm text-gray-400">
                    <p className="">Shop</p>
                    <ChevronRightIcon className="transition delay-100 duration-300 ease-in-out group-hover:rotate-180 h-7" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectThree;
