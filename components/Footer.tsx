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
                <p>Editor's pickS</p>
              </div>
              <div className="pl-10">
                <h3 className="font-semibold mb-3">EXPLORE</h3>
                <p>Journey</p>
                <p>Places</p>
                <p>Channel</p>
                <p>Editor's picks</p>
              </div>
            </div>
            <div className="flex divide-x">
              <div className="w-36">
                <h3 className="font-semibold mb-3">EXPLORE</h3>
                <p>Journey</p>
                <p>Places</p>
                <p>Channel</p>
                <p>Editor's picks</p>
              </div>
              <div className="pl-10">
                <h3 className="font-semibold mb-3">EXPLORE</h3>
                <p>Journey</p>
                <p>Places</p>
                <p>Channel</p>
                <p>Editor's picks</p>
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
                      ``
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
              <div>
                <div>
                  <h3 className="font-semibold mb-3 text-center">FOLLOW US</h3>
                  <div className="flex items-center gap-6 justify-center">
                    <a href="" className="text-gray-50 hover:text-gray-100" aria-label="Instagram" target="_blank">
                      <svg
                        fill="#FFFFFF"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        width="50px"
                        height="50px"
                      >
                        <path
                          d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 
                      41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 
                      34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z 
                      M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712
                       14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 
                       C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 
                       20.017593 16 25 16 z"
                        />
                      </svg>
                    </a>

                    <a href="" className="text-gray-50 hover:text-gray-100" aria-label="YouTube" target="_blank">
                      <svg
                        fill="#FFFFFF"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        width="50px"
                        height="50px"
                      >
                        <path
                          d="M 44.898438
                     14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 
                     8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 
                     35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 
                     40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 
                     20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
