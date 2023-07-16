import React from 'react';
import { Col, Row } from 'react-bootstrap';

import {
    SiVisualstudiocode,
    SiIntellijidea,
    SiWebstorm,
    SiDatagrip,
    SiPostman,
    SiMacos,
    SiLinux,
    SiSlack,
    SiWindows,
    SiGithub,
    SiGoland,
} from 'react-icons/si';

const ToolStack = () => {
    return (
        <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
            <Col xs={3} md={2} className="tech-icons">
                <SiMacos />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiLinux />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiWindows />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiGithub />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiSlack />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiPostman />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiVisualstudiocode />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiIntellijidea />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiWebstorm />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiDatagrip />
            </Col>
        </Row>
    );
};

export default ToolStack;
