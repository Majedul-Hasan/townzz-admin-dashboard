'use client'
// import { OrderInterFace, PaymentTableInterFace } from '@/utils/Interfaces';
import React, { useState } from 'react';
// import payment from './../../../public/Payment.json'
import { motion } from "motion/react"

const paymentTable =[
    {
        "order_id": "ORD001",
        "user_name": "John Doe",
        "payment_amount": 150.00,
        "payment_date": "2024-11-01"
    },
    {
        "order_id": "ORD002",
        "user_name": "Jane Smith",
        "payment_amount": 200.00,
        "payment_date": "2024-11-05"
    },
    {
        "order_id": "ORD003",
        "user_name": "Alex Johnson",
        "payment_amount": 350.00,
        "payment_date": "2024-11-10"
    },
    {
        "order_id": "ORD004",
        "user_name": "Emily Davis",
        "payment_amount": 120.00,
        "payment_date": "2024-11-12"
    },
    {
        "order_id": "ORD005",
        "user_name": "Michael Brown",
        "payment_amount": 450.00,
        "payment_date": "2024-11-15"
    },
    {
        "order_id": "ORD006",
        "user_name": "Olivia Wilson",
        "payment_amount": 300.00,
        "payment_date": "2024-11-17"
    },
    {
        "order_id": "ORD007",
        "user_name": "William Taylor",
        "payment_amount": 180.00,
        "payment_date": "2024-11-20"
    },
    {
        "order_id": "ORD008",
        "user_name": "Sophia Anderson",
        "payment_amount": 250.00,
        "payment_date": "2024-11-22"
    },
    {
        "order_id": "ORD009",
        "user_name": "James Thomas",
        "payment_amount": 190.00,
        "payment_date": "2024-11-25"
    },
    {
        "order_id": "ORD010",
        "user_name": "Isabella Jackson",
        "payment_amount": 275.00,
        "payment_date": "2024-11-28"
    },
    {
        "order_id": "ORD011",
        "user_name": "Lucas White",
        "payment_amount": 400.00,
        "payment_date": "2024-12-01"
    },
    {
        "order_id": "ORD012",
        "user_name": "Charlotte Harris",
        "payment_amount": 350.00,
        "payment_date": "2024-12-03"
    },
    {
        "order_id": "ORD013",
        "user_name": "Ethan Clark",
        "payment_amount": 500.00,
        "payment_date": "2024-12-05"
    },
    {
        "order_id": "ORD014",
        "user_name": "Amelia Lewis",
        "payment_amount": 220.00,
        "payment_date": "2024-12-07"
    },
    {
        "order_id": "ORD015",
        "user_name": "Aiden Walker",
        "payment_amount": 130.00,
        "payment_date": "2024-12-10"
    },
    {
        "order_id": "ORD016",
        "user_name": "Mia Young",
        "payment_amount": 150.00,
        "payment_date": "2024-12-12"
    },
    {
        "order_id": "ORD017",
        "user_name": "Benjamin King",
        "payment_amount": 180.00,
        "payment_date": "2024-12-15"
    },
    {
        "order_id": "ORD018",
        "user_name": "Ella Scott",
        "payment_amount": 250.00,
        "payment_date": "2024-12-18"
    },
    {
        "order_id": "ORD019",
        "user_name": "Jack Green",
        "payment_amount": 300.00,
        "payment_date": "2024-12-20"
    },
    {
        "order_id": "ORD020",
        "user_name": "Harper Adams",
        "payment_amount": 150.00,
        "payment_date": "2024-12-22"
    }
]

const TransactionTable = () => {

    const itemsPerPage = 15;
    const [currentPage, setCurrentPage] = useState<number>(1);
    const today = new Date().toISOString().split("T")[0]
    // const today = "2024-12-08"

    // const users = payment && payment.filter((item)=> item.date >= today)

    


    // Calculate the total number of pages
    const totalPages = paymentTable && Math.ceil(paymentTable?.length / itemsPerPage);

    // // Get the data for the current page
    const currentPageData = paymentTable && paymentTable.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    
    

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
                        <th className="px-4 py-2 border">Order Id</th>
                        <th className="px-4 py-2 border">Amount</th>
                        <th className="px-4 py-2 border">Payment Date</th>
                        {/* <th className="px-4 py-2 border">Total Ticket</th>
                        <th className="px-4 py-2 border">Event Date</th> */}
                        {/* <th className="px-4 py-2 border">Amount</th> */}
                        {/* <th className="px-4 py-2 border">Purchase Date</th> */}
                    </tr>
                </thead>
                <tbody aria-colspan={15}>
                    {currentPageData?.map((item : any, index : number) => (
                        <motion.tr initial={{y : -100*(index+1), opacity: 0}} animate={{y:0, opacity:1, transition: {duration : 0.2*(index+1)}}}  key={index} className="border-b text-center">
                            <td className="px-4 py-2">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                            <td className="px-4 py-2">{item.user_name}</td>
                            <td className="px-4 py-2">{item.order_id}</td>
                            <td className="px-4 py-2">{item.payment_amount}</td>
                            <td className="px-4 py-2">{item.payment_date}</td>
                            {/* <td className="px-4 py-2">{item.total_tickets}</td>
                            <td className="px-4 py-2">{item.date}</td> */}
                            
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

export default TransactionTable;

