import React from 'react';
import { UserButton } from '@clerk/clerk-react';

const Dashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
      <UserButton />
    </div>
  );
};

export default Dashboard
