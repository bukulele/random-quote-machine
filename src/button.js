import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Button(props) {
    const [opacity, setOpacity] = useState(1)

    function onMouseEnter() {
        setOpacity(0.75)
    }

    function onMouseLeave() {
        setOpacity(1)
    }

    let style = {
        ...props.style,
        opacity: opacity,
    }

    return (
        <button
            id={props.id}
            className={'button ' + props.className}
            onClick={props.onClick}
            style={style}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            title={props.title}
        >
            <FontAwesomeIcon icon={props.icon} /> {props.ahref}
        </button>
    )
}

export default Button
