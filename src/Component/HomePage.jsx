import React from "react";
const Home = () => {
  return (
    <section className="home-style">
      <h1 className="home-title">THE BOOK HUB</h1>
      <div className="flex">
        <div className="hero-contact">
          <h2>Have you read a book today?</h2>
          <div className="hero-book">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRin0UyYQi2HxRQcwsOqr09O7R3C2AyGOe8xsMcFyd6T_BIXmYC2TaOZBSNk1hRhhp0MU&usqp=CAU" />
          </div>

          <button>Sign-up</button>

          <h3 className="contact-title">Contact</h3>
          <p>
            Need to Contact Us or <br></br>send Us a Message
          </p>
          <button className="btn2">
            <a href="#"> +234-567-8970-9987</a>
          </button>
          <br></br>
          <button className="btn2">
            <a href="#">bookhub@gmail.com </a>
          </button>
        </div>

        <form>
          <fieldset>
            <legend>login</legend>
            <input type="text" placeholder="enter your name" />
            <br></br>
            <input type="email" placeholder="enter your email" />
            <br></br>
            <input type="number" placeholder="enter your registraion code" />
            <br></br>
            <button className="btn3">Submit</button>
          </fieldset>
        </form>
      </div>
      <hr></hr>
      <p className="hr-text">copyright@2022...All rights reserved</p>
    </section>
  );
};
export default Home;
