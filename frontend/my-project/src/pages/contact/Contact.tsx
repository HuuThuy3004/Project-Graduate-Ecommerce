import { useState } from "react";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import Header2 from "../../layout/header/Header2";

const Contact = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Jhanvi Shah",
      phone: "8980252445",
      address:
        "1/4 Pragatinagar Flats, opp. jain derasar, near Jain derasar, Vijaynagar road",
      type: "Home",
      defaultType: "Default billing address",
    },
    {
      id: 2,
      name: "Jhanvi Shah",
      phone: "8980252445",
      address:
        "1/4 Pragatinagar Flats, opp. jain derasar, near Jain derasar, Vijaynagar road",
      type: "Home",
      defaultType: "Default shipping address",
    },
    {
      id: 3,
      name: "Jhanvi Shah",
      phone: "8980252445",
      address:
        "1/4 Pragatinagar Flats, opp. jain derasar, near Jain derasar, Vijaynagar road",
      type: "Office",
      defaultType: "Set as default",
    },
    {
      id: 4,
      name: "Jhanvi Shah",
      phone: "8980252445",
      address:
        "1/4 Pragatinagar Flats, opp. jain derasar, near Jain derasar, Vijaynagar road",
      type: "Home2",
      defaultType: "Set as default",
    },
  ]);

  return (
    <>
      {/* <Header /> */}
      <Header2 />
      <div className="max-w-5xl mx-auto p-6 col-span-5">
        {/* Sidebar & Main Content */}
        <div className="flex gap-10">
          {/* Sidebar */}
          <div className="w-1/4 border-r pr-6">
            <h2 className="text-xl font-semibold mb-4">Hello Jhanvi</h2>
            <p className="text-gray-500 mb-6">Welcome to your Account</p>
            <ul className="space-y-4">
              <li className="text-gray-700">📦 My orders</li>
              <li className="text-gray-700">❤️ Wishlist</li>
              <li className="text-black font-semibold">👤 My info</li>
              <li className="text-gray-700">🚪 Sign out</li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">My Info</h2>
            <div className="border-b pb-4">
              <div className="mb-2 flex justify-between">
                <span>Your Name</span>
                <span className="font-medium">Jhanvi Shah</span>
                <button className="text-indigo-600">Change</button>
              </div>
              <div className="mb-2 flex justify-between">
                <span>Email Address</span>
                <span className="font-medium">Jhanvi@gmail.com</span>
                <button className="text-indigo-600">Change</button>
              </div>
              <div className="mb-2 flex justify-between">
                <span>Phone Number</span>
                <span className="font-medium">8980252445</span>
                <button className="text-indigo-600">Change</button>
              </div>
              <div className="mb-2 flex justify-between">
                <span>Password</span>
                <span className="font-medium">********</span>
                <button className="text-indigo-600">Change</button>
              </div>
            </div>

            {/* Address Section */}
            <h2 className="text-xl font-semibold mt-6 mb-4">Address</h2>
            <button className="text-indigo-600 mb-4">Add New</button>
            <div className="grid grid-cols-2 gap-4">
              {addresses.map((addr) => (
                <div key={addr.id} className="border p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold">{addr.name}</h3>
                  <p className="text-gray-500">{addr.phone}</p>
                  <p className="text-gray-700 text-sm mt-2">{addr.address}</p>
                  <div className="flex gap-2 mt-2">
                    <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded">
                      {addr.type}
                    </span>
                    <button className="text-indigo-600 text-xs">
                      {addr.defaultType}
                    </button>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button className="text-red-500 text-xs">Remove</button>
                    <button className="text-indigo-600 text-xs">Edit</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
