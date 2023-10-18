import { NavLink } from 'react-router-dom';
import { Squares2X2Icon, UsersIcon } from '@heroicons/react/24/outline';
import Join from '@shared/img/join.png';
const Sidebar = () => {
  return (
    <aside className=" font-noto-sans fixed  z-20 h-full top-0 left-0 pt-16 flex md:w-42 lg:flex flex-shrink-0 flex-col lg:w-64 transition-width  duration-75">
      <div className="pt-10 pb-4 overflow-y-auto relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white ">
        <ul className="flex-1 px-3 bg-white  space-y-2 pb-2">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? 'text-base text-gray-900 font-normal rounded-lg bg-gray-200 flex items-center p-2 group'
                : 'text-base text-gray-900 font-normal rounded-lg  hover:bg-gray-100 flex items-center p-2 group'
            }
          >
            <Squares2X2Icon className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75" />
            <span className="ml-3">Dashboard</span>
          </NavLink>

          <NavLink
            to="/guests"
            className={({ isActive }) =>
              isActive
                ? 'text-base text-gray-900 font-normal rounded-lg bg-gray-200 flex items-center p-2 group'
                : 'text-base text-gray-900 font-normal rounded-lg  hover:bg-gray-100 flex items-center p-2 group'
            }
          >
            <UsersIcon className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75" />
            <span className="ml-3 flex-1 whitespace-nowrap">Guests</span>
          </NavLink>
          <NavLink
            to="/join"
            className={({ isActive }) =>
              isActive
                ? 'text-base text-gray-900 font-normal rounded-lg bg-gray-200 flex items-center p-2 group'
                : 'text-base text-gray-900 font-normal rounded-lg  hover:bg-gray-100 flex items-center p-2 group'
            }
          >
            <img src={Join} alt="" />
            <span className="ml-3 flex-1 whitespace-nowrap">Join Session</span>
          </NavLink>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
