import React, {useState, useEffect} from 'react'
import postServices from '../appwrite/postService'
import { Container, PostForm, Post } from "../components";


function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    postServices.getPosts([])
    .then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/2'>
                            <Post post={post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts;
