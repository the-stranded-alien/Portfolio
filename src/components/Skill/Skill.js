import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SkillCard from './SkillCard';
import Particle from '../Particle';
import skillData from '../../data/Skills/skills.json';
function Skill() {
    const skills = skillData.skills;
    const renderSkills = () => {
        return skills.map((skill, index) => (
            <Col md={4} className="work-card">
                <SkillCard
                    key={index}
                    category={skill.category}
                    logo={skill.logo}
                    overAllValue={skill.overAllValue}
                    subSkills={skill.subSkills}
                />
            </Col>
        ));
    };

    return (
        <Container fluid className="skill-section">
            <Particle />
            <Container>
                <h1 className="skill-heading">
                    I am a <strong className="purple"> Full Stack Developer. </strong> I also work
                    with other technologies across other domains. Always keen to learn new
                    technologies and frameworks.
                </h1>
                <p style={{ color: 'white' }}>These are my major skills categorized by domains.</p>
                <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
                    {renderSkills()}
                </Row>
            </Container>
        </Container>
    );
}

export default Skill;
