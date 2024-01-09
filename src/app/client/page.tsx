import React from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';


const ClientPage = () => {

    const {data : session} = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/api/auth/signin?callback=/client")
        }
    })

    return (
        <div>
            
        </div>
    );
};

export default ClientPage;