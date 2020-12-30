import React, { Component } from 'react'
import { blogPosts } from './posts'
import styles from './blogs.module.css'


class Blogs extends Component {
    render() {
        return (
            //     <h2>
            //         <b>Our Blogs</b>
            //     </h2>

            //     {blogPosts.map((post, index) => {
            //         return (
            //             <div>

            //                 <Card style={{ width: '18rem' }}>
            //                     <Card.Body>

            //                         <Card.Title>{`${post.title}`}</Card.Title>
            //                         <Card.Text>
            //                             {`${post.summary}`}
            //                         </Card.Text>
            //                         <a href={`${post.url}`}><Button variant="primary">click</Button></a>
            //                     </Card.Body>
            //                 </Card>

            //             </div>
            //         )
            //     })}



            //     <Container>
            //         <Row>
            //             <Col>1 of 3</Col>
            //             <Col >2 of 3 (wider)</Col>
            //             <Col>3 of 3</Col>
            //         </Row>
            //         <Row>
            //             <Col>1 of 3</Col>
            //             <Col xs={5}>2 of 3 (wider)</Col>
            //             <Col>3 of 3</Col>
            //         </Row>
            //     </Container>


            <div>
                <h1 className={styles.heading}>Blogs</h1>

                <div className={styles.container}>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <a href="">
                            <div className={styles.cardflyer}>
                                <div className={styles.textbox}>
                                    <div className={styles.imagebox}>
                                        <img src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg" alt="" />
                                    </div>
                                    <div className={styles.textcontainer}>
                                        <h6>Title 01</h6>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>


            </div>
        )
    }
}

export default Blogs
