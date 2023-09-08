import { useState } from "react";
import Banner from "./assets/Banner";
import Formulario from "./assets/Formulario";
import Time from "./assets/Time";
import Rodape from "./assets/Rodape";

function App() {
	const times = [
		{
			nome: "Programação",
			corPrimaria: "#57C278",
			corSecundaria: "#D9F7E9",
		},
		{
			nome: "Front-end",
			corPrimaria: "#82CFFA",
			corSecundaria: "#E8F8FF",
		},
		{
			nome: "Data Science",
			corPrimaria: "#A6D157",
			corSecundaria: "#F0F8E2",
		},
		{
			nome: "DevOps",
			corPrimaria: "#E06B69",
			corSecundaria: "#FDE7E8",
		},
		{
			nome: "UX e Design",
			corPrimaria: "#DB6EBF",
			corSecundaria: "#FAE9F5",
		},
		{
			nome: "Mobile",
			corPrimaria: "#FFBA05",
			corSecundaria: "#FFF5D9",
		},
		{
			nome: "Inovação e Gestão",
			corPrimaria: "#FF8A29",
			corSecundaria: "#FFEEDF",
		},
	];

	const [colaboradores, setColaboradores] = useState([]);

	const NovoColaboradorCadastrado = colaborador => {
		setColaboradores([...colaboradores, colaborador]);
	};

	return (
		<div className="App">
			<Banner />
			<Formulario
				nomeTimes={times.map(time => time.nome)}
				colaboradorCadastrado={colaborador => NovoColaboradorCadastrado(colaborador)}
			/>

			{times.map(time => (
				<Time
					key={time.nome}
					nome={time.nome}
					corPrimaria={time.corPrimaria}
					corSecundaria={time.corSecundaria}
					colaboradores={colaboradores.filter(colaborador => colaborador.time == time.nome)}
				/>
			))}
			<Rodape />
		</div>
	);
}

export default App;
