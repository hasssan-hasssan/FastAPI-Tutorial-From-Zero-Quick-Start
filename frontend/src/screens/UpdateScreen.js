import React, { useState, useEffect } from 'react'
import { Row, Form, Button } from 'react-bootstrap'
import axios from 'axios'
import Title from '../components/Title'
import { Link } from 'react-router-dom'


function UpdateScreen({ match }) {

    const [post, setPost] = useState([])
    useEffect(() => {
        async function getPost() {
            const { data } = await axios.get(`http://127.0.0.1:8000/posts/${match.params.id}`)
            setPost(data)
        }
        getPost()

    }, [])


    const [newtitle, setNewTitle] = useState()
    const [newbody, setNewBody] = useState()
    const [newcategory, setNewCategory] = useState()



    async function putPost(title, body, category) {
        const res = await axios.put(`http://127.0.0.1:8000/update-post/${post.id}`,
            {
                'title': title,
                'body': body,
                'category': category,
            }

        )
        console.log(res)
    }
    return (
        <Row>
            <Title title={`Edit ${post.title} ?`} />
            <Form id="form">
                <Form.Group className="mb-3" >
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" defaultValue={post.title} onChange={event => setNewTitle(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Body</Form.Label>
                    <Form.Control as="textarea" rows={10} defaultValue={post.body} onChange={event => setNewBody(event.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Category</Form.Label>
                    <Form.Control type="text" defaultValue={post.category} onChange={event => setNewCategory(event.target.value)} />
                </Form.Group>
                <Button variant="outline-success" type="submit" onClick={putPost(newtitle, newbody, newcategory)} >
                    Save Change
                </Button>

            </Form>
        </Row >
    )
}

export default UpdateScreen
