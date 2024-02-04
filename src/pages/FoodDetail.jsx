import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'

import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import products from '../assets/fake-data/products'

import productImg from '../assets/images/product_01.1.jpg'

const FoodDetail = () => {
  return (
    <Helmet title='ProductDetails'>
      <CommonSection title='Product 01'/>

      <section>
        <Container>
          <Row>
            <Col lg='2' md='2'>
              <div className="product__images">
                <div className="img__item">
                  <img src={productImg} alt="product-img" className='w-50'/>
                </div>

                <div className="img__item">
                  <img src={productImg} alt="product-img" className='w-50'/>
                </div>

                <div className="img__item">
                  <img src={productImg} alt="product-img" className='w-50'/>
                </div>
              </div>
            </Col>

            <Col lg='4' md='4'>
              <div className="product__main__img">
                <img src={productImg} alt="product-main-img" className='w-100'/>
              </div>
            
            </Col>

            <Col lg='6' md='6'>
              <div className="single__product__content">
                <h2 className='product__title'>Burger with cheese</h2>
                <span className='product__price'>$24</span>
                <p>Category: <span>Burger</span></p>

                <button className='addToCart__btn'>Add to cart</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default FoodDetail