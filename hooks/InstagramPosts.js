import React, { useEffect, useState } from 'react';
import axios from 'axios';

// This will be used in the future for looping through the company's instagram posts and displaying
// any posts that include a key phrase like 'upcoming events' will be displayed on the side dynamically
// sort of like a simple headless CMS

const token = '' // Placeholder for future use, will eventually be an .env variable
const keyPhrase = ''

const InstagramPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchInstagramPosts = async () => {
            try {
                const response = await axios.get(
                    `https://graph.instagram.com/me/media?fields=caption,permalink,media_url&access_token=${token}`
                );
                console.log(response.data.data)
                const filteredPosts = response.data.data.filter(// filtering posts based on key phrase
                    (post) => post.caption.toLowerCase().includes(keyPhrase.toLowerCase()) 
                );
                setPosts(filteredPosts);
            } catch (error) {
                console.log(error);
            }
        };

        fetchInstagramPosts();
    }, []);

    return posts
};

export default InstagramPosts;
