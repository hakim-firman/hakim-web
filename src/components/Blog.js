import { Fragment, useState } from "react";
import BlogPopup from "./popup/BlogPopup";

const blogData = [
  {
    title: "HTML#1 : Dasar HTML",
    date: "02 June, 2022",
    author: "Hakim Firman",
    img: "img/news/1.png",
    description: [
      "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Orido, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
    url:'https://medium.com/@code.hakimfirman/tutorial-belajar-html-part-1-pengenalan-html-dasar-dasar-html-untuk-pemula-2d7b3518707f',
    profile:'https://medium.com/@code.hakimfirman'
  },
  {
    title: "HTML#2 : Struktur HTML",
    date: "02 June, 2022",
    author: "Hakim Firman",
    img: "img/news/2.png",
    description: [
      "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Orido, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
    url:'https://medium.com/@code.hakimfirman/utorial-belajar-html-part-2-memahami-element-dalam-html-struktur-dasar-halaman-web-5534eb673971',
    profile:'https://medium.com/@code.hakimfirman'

  },
  {
    title: "HTML#3 : Attribute HTML",
    date: "02 June, 2022",
    author: "Hakim Firman",
    img: "img/news/3.png",
    description: [
      "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Orido, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
    url:'https://medium.com/@code.hakimfirman/tutorial-belajar-html-part-3-penggunaan-attribute-dalam-html-menambahkan-informasi-tambahan-789433f8d025',
    profile:'https://medium.com/@code.hakimfirman'

  },
  {
    title: "HTML#4 : Heading HTML",
    date: "02 June, 2022",
    author: "Hakim Firman",
    img: "img/news/4.png",
    description: [
      "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Orido, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
    url:'https://medium.com/@code.hakimfirman/tutorial-belajar-html-part-4-penggunaan-heading-tags-dalam-html-menyusun-judul-dan-subjudul-ee21ad9dc670',
    profile:'https://medium.com/@code.hakimfirman'
  },
];

const Blog = () => {
  const [activeData, setActiveData] = useState({});
  const [open, setOpen] = useState(false);
  const onClick = (url) => {
    // setOpen(true);
    // setActiveData(blog);
    window.open(url, "_blank");
  };
  return (
    <Fragment>
      <BlogPopup open={open} close={() => setOpen(false)} data={activeData} />
      <div className="orido_tm_section" id="blog">
        <div className="orido_tm_news">
          <div className="container">
            <div className="orido_tm_main_title">
              <h3>
                <span>
                  From my
                  <br />
                  blog post
                </span>
              </h3>
            </div>
            <div className="news_list">
              <ul>
                {blogData.map((blog, i) => (
                  <li key={i}>
                    <div className="list_inner">
                      <div className="left">
                        <div className="metabox">
                          <ul>
                            <li>
                              <span>
                                <a
                                  className="c-pointer"
                                  onClick={() => onClick(blog.profile)}
                                >
                                  {blog.author}
                                </a>
                              </span>
                            </li>
                            <li>
                              <span>{blog.date}</span>
                            </li>
                          </ul>
                        </div>
                        <div className="title">
                          <h3>
                            <a
                              className="c-pointer"
                              onClick={() => onClick(blog.url)}
                            >
                              {blog.title}
                            </a>
                          </h3>
                        </div>
                        <div className="orido_tm_simple_button">
                          <a
                            className="line_effect c-pointer"
                            onClick={() => onClick(blog.url)}
                          >
                            Read More{" "}
                            <img
                              className="svg"
                              src="img/svg/top-arrow.svg"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="right">
                        <img src="img/thumbs/24-20.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url={blog.img}
                          style={{ backgroundImage: `url(${blog.img})` }}
                        />
                        <a
                          className="orido_tm_full_link c-pointer"
                          onClick={() => onClick(blog.url)}
                        />
                      </div>
                      <span className="shape">
                        <img
                          className="svg"
                          src="img/svg/Intersect.svg"
                          alt=""
                        />
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Blog;
