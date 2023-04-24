import React from "react";
import profileImage from "../assets/images/image-profile.jpg";
const About = () => {
  return (
    <div className="about-container-block">
      <h3>A propos de Moi</h3>
      <div className="about-container">
        <div className="about">
          <div className="about-left">
            <p>
              Hello! My name is Hamed and I enjoy creating things that live on
              the internet. My interest in web development started back in 2012
              when I decided to try editing custom Tumblr themes — turns out
              hacking together a custom reblog button taught me a lot about HTML
              & CSS! Fast-forward to today, and I've had the privilege of
              working at an advertising agency, a start-up, a huge corporation,
              and a student-led design studio. My main focus these days is
              building accessible, inclusive products and digital experiences at
              Upstatement for a variety of clients. I also recently launched a
              course that covers everything you need to build a web app with the
              Spotify API using Node
            </p>
          </div>
          <div className="about-right">
            <img src={profileImage} alt="image de profil" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
