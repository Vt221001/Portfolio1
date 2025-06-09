import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Aradya from "../../Assets/Projects/Aradhya.png";
import School from "../../Assets/Projects/School ERP.jpeg";
import Employee from "../../Assets/Projects/Employee.png";
import Dollar from "../../Assets/Projects/Dollar.jpeg";
import Pass from "../../Assets/Projects/pass.jpg";

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
              ghLink="https://github.com/Vt221001/companywebsite"
              demoLink="https://aradhya-tech-solutions-fpix.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={School}
              isBlog={false}
              title="School ERP (SAAS)"
              description="I developed a Smart School SaaS Application using MERN technologies to streamline school management. It features role-based dashboards for administrators, teachers, students, and parents, along with dynamic student and result management, real-time attendance tracking, and scalability to support multiple schools on a centralized cloud-based platform."
              ghLink="https://github.com/Vt221001/schoolApplication"
              demoLink="https://mainpage.vedanshtiwari.tech"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Employee}
              isBlog={false}
              title="Employee Management"
              description="I developed an Employee Management System for my IT company’s CRM, integrating real-time activity tracking to monitor productivity. It includes role-based access, task management, and an admin-employee chat system for smooth communication, showcasing my ability to build scalable and efficient systems for performance and workflow optimization."
              ghLink="https://github.com/Vt221001/employee_management"
              demoLink="https://emp.vedanshtiwari.tech"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dollar}
              isBlog={false}
              title="Wallpaper App"
              description="I developed the backend for the Dollar Wallpaper app, which offers normal wallpapers for free and premium wallpapers for purchase. The backend handles user authentication, secure payment processing, and access control for premium content, ensuring a seamless user experience."
              ghLink="https://github.com/Vt221001/walpaper_backend"
              demoLink="https://play.google.com/store/apps/details?id=com.starsky.dollarwallpaper&hl=en"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pass}
              isBlog={false}
              title="Efficient Event Solutions: Digital Pass Management for VIPs and Attendees"
              description="I developed a high-performance digital pass management system for a two-day event at Rudraksha Convention Centre, Varanasi, attended by 3000+ VIPs, dignitaries, and global leaders. The system featured online and offline pass issuance, seamless entry verification, and WhatsApp integration for smooth access. This project showcases my ability to create scalable and secure digital solutions for large-scale events, addressing challenges like VIP data security and crowd management."
              ghLink="#"
              demoLink="https://mahasamagam.org/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
