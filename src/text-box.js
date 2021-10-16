function TextBox(props) {
    return (
        <div
            className="text-block"
            style={{ animationName: props.animationName }}
        >
            <p id="text" style={{ color: props.color, transition: '1s ease' }}>
                {props.quote}
            </p>
            <p
                id="author"
                style={{ color: props.color, transition: '1s ease' }}
            >
                {'- ' + props.author}
            </p>
        </div>
    )
}

export default TextBox
