import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white mt-16">
      <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-20 py-16 md:py-20">

        {/* Top Content */}
        <div className="text-center">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
            KeenKeeper
          </h2>

          <p className="text-[#D1D5DB] mt-6 max-w-4xl mx-auto text-sm md:text-xl leading-relaxed">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <h3 className="mt-10 text-2xl md:text-3xl font-semibold">
            Social Links
          </h3>

          {/* Social Icons */}
          <div className="flex justify-center gap-5 mt-6">
            <a
              href="#"
              className="w-14 h-14 rounded-full bg-white text-[#111827] flex items-center justify-center hover:scale-110 transition"
            >
              <FaInstagram size={22} />
            </a>

            <a
              href="#"
              className="w-14 h-14 rounded-full bg-white text-[#111827] flex items-center justify-center hover:scale-110 transition"
            >
              <FaFacebookF size={20} />
            </a>

            <a
              href="#"
              className="w-14 h-14 rounded-full bg-white text-[#111827] flex items-center justify-center hover:scale-110 transition"
            >
              <FaXTwitter size={20} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#2F5A4B] mt-14 pt-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center text-[#A7B6AF] text-sm md:text-xl">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>

            <a href="#" className="hover:text-white transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;