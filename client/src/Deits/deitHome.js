import React from "react";
import BannerBackground from "../assets/deits/home-banner-background.png";
import BannerImage from "../assets/deits/home-banner-image.png";
import AboutBackground from "../assets/deits/about-background.png";
import AboutBackgroundImage from "../assets/deits/about-background-image.png";
import ProfilePic from "../assets/deits/john-doe-image.png";
import healthyeat from "../assets/deits/healthyeat.png";
const deitHome = () => {
  return (
    <>
      <section>
        <div className="home-container">
          <div className="home-banner-container">
            <div className="home-bannerImage-container">
              <img src={BannerBackground} alt="" />
            </div>
            <div className="home-text-section">
              <h1 className="primary-heading">Healthy food first </h1>
              <p className="primary-text">
                A healthy diet is a balanced eating plan that provides essential
                nutrients, vitamins, and minerals to support overall health and
                well-being. It typically includes a variety of fruits,
                vegetables, whole grains, lean proteins, and healthy fats. By
                following a healthy diet, individuals can improve their energy
                levels, maintain a healthy weight, reduce the risk of chronic
                diseases, and promote optimal physical and mental functioning.
              </p>
            </div>
            <div className="home-image-section">
              <img src={BannerImage} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="about-section-container">
          <div className="about-background-image-container">
            <img src={AboutBackground} alt="" />
          </div>
          <div className="about-section-image-container">
            <img src={AboutBackgroundImage} alt="" />
          </div>
          <div className="about-section-text-container">
            <p className="primary-subheading"></p>
            <h1 className="primary-heading">Why does eating healthy matter?</h1>
            <p className="primary-text">
              First, food is what fuels you and delivers the calories and
              nutrients your body needs to function. If your diet is deficient
              in calories or one or more nutrients, your health may suffer.
              Likewise, if you eat too many calories, you may experience weight
              gain. People with obesity have a significantly increased risk of
              illnesses like type 2 diabetes, obstructive sleep apnea, and
              heart, liver, and kidney disease
              <br></br>
              While diets rich in ultra-processed foods are linked to increased
              mortality and a greater risk of conditions like cancer and heart
              disease, diets comprising mostly whole, nutrient-dense foods are
              associated with increased longevity and disease protection . Diets
              rich in highly processed foods may also increase the risk of
              depressive symptoms.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="about-section-container">
          <div className="about-background-image-container">
            <img src={AboutBackground} alt="" />
          </div>
          <div className="about-section-image-container">
            <img src={healthyeat} alt="" />
          </div>
          <div className="about-section-text-container">
            <h2 className="primary-heading">The basics of healthy eating</h2>
            <p className="primary-subheading"> Nutrient Density</p>
            <p className="primary-text">
              Nutrients, including protein, carbs, fat, vitamins, and minerals,
              are what your body needs to thrive. “Nutrient density” refers to
              the amount of nutrients in a food in relation to the calories it
              provides
            </p>

            <p className="primary-subheading"> Diet Diversity</p>
            <p className="primary-text">
              Another component of healthy eating is dietary diversity, meaning
              eating a variety of foods. Following a diet that’s rich in
              different kinds of food supports your gut bacteria, promotes a
              healthy body weight,
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="work-section-wrapper">
          <div className="work-section-top">
            <p className="primary-subheading"></p>
            <h1 className="primary-subheading">What Are Doctors Saying</h1>
            <p className="primary-text">
              What doctors wish patients knew about healthy eating
            </p>
          </div>
          <div className="testimonial-section-bottom">
            <img src={ProfilePic} alt="" />
            <p>
              “Even when medication is required, it's important to emphasize to
              patients that medication alone can't do it all.” “Optimal health
              will always require attention to nutrition and lifestyle,” he said
            </p>

            <h2>Dr. John Doe</h2>
          </div>
        </div>
      </section>
      <section>
        <div className="contact-page-wrapper">
          <h1 className="primary-heading">Have Question In Mind?</h1>
          <h1 className="primary-heading">Let Us Help You</h1>
          <div className="contact-form-container">
            <input type="text" placeholder="yourmail@gmail.com" />
            <button className="secondary-button">Submit</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default deitHome;
