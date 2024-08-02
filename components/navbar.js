import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Link href="/">
            <p className="font-franklin text-xl">Rectify</p>
            </Link>
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/callback">
                  <p className="font-franklin text-xl">Recommender</p> 
                </Link>
              </li>
              <li>
                {/* <Link href="/services"> */}
                  <p className="font-franklin text-xl">Explorer</p>
                {/* </li>//</Link> */}
              </li>
            </ul>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;