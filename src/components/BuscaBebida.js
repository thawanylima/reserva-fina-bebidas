import { useParams } from "react-router-dom";
import Bebida from "./Bebida";
import NotFound from "./NotFound";

const BuscaBebida = ({ bebidas }) => {
    const { bebidaSlug } = useParams();
    const bebida = bebidas.find((bebida) => bebida.slug === bebidaSlug);

    return bebida ? <Bebida bebida={bebida} /> : <NotFound />;
}
export default BuscaBebida;