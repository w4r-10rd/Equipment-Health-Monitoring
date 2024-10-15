import React from "react";
import { Link } from "react-router-dom";

function FactorySection({ nameID, location, image, TWclass }) {
  return (
    <Link to="/devices">
      <div className="factorySectionCard shadow-md hover:shadow-2xl rounded flex flex-col items-center bg-white ">
        <div className={TWclass} />
        <div className="h-48 w-48 border-4 rounded-full -mt-28 flex items-center justify-center backdrop-blur-2xl border-gray-100  shadow-md">
          <img
            src={image}
            className="h-40 w-40 rounded-full object-cover "
            alt="factory section"
          ></img>
        </div>
        <div className="w-full p-3 pb-7">
          <div className=" w-full text-center flex flex-col">
            <span className="text-gray-700 text-3xl font-bold">{nameID}</span>
            <span className="text-gray-700 text-md font-semibold">
              {location}
            </span>
          </div>
          <div className="flex justify-around mt-9">
            <div className="shadow-sm flex flex-col relative items-center">
              <div className="peer pt-1 w-16 h-full bg-green-100 text-center flex flex-col hover:bg-green-200 rounded-md shadow-sm">
                <span className="text-gray-700 text-xs font-semibold">
                  Active
                </span>
                <div>
                  <span className="text-gray-700 text-lg font-bold">14</span>
                  <span className="text-green-700 text-md font-semibold">
                    +1
                  </span>
                </div>
              </div>

              {/* pop up massage here */}
              <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md w-52 rounded-sm absolute bottom-16 opacity-0 -z-10 peer-hover:opacity-100 peer-hover:z-10">
                <p class="font-bold">Active devices</p>
                <p class="text-sm">
                  Total number of devices that are connected to the server
                </p>
              </div>
            </div>
            <div className="shadow-sm flex flex-col relative items-center">
              <div className="peer pt-1 w-16 h-full bg-gray-100 text-center flex flex-col hover:bg-gray-200  rounded-md shadow-sm">
                <span className="text-gray-700 text-xs font-semibold">
                  Ofline
                </span>
                <span className="text-gray-700 text-lg font-bold">3</span>
              </div>

              {/* pop up massage here */}
              <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md w-52 rounded-sm absolute bottom-16 opacity-0 -z-10 peer-hover:opacity-100 peer-hover:z-10">
                <p class="font-bold">Ofline devices</p>
                <p class="text-sm">
                  Total number of devices that are not connected to the server
                </p>
              </div>
            </div>

            <div className="shadow-sm flex flex-col relative items-center">
              <div className="peer pt-1 w-16 h-full bg-yellow-100 text-center flex flex-col hover:bg-yellow-200  rounded-md shadow-sm">
                <span className="text-gray-700 text-xs font-semibold">
                  Healty
                </span>
                <span className="text-gray-700 text-lg font-bold">11</span>
              </div>

              {/* pop up massage here */}
              <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md w-52 rounded-sm absolute bottom-16 opacity-0 -z-10 peer-hover:opacity-100 peer-hover:z-10">
                <p class="font-bold">Healthy devices</p>
                <p class="text-sm">
                  Active devices that are sending accurate sensor data to the
                  server
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-evenly mt-6">
            <div className="shadow-sm flex flex-col relative items-center">
              <div className="peer pt-1 w-16 h-full bg-red-100 text-center flex flex-col hover:bg-red-200  rounded-md shadow-sm">
                <span className="text-gray-700 text-xs font-semibold">
                  Defected
                </span>
                <span className="text-gray-700 text-lg font-bold">3</span>
              </div>

              {/* pop up massage here */}
              <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md w-52 rounded-sm absolute bottom-16 opacity-0 -z-10 peer-hover:opacity-100 peer-hover:z-10">
                <p class="font-bold">Defected devices</p>
                <p class="text-sm">
                  Active devices that are not sending sensor data to the console
                </p>
              </div>
            </div>
            <div className="shadow-sm flex flex-col relative items-center">
              <div className="peer pt-1 w-16 h-full bg-blue-100 text-center flex flex-col hover:bg-blue-200  rounded-md shadow-dm">
                <span className="text-gray-700 text-xs font-semibold">
                  Total
                </span>
                <span className="text-gray-700 text-lg font-bold">17</span>
              </div>

              {/* pop up massage here */}
              <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md w-52 rounded-sm absolute bottom-16 opacity-0 -z-10 peer-hover:opacity-100 peer-hover:z-10">
                <p class="font-bold">Total devices</p>
                <p class="text-sm">All registered devices in that section</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default FactorySection;
