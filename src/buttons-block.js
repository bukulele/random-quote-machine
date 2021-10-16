import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import {
    faHistory,
    faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons'
import Button from './button'

function ButtonsBlock(props) {
    let quote = props.quote
    let author = props.author
    let url = `https://twitter.com/intent/tweet?text="${quote}" ${author} %23quotes`
    let ahref = <a id="tweet-quote" href={url} target="_blank"></a>
    return (
        <div className="bottom-block">
            <Button
                className="button-tweet"
                id="tweet"
                style={props.style}
                icon={faTwitter}
                ahref={ahref}
                title={'TWEET'}
            />

            <Button
                id="button-history"
                className="button-history"
                onClick={props.toggleDisplayHistory}
                style={props.style}
                icon={faHistory}
                title={'History'}
            />
            <Button
                id="new-quote"
                className="button-new-quote"
                onClick={props.loadNewQuote}
                style={props.style}
                icon={faChevronCircleRight}
                title={'New quote'}
            />
        </div>
    )
}

export default ButtonsBlock
