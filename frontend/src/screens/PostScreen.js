import React, { useState, useEffect } from 'react'
import { Row, Container } from 'react-bootstrap'
import Title from '../components/Title';
import axios from 'axios'

function PostScreen({ match }) {
    const [post, setPost] = useState([])
    useEffect(() => {
        async function getPost() {
            const { data } = await axios.get(`http://127.0.0.1:8000/posts/${match.params.id}`)
            setPost(data)
        }
        getPost()

    }, [])


    return (
        <Row>
            <Title title={`${post.title} ?`} />
            <Container>
                <p>
                    {post.body}
                </p>
            </Container>
        </Row>
    )
}

export default PostScreen
