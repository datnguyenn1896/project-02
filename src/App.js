import "./App.scss";
import cart from "./assets/img/cart-shopping.svg";
import outschool from "./assets/img/Outschool.svg";
import user from "./assets/img/user.svg";
import saly from "./assets/img/Saly-10.png";
import company from "./assets/img/Company logo.svg";
import company1 from "./assets/img/Company logo-1.svg";
import company2 from "./assets/img/Company logo-2.svg";
import company3 from "./assets/img/Company logo-3.svg";
import company4 from "./assets/img/Company logo-4.svg";
import star from "./assets/img/star-sharp.svg";

import check from "./assets/img/badge-check.svg";
import dollar from "./assets/img/badge-dollar.svg";
import user1 from "./assets/img/user1.svg";
import tabler from "./assets/img/tabler_certificate.svg";
import key from "./assets/img/key-alt.svg";
import monitor from "./assets/img/monitor-alt-4.svg";

const App = () => {
  const listFill = [
    "Top Rate",
    "Development",
    "Design",
    "Music",
    "Marketing",
    "Business",
    "Photography",
  ];

  const listCourses = {
    data: [
      {
        image: "https://i.imgur.com/2brCXtL.png",
        type: "Artificial Intelligence",
        title: "Modern Artificial Intelligence with zero coding",
        author: "Jhon David",
        rating: "4.9",
        prince: "49.99",
      },
      {
        image: "https://i.imgur.com/wuW9eCY.png",
        type: "UX/UI Designing",
        title: "Figma UX/UI Design essentials",
        author: "Daniel Walter Scott",
        rating: "4.9",
        prince: "49.99",
      },
      {
        image: "https://i.imgur.com/yJDwl4H.png",
        type: "UX/UI Designing",
        title: "Complete figma mega course: UX/UI Design Beginner to Expert",
        author: "Kaleb Kingston",
        rating: "4.9",
        prince: "49.99",
      },
      {
        image: "https://i.imgur.com/zotYIjl.png",
        type: "Web Development",
        title: "The Complete 2022 Fullstack Web Developer course",
        author: "Mark Lassoff",
        rating: "4.9",
        prince: "49.99",
      },
      {
        image: "https://i.imgur.com/eeXi8pr.png",
        type: "Web Development",
        title: "Javascript for beginners",
        author: "Jhon David",
        rating: "4.9",
        prince: "49.99",
      },
      {
        image: "https://i.imgur.com/x47LGz8.png",
        type: "Digital Marketing",
        title: "Digital Advertising and Marketing 101: The Complete...",
        author: "Ben Silverstain",
        rating: "4.9",
        prince: "49.99",
      },
      {
        image: "https://i.imgur.com/NYodBD9.png",
        type: "Digital Marketing",
        title: "Mega Digital Marketing course: 12 Courses in 1",
        author: "Phil Ebiner",
        rating: "4.9",
        prince: "49.99",
      },
      {
        image: "https://i.imgur.com/UN93tTB.png",
        type: "UX/UI Designing",
        title: "User Experience Design Essentials",
        author: "Jacob Murphy",
        rating: "4.9",
        prince: "49.99",
      },
    ],
  };

  return (
    <main>
      <header>
        <nav>
          <img className="logo" src={outschool} alt="logo"></img>
          <ul className="list-heading">
            <li>
              <a href="#!">Courses</a>
            </li>
            <li>
              <a href="#!">Pricing</a>
            </li>
            <li>
              <a href="#!">About Us</a>
            </li>
            <li>
              <a href="#!">Contact Us</a>
            </li>
          </ul>
          <div className="action">
            <div className="action-btn">
              <img src={user} alt="user"></img>
              Account
            </div>
            <div className="action-btn">
              <img src={cart} alt="cart"></img>
              Cart
            </div>
          </div>
        </nav>
        <div className="content-heading">
          <div className="info">
            <div className="sub-title">
              <h1 className="title">Upgrade YOUR skills for better future</h1>
              <p className="desc">
                Lorem ipsum dolor sit amet consectetur. Erat in commodo in a.
                Sit interdum mi felis laoreet sagittis.{" "}
              </p>
              <div className="action">
                <div className="check-courses">
                  <a href="!#">Check courses</a>
                </div>
                <div className="learn-more">
                  <a href="!#">Learn More</a>
                </div>
              </div>
            </div>
          </div>
          <img src={saly} alt="saly"></img>
        </div>
      </header>
      <div className="companys">
        <div className="content">
          <h2 className="title">Our Company and Partners</h2>
          <ul className="list-company">
            <li>
              <img src={company} alt="company"></img>
            </li>
            <li>
              <img src={company1} alt="company"></img>
            </li>
            <li>
              <img src={company2} alt="company"></img>
            </li>
            <li>
              <img src={company3} alt="company"></img>
            </li>
            <li>
              <img src={company4} alt="company"></img>
            </li>
          </ul>
        </div>
      </div>
      <div className="courses">
        <div className="content">
          <h2 className="title">Our Courses</h2>
          <ul className="list-fill">
            {listFill.map((item, index) => (
              <li className="item-fill" key={index}>
                {item}
              </li>
            ))}
          </ul>
          <ul className="list-courses">
            {listCourses.data.map((item, index) => (
              <li className="item-courses" key={index}>
                <img className="title-img" src={item.image} alt=""></img>
                <div className="content-courses">
                  <div className="type">{item.type}</div>
                  <h3 className="title-courses">{item.title}</h3>
                  <p className="author">{item.author}</p>
                  <div className="rating">
                    <img src={star} alt="star"></img>
                    <img src={star} alt="star"></img>
                    <img src={star} alt="star"></img>
                    <img src={star} alt="star"></img>
                    <img src={star} alt="star"></img>
                    <p className="rating-point">{item.rating}</p>
                  </div>
                  <div className="action">
                    <p className="prince">$ {item.prince}</p>
                    <button className="btn-buy">Buy now</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="features">
        <div className="content">
          <h2 className="title">Our Features and Services</h2>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur. Euismod diam phasellus quis
            aliquet purus sem ornare mollis vulputate. Sapien purus faucibus
            massa pharetra.
          </p>
          <ul className="features">
            <li>
              <img src={key} alt={key}></img>
              <h3>Life Time Access</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in
                porttitor in sit sem eu, nunc diam. Quis nisi,{" "}
              </p>
            </li>
            <li>
              <img src={monitor} alt={key}></img>
              <h3>Online Classes</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in
                porttitor in sit sem eu, nunc diam. Quis nisi,{" "}
              </p>
            </li>
            <li>
              <img src={tabler} alt={key}></img>
              <h3>Get Certificate</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in
                porttitor in sit sem eu, nunc diam. Quis nisi,{" "}
              </p>
            </li>
            <li>
              <img src={user1} alt={key}></img>
              <h3>Expert Trainers</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in
                porttitor in sit sem eu, nunc diam. Quis nisi,{" "}
              </p>
            </li>
            <li>
              <img src={check} alt={key}></img>
              <h3>Great Result</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in
                porttitor in sit sem eu, nunc diam. Quis nisi,{" "}
              </p>
            </li>
            <li>
              <img src={dollar} alt={key}></img>
              <h3>Best Price</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in
                porttitor in sit sem eu, nunc diam. Quis nisi,{" "}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default App;
