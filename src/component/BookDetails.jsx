const BookDetails = ({ title, authors, thumbnail }) => {
  return (
    <div>
      {thumbnail && (
        <img
          src={thumbnail}
          alt={`Cover of ${title}`}
          style={{ maxWidth: "200px", marginBottom: "10px" }}
        />
      )}
      <h1>{title}</h1>
      <h2>By: {authors.join(", ")}</h2>
    </div>
  );
};

export default BookDetails;
