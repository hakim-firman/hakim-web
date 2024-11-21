const Contact = () => {
  return (
    <div className="orido_tm_section" id="contact">
      <div className="orido_tm_contact">
        <div className="container">
          <div className="infobox">
            {/* <div className="video_button">
              <a
                className="popup-youtube"
                href="https://www.youtube.com/watch?v=7e90gBu4pas"
              >
                <img
                  className="anim_circle"
                  src="img/contact/video.png"
                  alt=""
                />
                <img className="svg" src="img/svg/play.svg" alt="" />
              </a>
            </div> */}
            <div className="text">
              <h3>{`Let's`} work together</h3>
              <p>
              Ready to bring your ideas to life? Whether you need a cutting-edge website, a custom bot, or a mobile app solution, I’m here to help. Let’s collaborate to create something extraordinary!
              </p>
            </div>
            <div className="orido_tm_boxed_button">
              <a href="https://api.whatsapp.com/send/?phone=6287704758658">
               Contact  Me <img className="svg" src="img/svg/send.svg" alt="" />
              </a>
            </div>
          </div>
          <div className="connect">
            <div className="left">
              <ul>
                <li>
                  <span className="name">Call:</span>
                  <p>
                    <a className="line_effect" href="https://api.whatsapp.com/send/?phone=6287704758658">
                    +62 877-0475-8658
                    </a>
                  </p>
                </li>
                <li>
                  <span className="name">Email:</span>
                  <p>
                    <a className="line_effect" href="mailto:code.hakimfirman@gmail.com">
                      code.hakimfirman@gmail.com
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div className="right">
              <div className="orido_tm_follow">
                <span>Follow me:</span>
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/in/hakimfirman/">
                      <img className="svg" src="img/svg/social/linkedin.svg" alt="" />
                    </a>
                  </li>
                  <li>
                  <a href="https://github.com/hakim-firman">
                    <img className="svg" src="img/svg/social/github.svg" alt="" />
                  </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <span className="element">
          <img className="svg" src="img/svg/elements.svg" alt="" />
        </span>
        <span className="element2">
          <img className="svg" src="img/svg/element-2.svg" alt="" />
        </span>
      </div>
    </div>
  );
};
export default Contact;
