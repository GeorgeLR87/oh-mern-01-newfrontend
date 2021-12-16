import React, { useContext, useEffect } from 'react'
import StoreContext from '../../../context/Store/StoreContext'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
export default function Single() {
	const ctx = useContext(StoreContext)
	const { getStore, singleStore } = ctx
	const params = useParams()
	const id = params.id
	useEffect(() => {
		getStore(id)
	}, [])
	return (
		<>
		

		<div>

		<div class="mt-4 flex md:mt-0">
						<Link to={`/stores/${id}/editarStores`}>
							<button type="button" class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								Editar Tienda
							</button>
						</Link>
					</div>

			<div className="bg-white">
				<div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
					<div className="lg:max-w-lg lg:self-end">
						
						<div className="mt-4">
							<h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Domicilio{singleStore.domicilio}</h1>
						</div>
						<section aria-labelledby="information-heading" className="mt-4">
						
							<div className="flex items-center">
								<p className="text-lg text-gray-900 sm:text-xl">Telefono ${singleStore.telefono}</p>
								
							</div>
							
							
						</section>
					</div>
					

				</div>
			</div>
		</div>
		</>
	)
}