import Colaborador from "../Colaborador";
import "./Time.css";
import hexToRgba from "hex-to-rgba";

const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }) => {
	return (
		colaboradores.length > 0 && (
			<section className="time" style={{ backgroundImage: "url(/images/fundo.png)", backgroundColor: hexToRgba(time.cor, "0.4") }}>
				<input onChange={evento => mudarCor(evento.target.value, time.id)} type="color" value={time.cor} className="input-color" />
				<h3 style={{ borderColor: time.corPrimaria }}>{time.nome}</h3>
				<div className="colaboradores">
					{colaboradores.map((colaborador, indice) => (
						<Colaborador key={indice} colaborador={colaborador} cor={time.cor} aoDeletar={aoDeletar} aoFavoritar={aoFavoritar} />
					))}
				</div>
			</section>
		)
	);
};

export default Time;
