import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: 'justify' }}>
                        Hi Everyone, I am <span className="purple">Sahil Gupta </span>
                        from <span className="purple"> Muzaffarnagar, Uttar Pradesh, India.</span>
                        <br /> I am a{' '}
                        <span className="purple">
                            Computer Science Engineering Graduate from Jaypee Institute of
                            Information Technology, Noida
                        </span>
                        .
                        <br />
                        Currently I am working as an{' '}
                        <span className="purple">Software Engineer 2 at RMES India Pvt. Ltd</span>.
                        <br />
                        <br />
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Cooking
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Learning about Tech, Space, Geology, and Global Affairs
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Listening Music and Watching Movies & Documentaries
                        </li>
                    </ul>

                    <p style={{ color: 'rgb(155 126 172)' }}>
                        "Keep putting in your best efforts, without worrying about the results!"{' '}
                    </p>
                    <footer className="blockquote-footer">Sahil</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
