import React from 'react';

const UpdateSubscription = () => {
    return (
        <section className='px-5 pb-5 space-y-5'>
          
                <div className='flex gap-4'>
                    <div className='w-full'>
                        <label htmlFor="" className='text-lg font-semibold'>Title</label> <br />
                        <input type="text" className='w-full py-1 px-2 rounded-lg' />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="" className='text-lg font-semibold
                    0'>Price</label> <br />
                        <input type="text" className='w-full py-1 px-2 rounded-lg' />
                    </div>
                </div>
                <div>
                    <label htmlFor="">Description (Please give . every line end)</label>
                    <textarea name="" className='w-full h-28 py-1 px-2 rounded-lg' id=""></textarea>
                </div>
                <div className='mx-auto w-fit'>
                    <button className='bg-white text-primary border-primary px-4 py-1 rounded-xl '>Update</button>
                </div>

         
        </section>
    );
};

export default UpdateSubscription;