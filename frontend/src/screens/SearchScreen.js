import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Col, Row } from 'react-bootstrap';
import CardPost from '../components/CardPost';
import Title from '../components/Title'

function SearchScreen({ match }) {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        async function getPosts() {
            const { data } = await axios.get(`http://127.0.0.1:8000/search?keyword=${match.params.q}`)
            setPosts(data)
        }
        getPosts()

    }, [])

    return (
        <Row>
            <Title title={`Search result for "${match.params.q}"`} />
            {posts.map(post => (
                <Col sm={12} md={6} className='text-start'>
                    <CardPost post={post} />
                </Col>
            ))}
        </Row>
    )
}

export default SearchScreen
