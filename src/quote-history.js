import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTrashAlt,
    faTimesCircle,
    faQuoteLeft,
} from '@fortawesome/free-solid-svg-icons'
import Button from './button'

function QuoteHistory(props) {
    let history = props.quoteHistory.map((element, index) => (
        <li
            key={element.quote + index}
            style={{ color: props.mainColor }}
        >{`${element.quote} ${element.author}`}</li>
    ))
    return (
        <div
            className="quote-history"
            style={{ display: props.displayHistory ? 'grid' : 'none' }}
        >
            <div className="upper-block">
                <Button
                    onClick={props.toggleDisplayHistory}
                    style={props.style}
                    icon={faTimesCircle}
                    title={'Close'}
                />
            </div>
            <div className="quote-image" style={{ color: props.mainColor }}>
                <FontAwesomeIcon icon={faQuoteLeft} />
            </div>
            <div className="text-block">
                <ul>{history}</ul>
            </div>
            <div className="bottom-block">
                <Button
                    className="button"
                    onClick={props.clearHistory}
                    style={props.style}
                    icon={faTrashAlt}
                    title={'Clear history'}
                />
            </div>
        </div>
    )
}

export default QuoteHistory
