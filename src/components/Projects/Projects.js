import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import Aradya from "../../Assets/Projects/Aradhya.png";
import School from "../../Assets/Projects/School ERP.jpeg";
import suicide from "../../Assets/Projects/suicide.png";
import Employee from "../../Assets/Projects/Employee.png";
import Dollar from "../../Assets/Projects/Dollar.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Aradya}
              isBlog={false}
              title="Aradhya Technologies"
              description="I created my company's website using the MERN stack, featuring an admin panel for managing content. The admin panel allows seamless blog uploads and includes a certificate verification system to validate issued certificates. This project highlights my expertise in building dynamic and functional web applications with robust admin capabilities."
              ghLink="https://github.com/HemantMedhsia/Aradhya_Tech_Solutions"
              demoLink="https://aradhya-tech-solutions-fpix.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={School}
              isBlog={false}
              title="School ERP (SAAS)"
              description="I developed a Smart School SaaS Application using MERN technologies to streamline school management. It features role-based dashboards for administrators, teachers, students, and parents, along with dynamic student and result management, real-time attendance tracking, and scalability to support multiple schools on a centralized cloud-based platform."
              ghLink="https://github.com/HemantMedhsia/new_school_application_haryana"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Employee}
              isBlog={false}
              title="Employee Management"
              description="I developed an Employee Management System for my IT company’s CRM, integrating real-time activity tracking to monitor productivity. It includes role-based access, task management, and an admin-employee chat system for smooth communication, showcasing my ability to build scalable and efficient systems for performance and workflow optimization."
              // ghLink="#"
              demoLink="https://employee-management-vdxv.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dollar}
              isBlog={false}
              title="Wallpaper App"
              description="I developed the backend for the Dollar Wallpaper app, which offers normal wallpapers for free and premium wallpapers for purchase. The backend handles user authentication, secure payment processing, and access control for premium content, ensuring a seamless user experience."
              ghLink="https://github.com/HemantMedhsia/WallpaperBackend"
              demoLink="https://play.google.com/store/apps/details?id=com.starsky.dollarwallpaper&hl=en"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink=""
              // demoLink="" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink=""
              // demoLink=""      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
