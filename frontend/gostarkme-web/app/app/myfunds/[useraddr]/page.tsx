"use client";

import React from 'react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { Button } from '@/components/ui/Button';

interface MyFundsPageProps {
  params: { useraddr: string };
}

const MyFundsPage: React.FC<MyFundsPageProps> = ({ params }) => {
  const { useraddr } = params;

  const navItems = [
    { label: 'My Profile', href: `/app/myprofile/${useraddr}` },
    { label: 'My funds', href: `/app/myfunds/${useraddr}` }
  ];

  const onNewFundHandler = () => {
    // TODO: Implement new fund action
    alert(`Creating new fund`);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        logoSrc={process.env.NEXT_PUBLIC_APP_ROOT + "icons/starklogo.png"}
        logoAlt="Go Stark Me logo"
        title="Go Stark Me"
        navItems={navItems}
        ctaButton={{
          label: "Connect wallet",
          href: "/"
        }}
      />
      <main className="flex flex-grow w-full justify-center bg-white p-8">
        <div className="bg-white p-4 md:p-6 w-full">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold mr-2">My Funds &#10024;</h1>
            </div>
            <Button label='New' onClick={onNewFundHandler} />
          </div>
          <div className="flex justify-center items-center h-64">
            <div className="text-center text-gray-500">
              No funds found for address {useraddr.slice(0, 5)}...{useraddr.slice(-4)}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MyFundsPage;
