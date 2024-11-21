const Feedback = ({ dark }) => {
  const testimonials = [
    {
      image: "img/testimonials/1.jpg",
      text:
        "“ Very professional and well organized. He created a step by step plan in Trello and completed the steps quickly. He has good management and makes quick progress”",
      name: "Michael kravc",
      job: "Road to Virtuosity",
    },
    {
      image: "img/testimonials/1.jpg",
      text:
        "“Professional work has been done very well. The work is done with great patience so that customer satisfaction is guaranteed. The value of the money spent is very much paid off with very satisfying results. ”",
      name: "Turai",
      job: "Agrommunity",
    },
    {
      image: "img/testimonials/1.jpg",
      text:
        "“Talented and excellent developer in building applications with the latest technology. Also, his communication with clients is very good and always tries to satisfy the needs of clients. I highly recommend him with A++ ”",
      name: "Samah",
      job: "Jobsicle",
    },
  ];
  return (
    <div className="orido_tm_section">
      <div className="orido_tm_testimonials">
        <div className="container">
          <div className="orido_tm_main_title">
            <h3>
              <span>
                Valuable feedback
                <br />
                from my client
              </span>
            </h3>
          </div>
            {testimonials.map((testimonial, i) => (
              <>
                <div className="testimonials_in">
                  {/* <img src={testimonial.image} alt="" /> */}
                  <div className="info">
                    <div className="text">
                      <p>
                        {testimonial.text}
                      </p>
                    </div>
                    <div className="details">
                      <h3 className="name">
                        <span>{testimonial.name}</span>
                      </h3>
                      <span className="job">{testimonial.job}</span>
                    </div>
                  </div>
               </div>
              </>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Feedback;
