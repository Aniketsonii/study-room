import React from 'react'

function Header() {
  return (
    <>
      <nav className="relative flex w-full flex-wrap items-center justify-between bg-orange-600 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-600 lg:py-3">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div>
              <a href='/home'><span className="font-bold text-2xl tracking-wider text-white dark:text-black">STUDY ROOM</span></a>
          </div>
          <div>
              <span className="font-bold text-2xl tracking-wider text-white dark:text-black">MAYA</span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header