import { getServerSession } from 'next-auth';
import React from 'react';
import { options } from './api/auth/[...nextauth]/options';
import UserSection from './components/UserSection';

const HomePage = async () => {
  const session = await getServerSession(options)
  return (
    <>
      {
        session ? <UserSection  user={session?.user} pagetype={"Home"} /> : <h1 className="text-5xl">You Shall Not Pass!</h1>
      }
    </>
  );
};

export default HomePage;