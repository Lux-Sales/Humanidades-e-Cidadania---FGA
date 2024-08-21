import React from 'react';
import { useLocation } from 'react-router-dom';
import logo_FGA from '../img/logo_FGA_sem_fundo.png'; 
import '../styles/Header.css'; 

const navigation = [
  { name: 'Início', href: '/', },
  { name: 'Sobre', href: '/about', },
  { name: 'Turmas', href: '/classes', },
  { name: 'Contato', href: '/contact', },
];

export default function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <nav>
        <ul className="navigation">
          {navigation.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href} 
                className={`nav-link ${location.pathname === item.href ? 'active' : ''}`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="logo">
        <img src={logo_FGA} alt="Logo FGA" />
      </div>
    </header>
  );
}

// código pego do tailwind: porém não curti, pois acredito que seja ilegível, e inescalavel para posteriores desenvolvedores entenderem
// <Disclosure as="nav" className="bg-gray-800">
// <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//   <div className="relative flex h-16 items-center justify-between">
//     <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//       {/* Mobile menu button*/}
//       <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//         <span className="absolute -inset-0.5" />
//         <span className="sr-only">Open main menu</span>
//         <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
//         <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
//       </DisclosureButton>
//     </div>
//     <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//       <div className="flex flex-shrink-0 items-center">
//         <img
//           alt="Your Company"
//           src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
//           className="h-8 w-auto"
//         />
//       </div>
//       <div className="hidden sm:ml-6 sm:block">
//         <div className="flex space-x-4">
//           {navigation.map((item) => (
//             <a
//               key={item.name}
//               href={item.href}
//               aria-current={item.current ? 'page' : undefined}
//               className={classNames(
//                 item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                 'rounded-md px-3 py-2 text-sm font-medium',
//               )}
//             >
//               {item.name}
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//     <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

//       {/* Profile dropdown */}
//       <Menu as="div" className="relative ml-3">
//         <div>
//           <MenuButton>
//             <img
//               alt=""
//               src={logo_FGA}
//               className="h-8 w-8 rounded-full"
//             />
//           </MenuButton>
//         </div>
//       </Menu>
//     </div>
//   </div>
// </div>

// <DisclosurePanel className="sm:hidden">
//   <div className="space-y-1 px-2 pb-3 pt-2">
//     {navigation.map((item) => (
//       <DisclosureButton
//         key={item.name}
//         as="a"
//         href={item.href}
//         aria-current={item.current ? 'page' : undefined}
//         className={classNames(
//           item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//           'block rounded-md px-3 py-2 text-base font-medium',
//         )}
//       >
//         {item.name}
//       </DisclosureButton>
//     ))}
//   </div>
// </DisclosurePanel>
// </Disclosure>

