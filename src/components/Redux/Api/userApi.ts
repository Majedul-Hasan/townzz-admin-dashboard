import baseApi from "./baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        loginUser: build.mutation({
            query: (data: any) => {
                return {
                    url: "/auth",
                    method: "POST",
                    body: data
                }
            }
        })
    }),
})


export const { useLoginUserMutation} = userApi