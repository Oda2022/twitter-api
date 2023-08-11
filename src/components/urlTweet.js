
import React from 'react';

export default function UrlTweet({ handleChange, input, error }) {
    return (
        <div className='searchurl'>

            <h3 className="input-instructions">Insertar POST</h3>
            <input
                type="text"
                onChange={handleChange}
                value={input}
                
                placeholder='https://twitter.com/post/status/123456789'
            />

            <p className="input-error">{error}</p>
        </div>
    )
}