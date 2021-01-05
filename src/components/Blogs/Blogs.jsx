import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import './blogs.css'



class Blogs extends Component {
    render() {


        return (


            <div>
                <Navbar active={"Blogs"} />
                <h1 className="heading">Blogs</h1>
                <div id="cards_landscape_wrap-2">

                    {/* 1st */}
                    <div className="container-fluid">

                        <div className="row" style={{ margin: "auto" }}>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">

                                <div className="card-flyer">
                                    <div className="text-box">
                                        <div className="image-box">
                                            <img src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg" alt="" />
                                        </div>
                                        <div className="text-container">
                                            <h6>A planned explosion failed at the Saudi petrochemical plant!</h6>

                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...<a className="readmore" href='/github.com'>read more</a></p>
                                            <p>By - Author</p>
                                            <p>Date</p>
                                        </div>

                                    </div>
                                </div>


                            </div>


                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                <a href="">
                                    <div className="card-flyer">
                                        <div className="text-box">
                                            <div className="image-box">
                                                <img src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg" alt="" />
                                            </div>
                                            <div className="text-container">
                                                <h6>Title 01</h6>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                <a href="">
                                    <div className="card-flyer">
                                        <div className="text-box">
                                            <div className="image-box" >
                                                <img src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg" alt="" />
                                            </div>
                                            <div className="text-container">
                                                <h6>Title 01</h6>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>


                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                <a href="">
                                    <div className="card-flyer">
                                        <div className="text-box">
                                            <div className="image-box">
                                                <img src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg" alt="" />
                                            </div>
                                            <div className="text-container">
                                                <h6>Title 01</h6>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>



                        </div>

                    </div>

                    {/* 2nd */}

                </div>


            </div >
        )
    }
}

export default Blogs
