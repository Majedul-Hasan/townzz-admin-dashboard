import baseApi from "./baseApi";

const eventApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllEvents: build.query({
            query: () => ({
                url: "",
                method: "GET"
            }),
            providesTags : ["approveEvent"]
        }),
        approveEvent: build.mutation({
            query: (data: any) => ({
                url: "",
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ["approveEvent"]
        })
    })
})

export const { useApproveEventMutation, useGetAllEventsQuery } = eventApi

