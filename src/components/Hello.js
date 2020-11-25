import React from 'react'

const Hello = () => {

    // This is the JSX way of creating the component
    return (
        <div className='fooClass'>
            <h1>Hello World</h1>
        </div>
    )

    // This is the "raw" way of creating the component
    // return React.createElement(
    //     'div',
    //     { id: 'hello', className: 'fooClass' },
    //     React.createElement('h1', null, 'Hello World'))
}

export default Hello