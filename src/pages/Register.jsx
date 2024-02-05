import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Register = () => {
  const signupNameRef = useRef();
  const signupPasswordRef = useRef();
  const signupEmailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={handleSubmit}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    ref={signupNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={signupEmailRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={signupPasswordRef}
                  />
                </div>
                <div>
                  <Link to="/login">Already have an account? Login</Link>
                </div>
                <button type="submit" className="submit__btn">
                  Sign Up
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;