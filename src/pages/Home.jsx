import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

import Helmet from '../components/Helmet/Helmet';
import products from '../assets/fake-data/products';
import Category from '../components/UI/category/Category';
import ProductCard from '../components/UI/product-card/ProductCard';
import TestimonialSlider from '../components/UI/slider/TestimonialSlider';

import heroImg from '../assets/images/hero.png';
import featureImg01 from '../assets/images/service-01.png';
import featureImg02 from '../assets/images/service-02.png';
import featureImg03 from '../assets/images/service-03.png';
import foodCategoryImg01 from '../assets/images/hamburger.png';
import foodCategoryImg02 from '../assets/images/pizza.png';
import foodCategoryImg03 from '../assets/images/bread.png';
import whyImg from '../assets/images/location.png';
import networkImg from '../assets/images/network.png';

import '../styles/home.scss';

const featureData = [
  {
    title: 'Quick Delivery',
    imgUrl: featureImg01,
    desc: 'Nhanh chóng nhận hàng',
  },
  {
    title: 'Super Dine In',
    imgUrl: featureImg02,
    desc: 'Thức uống ngon lành',
  },
  {
    title: 'Easy Pick Up',
    imgUrl: featureImg03,
    desc: 'Dễ dàng đặt hàng',
  },
];

const Home = () => {
  const [category, setCategory] = useState('ALL');
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);
  const [hotBurger, setHotBurger] = useState([]);
  const [hotBread, setHotBread] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === 'Pizza');
    const filteredBurger = products.filter(
      (item) => item.category === 'Burger'
    );
    const filteredBread = products.filter((item) => item.category === 'Bread');

    const slicePizza = filteredPizza.slice(0, 4);
    const sliceBurger = filteredBurger.slice(0, 4);
    const sliceBread = filteredBread.slice(0, 4);
    setHotPizza(slicePizza);
    setHotBurger(sliceBurger);
    setHotBread(sliceBread);
  }, []);

  useEffect(() => {
    if (category === 'ALL') {
      setAllProducts(products);
    }

    if (category === 'BURGER') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Burger'
      );

      setAllProducts(filteredProducts);
    }

    if (category === 'PIZZA') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Pizza'
      );

      setAllProducts(filteredProducts);
    }

    if (category === 'BREAD') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Bread'
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title='Home'>
      <section className='section__hero'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='hero__content'>
                <h5 className='mb-3'>Easy way to make an order</h5>
                <h1 className='mb-4 hero__title'>
                  <span>HUNGRY?</span> Just wait <br />
                  food at<span> your door</span>
                </h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi voluptate expedita incidunt aliquid aut voluptas ducimus nulla quaerat, consectetur iure, officiis officia esse ipsum delectus impedit itaque? Enim, ipsam molestiae.</p>

                <div className='hero__btns d-flex align-items-center gap-5 mt-4'>
                  <button className='order__btn d-flex align-items-center justify-content-between '>
                    Order Now <i class='ri-arrow-right-circle-fill'></i>
                  </button>

                  <button className='all__foods-btn'>
                    <Link to='/foods'>See all foods</Link>
                  </button>
                </div>

                <div className='hero__service d-flex align-items-center gap-5 mt-5'>
                  <p className='d-flex align-items-center gap-2'>
                    <span className='shipping__icon'>
                      <i class='ri-car-line'></i>
                    </span>
                    No shipping charge
                  </p>

                  <p className='d-flex align-items-center gap-2'>
                    <span className='shipping__icon'>
                      <i class='ri-shield-check-line'></i>
                    </span>
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className='hero__img'>
                <img src={heroImg} alt='hero-img' className='w-100' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Category />
      </section>

      <section className='section__feature'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h5 className='feature__subtitle mb-4'>What we serve</h5>
              <h2 className='feature__title'>Just sit back at home</h2>
              <h2 className='feature__title'>
                we will <span>take care</span>
              </h2>
              <p className='mb-1 mt-4 feature__text'>Huong Thom Tu Dat Viet</p>
              <p className='feature__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, fuga!</p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg='4' md='6' sm='6' key={index} className='mt-5'>
                <div className='feature__item text-center px-5 py-3'>
                  <img
                    src={item.imgUrl}
                    alt='feature-img'
                    className='w-25 mb-3'
                  />
                  <h5 className='fw-bold mb-3'>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className='section__food__category'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2>Popular Foods</h2>
            </Col>

            <Col lg='12'>
              <div className='food__category d-flex align-items-center justify-content-center gap-4'>
                <button
                  className={`all__btn ${
                    category === 'ALL' ? 'foodBtnActive' : ''
                  }`}
                  onClick={() => setCategory('ALL')}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === 'BURGER' ? 'foodBtnActive' : ''
                  }`}
                  onClick={() => setCategory('BURGER')}
                >
                  <img src={foodCategoryImg01} alt='' />
                  Burger
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === 'PIZZA' ? 'foodBtnActive' : ''
                  }`}
                  onClick={() => setCategory('PIZZA')}
                >
                  <img src={foodCategoryImg02} alt='' />
                  Pizza
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === 'BREAD' ? 'foodBtnActive' : ''
                  }`}
                  onClick={() => setCategory('BREAD')}
                >
                  <img src={foodCategoryImg03} alt='' />
                  Bread
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mt-5'>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className='section__why__choose'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <img src={whyImg} alt='why-TV-food' className='w-100' />
            </Col>

            <Col lg='6' md='6'>
              <div className='why__TV__food'>
                <h2 className='TV__food__title mb-4'>
                  Why <span>TV Food?</span>
                </h2>
                <p className='TV__food__desc'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsum, iste.
                </p>
                <ListGroup className='mt-4 list__choose'>
                  <ListGroupItem className='border-0 ps-0'>
                    <p className='choose__title d-flex align-items-center gap-2'>
                      <i class='ri-checkbox-circle-line'></i>
                      Fresh and tasty foods
                    </p>
                    <p className='choose__desc'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam, sapiente.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className='border-0 ps-0'>
                    <p className='choose__title d-flex align-items-center gap-2'>
                      <i class='ri-checkbox-circle-line'></i>
                      Quanlity support
                    </p>
                    <p className='choose__desc'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laudantium, repudiandae.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className='border-0 ps-0'>
                    <p className='choose__title d-flex align-items-center gap-2'>
                      <i class='ri-checkbox-circle-line'></i>
                      Order from any location
                    </p>
                    <p className='choose__desc'>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Numquam sequi nostrum earum totam ipsa inventore,
                      repellendus sed corporis repudiandae reiciendis repellat
                      eligendi quam! Fugit libero soluta et cupiditate
                      praesentium quod.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-3'>
              <h2>Hot Pizza</h2>
            </Col>

            {hotPizza.map((item) => (
              <Col lg='3' md='4' key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-3'>
              <h2>Hot Burger</h2>
            </Col>

            {hotBurger.map((item) => (
              <Col lg='3' md='4' key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-3'>
              <h2>Hot Bread</h2>
            </Col>

            {hotBread.map((item) => (
              <Col lg='3' md='4' key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className='section__testimonial'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='testimonial'>
                <h5 className='testimonial__subtitle mb-4'>Testimonial</h5>
                <h2 className='testimonial__title mb-4'>
                  What our <span>customers</span>are saying
                </h2>
                <p className='testimonial__desc'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  blanditiis ducimus unde corrupti nesciunt dignissimos rerum
                  sit praesentium sunt odio.
                </p>

                <TestimonialSlider />
              </div>
            </Col>

            <Col lg='6' md='6'>
              <img src={networkImg} alt='network' className='w-100' />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
