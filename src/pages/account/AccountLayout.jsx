import React from 'react';
import { Outlet } from 'react-router-dom';
import Logo from '../../components/logo';
import Search from '../../components/searchString';
import NavProfile from '../../components/navProfile';
import NavBar from '../../components/navBar';

const AccountLayout = () => {
  return (
    <div className='relative'>
      <div className='absolute left-4 top-12'>
        <Logo />
      </div>
      <div className='flex h-[96px] w-full items-center justify-between'>
        <Search />
        <NavProfile />
      </div>
      <div className='flex'>
        <NavBar />
        <div className='h-[1022px] w-full bg-background'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AccountLayout;