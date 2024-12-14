
export interface UserInterFace {
    name: string
    email: string
    role: string
    user_status: string
    id: string
}

export interface ConcertInterface {
    title: string
    id : string
    locationName: string
    startDate: string
    price: number
    totalTicket: number
    photos: string[]
}