import { ArrowLeft, ArrowRight } from "./Icons";
import "../styles/listButtons.css";

export function ListButtons({ handlePrevPage, handleNextPage }) {
  return (
    <section className="list-button">
      <button className="button" onClick={handlePrevPage}>
        <ArrowLeft
          color={"var(--primary-color)"}
          width={"30px"}
          height={"30px"}
        />
      </button>
      <button className="button" onClick={handleNextPage}>
        <ArrowRight
          color={"var(--primary-color)"}
          width={"30px"}
          height={"30px"}
        />
      </button>
    </section>
  );
}
