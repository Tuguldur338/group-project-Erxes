import React from "react";
import Image from "next/image";

const Products: React.FC = () => {
  return (
    <section className="p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Our Products:
        </h2>
        <div className="flex flex-wrap gap-6 content-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md h-[400px] w-[400px] hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
            <Image
              src="/images/wireless-mouse.webp"
              alt="Wireless Mouse picture webp"
              width={500}
              height={500}
            />

            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Razer Pro Click
            </h3>

            <p className="text-gray-600">
              <span className="font-bold">Specifications: </span>
              DPI: 16,000Interface: BluetoothButtons: 8Ergonomic:
              Right-handedFeatures: multi-host connectivity for up to 4 devices,
              8 independently programmable buttons, 5G advanced optical sensor
            </p>
          </div>

          <div className="bg-white h-[400px] w-[400px] p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
            <div className="w-[352px] h-[198px] bg-gray-200 content-center flex items-center justify-center">
              <Image
                src="/images/laptop-image.avif"
                alt=""
                width={500}
                height={500}
                className="w-[320px] h-[160px]"
              />
            </div>

            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Dell 15 Laptop
            </h3>

            <p className="text-gray-600">
              <span className="font-bold">Specifications: </span>
              15.6-inch FHD (1920 x 1080) Anti-Glare Non-Touch Display, Intel®
              13th Gen Intel® Core™ i5-1334U, 10 cores
            </p>
          </div>

          <div className="bg-white h-[400px] w-[400px] p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer content-center justify-center items-center">
            <div className="w-[320px] h-[160px] bg-gray-200 content-center flex items-center justify-center">
              <Image
                src="/images/CPU-processor-image.webp"
                alt=""
                width={500}
                height={500}
                className="w-[160px] h-[160px]"
              />
            </div>

            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Product 3
            </h3>

            <p className="text-gray-600"></p>
          </div>

          <div className="bg-white h-[400px] w-[400px] p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
            <Image
              src=""
              alt=""
              width={500}
              height={500}
              className="w-[320px] h-[160px]"
            />

            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Product 2
            </h3>

            <p className="text-gray-600"></p>
          </div>

          <div className="bg-white h-[400px] w-[400px] p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
            <Image
              src=""
              alt=""
              width={500}
              height={500}
              className="w-[320px] h-[160px]"
            />

            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Product 2
            </h3>

            <p className="text-gray-600"></p>
          </div>

          <div className="bg-white h-[400px] w-[400px] p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
            <Image
              src=""
              alt=""
              width={500}
              height={500}
              className="w-[320px] h-[160px]"
            />

            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Product 2
            </h3>

            <p className="text-gray-600"></p>
          </div>

          <div className="bg-white h-[400px] w-[400px] p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
            <Image
              src=""
              alt=""
              width={500}
              height={500}
              className="w-[320px] h-[160px]"
            />

            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Product 2
            </h3>

            <p className="text-gray-600"></p>
          </div>

          <div className="bg-white h-[400px] w-[400px] p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
            <Image
              src=""
              alt=""
              width={500}
              height={500}
              className="w-[320px] h-[160px]"
            />

            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Product 2
            </h3>

            <p className="text-gray-600"></p>
          </div>

          <div className="bg-white h-[400px] w-[400px] p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
            <Image
              src=""
              alt=""
              width={500}
              height={500}
              className="w-[320px] h-[160px]"
            />

            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Product 2
            </h3>

            <p className="text-gray-600"></p>
          </div>

          <div className="bg-white h-[400px] w-[400px] p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
            <Image
              src=""
              alt=""
              width={500}
              height={500}
              className="w-[320px] h-[160px]"
            />

            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Product 2
            </h3>

            <p className="text-gray-600"></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
