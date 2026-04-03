import { Acomodacao, Cabecalho } from "@/components/interface"

export default function Pagina() {
    return (
        <div>
            {Cabecalho()}
            <hr />
            {Acomodacao()}
            <hr />
        </div>
    )
}
