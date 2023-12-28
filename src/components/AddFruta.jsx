import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { actions } from '../actions/frutas.action'

function AddFruta() {
	
	const addNova = event => {
		event.preventDefault()
		const fruta = {
			id: new Date(),
			nome,
			qtd
		}
		dispatch(actions.adicionar(fruta))
	}

	const [nome, setNome] = useState('')
	const [qtd, setQtd] = useState(0)

	const dispatch = useDispatch()

  return (
    <form onSubmit={addNova}>
    	<h1>Adicionar Fruta</h1>
    	<input 
    		type='text' 
    		name={nome} 
    		placeholder="Nome da fruta" 
    		required 
    		onChange={ event => setNome(event.target.value) } 
    	/>

    	<input 
    		type='number' 
    		name={qtd} 
    		placeholder="Quantidade" 
    		required 
    		onChange={ event => setQtd(event.target.value) } 
    	/>
    	<br />
    	<button type="submit">Adicionar</button>
    </form>
  );
}

export default AddFruta;
