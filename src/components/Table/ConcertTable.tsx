'use client'
// import { OrderInterFace, PaymentTableInterFace } from '@/utils/Interfaces';
import React, { useState } from 'react';
// import usersData from '../../../public/CreateConeart.json'
import { ConcertInterface } from '@/utils/InterFaces';
import { motion } from "motion/react"

const concertTable = [
    {
        "title": "Tech Conference 2024",
        "location": "Dhaka, Bangladesh",
        "date": "2024-11-21",
        "ticket_price": 50,
        "total_tickets": 200,
        "image": "https://example.com/images/tech-conference.jpg"
    },
    {
        "title": "Winter Carnival",
        "location": "Chittagong, Bangladesh",
        "date": "2024-12-05",
        "ticket_price": 20,
        "total_tickets": 300,
        "image": "https://example.com/images/winter-carnival.jpg"
    },
    {
        "title": "Music Festival 2024",
        "location": "Sylhet, Bangladesh",
        "date": "2024-12-10",
        "ticket_price": 30,
        "total_tickets": 150,
        "image": "https://example.com/images/music-festival.jpg"
    },
    {
        "title": "Art Exhibition",
        "location": "Dhaka, Bangladesh",
        "date": "2024-12-15",
        "ticket_price": 15,
        "total_tickets": 100,
        "image": "https://example.com/images/art-exhibition.jpg"
    },
    {
        "title": "Food and Beverage Expo",
        "location": "Rajshahi, Bangladesh",
        "date": "2024-12-20",
        "ticket_price": 25,
        "total_tickets": 500,
        "image": "https://example.com/images/food-expo.jpg"
    },
    {
        "title": "New Year's Eve Party",
        "location": "Khulna, Bangladesh",
        "date": "2024-12-31",
        "ticket_price": 40,
        "total_tickets": 1000,
        "image": "https://example.com/images/new-year-party.jpg"
    },
    {
        "title": "Coding Bootcamp 2024",
        "location": "Barisal, Bangladesh",
        "date": "2024-11-25",
        "ticket_price": 100,
        "total_tickets": 150,
        "image": "https://example.com/images/coding-bootcamp.jpg"
    },
    {
        "title": "Startup Summit",
        "location": "Rajshahi, Bangladesh",
        "date": "2024-11-27",
        "ticket_price": 60,
        "total_tickets": 200,
        "image": "https://example.com/images/startup-summit.jpg"
    },
    {
        "title": "Yoga Retreat",
        "location": "Sylhet, Bangladesh",
        "date": "2024-12-03",
        "ticket_price": 70,
        "total_tickets": 100,
        "image": "https://example.com/images/yoga-retreat.jpg"
    },
    {
        "title": "Music in the Park",
        "location": "Chittagong, Bangladesh",
        "date": "2024-12-08",
        "ticket_price": 10,
        "total_tickets": 500,
        "image": "https://example.com/images/music-park.jpg"
    },
    {
        "title": "Science Fair",
        "location": "Dhaka, Bangladesh",
        "date": "2024-12-12",
        "ticket_price": 5,
        "total_tickets": 1000,
        "image": "https://example.com/images/science-fair.jpg"
    },
    {
        "title": "Film Festival 2024",
        "location": "Khulna, Bangladesh",
        "date": "2024-12-14",
        "ticket_price": 25,
        "total_tickets": 300,
        "image": "https://example.com/images/film-festival.jpg"
    },
    {
        "title": "Startup Networking",
        "location": "Barisal, Bangladesh",
        "date": "2024-12-16",
        "ticket_price": 50,
        "total_tickets": 200,
        "image": "https://example.com/images/startup-networking.jpg"
    },
    {
        "title": "Christmas Concert",
        "location": "Sylhet, Bangladesh",
        "date": "2024-12-18",
        "ticket_price": 15,
        "total_tickets": 500,
        "image": "https://example.com/images/christmas-concert.jpg"
    },
    {
        "title": "Fashion Show 2024",
        "location": "Dhaka, Bangladesh",
        "date": "2024-12-22",
        "ticket_price": 40,
        "total_tickets": 300,
        "image": "https://example.com/images/fashion-show.jpg"
    },
    {
        "title": "Technology Expo",
        "location": "Chittagong, Bangladesh",
        "date": "2024-12-23",
        "ticket_price": 30,
        "total_tickets": 400,
        "image": "https://example.com/images/tech-expo.jpg"
    },
    {
        "title": "Gaming Tournament",
        "location": "Rajshahi, Bangladesh",
        "date": "2024-12-25",
        "ticket_price": 20,
        "total_tickets": 200,
        "image": "https://example.com/images/gaming-tournament.jpg"
    },
    {
        "title": "Adventure Sports Expo",
        "location": "Khulna, Bangladesh",
        "date": "2024-12-26",
        "ticket_price": 35,
        "total_tickets": 500,
        "image": "https://example.com/images/adventure-sports.jpg"
    },
    {
        "title": "Cooking Masterclass",
        "location": "Barisal, Bangladesh",
        "date": "2024-12-27",
        "ticket_price": 50,
        "total_tickets": 100,
        "image": "https://example.com/images/cooking-masterclass.jpg"
    },
    {
        "title": "Annual Marathon",
        "location": "Sylhet, Bangladesh",
        "date": "2024-12-28",
        "ticket_price": 15,
        "total_tickets": 200,
        "image": "https://example.com/images/marathon.jpg"
    },
    {
        "title": "Digital Marketing Seminar",
        "location": "Rajshahi, Bangladesh",
        "date": "2024-12-29",
        "ticket_price": 40,
        "total_tickets": 150,
        "image": "https://example.com/images/digital-marketing-seminar.jpg"
    },
    {
        "title": "Christmas Charity Gala",
        "location": "Dhaka, Bangladesh",
        "date": "2024-12-20",
        "ticket_price": 100,
        "total_tickets": 100,
        "image": "https://example.com/images/charity-gala.jpg"
    },
    {
        "title": "Annual Poetry Slam",
        "location": "Chittagong, Bangladesh",
        "date": "2024-12-21",
        "ticket_price": 10,
        "total_tickets": 200,
        "image": "https://example.com/images/poetry-slam.jpg"
    },
    {
        "title": "Food Truck Festival",
        "location": "Khulna, Bangladesh",
        "date": "2024-12-02",
        "ticket_price": 15,
        "total_tickets": 500,
        "image": "https://example.com/images/food-truck-festival.jpg"
    },
    {
        "title": "Pop-Up Art Show",
        "location": "Rajshahi, Bangladesh",
        "date": "2024-11-23",
        "ticket_price": 20,
        "total_tickets": 150,
        "image": "https://example.com/images/pop-up-art.jpg"
    },
    {
        "title": "Indoor Sports Championship",
        "location": "Sylhet, Bangladesh",
        "date": "2024-11-26",
        "ticket_price": 30,
        "total_tickets": 200,
        "image": "https://example.com/images/indoor-sports.jpg"
    },
    {
        "title": "Literature Festival 2024",
        "location": "Barisal, Bangladesh",
        "date": "2024-11-28",
        "ticket_price": 25,
        "total_tickets": 150,
        "image": "https://example.com/images/literature-festival.jpg"
    },
    {
        "title": "Outdoor Adventure Day",
        "location": "Chittagong, Bangladesh",
        "date": "2024-11-30",
        "ticket_price": 40,
        "total_tickets": 250,
        "image": "https://example.com/images/adventure-day.jpg"
    },
    {
        "title": "Virtual Reality Expo",
        "location": "Dhaka, Bangladesh",
        "date": "2024-12-04",
        "ticket_price": 70,
        "total_tickets": 100,
        "image": "https://example.com/images/vr-expo.jpg"
    },
    {
        "title": "Sculpture Show",
        "location": "Rajshahi, Bangladesh",
        "date": "2024-12-09",
        "ticket_price": 10,
        "total_tickets": 200,
        "image": "https://example.com/images/sculpture-show.jpg"
    },
    {
        "title": "International Poetry Festival",
        "location": "Sylhet, Bangladesh",
        "date": "2024-12-11",
        "ticket_price": 15,
        "total_tickets": 100,
        "image": "https://example.com/images/poetry-festival.jpg"
    },
    {
        "title": "Business Leaders Conference",
        "location": "Barisal, Bangladesh",
        "date": "2024-12-17",
        "ticket_price": 80,
        "total_tickets": 100,
        "image": "https://example.com/images/business-conference.jpg"
    }
]

const ConcertTable = () => {

    const itemsPerPage = 15;
    const [currentPage, setCurrentPage] = useState<number>(1);
    const today = new Date().toISOString().split("T")[0]
    // const today = "2024-12-08"

    const users = concertTable && concertTable.filter((item)=> item.date >= today)
   
    


    // Calculate the total number of pages
    const totalPages = users && Math.ceil(users?.length / itemsPerPage);

    // // Get the data for the current page
    const currentPageData = users && users.slice(
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
                        <th className="px-4 py-2 border">Image</th>
                        <th className="px-4 py-2 border">Title</th>
                        <th className="px-4 py-2 border">Location</th>
                        <th className="px-4 py-2 border">Ticket Price</th>
                        <th className="px-4 py-2 border">Total Ticket</th>
                        <th className="px-4 py-2 border">Event Date</th>
                        {/* <th className="px-4 py-2 border">Action</th> */}
                        {/* <th className="px-4 py-2 border">Amount</th> */}
                        {/* <th className="px-4 py-2 border">Purchase Date</th> */}
                    </tr>
                </thead>
                <tbody>
                    {currentPageData?.map((item : ConcertInterface, index : number) => (
                        <motion.tr initial={{y : -100*(index+1), opacity: 0}}  animate={{y:0, opacity:1, transition: {duration : 0.2*(index+1)}}}  key={index} className="border-b text-center">
                            <td className="px-4 py-2">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                            <td className="px-4 py-2">{item.image}</td>
                            <td className="px-4 py-2">{item.title}</td>
                            <td className="px-4 py-2">{item.location}</td>
                            <td className="px-4 py-2">{item.ticket_price}</td>
                            <td className="px-4 py-2">{item.total_tickets}</td>
                            <td className="px-4 py-2">{item.date}</td>
                            {/* <td className="px-4 py-2"><button className='px-4 py-1 rounded-lg bg-[#83008A] text-white'>Delete</button></td> */}
                            
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

export default ConcertTable;

