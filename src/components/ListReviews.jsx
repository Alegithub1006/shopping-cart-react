import "../styles/listReview.css";
import { Star } from "./Icons";

export function ListReview({ list }) {
  return (
    <ul className="list-review">
      {list.map((review, index) => (
        <li className="list-element" key={`${index}- ${review.rating}`}>
          <section className="element-header">
            <div className="element-rating">
              <Star
                width={"20px"}
                height={"20px"}
                color={"var(--primary-color)"}
              />
              <p className="review-rating">{review.rating}</p>
            </div>
            <p className="element-reviewerName">{review.reviewerName}</p>

            <p className="comment">{review.comment}</p>
            <span className="review-email">{review.reviewerEmail}</span>
          </section>
        </li>
      ))}
    </ul>
  );
}
