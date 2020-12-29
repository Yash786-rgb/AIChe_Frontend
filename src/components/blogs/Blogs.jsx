import React, { Component } from 'react'
import { blogPosts } from './posts'
import Container from 'react-bootstrap/Container'
import styles from './blogs.module.css'
import Card from 'react-bootstrap/Card'

class Blogs extends Component {
    render() {
        return (
            <div >
                <h2><b>Our Blogs</b></h2>

                <Card style={{ width: "18 rem" }}>
                    {blogPosts.map((post, index) => {
                        return (
                            <div className={styles.post}>
                                {/* <li><a className={post.title} href={post.url}>
                                {`${post.title}`}
                            </a></li> */}
                                <a href={`${post.url}`}>{`${post.title}`}</a>
                                {`${post.summary}`}
                                <hr></hr>
                            </div>
                        )
                    })}
                </Card>
                {/* <Grid /> */}
            </div>
        )
    }
}

export default Blogs
