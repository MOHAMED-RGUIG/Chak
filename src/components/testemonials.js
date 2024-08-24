import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images


const Testimonials = () => {
  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };

  return (
    <section className="testimonials_area p-120 col-lg-10 col-10 mx-auto mb-5 pb-5 mt-5 pt-5">
      <h2 className='font-weight-light text-black'>Avis de nos clients !</h2>
      <div className="container col-10 col-lg-10">
        <Slider {...settings}>
          <div className="item">
            <div className="testi_item">
              <div className="media">
                <div className="d-flex p-4">
                  <img src='./test1.jfif' className='mx-auto' alt="Testimonial 1" />
                </div>
                <div className="media-body">
                  <p>Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware.</p>
                  <h4>Mark Alviro Wiens</h4>
                  <h5>CEO at Google</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="testi_item">
              <div className="media">
                <div className="d-flex p-4">
                  <img src='./test2.jfif'   className='mx-auto' alt="Testimonial 2" />
                </div>
                <div className="media-body">
                  <p>Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware.</p>
                  <h4>Mark Alviro Wiens</h4>
                  <h5>CEO at Google</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="testi_item">
              <div className="media">
                <div className="d-flex p-4">
                  <img src='./test3.jfif' className='mx-auto' alt="Testimonial 1" />
                </div>
                <div className="media-body">
                  <p>Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware.</p>
                  <h4>Mark Alviro Wiens</h4>
                  <h5>CEO at Google</h5>
                </div>
              </div>
            </div>
          </div>
          {/* Add more items here as needed */}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
