import React from "react";
import Footerpg from "../../Components/Footer/Footer";
import "./Crusher.css";
import house from "../Assets/house.jpeg";
import bg from "../Assets/bg.jpg";
import img1 from "../Assets/ten.png";
import img2 from "../Assets/twentyone.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import crush from "../Assets/sand.png" ;
import sand from "../Assets/msand.png" ;

 const Crusher = () => {
  return (
    <div>
      <section>
        <div className="topimage">
          <div className="overlay"></div>
          <div className="heading">
            <h2>Yamai Stone Crusher</h2>
          </div>
          <div className="para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              autem laboriosam totam quia voluptatibus inventore sed quos unde
              facilis quis fugit magnam maiores omnis culpa, ducimus dolorum
              velit laudantium. Nobis distinctio maiores nemo corporis?
            </p>
          </div>
        </div>
        <div className="responsive-container-block bigContainer">
          <div className="responsive-container-block Container bottomContainer">
            <div class="ultimateImg">
              <div class="purpleBox">
                <p class="purpleText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                  purus lectus viverra in semper nec pretium mus.
                </p>
                <img src={house} className="stars" alt="" />
              </div>
            </div>
            <div className="allText bottomText">
              <p className="text-blk headingText">About Me</p>
              <p className="text-blk subHeadingText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className="text-blk description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fermentum pulvinar ullamcorper suspendisse ac eget. Pellentesque
                tempus leo in ullamcorper quis vestibulum ligula elementum ut.
              </p>
            </div>
          </div>
        </div>

        <div className="heading">
          <h2>Our Products</h2>
        </div>
        <div class="blog-slider">
          <div class="blog-slider__item ">
            <div class="blog-slider__img">
              <img src={img1} alt="" className="image" />
            </div>
            <div class="blog-slider__content">
              <h1>10mm Stone</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                odio explicabo adipisci minima! Veritatis saepe illum est
                consectetur eius natus earum beatae fuga.
              </p>
            </div>
          </div>
        </div>
        <div class="blog-slider">
        <div class="blog-slider__item2">
          <div class="blog-slider__img">
            <img src={img2} alt="" className="image2" />
          </div>
          <div class="blog-slider__content2">
            <h1>20mm Stone</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              odio explicabo adipisci minima! Veritatis saepe illum est
              consectetur eius natus earum beatae fuga.
            </p>
          </div>
        </div>
      </div>
      <div class="blog-slider">
      <div class="blog-slider__item ">
        <div class="blog-slider__img">
          <img src={sand} alt="" className="image4" />
        </div>
        <div class="blog-slider__content4">
          <h1>M - Sand</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            odio explicabo adipisci minima! Veritatis saepe illum est
            consectetur eius natus earum beatae fuga.
          </p>
        </div>
      </div>
    </div>
    <div class="blog-slider">
    <div class="blog-slider__item">
      <div class="blog-slider__img">
        <img src={crush} alt="" className="image3" />
      </div>
      <div class="blog-slider__content3">
        <h1>Crush Sand</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          odio explicabo adipisci minima! Veritatis saepe illum est
          consectetur eius natus earum beatae fuga.
        </p>
      </div>
    </div>
  </div>
        

        <div className="heading-images">
          <h2>Image Gallery</h2>
        </div>
        <div className="accordian">
          <ul>
            <li>
              <div className="image_title">
                <a href="#">Ksjd</a>
              </div>
              <a href="#">
                <img src={bg} className="xyz" />
              </a>
            </li>
            <li>
              <div className="image_title">
                <a href="#">Tojsndj</a>
              </div>
              <a href="#">
                <img src={bg} className="xyz" />
              </a>
            </li>
            <li>
              <div className="image_title">
                <a href="#">WallE</a>
              </div>
              <a href="#">
                <img src={bg} className="xyz" />
              </a>
            </li>
            <li>
              <div className="image_title">
                <a href="#">Secnd</a>
              </div>
              <a href="#">
                <img src={bg} className="xyz" />
              </a>
            </li>
            <li>
              <div className="image_title">
                <a href="#">lorem</a>
              </div>
              <a href="#">
                <img src={bg} className="xyz" />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <Footerpg />
    </div>
  );
};

export default Crusher;
