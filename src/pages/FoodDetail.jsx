import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'

import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import products from '../assets/fake-data/products'

import productImg from '../assets/images/product_01.1.jpg'
import '../styles/product-detail.scss'

const FoodDetail = () => {
  return (
    <Helmet title='ProductDetails'>
      <CommonSection title='Product 01'/>

      <section className='section__productDetail'>
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
                <h2 className='product__title mb-3'>Burger with cheese</h2>
                <p className='product__price'>Price: <span>$24</span></p>
                <p className='category mb-5'>Category: <span>Burger</span></p>

                <button className='addToCart__btn'>Add to cart</button>
              </div>
            </Col>

            <Col lg='12'>
              <div className="tabs d-flex align-items-center gap-3 py-2">
                <h6>Description</h6>
                <h6>Review</h6>
              </div>

              <div className="tab__content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis exercitationem quas accusantium nostrum eaque, fugit ea porro veritatis expedita, minima dicta, sapiente iste ad? Libero totam dolore similique nulla nam atque ad sunt doloremque. Itaque ut maxime, ipsa optio, consequuntur consectetur, pariatur eaque reiciendis odit odio quos et consequatur explicabo.</p>
              </div>
            </Col>

          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default FoodDetail