// import React from 'react'

import { useParams } from "react-router-dom";
import { useContextGlobalDentist } from "../Context/Context";
import { useEffect, useState } from "react";
import axios from "axios";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
	// Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

	const { id } = useParams();
	const url = `https://jsonplaceholder.typicode.com/users/${id}`;
	const [dentist, setDentist] = useState(null);

	useEffect(() => {
		axios(url)
			.then(res => setDentist(res.data))
			.catch(err => console.log(err));
	}, []);

	return (
		<>
			<h1>Detail Dentist id </h1>
			{!dentist ? (
				<h2>No se encuentran dentistas</h2>
			) : (
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>E-mail</th>
							<th>Phone</th>
							<th>Website</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{dentist.name}</td>
							<td>{dentist.email}</td>
							<td>{dentist.phone}</td>
							<td>{dentist.website}</td>
						</tr>
					</tbody>
				</table>
			)}
			{/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
			{/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
		</>
	);
};

export default Detail;
