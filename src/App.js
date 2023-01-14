import "./App.scss";
import cart from "./assets/img/cart-shopping.svg";
import outschool from "./assets/img/Outschool.svg";
import user from "./assets/img/user.svg";
import saly from "./assets/img/Saly-10.png";
const App = () => {
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
    </main>
  );
};

export default App;
