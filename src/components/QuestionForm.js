import { useState } from 'react'




function QuestionForm() {
    const[inputValue, setInputValue] = useState('Posez votre question')
    const isInputError = inputValue.includes('f') 
    {isInputError && (
        <div>🔥 Vous n'avez pas le droit d'utiliser la lettre "f" ici.</div>
    )}

    return (
        <div>
            <textarea 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value) }
            />
            <button onClick={() =>alert(inputValue) } >Alertez moi 🚨</button>
        </div>
        
    )
}

export default QuestionForm;