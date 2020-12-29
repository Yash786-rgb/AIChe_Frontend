import React, { Component } from 'react'
import { blogPosts } from './posts'
import Container from 'react-bootstrap/Container'
import styles from './blogs.module.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Row, Col } from 'react-bootstrap'

class Blogs extends Component {
    render() {
        return (
            <div >
                <h2>
                    <b>Our Blogs</b>
                </h2>

                {blogPosts.map((post, index) => {
                    return (
                        <div>

                            <Card style={{ width: '18rem' }}>
                                <Card.Body>

                                    <Card.Title>{`${post.title}`}</Card.Title>
                                    <Card.Text>
                                        {`${post.summary}`}
                                    </Card.Text>
                                    <a href={`${post.url}`}><Button variant="primary">click</Button></a>
                                </Card.Body>
                            </Card>

                        </div>
                    )
                })}



                <Container>
                    <Row>
                        <Col>1 of 3</Col>
                        <Col >2 of 3 (wider)</Col>
                        <Col>3 of 3</Col>
                    </Row>
                    <Row>
                        <Col>1 of 3</Col>
                        <Col xs={5}>2 of 3 (wider)</Col>
                        <Col>3 of 3</Col>
                    </Row>
                </Container>
                {/* <Grid /> */}
            </div>
        )
    }
}

export default Blogs
