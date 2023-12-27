import React from 'react';

function Fruta(fruta) {
  return (
    <div className="fruta">
	    <ul>
	    	<li>
	    		<strong>Fruta: {fruta.nome}</strong>
	    	</li>

	    	<li>
	    		<strong>Quantidade.: {fruta.quantidade}</strong>
	    	</li>
	    </ul>

	    <button onClick={ () => alert(fruta.id) }>Rmover</button>
    </div>
  );
}

export default Fruta;
