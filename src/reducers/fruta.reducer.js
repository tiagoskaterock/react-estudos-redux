const INITIAL_STATE = {
	frutas: [
		{ id: 10, nome: 'Melão', qtd: 5 },
		{ id: 20, nome: 'Banana', qtd: 2 },
		{ id: 30, nome: 'Uva', qtd: 7 },
		{ id: 40, nome: 'Pêssego', qtd: 1 }
	]
}

const reducers = {state = INITIAL_STATE, action} => {
	if(action.type == 'ADICIONAR_FRUTA') {
		return { frutas: [..state.frutas, {...action.payload}] }
	}
	elseif(action.type == 'REMOVER_FRUTA') {
		return { frutas: state.frutas.filter( x => x.id !== action.payload.id ) }
	}
	return state
}

export { reducers }
