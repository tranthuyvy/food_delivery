import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";

import "../styles/all-foods.scss";

const AllFood = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchedProduct = products.filter((item) => {
    if (searchTerm.value === "") return item;
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase()))
      return item;
  });

  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 11;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Helmet title="All foods">
      <CommonSection title="All Foods" />

      <section className="section__allFood">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="search__widget d-flex align-items-center justify-content-between w-50">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6" className="mb-5">
              <div className="sorting__widget text-end">
                <select className="w-50">
                  <option>Default</option>
                  <option value="ascending">Alphabetically ,A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>

            {displayPage.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-5">
                <ProductCard item={item} />
              </Col>
            ))}

            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel="Prev"
                nextLabel="Next"
                containerClassName="paginationBtns"
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFood;
