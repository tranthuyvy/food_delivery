import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import '../../styles/footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6' >
            <div className='logo footer__logo text-start'>
              <img src={logo} alt='logo' />
              <h5>TV Food</h5>
              <p>
                Best Fast Food in town, try it out
              </p>
            </div>
          </Col>

          <Col lg='3' md='4' sm='6' >
            <h5 className='footer__title'>Delivery Time</h5>
            <ListGroup className='delivery__time-list'>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Monday - Friday</span>
                <p>10:00AM - 10:00PM</p>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Saturday - Sunday</span>
                <p>Off Delivery</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg='3' md='4' sm='6' >
            <h5 className='footer__title'>Contact</h5>
            <ListGroup className='delivery__time-list'>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <p>Location:  323 Do Xuan Hop, Phuoc Long B, TP.Thu Duc, TP.HCM</p>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Phone: (028) 3686868 </span>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Email: ttv@contact.gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg='3' md='4' sm='6' >
            <h5 className='footer__title'>Newsletter</h5>
            <p>Our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder='Enter your email' />
              <span><i class="ri-send-plane-fill"></i></span>
            </div>
          </Col>
        </Row>

        <Row className='mt-2'>
          <Col lg='6' md='6'>
            <p className='copyright__text'>Copyright - 2024, website made by TTV. All Rights Reserved</p>
          </Col>

          <Col lg='6' md='6'>
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className='m-0'>Follow</p>
              <span>
                <Link to='https://www.linkedin.com/in/vy-tran-945bb92a2/'>
                  <i class="ri-linkedin-box-fill"></i>
                </Link>
              </span>

              <span>
                <Link to='https://github.com/tranthuyvy'>
                  <i class="ri-github-fill"></i>
                </Link>
              </span>

              <span>
                <Link to='https://ttv-tranthuyvy-cv.vercel.app/'>
                  <i class="ri-earth-fill"></i>
                </Link>
              </span>

              <span>
                <Link to='https://www.facebook.com/profile.php?id=100011041895069'>
                  <i class="ri-facebook-circle-fill"></i>
                </Link>
              </span>

            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
