import React from 'react'
import ReactDOM from 'react-dom'

const render = () => {
    const MOUNT_ID = 'app'

    const rootElement =
        document.getElementById(MOUNT_ID) ??
        (() => {
            const el = document.createElement('div')
            el.id = MOUNT_ID
            document.body.appendChild(el)
            return el
        })()

    ReactDOM.render(<div>Boilerplate</div>, rootElement)
}

render()
