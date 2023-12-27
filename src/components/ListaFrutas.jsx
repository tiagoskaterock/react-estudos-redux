import React from 'react'
import Fruta from "./Fruta"
import frutas from "../data/frutasData"

function ListaFrutas() {
  return (
    <>
    	<h1>Lista</h1>
    	{	
    		frutas.map(fruta => 
    			( 
    			<Fruta 
    				nome={fruta.nome} key={fruta.id} id={fruta.id} qtd={fruta.qtd}
    			/> 
    			)
    		)
    	}
    </>
  );
}

export default ListaFrutas;
