export default function RatingLine({ id, stars, note }) {
  const filled = '★'.repeat(stars);
  const empty = '☆'.repeat(5 - stars);
  return (
    <div className="rating" id={id}>
      <span className="stars">
        {filled}
        <span className="empty">{empty}</span>
      </span>
      <span className="note">{note}</span>
    </div>
  );
}
