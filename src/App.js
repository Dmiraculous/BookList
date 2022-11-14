import React from "react";
import "./index.scss";
import { ReactDOM } from "react";
const BookReview = () => {
  return (
    <>
      <Book
        image="https://static.independent.co.uk/2020/12/11/11/sally-rooney-normal-people-indybest.jpg?quality=75&width=982&height=726&auto=webp"
        tittle="Be good"
        author="Richee"
      />
      <Book
        image="https://www.google.com/aclk?sa=l&ai=DChcSEwiPiuqw_az7AhUZ43cKHU_dDpMYABANGgJlZg&sig=AOD64_2SJDvOUuilLUzijlLAw8HRrHdFGQ&adurl&ctype=5&ved=2ahUKEwjCwd2w_az7AhUSWxoKHWckCGAQvhd6BAgBEGc"
        tittle="only me"
        author="wendy"
      />

      <Book
        image="https://www.google.com/aclk?sa=l&ai=DChcSEwiPiuqw_az7AhUZ43cKHU_dDpMYABAJGgJlZg&sig=AOD64_2Y32OlaCbyWvdhq4IEXXh2bmeZTg&adurl&ctype=5&ved=2ahUKEwjCwd2w_az7AhUSWxoKHWckCGAQvhd6BAgBEF0"
        tittle="The power of focus"
        author="Jack"
      />
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
