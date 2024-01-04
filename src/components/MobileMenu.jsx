import { useState } from 'react';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { websiteNavbar } from "@/lib/nav";
// import { Button, Link } from '@nextui-org/react';
import Link from "next/link";
const MobileMenu = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
    <nav className="flex z-50 items-center justify-between py-4 lg:px-8" aria-label="Global">
    
    <div className="flex lg:hidden">
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        onClick={() => setMobileMenuOpen(true)}
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>

  </nav>
    <Dialog as="div" className="lg:hidden z-50" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10" style={{width: "100%"}}>
      <div className="flex items-center justify-between">
        <a href="#" className="-m-1.5 p-1.5">
        <img src="/logo.png" width={140} alt="" />
        </a>
        <button
          type="button"
          className="-m-2.5 rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="sr-only">Close menu</span>
          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 py-6">
          <ul>
              {websiteNavbar.map((item, index) => (
                <>
                  <li className='my-2' key={`${item.name}-${index}`}>
                    <Link
                    onClick={() => setMobileMenuOpen(false)}
                      className="rounded-lg"
                      as={Link}
                      href={item.link}
                      variant="light"
                    >
                      {item.name}
                    </Link>
                  </li>

                </>
              ))}
              </ul>
          </div>
          
        </div>
      </div>
    </Dialog.Panel>
  </Dialog>
  </>
  );
};

export default MobileMenu;
