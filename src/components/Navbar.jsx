// import { NavLink } from "react-router-dom";
// import { FiHome } from "react-icons/fi";
// import { LuClock3 } from "react-icons/lu";
// import { HiOutlineChartBar } from "react-icons/hi";

// const Navbar = () => {
//   const navStyle = ({ isActive }) =>
//     isActive
//       ? "bg-[#244D3F] text-white px-5 py-3 rounded-md flex items-center gap-2 text-sm font-medium transition"
//       : "text-[#64748B] px-3 py-3 rounded-md flex items-center gap-2 text-sm font-medium hover:bg-gray-100 transition";

//   return (
//     <div className="bg-white border-b border-gray-200">
//       <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-14 h-[78px] flex justify-between items-center">
        
//         {/* Logo */}
//         <NavLink
//             to="/"
//             className="text-[22px] md:text-[24px] tracking-tight leading-none"
//         >
//             <span className="text-[#1F2937] font-semibold">Keen</span>
//             <span className="text-[#244D3F] font-medium">Keeper</span>
//         </NavLink>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-2">
//           <NavLink to="/" className={navStyle}>
//             <FiHome size={20} />
//             Home
//           </NavLink>

//           <NavLink to="/timeline" className={navStyle}>
//             <LuClock3 size={18} />
//             Timeline
//           </NavLink>

//           <NavLink to="/stats" className={navStyle}>
//             <HiOutlineChartBar size={18} />
//             Stats
//           </NavLink>
//         </div>

//         {/* Mobile Menu */}
//         {/* <div className="dropdown dropdown-end md:hidden">
//           <label tabIndex={0} className="btn btn-sm btn-ghost">
//             ☰
//           </label>

//           <ul
//             tabIndex={0}
//             className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52 mt-3"
//           >
//             <li>
//               <NavLink to="/">Home</NavLink>
//             </li>
//             <li>
//               <NavLink to="/timeline">Timeline</NavLink>
//             </li>
//             <li>
//               <NavLink to="/stats">Stats</NavLink>
//             </li>
//           </ul>
//         </div> */}
//         <div className="dropdown dropdown-end md:hidden">
//             <label tabIndex={0} className="btn btn-sm btn-ghost text-xl">
//                 ☰
//             </label>

//             <ul
//                 tabIndex={0}
//                 className="dropdown-content z-[1] mt-3 w-56 bg-white rounded-xl shadow-lg p-3 space-y-2"
//             >
//                 <li>
//                     <NavLink to="/" className={navStyle}>
//                         <FiHome size={18} />
//                         Home
//                     </NavLink>
//                 </li>

//                 <li>
//                     <NavLink to="/timeline" className={navStyle}>
//                         <LuClock3 size={18} />
//                         Timeline
//                     </NavLink>
//                 </li>

//                 <li>
//                     <NavLink to="/stats" className={navStyle}>
//                         <HiOutlineChartBar size={18} />
//                         Stats
//                     </NavLink>
//                 </li>
//             </ul>
//         </div>

        
//       </div>
//     </div>
//   );
// };

// export default Navbar;




import { NavLink } from "react-router-dom";
import { FiHome, FiMenu } from "react-icons/fi";
import { LuClock3 } from "react-icons/lu";
import { HiOutlineChartBar } from "react-icons/hi";

const Navbar = () => {
  const navStyle = ({ isActive }) =>
    isActive
      ? "bg-[#244D3F] text-white px-5 py-3 rounded-md flex items-center gap-2 text-sm font-medium transition"
      : "text-[#64748B] px-3 py-3 rounded-md flex items-center gap-2 text-sm font-medium hover:bg-gray-100 transition";

  const mobileStyle = ({ isActive }) =>
    isActive
      ? "bg-[#244D3F] text-white rounded-md flex items-center gap-2 px-3 py-2"
      : "text-[#1F2937] hover:bg-gray-100 rounded-md flex items-center gap-2 px-3 py-2";

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-14 h-[78px] flex justify-between items-center">
        
        {/* Logo */}
        <NavLink
          to="/"
          className="text-[22px] md:text-[24px] tracking-tight leading-none"
        >
          <span className="text-[#1F2937] font-semibold">Keen</span>
          <span className="text-[#244D3F] font-medium">Keeper</span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={navStyle}>
            <FiHome size={20} />
            Home
          </NavLink>

          <NavLink to="/timeline" className={navStyle}>
            <LuClock3 size={18} />
            Timeline
          </NavLink>

          <NavLink to="/stats" className={navStyle}>
            <HiOutlineChartBar size={18} />
            Stats
          </NavLink>
        </div>

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end md:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-sm">
            <FiMenu size={22} />
          </label>

          <ul
            tabIndex={0}
            className="dropdown-content z-[99] menu p-2 shadow bg-white rounded-box w-56 mt-4 border border-gray-100"
          >
            <li>
              <NavLink to="/" className={mobileStyle}>
                <FiHome size={18} />
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/timeline" className={mobileStyle}>
                <LuClock3 size={17} />
                Timeline
              </NavLink>
            </li>

            <li>
              <NavLink to="/stats" className={mobileStyle}>
                <HiOutlineChartBar size={17} />
                Stats
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;