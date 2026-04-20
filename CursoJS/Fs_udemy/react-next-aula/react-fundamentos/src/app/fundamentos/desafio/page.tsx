'use client'

import { useState } from "react"

export default function Page() {

    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)
    const [resultado, setResultado] = useState('')

    function calcularImc() {
        if(peso && altura) {

            const imc = peso / (altura*altura)

            console.log('imc: ', imc)

            if(imc <= 18) {
                setResultado( 'Abaixo do peso' )
            }else if(imc > 18 && imc < 25) {
                setResultado( 'Normal' )
            }else {
                setResultado( 'Sobrepeso' )
            }

        }else {
            alert('Digite peso e altura para calcular!')
        }
    }

    return(
        <div className="p-3">

            <h1>Cálculo IMC</h1>
            <hr />

            <p>Digite seu peso</p>

            <input 
            placeholder="ex: 90"
            type="number" 
            className="campo-texto"
            onChange={e => setPeso( Number(e.target.value) )}
            /> KG

            <p>Digite sua altura</p>

            <input 
            placeholder="ex: 1.73"
            type="number" 
            className="campo-texto"
            onChange={e => setAltura( Number(e.target.value) )}
            /> m

            <br />
            <br />

            <button 
            className="botao"
            onClick={calcularImc}
            >
                Calcular
            </button>
            <br />

            <p>Resultado: {resultado}</p>

        </div>
    )
}