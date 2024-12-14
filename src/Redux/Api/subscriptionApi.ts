import baseApi from "./baseApi";

const subscription = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createSubscription: build.mutation({
            query: (data: any) => {
                return {
                    url: "",
                    method: "POST",
                    body: data
                }
            }
        }),
        deleteSubscription: build.mutation({
            query: () => {
                return {
                    url: "",
                    method: "DELETE"
                }
            }
        }),
        updateSubscription: build.mutation({
            query: (data: any) => {
                return {
                    url: "",
                    method: "PATCH",
                    body: data
                }
            }
        }),
        getAllSubscription: build.query({
            query: () => ({
                url: "/subscription-plan/all",
                method: "GET"
            })
        })
    })
})


export const  {useCreateSubscriptionMutation, useDeleteSubscriptionMutation, useGetAllSubscriptionQuery, useUpdateSubscriptionMutation} = subscription