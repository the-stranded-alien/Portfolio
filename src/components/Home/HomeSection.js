import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myAvatar from '../../assets/avatar.svg';
import Tilt from 'react-parallax-tilt';
import {
    AiOutlineTwitter,
    AiOutlineLinkedin,
    AiOutlineGithub,
    AiOutlineInstagram,
} from 'react-icons/ai';

const HomeSection = () => {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: '2.6em' }}>
                            LET ME <span className="purple"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="home-about-body">
                            I am passionate about programming and everything computer science and
                            technology ...
                            <br />
                            <br />I am fluent in classics like
                            <i>
                                <b className="purple"> C++, Java, Javascript and Python. </b>
                            </i>
                            <br />
                            <br />
                            My main field of expertise is&nbsp;
                            <i>
                                <b className="purple">Full Stack Development </b> and I am also
                                interested in fields like{' '}
                                <b className="purple">
                                    Cloud, DevOps, Databases, System Architecture and Data Science
                                </b>
                            </i>
                            <br />
                            <br />
                            I have completed my <b className="purple">B.Tech (Hons.) CSE from JIIT Noida in 2021,</b>, and currently
                            I am pursuing a work integrated <b className="purple">M.Tech (Cloud Computing) from BITS Pilani</b>.
                            <br />
                            <br />
                            I have 3.5+ years of work experience in{' '}
                            <b className="purple">Software Development</b> with
                            <i>
                                <b className="purple"> SpringBoot, NodeJs & React</b>
                            </i>
                            &nbsp; and I am always keen to learn
                            <i>
                                <b className="purple"> new technologies.</b>
                            </i>
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={myAvatar} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to <span className="purple">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/the-stranded-alien"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiOutlineGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/sahil-gupta-118093180"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiOutlineLinkedin />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://twitter.com/SahilGu17734501"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiOutlineTwitter />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.instagram.com/_the_stranded_alien_"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiOutlineInstagram />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default HomeSection;
