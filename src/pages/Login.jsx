import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

import "../styles/login.scss";

const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={handleSubmit}>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={loginNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={loginPasswordRef}
                  />
                </div>
                <div>
                  <Link to="/register">
                    Don't have an account? Create an account
                  </Link>
                </div>
                <button type="submit" className="submit__btn">
                  Login
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
