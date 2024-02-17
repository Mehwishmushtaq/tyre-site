import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'aos/dist/aos.css';
import aos from 'aos';

function AboutUsPage() {
  React.useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <div>

      {/* Main Content */}
      <Container className="py-5">
        <Row data-aos="fade-up" style={{ marginTop: '6rem' }}>
          <Col md={6}>
            <h2>Our Mission</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus eveniet, praesentium consectetur, temporibus assumenda eius maiores possimus explicabo quos officiis dolorum quod? Vitae harum delectus porro perspiciatis architecto ipsum sed.
            Suscipit architecto rem voluptatibus quibusdam provident. Error excepturi sunt perspiciatis earum accusantium, cum blanditiis eius similique vero pariatur. Ea debitis explicabo accusamus molestiae ullam unde sunt provident saepe voluptatum animi?
            Et nulla saepe quis esse ad ut, ea quod earum illum labore sint dolor velit reiciendis voluptatum, nihil quia corrupti, explicabo sit ex rem suscipit! Mollitia voluptatibus iste ab ex.
            Iure autem molestiae perferendis hic nesciunt id eos voluptas deserunt necessitatibus est eum, eaque labore aspernatur reprehenderit itaque totam adipisci vel. Fugit voluptates culpa debitis. Autem cupiditate ipsum suscipit natus?</p>
          </Col>
          <Col md={6}>
            <img src="https://via.placeholder.com/500x350?text=Tire+Service" alt="Mission" className="img-fluid" />
          </Col>
        </Row>

        <Row className="mt-5" data-aos="fade-up">
          <Col md={6}>
            <h2>Our Team</h2>
            <img src="https://via.placeholder.com/500x350?text=Our+Team" alt="Team" className="img-fluid" />
          </Col>
          <Col md={6} className='mt-5'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem corrupti deserunt optio itaque, mollitia a dolor magni fugit minus totam! Ipsum debitis commodi sed atque id dolorem molestiae neque vero.
            Excepturi, voluptatum facere, et doloribus inventore ea commodi beatae, impedit eveniet dignissimos rerum dicta odit sequi quia obcaecati earum? Fugit dignissimos voluptatum quaerat. Soluta sint accusamus deleniti mollitia rem facilis.
            Enim nesciunt asperiores dicta fuga? Ex, numquam ab beatae possimus sunt eius, quam fugit sequi modi odio nostrum officiis est labore. Eum, iure? Totam nihil vero vitae dignissimos similique voluptatibus.
            Molestias quo esse dicta quod vitae corrupti sequi aspernatur minima vel, ducimus tempore exercitationem autem odit veniam, similique aliquam? Illum, animi. Consectetur natus ipsa vero fugiat cupiditate reiciendis nesciunt iste.</p>
          </Col>
        </Row>

        <Row className="mt-5" data-aos="fade-up">
          <Col md={6}>
            <h2>Why Choose Us?</h2>
            <ul>
              <li>Convenient mobile service</li>
              <li>Wide selection of tyres</li>
              <li>Expertise and professionalism</li>
              <li>Competitive pricing</li>
              <li>Customer satisfaction guarantee</li>
            </ul>
          </Col>
          <Col md={6}>
            <h2>Our Values</h2>
            <p>At Mobile Fit Tyres, we prioritize integrity, reliability, and safety in everything we do. We strive to build lasting relationships with our customers based on trust and transparency.</p>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default AboutUsPage;
