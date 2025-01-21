import React from "react";
import Navbar from "./Navbar";

const header = () => {
  return (
    <>
    <Navbar/>
      {/* Header Section with full width */}
      <header className="bg-orange-200 text-orange-900 py-[80px] shadow-lg w-full">
        <div className="container mx-auto text-center px-4">
          {/* Headline */}
          <h1 className="text-4xl font-extrabold mb-4">
            Connecting You to Trusted Local Services, Anytime, Anywhere!
          </h1>

          {/* Subheadline */}
          <p className="text-lg mb-8">
            Find and connect with the best local businesses in your area.
            Support local, thrive together.
          </p>

          

          {/* Search Bar */}
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Search for services..."
              className="w-full max-w-md px-4 py-2 border border-orange-400 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="bg-orange-500 text-white px-6 py-2 rounded-r-lg hover:bg-orange-600 transition duration-300">
              Search
            </button>
          </div>
        </div>
      </header>

      {/* Grid of Services with same background color extending to full width */}
      <div className="w-full bg-orange-200 py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {/* Service 1: Hotels */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold text-orange-700 mb-4">Hotels</h3>
            <img
              src="https://png.pngtree.com/png-vector/20191027/ourmid/pngtree-hotel-building-vector-illustration-with-simple-design-hotel-icon-png-image_1850754.jpg"
              alt="Hotel"
              className="w-24 h-24 mx-auto mb-4" // Adjust size of the image
            />
            <p className="text-gray-700">Find the best hotels in your area.</p>
          </div>

          {/* Service 2: Hospitals */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold text-orange-700 mb-4">Hospitals</h3>
            <img
              src="https://i.pinimg.com/736x/3e/66/6e/3e666e50854f4069c37150d7e8c9bdc2.jpg"
              alt="Hospital"
              className="w-24 h-24 mx-auto mb-4" // Adjust size of the image
            />
            <p className="text-gray-700">Locate trusted hospitals near you.</p>
          </div>

          {/* Service 3: PG/Hostels */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-orange-700 mb-4">PG/Hostels</h3>
            <img
              src="https://cdn4.vectorstock.com/i/1000x1000/74/18/modern-exterior-hostel-for-tourists-vector-37597418.jpg"
              alt="PG/Hostels"
              className="w-24 h-24 mx-auto mb-4" // Adjust size of the image
            />
            <p className="text-gray-700">Find PGs and hostels in your locality.</p>
          </div>

          {/* Service 4: GYM */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-orange-700 mb-4">GYM</h3>
            <img
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fitness-logo%2C-gym-logo%2C-fitness-center-logo-design-template-ee502c447776d7537ac35f02d0efa0ac_screen.jpg?ts=1669138823"
              alt="GYM"
              className="w-24 h-24 mx-auto mb-4" // Adjust size of the image
            />
            <p className="text-gray-700">Discover gyms for your fitness journey.</p>
          </div>

          {/* Service 5: Grocery Shops */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-orange-700 mb-4">Grocery Shops</h3>
            <img
              src="https://c8.alamy.com/comp/2KBX9W6/isolated-flat-design-groceries-store-building-vector-illustration-2KBX9W6.jpg"
              alt="Grocery Shop"
              className="w-24 h-24 mx-auto mb-4" // Adjust size of the image
            />
            <p className="text-gray-700">Shop for groceries in your neighborhood.</p>
          </div>

          {/* Service 6: Education */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-orange-700 mb-4">Education</h3>
            <img
              src="https://images.freeimages.com/clg/istock/previews/7884/78841063-education-learning-studying-concept-flat-design.jpg"
              alt="Education"
              className="w-24 h-24 mx-auto mb-4" // Adjust size of the image
            />
            <p className="text-gray-700">Find education centers and learning resources.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default header;

