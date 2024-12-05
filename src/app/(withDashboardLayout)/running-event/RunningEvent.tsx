'use client'
import ConcertTable from '@/components/Table/ConcertTable';
import React from 'react';

const RunningEvent = () => {
    return (
        <div className='p-10'>
        <h1 className='text-3xl font-semibold text-center mb-8'>Users Details</h1>
        <ConcertTable></ConcertTable>
    </div>
    );
};

export default RunningEvent;