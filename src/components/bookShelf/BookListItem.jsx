import React from "react";
import star from "../../assets/star.svg";
import bookImage from "../../assets/book.png";
import FavoriteButton from "./FavoriteButton";

export default function BookListItem(props) {
  const { data } = props;
  return (
    <div className="space-y-3">
      {/*thumbnail */}
      <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
        <img className="max-w-[144px]" src={bookImage} alt="book name" />
      </div>
      {/*info */}
      <div className="space-y-3">
        <h4 className="text-lg font-bold lg:text-xl">
          {data?.name} ({data?.published_year})
        </h4>
        <p className="text-xs lg:text-sm">
          By : <span>{data?.author}</span>
        </p>
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-bold lg:text-xl">{data?.price}</h4>
          {/*stars */}
          <div className="flex items-center space-x-1">
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <span className="text-xs lg:text-sm">(4 Star)</span>
          </div>
          {/*stars ends */}
        </div>

        <div className="flex items-center gap-3 text-xs lg:text-sm">
          <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            Add to Cart
          </button>

          <FavoriteButton {...props} />
        </div>
      </div>
    </div>
  );
}
