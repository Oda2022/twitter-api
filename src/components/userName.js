
import React from 'react';

export default function UserName({ handleUsernameChange, usernameInput}) {
    return (
        <div className='searchurl'>

            {/* <h3 className="input-instructions">Nombre de usuario</h3> */}
            <input
                type="text"
                onChange={handleUsernameChange}
                value={usernameInput}
                
                placeholder='Username'
                autoFocus
            />

            
        </div>
    )
}