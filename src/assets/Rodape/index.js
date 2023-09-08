import ListaRedesSociais from "../ListaRedesSociais";
import TextoFooter from "../TextoFooter";
import "./Rodape.css";

const Rodape = () => {
	return (
		<footer className="rodape">
			<ListaRedesSociais />
			<img src="./images/logo.png" alt="Logo do Organo" />
			<TextoFooter />
		</footer>
	);
};

export default Rodape;
