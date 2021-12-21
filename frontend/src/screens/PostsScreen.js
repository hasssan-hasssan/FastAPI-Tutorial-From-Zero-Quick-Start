import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import CardPost from '../components/CardPost'
import axios from 'axios'
import Title from '../components/Title'

function PostsScreen() {

    const [posts, setPosts] = useState([])

    useEffect(() => {


        async function getPosts() {
            const { data } = await axios.get('http://127.0.0.1:8000/posts')
            setPosts(data)
        }

        getPosts()
    }, [])

    return (
        <Row className='text-center'>
            <Title title="Blog" />

            {posts.map(post => (
                <Col sm={12} md={6} className='text-start'>
                    <CardPost post={post} />
                </Col>
            ))}

        </Row>
    )
}

export default PostsScreen