import React from "react";

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      <span>
        <i
          style={{ color }}
          className={
            value >= 1
              ? "fa fa-star"
              : value >= 0.5
              ? "fa fa-star-half-o"
              : "fa fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 2
              ? "fa fa-star-o"
              : value >= 1.5
              ? "fa fa-star-half-o"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 3
              ? "fa fa-star-o"
              : value >= 2.5
              ? "fa fa-star-half-o"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 4
              ? "fa fa-star-o"
              : value >= 3.5
              ? "fa fa-star-half-o"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 5
              ? "fa fa-star-o"
              : value >= 4.5
              ? "fa fa-star-half-o"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: "#f8e825",
};

export default Rating;
