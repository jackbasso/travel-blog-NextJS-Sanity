import Image from "next/image";
import Link from "next/link";
import React from "react";
import FooterImg from "../public/assets/footer.jpg";

const Footer = () => {
  return (
    <div className="mt-14 text-white text-[14px]">
      <div className="relative w-full bg-cover bg-center bg-no-repeat py-10">
        <div className="absolute inset-0 -z-10">
          <Image src={FooterImg} fill alt="footer-img" className="object-cover object-center brightness-50" />
        </div>

        {/* Container div for all */}
        <div className="flex justify-around items-center h-full">
          {/* Container div for left contents */}
          <div className="flex flex-col gap-y-10">
            <div className="flex divide-x">
              <div className="w-36">
                <h3 className="font-semibold mb-3">EXPLORE</h3>
                <p>Journey</p>
                <p>Places</p>
                <p>Channel</p>
                <p>Editor's pick</p>
              </div>
              <div className="pl-10">
                <h3 className="font-semibold mb-3">EXPLORE</h3>
                <p>Journey</p>
                <p>Places</p>
                <p>Channel</p>
                <p>Editor's pick</p>
              </div>
            </div>
            <div className="flex divide-x">
              <div className="w-36">
                <h3 className="font-semibold mb-3">EXPLORE</h3>
                <p>Journey</p>
                <p>Places</p>
                <p>Channel</p>
                <p>Editor's pick</p>
              </div>
              <div className="pl-10">
                <h3 className="font-semibold mb-3">EXPLORE</h3>
                <p>Journey</p>
                <p>Places</p>
                <p>Channel</p>
                <p>Editor's pick</p>
              </div>
            </div>
            <div>
              <p>
                Developed by{" "}
                <Link href="https://twitter.com/username" target="_blank" className="underline">
                  Jack Basso
                </Link>
              </p>
            </div>
          </div>
          {/* Container div for right contents */}
          <div className="flex flex-col gap-y-10">
            <div className="flex divide-x">
              <div className="w-36">
                <h3 className="font-semibold mb-3">MORE TRAVEL</h3>
                <p>The Travel Mob</p>
                <p>The Green Life</p>
                <p>Travel Websites</p>
                <p>Top UK Travelers</p>
              </div>
              <div className="pl-10">
                <h3 className="font-semibold mb-3">COMMUNITIES</h3>
                <p>Contributors</p>
                <p>Members</p>
                <p>True North</p>
                <p>Weather Sites</p>
              </div>
            </div>
            <div>
              {/* For Subscribe to Newsletter */}
              <div>
                <h3 className="font-semibold mb-3 text-center">SUBSCRIBE TO OUR NEWSLETTER</h3>
                <div className="flex flex-row">
                  <div className="relative mb-6">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-50 dark:text-gray-50"
                        xmlns="http://www.w3.org/2000/svg"
                        width="800px"
                        height="800px"
                        viewBox="0 0 32 32"
                        version="1.1"
                      >
                        <g id="icomoon-ignore"></g>
                        <path
                          d="M28.244 7.47h-25.572v17.060h26.656v-17.060h-1.084zM27.177 8.536l-10.298 10.298c-0.47 0.47-1.289 0.47-1.759 0l-10.3-10.298h22.356zM3.738 8.961l6.923 6.922-6.923 6.923v-13.846zM4.589 23.464l6.827-6.826 2.951 2.95c0.436 0.436 1.016 0.677 1.633 0.677s1.197-0.241 1.633-0.677l2.951-2.951 6.826 6.826h-22.822zM28.262 22.807l-6.923-6.924 6.923-6.924v13.848z"
                          fill="#000000"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="input-group-1"
                      className="bg-transparent border border-gray-300 text-gray-50 text-sm rounded-lg block w-full ps-10 p-2.5"
                      placeholder="jbaso507@gmail.com"
                    />
                  </div>
                  <button
                    type="submit"
                    className="text-black bg-gray-50 hover:bg-gray-100 focus:ring-1 focus:outline-none focus:ring-gray-100 font-medium-md text-sm sm:w-auto px-5 py-1
                    text-center h-10 ml-2"
                  >
                    Submit
                  </button>
                </div>
              </div>
              {/* For Follow us */}
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
