import React, { useState, useEffect } from 'react'
import { Row, Container, Button } from 'react-bootstrap'
import Title from '../components/Title';
import axios from 'axios'
import { Link } from 'react-router-dom';

function DeleteScreen({ match }) {


    useEffect(() => {
        async function deletePost() {
            const res = await axios.delete(`http://127.0.0.1:8000/delete-post/${match.params.id}`)
        }
        deletePost()

    }, [])
    return (
        <Row>
            <Title title='Post successfully deleted' />
            <Link to='/posts' >
                <Button variant='outline-primary'>Back to Blog</Button>
            </Link>
        </Row>
    )
}

export default DeleteScreen
