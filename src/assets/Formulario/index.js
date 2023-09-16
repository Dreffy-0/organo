import { useState } from "react";
import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";
import { v4 as uuidv4 } from "uuid";

const Formulario = ({ aoCadastrar, times, cadastrarTime }) => {
	const id = uuidv4();
	const [nome, setNome] = useState("");
	const [cargo, setCargo] = useState("");
	const [imagem, setImagem] = useState("");
	const [time, setTime] = useState("");
	const [nomeTime, setNomeTime] = useState("");
	const [corTime, setCorTime] = useState("#000000");

	const aoSalvar = evento => {
		evento.preventDefault();
		aoCadastrar({
			id,
			favorito: false,
			nome,
			cargo,
			imagem,
			time,
		});
		setNome("");
		setCargo("");
		setImagem("");
		setTime("");
	};
	return (
		<section className="formulario-container">
			<form className="formulario" onSubmit={aoSalvar}>
				<h2>Preencha os dados para criar um card do colaborador.</h2>

				<Campo obrigatorio={true} label="Nome" placeholder="Digite o seu nome" valor={nome} aoAlterado={valor => setNome(valor)} />

				<Campo obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo" valor={cargo} aoAlterado={valor => setCargo(valor)} />

				<Campo label="Imagem" placeholder="Informe o endereço da imagem" valor={imagem} aoAlterado={valor => setImagem(valor)} />

				<ListaSuspensa obrigatorio={true} label="Times" itens={times} valor={time} aoAlterado={valor => setTime(valor)} />

				<Botao texto="Criar card" />
			</form>
			<form
				className="formulario"
				onSubmit={evento => {
					evento.preventDefault();
					cadastrarTime({ nome: nomeTime, cor: corTime });
				}}
			>
				<h2>Preencha os dados para criar um time.</h2>

				<Campo obrigatorio label="Nome" placeholder="Digite o nome do time" valor={nomeTime} aoAlterado={valor => setNomeTime(valor)} />

				<Campo obrigatorio label="Cor" type="color" placeholder="Escolha a cor do time" valor={corTime} aoAlterado={valor => setCorTime(valor)} />

				<Botao texto="Criar um novo time" />
			</form>
		</section>
	);
};

export default Formulario;
