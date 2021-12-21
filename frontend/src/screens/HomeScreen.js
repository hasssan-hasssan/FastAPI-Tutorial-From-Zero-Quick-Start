import React from 'react'
import { Row, Button } from 'react-bootstrap'
import Title from '../components/Title'
import { Link } from 'react-router-dom'




function HomeScreen() {
    return (
        <Row className='text-center'>
            <Title title="Welcome to Hassan Blog" />
            <div className="alert-secondary p-5 rounded text-start">
                <h3>Hello every body!</h3>
                <p className='border-bottom border-dark py-4'>I am Abolfazl Hassan Zade. I'm a webdeveloper. <br />
                    Here i have some post about many things.
                    I hope that you can use of my posts and their usefull for you</p>
                <Link to='/posts'>
                    <Button variant='outline-primary'>Posts</Button>
                </Link>
            </div>
        </Row>
    )
}

export default HomeScreen
