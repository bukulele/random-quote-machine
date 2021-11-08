import styles from './text-box.module.css'

function TextBox({ animationName, color, quote, author }) {
    return (
        <div
            className={styles.textBlock}
            style={{ animationName: animationName }}
        >
            <p
                id="text"
                className={styles.text}
                style={{ color: color, transition: '1s ease' }}
            >
                {quote}
            </p>
            <p
                id="author"
                className={`${styles.author} ${styles.text}`}
                style={{ color: color, transition: '1s ease' }}
            >
                {'- ' + author}
            </p>
        </div>
    )
}

export default TextBox
