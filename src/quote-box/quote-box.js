import React, { useState, useEffect } from 'react'
import '../index.css'
import ButtonsBlock from '../buttons-block/buttons-block'
import TextBox from '../text-box/text-box'
import QuoteHistory from '../quote-history/quote-history'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import Button from '../button/button'
import copy from 'copy-to-clipboard'
import styles from './quote-box.module.css'

function QuoteBox() {
    const [quote, setQuote] = useState('')
    const [author, setAuthor] = useState('')
    const [quoteStatus, setQuoteStatus] = useState(false)
    const [quoteHistory, setQuoteHistory] = useState([])
    const [displayHistory, setDisplayHistory] = useState(false)
    const [mainColor, setMainColor] = useState(MAINCOLOR)
    const [animationName, setAnimationName] = useState('fadein')

    let styleMainColor = {
        backgroundColor: mainColor,
        transition: 'background-color 1s ease',
    }

    function loadNewQuote() {
        setAnimationName('fadeout')
        setQuoteStatus(!quoteStatus)
        setMainColor(MAINCOLOR)
    }

    function copyToClipboard() {
        copy(`"${quote}" ${author}`)
    }

    function clearHistory() {
        setQuoteHistory([])
        toggleDisplayHistory()
    }

    function toggleDisplayHistory() {
        setDisplayHistory(!displayHistory)
    }

    function MAINCOLOR() {
        let hue = Math.random() * (360 - 1)
        let color = `hsl(${hue}, 60%, 69%)`
        return color
    }
    useEffect(() => {
        let url = 'https://api.quotable.io/random'
        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then(
                (result) => {
                    setAnimationName('fadein')
                    setQuote(result.content)
                    setAuthor(result.author)
                    setQuoteHistory((quoteHistory) => [
                        ...quoteHistory,
                        {
                            quote: result.content,
                            author: result.author,
                        },
                    ])
                },
                (error) => {
                    console.log(error.toString())
                }
            )
    }, [quoteStatus])

    return (
        <div className="container" style={styleMainColor}>
            <div
                id="quote-box"
                className={styles.quoteBox}
                style={{
                    display: displayHistory ? 'none' : 'grid',
                }}
            >
                <div className={styles.upperBlock}>
                    <Button
                        onClick={copyToClipboard}
                        icon={faClone}
                        style={styleMainColor}
                        title={'Copy'}
                    />
                </div>
                <div
                    className={styles.quoteImage}
                    style={{ color: mainColor, transition: '1s ease' }}
                >
                    <FontAwesomeIcon icon={faQuoteLeft} />
                </div>

                <TextBox
                    quote={quote}
                    author={author}
                    color={mainColor}
                    quoteStatus={quoteStatus}
                    animationName={animationName}
                />
                <ButtonsBlock
                    loadNewQuote={loadNewQuote}
                    quote={quote}
                    author={author}
                    toggleDisplayHistory={toggleDisplayHistory}
                    style={styleMainColor}
                />
            </div>
            <QuoteHistory
                quoteHistory={quoteHistory}
                displayHistory={displayHistory}
                toggleDisplayHistory={toggleDisplayHistory}
                clearHistory={clearHistory}
                style={styleMainColor}
                mainColor={mainColor}
            />
        </div>
    )
}

export default QuoteBox
