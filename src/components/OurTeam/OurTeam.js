import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap"; // Bootstrap components
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa"; // Icons
import "../../OurTeamCards.css"; // Custom CSS
import team1 from "../../images/teamcard1.png";
import team2 from "../../images/teamcard2.png";
import team3 from "../../images/teamcard3.png";

const teamMembers = [
  {
    name: "Claire Holland",
    role: "Wedding and Events Manager",
    image: team1, // Replace with actual image
    description:
      "Claire has worked in the wedding industry for 13 years and is truly dedicated to her profession.  She too worked at the Yacht Club Cala d’Or alongside Sergio as their Wedding & Events Manager and in her words ‘was the luckiest person in the world to be a part of so many wonderful weddings’.  Her experience of Mallorca as well as the excellent links with a host of recommended suppliers on the island will ensure that your wedding is in great hands.",
  },
  {
    name: "Sergio Rifugio",
    role: "Director & Founder of Mallorca Weddings & Events",
    image: team2,
    description:
      "After many years working in management of top-class hotels throughout Spain and running his own Cooking Holidays business, Sergio became General Manager of the famous Yacht Club Cala d’Or and for 12 years was responsible for hundreds of fantastic events. His passion for creating mouth-watering cuisine and his attention to detail has ensured over the years that he has secured a prominent place in Mallorca’s events world.  Sergio is fluent in his home tongue of Italian, as well as Spanish, Russian and English.",
  },
  // {
  //   name: "Silvia Corcuera",
  //   role: "Wedding and Events Manager",
  //   image: team3,
  //   description:
  //     "Silvia worked at the Yacht Club for 8 years. Starting as Restaurant and Bar Supervisor and working up to Assistant Manager.  Silvia biggest talent is her creativity. Your wedding decor will be in the best possible hands with her. She is fantastic at creating a stunning event room, with simple or extravagant floral displays and table displays. She will see your vision and put everything together on the day.  She has lived in Mallorca for many years and speaks fluent Spanish, English and German.",
  // },
];

const OurTeam = () => {
  return (
    <section className="ourteamcards">
      <Container>
        <Row className="text-center">
          <Col>
            <h2 className="team-heading">
              {/* Exceptional Event Catering <br /> & Private Chef Services */}
            
            </h2>
          </Col>
        </Row>
        <Row className="team-row">
  {teamMembers.map((member, index) => (
    <Col lg={4} md={6} sm={12} key={index}>
      <Card className="team-card">
        <div className="image-container">
          <img src={member.image} alt={member.name} />
        </div>
        <Card.Body>
          <h2 className="team-name">{member.name}</h2>
          <p className="team-role">{member.role}</p>
          <p className="team-description">{member.description}</p>
          <div className="social-icons">
            {/* <span>
              <FaInstagram />
            </span>
            <span>
              <FaFacebookF />
            </span> */}
            <span>
              <FaLinkedinIn />
            </span>
          </div>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>

      </Container>
    </section>
  );
};

export default OurTeam;
