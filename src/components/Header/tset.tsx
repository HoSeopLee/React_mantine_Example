/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import {
  HamburgerIcon,
  ProfileIcon,
  SettingsIcon,
  SignoutIcon,
  DashboardIcon,
  TablesIcon,
  FormsIcon,
  TabbedContentIcon,
  CalendarIcon,
  SupportIcon,
} from './Icons';
import { Text, TransferList, TransferListData } from '@mantine/core';

const SideNavbar = () => {
  const bgColor: string = 'bg-blue-500';
  const [menuToggle, setMenuToggle] = useState(true);
  const [profileToggle, setProfileToggle] = useState(false);
  return (
    <div>
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* NavBar 상단 왼쪽 메뉴 */}
            <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
              {/* 햄버거 메뉴 */}
              <button
                className="px-4 py-2 text-gray-700 rounded-lg rounded-lgtext-2xl hover:bg-gray-200"
                onClick={() => setMenuToggle(!menuToggle)}
              >
                <HamburgerIcon class="" />
              </button>

              <div className="flex items-center text-2xl font-bold ml-3">
                <a href="/">Title</a>
              </div>
            </div>
            <div>
              <div>
                <button
                  type="button"
                  className="bg-gray-800 flex text-sm rounded-full focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="profileBtn"
                  onClick={() => {
                    setProfileToggle(!profileToggle);
                  }}
                >
                  {/* <span className="sr-only">Open user menu</span> */}
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>
              <div
                className={` ${
                  profileToggle ? '' : 'hidden'
                } origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
              >
                {/* Active: "bg-gray-100", Not Active: "" */}
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-sm text-gray-700"
                >
                  <ProfileIcon class="mr-2" />
                  Your Profile
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-sm text-gray-700"
                >
                  <SettingsIcon class="mr-2" />
                  Settings
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-sm text-gray-700"
                >
                  <SignoutIcon class="mr-2" />
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* ===================================================================
          상단 Navbar 끝
          =================================================================== */}

      {/* 사이드 바 메인 */}
      <main className="flex bg-gray-100">
        {/* SideBar */}
        <aside
          className={` ${
            menuToggle ? 'hidden md:block' : 'hidden'
          } w-64 ${bgColor}`}
        ></aside>

        {/* Mobile Header & Nav */}
        <div className="w-full flex flex-col h-screen overflow-y-hidden">
          <header
            className={`w-full ${menuToggle ? 'hidden' : 'block'} md:hidden`}
          >
            {/* Dropdown Nav */}

            <nav className="text-white text-base font-semibold bg-gray-500 ">
              <a
                href=""
                className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6"
              >
                <DashboardIcon class="mr-3" />
                Dashboard
              </a>
              <a
                href=""
                className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6"
              >
                <TablesIcon class="mr-3" />
                Tables
              </a>
              <a
                href=""
                className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 "
              >
                <FormsIcon class="mr-3" />
                Forms
              </a>
              <a
                href=""
                className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6"
              >
                <TabbedContentIcon class="mr-3" />
                Tabbed Content
              </a>
              <a
                href=""
                className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6"
              >
                <CalendarIcon class="mr-3" />
                Calendar
              </a>
              <a
                href=""
                className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6"
              >
                <SupportIcon class="mr-3" />
                Support
              </a>
            </nav>
          </header>

          {/* props.children position here */}
          {/* <slot>{props.children}</slot> */}
        </div>
      </main>
    </div>
  );
};

export default SideNavbar;
