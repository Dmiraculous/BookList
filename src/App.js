import React from "react";
import "./index.scss";
import Home from "./Component/HomePage";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const BookReview = () => {
  return (
    <>
      <Home />
      <h1 className="text-tittle">BOOK LIST</h1>
      <div className="firstGroup">
        <Book
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEubihVkM502lzSnniS-uBmRSCpvmx8KjX1w&usqp=CAU"
          alt="book"
          tittle="Be good"
          author="Richee"
        />

        <Book
          image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTmTmUYNY09U8zY8msaPOzD3DGqCzsGuEO-WiFByaOXxakrcb57bG5kO9P0tfa12o4tk81QkW0qlrc&usqp=CAc"
          alt="book"
          tittle="The power of focus"
          author="David"
        />

        <Book
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmTicXlTVN59GbOQUShPoyxyrzmoALFsyHZA&usqp=CAU"
          alt="book"
          tittle="Normal people"
          author="Rooney"
        />

        <Book
          image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRuslN3x5u2LEfmYbCurPSYhoAJJqkFtn_e_R23DE3gBG2gxqxPkeVLqOcWZs2R2wYKbpDOAJrYiQ&usqp=CAc"
          alt="book"
          tittle="Think Big"
          author="Ben"
        />
        <Book
          image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSTSgZvPkj9eMP3F5iapnnLVg-GEJYN7gUYOEVaiImTRp8-K4uItdpEvsV04FMNeZvEg7o3hrPNsQ&usqp=CAc"
          alt="book"
          tittle="How to talk"
          author="Larry"
        />

        <Book
          image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRKF6vV2OnSVL20zeDvwZwDgPO_LWlKmohNDXbjzUWuiKGpXmq4in4RJGxuB54y&usqp=CAc"
          alt="book"
          tittle="The power of focus"
          author="Jack"
        />
      </div>
    </>
  );
};
const Book = (props) => {
  return (
    <article>
      <div className="image-wrap">
        <img src={props.image} />
      </div>
      <h2>{props.tittle}</h2>
      <p>{props.author}</p>
    </article>
  );
};

export default BookReview;
