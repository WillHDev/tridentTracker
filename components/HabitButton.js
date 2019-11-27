import { useState } from 'react'

const HabbitButton = () => {

    const [complete, setComplete ] = useState(false);
    
    
    return (
        <button onClick={() => setComplete(!complete)}>
            {complete ? 'X' : 'O'}
        </button>
    )
}

export default HabbitButton;