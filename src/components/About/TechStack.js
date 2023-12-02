import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { DiReact, DiNodejs, DiMongodb, DiGit, DiJava, DiMysql, DiPostgresql } from 'react-icons/di';
import {
    SiC,
    SiCplusplus,
    SiRedis,
    SiDocker,
    SiDotnet,
    SiReact,
    SiRedux,
    SiAngular,
    SiSelenium,
    SiMaterialdesign,
    SiCsharp,
    SiKubernetes,
    SiTypescript,
    SiJavascript,
    SiPython,
    SiHtml5,
    SiCss3,
    SiBootstrap,
    SiSpring,
    SiSpringboot,
    SiSpringsecurity,
    SiClickhouse,
    SiApachecassandra,
    SiApachekafka,
    SiGooglecloud,
    SiAmazonaws,
    SiGithubactions,
    SiJenkins,
    SiCircleci,
    SiTerraform,
} from 'react-icons/si';
import { TbBrandGolang } from 'react-icons/tb';

const TechStack = () => {
    return (
        <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
            <Col xs={3} md={2} className="tech-icons">
                <DiJava />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiJavascript />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiTypescript />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiPython />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiC />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiCplusplus />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiCsharp />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <TbBrandGolang />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiHtml5 />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiCss3 />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiBootstrap />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiMaterialdesign />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiReact />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiRedux />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiAngular />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiGooglecloud />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiAmazonaws />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiSpring />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiSpringboot />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiSpringsecurity />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <DiNodejs />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiDotnet />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <DiMysql />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <DiPostgresql />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <DiMongodb />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiApachecassandra />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiClickhouse />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <DiGit />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiSelenium />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiRedis />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiApachekafka />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiDocker />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiKubernetes />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiGithubactions />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiCircleci />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiTerraform />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiJenkins />
            </Col>
        </Row>
    );
};

export default TechStack;
