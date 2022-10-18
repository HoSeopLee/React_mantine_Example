/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import { HamburgerIcon } from './Icons';
import { HeaderStyles } from './header.style';
import items from './sidebar.json';
import SidebarItem from './SidebarItem';
import SidebarItemMobile from './SidebarItemMobile';
import { Link } from 'react-router-dom';

const MYPROFILE = [
  {
    index: 1,
    title: 'Profile',
    link: '/',
  },
  {
    index: 2,
    title: 'Settings',
    link: '/',
  },
  {
    index: 3,
    title: 'Sign out',
    link: '/',
  },
];
console.log(items);
const SideNavbar = () => {
  const { classes, cx } = HeaderStyles();
  const [menuToggle, setMenuToggle] = useState(false);
  const [profileToggle, setProfileToggle] = useState(false);
  return (
    <div>
      <div className={classes.header}>
        <a className={classes.headerTitle} href="/">
          Title
        </a>
        <div
          onClick={() => {
            setProfileToggle(!profileToggle);
          }}
          className={classes.headerProfile}
        >
          {/* <span className="sr-only">Open user menu</span> */}
          <img
            style={{ width: 40, height: 40, borderRadius: 50 }}
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div className={classes.etcButton}>
          <button
            // className={classes.etcButton}
            onClick={() => {
              setMenuToggle(!menuToggle);
            }}
          >
            <HamburgerIcon class="" />
          </button>
        </div>
        {profileToggle && (
          <div
            className={cx(classes.profileModal, {
              [classes.activeProfileButton]: !profileToggle,
            })}
          >
            {MYPROFILE.map((item, index) => (
              <Link
                // className="flex items-center px-4 py-2 text-sm text-gray-700"
                className={classes.profileModalItem}
                key={index}
                to={`#`}
              >
                {item.title}
              </Link>
            ))}
            {/* Active: "bg-gray-100", Not Active: "" */}
          </div>
        )}
      </div>
      {/* 모바일 메뉴 나타내기 */}

      {menuToggle && (
        <div className={classes.mobileSidebar}>
          {items.map((item, index) => (
            <SidebarItemMobile key={index} item={item} />
          ))}
        </div>
      )}
      <div className={classes.sidebar}>
        {items.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SideNavbar;
