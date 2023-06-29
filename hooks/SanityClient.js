
// import {createClient} from '@sanity/client'

// export const useSanity = (query) => {
//     const client = createClient({
//         projectId: "4w7nc58k",
//         dataset: "production",
//         apiVersion: '2023-05-03',
//         useCdn: false
//     });

//     client.fetch(query)
//     .then((data) => {
//         return data
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });
// }

import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: "4w7nc58k",
  dataset: "production",
  apiVersion: '2023-05-03',
  useCdn: false
});

export const useSanity = (query) => {

  return client.fetch(query)
    .catch((error) => {
      console.error('Error:', error);
    });
};
