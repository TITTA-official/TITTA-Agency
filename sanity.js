import {
    createCurrentUserHook,
    createClient,
} from 'next-sanity';

import createImageUrlBuilder from '@sanity/image-url'

export const config = {
    dataset: process.env.NEXT_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "hfj3n0kh",
    apiVersion: "2021-03-25",
    useCdn: process.env.NODE_ENV === "production",
}

//set up the client for the fetching data in the getProps page functions
export const sanityClient = createClient(config);

//set up a helper function for generating image urls with only the asset reference data in your documents
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

//helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config)