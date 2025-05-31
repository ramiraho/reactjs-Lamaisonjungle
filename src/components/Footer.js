import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

    function handleBlur() {
        if(!inputValue.includes('@')) {
            alert("attention, pas d'arobase, email non valide 🫠")
        }
    }

    function handleInput(e) {
        setInputValue(e.target.value)
    }

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <input 
                placeholder='Entrez votre mail'
                onChange={handleInput}
                value={inputValue}
                onBlur={handleBlur}
            />
		</footer>
	)
}

export default Footer