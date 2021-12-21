import React from 'react';
import { Card, ButtonGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CardPost({ post }) {
    return (
        <Card className='mt-4 custom-card'>
            <Card.Body>
                <Card.Title>
                    <h2>{`${post.title} ?`}</h2>
                </Card.Title>
                <Card.Text className='my-4'>
                    {post.body.substring(0, 200)}
                </Card.Text>


                <ButtonGroup size="sm">
                    <Link to={`/posts/${post.id}`}>
                        <Button variant="outline-success" className='rounded-0 col-12 btn-sm'>Read More</Button>
                    </Link>
                    <Link to={`/delete-post/${post.id}`}>
                        <Button variant="outline-danger" className='rounded-0 col-12 btn-sm'>Delete</Button>
                    </Link>

                    <Link to={`/update-post/${post.id}`}>
                        <Button variant="outline-warning" className='rounded-0 col-12 btn-sm'>Edit</Button>
                    </Link>
                </ButtonGroup>
            </Card.Body>
        </Card>
    )
}

export default CardPost
