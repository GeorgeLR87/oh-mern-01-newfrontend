
import { useReducer } from 'react'
import StoreContext from './StoreContext'

import StoreReducer from './StoreReducer'

import axiosClient from '../../config/axios'

const StoreState = (props) => {

	// 1. INITIAL STATE (ESTADO INICIAL)
	const initialState = {
		stores: [],
		singleStore: {
			_id: "",
			domicilio: "",
			telefono: ""
		},
		hola: "mundo"
	}

	// 2. CONFIGURACIÓN DE REDUCER Y CREACIÓN DE ESTADO GLOBAL
	const [globalState, dispatch] = useReducer(StoreReducer, initialState)

	// 3. FUNCIONES DE CAMBIO EN ESTADO GLOBAL
	const changeText = () => {

		dispatch({ // ESTE OBJETO SE LE CONOCE COMO ACTION
			type: "CHANGE_TEXT",
			payload: "Estoy aprendiendo Context sin morir." 		
		})

	}

	const getStores = async () => {

		const res = await axiosClient.get("stores/readall")

		console.log("Obteniendo tiendas...")
		
		const list = res.data.data

		dispatch({
			type: "GET_STORES",
			payload: list
		})

	}

	const getStore = async (storeId) => {
		
		const res = await axiosClient.get(`stores/readone/${storeId}`)

		const selectedStore = res.data.data

		dispatch({
			type: "GET_STORE",
			payload: selectedStore
		})

	}



	// 4. RETORNO
	return (
		<StoreContext.Provider
			value={{
				stores: globalState.stores,
				hola: globalState.hola,			
				singleStore: globalState.singleStore,
				changeText,
				getStores,
				getStore

			}}
		>
			{props.children}
		</StoreContext.Provider>
	)


}

export default StoreState