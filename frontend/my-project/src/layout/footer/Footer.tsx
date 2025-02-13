import DownloadAppImage from "../../assets/appstore-ggplay.png";


const Footer = () => {
  return (
    <footer className="col-span-5 bg-gray-900 text-white py-10 px-6">
      <div className="container mx-auto">
        {/* Grid main */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          {/* Need Help */}
          <div>
            <h3 className="font-semibold mb-3">Need Help</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Contact Us</li>
              <li>Track Order</li>
              <li>Returns & Refunds</li>
              <li>FAQs</li>
              <li>Career</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>euphoria Blog</li>
              <li>euphoristan</li>
              <li>Collaboration</li>
              <li>Media</li>
            </ul>
          </div>

          {/* More Info */}
          <div>
            <h3 className="font-semibold mb-3">More Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Term and Conditions</li>
              <li>Privacy Policy</li>
              <li>Shipping Policy</li>
              <li>Sitemap</li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-semibold mb-3">Location</h3>
            <p className="text-gray-400">support@euphoria.in</p>
            <p className="text-gray-400 mt-2">
              Ekiingpura Chouraha, Ahmedabad Main Road
            </p>
            <p className="text-gray-400">NH-8, Udaipur, India - 313002</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-6 justify-end">
          <i className="fa-brands fa-facebook icon-social-network"></i>
          <i className="fa-brands fa-instagram icon-social-network"></i>
          <i className="fa-brands fa-twitter icon-social-network"></i>
          <i className="fa-brands fa-linkedin icon-social-network"></i>
        </div>

        {/* Download The App */}
        <div className="mt-6">
          <h3 className="font-semibold">Download The App</h3>
          <div className="flex space-x-4 mt-2">
            <img src={DownloadAppImage} alt="" className="w-[320px] mt-2" />
          </div>
        </div>

        {/* Popular Categories */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
          Popular Categories
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-xs mt-4">
          © 2025 Euphoria Folks Pvt Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
