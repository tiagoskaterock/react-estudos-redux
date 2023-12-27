import React from 'react';

function Fruta(props) {	
  return (
    <div className="fruta">
	    <ul>
	    	<li>
	    		<strong>Fruta: {props.nome}</strong>
	    	</li>

	    	<li>
	    		<strong>Quantidade: {props.qtd}</strong>
	    	</li>
	    </ul>

	    <button onClick={ () => alert(props.id) }>Remover</button>
    </div>
  );
}

export default Fruta;
