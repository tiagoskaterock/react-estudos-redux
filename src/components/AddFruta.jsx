import React, { useState } from 'react';

function AddFruta() {
	
	const addNova = event => {
		event.preventDefault()
		const fruta = {
			id: new Date(),
			nome,
			qtd
		}
		console.log('addNova', fruta)
	}

	const [nome, setNome] = useState('')
	const [qtd, setQtd] = useState(0)

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

    	<button type="submit">Adicionar</button>
    </form>
  );
}

export default AddFruta;
