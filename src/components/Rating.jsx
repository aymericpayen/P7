import emptyStar from "@/assets/images/star-empty.svg";
import fullStar from "@/assets/images/star.svg";

function Rating(rating) {
  const score = rating.score;
  const notes = [1, 2, 3, 4, 5];
  return (
    <div className="rating-info">
      {notes.map((note) =>
        score >= note ? (
          <img
            key={note.toString()}
            className="star"
            src={fullStar}
            alt="star"
          />
        ) : (
          <img
            key={note.toString()}
            className="star"
            src={emptyStar}
            alt="star"
          />
        )
      )}
    </div>
  );
}

export default Rating;
