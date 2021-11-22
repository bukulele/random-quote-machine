import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faHistory,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../button/button";
import styles from "./buttons-block.module.css";

function ButtonsBlock({
  quote,
  author,
  style,
  toggleDisplayHistory,
  loadNewQuote,
}) {
  let url = `https://twitter.com/intent/tweet?text="${quote}" ${author} %23quotes`;
  let ahref = (
    <a
      id="tweet-quote"
      className={styles.tweetQuote}
      href={url}
      target="_blank"
    ></a>
  );
  return (
    <div className={styles.bottomBlock}>
      <Button
        id="tweet"
        style={style}
        icon={faTwitter}
        ahref={ahref}
        title={"TWEET"}
      />

      <Button
        id="button-history"
        onClick={toggleDisplayHistory}
        style={style}
        icon={faHistory}
        title={"History"}
      />
      <Button
        id="new-quote"
        onClick={loadNewQuote}
        style={style}
        icon={faChevronCircleRight}
        title={"New quote"}
      />
    </div>
  );
}

export default ButtonsBlock;
