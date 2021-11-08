import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTrashAlt,
    faTimesCircle,
    faQuoteLeft,
} from '@fortawesome/free-solid-svg-icons'
import Button from '../button/button'
import styles from './quote-history.module.css'

function QuoteHistory({
    quoteHistory,
    mainColor,
    displayHistory,
    toggleDisplayHistory,
    style,
    clearHistory,
}) {
    let history = quoteHistory.map((element, index) => (
        <li
            key={element.quote + index}
            style={{ color: mainColor }}
        >{`${element.quote} ${element.author}`}</li>
    ))
    return (
        <div
            className={styles.quoteHistory}
            style={{ display: displayHistory ? 'grid' : 'none' }}
        >
            <div className={styles.upperBlock}>
                <Button
                    onClick={toggleDisplayHistory}
                    style={style}
                    icon={faTimesCircle}
                    title={'Close'}
                />
            </div>
            <div className={styles.quoteImage} style={{ color: mainColor }}>
                <FontAwesomeIcon icon={faQuoteLeft} />
            </div>
            <div className={styles.textBlock}>
                <ul>{history}</ul>
            </div>
            <div className={styles.bottomBlock}>
                <Button
                    onClick={clearHistory}
                    style={style}
                    icon={faTrashAlt}
                    title={'Clear history'}
                />
            </div>
        </div>
    )
}

export default QuoteHistory
