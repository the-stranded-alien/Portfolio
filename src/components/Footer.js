import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
    AiFillGithub,
    AiFillTwitterCircle,
    AiFillInstagram,
    AiFillLinkedin,
    AiOutlineMail,
    AiOutlinePhone,
    AiOutlineSketch,
} from 'react-icons/ai';

const Footer = () => {
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="3" className="footer text-white fw-bold">
                    <AiOutlineSketch /> Sahil Gupta
                </Col>
                <Col md="3" className="footer text-white fw-bold">
                    <AiOutlinePhone /> +91 7249999056
                </Col>
                <Col md="3" className="footer text-white fw-bold">
                    <AiOutlineMail /> sahil16gupta11@gmail.com
                </Col>
                <Col md="3" className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons">
                            <a
                                href="https://github.com/the-stranded-alien"
                                style={{ color: 'white' }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/sahil-gupta-118093180"
                                style={{ color: 'white' }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillLinkedin />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://twitter.com/SahilGu17734501"
                                style={{ color: 'white' }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillTwitterCircle />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.instagram.com/_the_stranded_alien_"
                                style={{ color: 'white' }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillInstagram />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
