import { getServerSession } from 'next-auth';
import React from 'react';
import { options } from '../api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';

const page = async () => {

    const session = await getServerSession(options)

    if(!session) {
        redirect('/api/auth/signin?callbackUrl=/server')
    }

    return (
        <div>
            
        </div>
    );
};

export default page;