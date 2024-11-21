import { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { projectSliderProps } from "../sliderProps";
import { dataImage } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";
const Projects = () => {
  useEffect(() => {
    dataImage();
  }, []);
  const [detailsPopup, setDetailsPopup] = useState(false);

  return (
    <Fragment>
      {/* <DetailsPopup close={() => setDetailsPopup(false)} open={detailsPopup} /> */}
      <div className="orido_tm_section" id="portfolio">
        <div className="orido_tm_portfolio">
          <div className="container">
            <div className="orido_tm_main_title">
              <h3>
                <span>
                  Look at my
                  <br />
                  recent projects
                </span>
              </h3>
            </div>
            <div className="portfolio_list">
              <Swiper
                {...projectSliderProps}
                className="owl-carousel gallery_zoom"
              >
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/37-40.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/porto1.png"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Indosat Ooredoo</span>
                      <h3 className="title">
                        <span>Marketing App</span>
                      </h3>
                    </div>
                  
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/37-40.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/porto2.png"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Indosat Ooredoo</span>
                      <h3 className="title">
                        <span>Sales Tracking</span>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/37-40.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/porto3.png"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Indonesia Port</span>
                      <h3 className="title">
                        <span>Crane Monitoring</span>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/37-40.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/porto4.png"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Gaweyo Indonesia</span>
                      <h3 className="title">
                        <span>Gig Job Posting</span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link details_link c-pointer"
                      onClick={() => setDetailsPopup(true)}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/37-40.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/porto5.png"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Indonesia News</span>
                      <h3 className="title">
                        <span>Energibangsa.id</span>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <a className="prev_button" href="#">
                <img className="svg" src="img/svg/prev.svg" alt="" />
              </a>
              <a className="next_button" href="#">
                <img className="svg" src="img/svg/next.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Projects;
