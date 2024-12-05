'use client'
import CreatorTable from '@/components/Table/CreatorTable';
import React from 'react';

const Creator = () => {
    return (
        <div className='p-10'>
        <h1 className='text-3xl font-semibold text-center mb-8'>Event Creator Details</h1>
         <CreatorTable></CreatorTable>
    </div>
    );
};

export default Creator;