import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
const client = createClient({
    projectId:'ki8ogta8',
    dataset:'production',
    useCdn: true,
    apiVersion: '2023-12-21',
})

const builder = imageUrlBuilder(client);

export const urlFor = source => builder.image(source);

export default client;

//sanity cors add http://localhost:3333
