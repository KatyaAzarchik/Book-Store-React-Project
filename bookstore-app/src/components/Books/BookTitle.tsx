import "../Books/Books/books.scss";

type IBooksTitle = {
  title: string;
};

export const BookTitle = (pros: IBooksTitle) => {
  return <h2 className="newReleasesBooks-title">{pros.title}</h2>;
};
