import "./Colaborador.css";

const Colaborador = ({ nome, cargo, imagem, corPrimaria }) => {
	return (
		<div className="colaborador">
			<div className="cabecalho" style={{ backgroundColor: corPrimaria }}>
				<img src={imagem} alt={nome} />
			</div>
			<div className="card-rodape">
				<h4>{nome}</h4>
				<h5>{cargo}</h5>
			</div>
		</div>
	);
};

export default Colaborador;
