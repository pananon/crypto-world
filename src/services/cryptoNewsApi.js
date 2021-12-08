import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders={
        'x-bingapis-sdk': 'true',
        'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
        'x-rapidapi-key': 'c212c74af2msh4e0a438e49400ddp1a4aaejsne2b4df32c7e1'
}

const baseUrl= 'https://bing-news-search1.p.rapidapi.com';

const createRequest=(url) =>({
    url, headers:cryptoNewsHeaders
})

export const cryptoNewsApi = createApi({
    
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=> ({
        getCryptoNews:builder.query({
            
            query:({newsCategory,count})=>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
})

export const { useGetCryptoNewsQuery} = cryptoNewsApi;