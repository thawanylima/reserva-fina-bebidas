import { useParams } from "react-router-dom";
import Cadastro from "./Cadastro";
import NotFound from "./NotFound";

const BuscaBebidaAlteracao = ({ bebidas, alterarBebida }) => {
    const { slugBebida } = useParams();
    const bebida = bebidas.find((bebida) => bebida.slug === slugBebida);

    return bebida ? <Cadastro bebida={bebida} alterarBebida={alterarBebida} /> : <NotFound />;
};
export default BuscaBebidaAlteracao;