import imageUrlBuilder from '@sanity/image-url';
// import { client } from './SanityClient';
// import { useNextSanityImage } from 'next-sanity-image';

// const builder = imageUrlBuilder(client); // Replace 'client' with your Sanity client instance

// export function urlFor(source) {
//     return builder.image(source);
//   }

// export function SanityImage(image) {
//     const imageUrl = urlFor(image).url();
//     const imageProps = useNextSanityImage(client).image(imageUrl);
//     return imageProps;
//   }


// import imageUrlBuilder from '@sanity/image-url';
// import { client } from './SanityClient';
// import { useNextSanityImage } from 'next-sanity-image';


// const builder = imageUrlBuilder(client);

// export function urlFor(source) {
//   return builder.image(source);
// }

// export function SanityImage(image) {
//   const imageUrl = urlFor(image).url();
//   const imageProps = useNextSanityImage(client, { image: imageUrl }); // Correct usage of useNextSanityImage
//   return imageProps;
// }

const builder = imageUrlBuilder({
    projectId: "4w7nc58k",
    dataset: "production",
});

export function urlFor(source) {
    return builder.image(source)
}