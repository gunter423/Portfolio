import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import systemlab from '../../Assets/Projects/systemlab.png'
import odeontours from '../../Assets/Projects/odeontours.png'
import bolscanner from '../../Assets/Projects/bolscanner.jpg'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes récents <strong className="purple">Projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets sur lesquels j'ai travaillé récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={systemlab}
              isButton={true}
              isOpenSource={false}
              title="SystemLab"
              description="SystemLab est une association qui regroupe des passionnés dans les différents domaines de l'informatique. Nos équipes vous conseillerons dans la transition. J'ai réalisé un simple site statique avec une template HTML avec comme framework Symfony."
              link="https://systemlab.fr"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={odeontours}
              isButton={true}
              isOpenSource={false}
              title="Odeon Tours"
              description="ODEON TOURS est un « TOUR OPERATOR » membre de l'A.P.S.* basé à Montmorency (Région Parisienne) mais actif sur l'ensemble de l'Hexagone. J'ai réalisé ce site web avec symfony. Il y a une page administrative pour la gestion des différentes éléments dynamiques du site."
              link="https://odeon-tours.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isButton={false}
              isOpenSource={false}
              title="Bol Scanner"
              description="Applications de scan de livre avec l'EAN, récupération du prix et affichage des différentes informations concernant le livre scanné depuis https://bol.com ."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
