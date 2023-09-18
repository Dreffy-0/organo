import { useState } from "react";
import Banner from "./assets/Banner";
import Formulario from "./assets/Formulario";
import Time from "./assets/Time";
import Rodape from "./assets/Rodape";

import { v4 as uuidv4 } from "uuid";

function App() {
	const [times, setTimes] = useState([
		{
			id: uuidv4(),
			nome: "Programação",
			cor: "#57C278",
		},
		{
			id: uuidv4(),
			nome: "Front-end",
			cor: "#82CFFA",
		},
		{
			id: uuidv4(),
			nome: "Data Science",
			cor: "#A6D157",
		},
		{
			id: uuidv4(),
			nome: "DevOps",
			cor: "#E06B69",
		},
		{
			id: uuidv4(),
			nome: "UX e Design",
			cor: "#DB6EBF",
		},
		{
			id: uuidv4(),
			nome: "Mobile",
			cor: "#FFBA05",
		},
		{
			id: uuidv4(),
			nome: "Inovação e Gestão",
			cor: "#FF8A29",
		},
	]);

	const [colaboradores, setColaboradores] = useState([]);

	const [mostrarFormulario, setMostrarFormulario] = useState(false);

	const alternarFormulario = () => setMostrarFormulario(!mostrarFormulario);

	const NovoColaboradorCadastrado = colaborador => {
		setColaboradores([...colaboradores, colaborador]);
	};

	function cadastrarTime(novoTime) {
		setTimes([...times, { ...novoTime, id: uuidv4() }]);
	}

	function deletarColaborador(id) {
		setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
	}

	function mudarCorTime(cor, id) {
		setTimes(
			times.map(time => {
				if (time.id === id) {
					time.cor = cor;
				}
				return time;
			}),
		);
	}

	function alternarFavorito(id) {
		setColaboradores(
			colaboradores.map(colaborador => {
				if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
				return colaborador;
			}),
		);
	}

	return (
		<div className="App">
			<Banner />
			{mostrarFormulario ? (
				<Formulario times={times.map(time => time.nome)} aoCadastrar={colaborador => NovoColaboradorCadastrado(colaborador)} cadastrarTime={cadastrarTime} />
			) : null}
			<section className="times">
				<div className="cabecalho-times">
					<h1>Minha organização</h1>
					<img src="/images/BotaoAlternarFormulario.png" onClick={alternarFormulario} className="alternarFormulario" />
				</div>
				{times.map((time, indice) => (
					<Time
						key={indice}
						time={time}
						mudarCor={mudarCorTime}
						colaboradores={colaboradores.filter(colaborador => colaborador.time == time.nome)}
						aoDeletar={deletarColaborador}
						aoFavoritar={alternarFavorito}
					/>
				))}
			</section>
			<Rodape />
		</div>
	);
}

export default App;
