import React from "react";
import { carousel } from "../../backend/db/Products";

const Carousel = () => {
  return (
    <section className="carousel-wrapper">
      <div className="container-xxl">
        <div className="row">
          <div id="carouselExampleAutoplaying" className="carousel slide m-0 p-0" data-bs-ride="carousel">
            <div className="carousel-inner m-0 p-0">
              {carousel.map((item, index) => (
                <div key={item.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img src={item.image} className="d-block w-100" alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
            <div className="carousel-indicators">
              {carousel.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-current={index === 0 ? "true" : "false"}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
