import React, { Fragment, useState } from "react";

import FilterSection from "./FilterSection";
import books from "./../../sampleData.jsx";
import BookListItem from "./BookListItem.jsx";

export default function BookShelf() {
  const [myBookList, setmyBookList] = useState(books);

  const handleFavourite = (id) => {
    let newBookList = [...myBookList];
    let index = newBookList.findIndex((d) => d?.id === id);
    newBookList[index].is_favourite = !newBookList[index].is_favourite;
    setmyBookList([...newBookList]);
  };

  const handleSort = (e) => {
    let newBookList = [...myBookList];

    switch (e.target.value) {
      case "name_asc":
        newBookList.sort(
          (p1, p2) => (p1.name?.toLowerCase() > p2.name?.toLowerCase()) ? 1 : -1);

        break;
      case "name_desc":
        newBookList.sort(
          (p1, p2) => (p1.name?.toLowerCase() < p2.name?.toLowerCase()) ? 1 : -1);
        break;
      case "year_asc":
        newBookList.sort(
          (p1, p2) => (p1.published_year > p2.published_year) ? 1 : -1);
        break;
      case "year_desc":
        newBookList.sort(
          (p1, p2) => (p1.published_year < p2.published_year) ? 1 : -1);
        break;

      case "":
      default:
        newBookList = [...books];
        break;
    }

    setmyBookList(newBookList);
  };

  const handleSearch = (text) => {
    if (text?.trim()?.length === 0) {
      setmyBookList(books)
      return
    }
    setmyBookList(books.filter(d => d?.name?.toLowerCase()?.includes(text?.toLowerCase())))
  }

  return (
    <div className="my-10 lg:my-14">
      <FilterSection onChangeSort={handleSort} onSearch={handleSearch} />
      <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {myBookList?.length > 0 ? (<>
          {myBookList?.map((book) => (
            <Fragment key={book?.id}>
              <BookListItem data={book} onHandleFavourite={handleFavourite} />
            </Fragment>
          ))}</>) : (<h6 className="mb-2 text-base lg:text-xl">No book found!</h6>)}

      </div>
    </div>
  );
}
