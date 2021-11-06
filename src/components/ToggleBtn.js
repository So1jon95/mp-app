import React, {useState} from 'react'

export default function ToggleBtn() {
  const [toggleBtn, setToggleBtn] = useState(false);

    return (
        <div>
        <button
          onClick={() => setToggleBtn(!toggleBtn)}
          className="btn btn-secondary my-2"
        >
          Toggle Btn
        </button>
        
        {toggleBtn 
        ? <p className="lead">My Content</p> 

        : null
        }
        </div>
    )
}
