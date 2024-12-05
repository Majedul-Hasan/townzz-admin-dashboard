'use client'
import React from 'react';
import UserTable from '@/components/Table/UserTable';

const Users = () => {
    return (
        <div className='p-10'>
            <h1 className='text-3xl font-semibold text-center mb-8'>Users Details</h1>
             <UserTable></UserTable>
        </div>
    );
};

export default Users;