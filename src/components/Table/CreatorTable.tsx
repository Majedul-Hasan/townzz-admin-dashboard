'use client'
// import { OrderInterFace, PaymentTableInterFace } from '@/utils/Interfaces';
import React, { useState } from 'react';
// import usersData from './../../../public/Users.json'
import { UserInterFace } from '@/utils/InterFaces';
import {motion} from 'framer-motion'

const creatorTable = [
    { "name": "John Doe", "email": "johndoe@example.com", "role": "resident" },
    { "name": "Jane Smith", "email": "janesmith@example.com", "role": "creator" },
    { "name": "Alex Johnson", "email": "alexjohnson@example.com", "role": "resident" },
    { "name": "Emily Davis", "email": "emilydavis@example.com", "role": "creator" },
    { "name": "Michael Brown", "email": "michaelbrown@example.com", "role": "resident" },
    { "name": "Olivia Wilson", "email": "oliviawilson@example.com", "role": "creator" },
    { "name": "William Taylor", "email": "williamtaylor@example.com", "role": "resident" },
    { "name": "Sophia Anderson", "email": "sophiaanderson@example.com", "role": "creator" },
    { "name": "James Thomas", "email": "jamesthomas@example.com", "role": "resident" },
    { "name": "Isabella Jackson", "email": "isabellajackson@example.com", "role": "creator" },
    { "name": "Lucas White", "email": "lucaswhite@example.com", "role": "resident" },
    { "name": "Charlotte Harris", "email": "charlotteharris@example.com", "role": "creator" },
    { "name": "Ethan Clark", "email": "ethanclark@example.com", "role": "resident" },
    { "name": "Amelia Lewis", "email": "amelialewis@example.com", "role": "creator" },
    { "name": "Aiden Walker", "email": "aidenwalker@example.com", "role": "resident" },
    { "name": "Mia Young", "email": "miayoung@example.com", "role": "creator" },
    { "name": "Benjamin King", "email": "benjaminking@example.com", "role": "resident" },
    { "name": "Ella Scott", "email": "ellascott@example.com", "role": "creator" },
    { "name": "Jack Green", "email": "jackgreen@example.com", "role": "resident" },
    { "name": "Harper Adams", "email": "harperadams@example.com", "role": "creator" }
]


const CreatorTable = () => {

    const itemsPerPage = 15;
    const [currentPage, setCurrentPage] = useState<number>(1);

    const users = creatorTable && creatorTable.filter((item)=> item.role == "creator")
    console.log(users);
    


    // Calculate the total number of pages
    const totalPages = users && Math.ceil(users?.length / itemsPerPage);

    // // Get the data for the current page
    const currentPageData = users && users.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    console.log(currentPageData);
    

    // // Handle page change
    const handlePageChange = (pageNumber : number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="px-4 py-2 border">Serial</th>
                        <th className="px-4 py-2 border">User Name</th>
                        <th className="px-4 py-2 border">User Email</th>
                        <th className="px-4 py-2 border">Role</th>
                        <th className="px-4 py-2 border">Action</th>
                        {/* <th className="px-4 py-2 border">Amount</th> */}
                        {/* <th className="px-4 py-2 border">Purchase Date</th> */}
                    </tr>
                </thead>
                <tbody>
                    {currentPageData?.map((item : UserInterFace, index : number) => (
                         <motion.tr initial={{y : -100*(index+1), opacity: 0}} animate={{y:0, opacity:1, transition: {duration : 0.2*(index+1)}}} key={index} className="border-b text-center">
                            <td className="px-4 py-2">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                            <td className="px-4 py-2">{item.name}</td>
                            <td className="px-4 py-2">{item.email}</td>
                            <td className="px-4 py-2">{item.role}</td>
                            <td className="px-4 py-2"><button className='px-4 py-1 rounded-lg bg-[#83008A] text-white'>Block</button></td>
                            
                            {/* <td className="px-4 py-2">{item.createdAt.split("T")[0]}</td> */}
                        </motion.tr>
                    ))}
                </tbody>
            </table>

            <div className="flex justify-center mt-4">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-300 rounded-l"
                >
                    Previous
                </button>
                <span className="px-4 py-2">
                    {/* Page {currentPage} of {totalPages} */}
                </span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-300 rounded-r"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default CreatorTable;
