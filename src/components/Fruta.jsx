import React from 'react';
import { useDispatch } from 'react-redux'
import { actions } from '../actions/frutas.action'

function Fruta(fruta) {	
	const dispatch = useDispatch()
  return (
    <div className="fruta">
	    <ul>
	    	<li>
	    		<strong>Fruta: {fruta.nome}</strong>
	    	</li>

	    	<li>
	    		<strong>Quantidade: {fruta.qtd}</strong>
	    	</li>
	    </ul>

	    <button onClick={ () => dispatch(actions.remover(fruta)) }>Remover</button>
    </div>
  );
}

export default Fruta;
