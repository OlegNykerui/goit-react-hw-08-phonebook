import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://638f8b774ddca317d7fc4aba.mockapi.io',
  }),
  tagTypes: ['contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contacts/',
      providesTags: ['contacts'],
    }),

    deleteContacts: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['contacts'],
    }),

    postContacts: builder.mutation({
      query: contact => ({
        url: '/contacts/',
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['contacts'],
    }),
  }),
});

const {
  useGetContactsQuery,
  useDeleteContactsMutation,
  usePostContactsMutation,
} = contactsApi;

export {
  useGetContactsQuery,
  useDeleteContactsMutation,
  usePostContactsMutation,
};
