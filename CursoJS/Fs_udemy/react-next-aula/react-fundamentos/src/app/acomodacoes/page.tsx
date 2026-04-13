import { Cabecalho, Conteudo, Menu, Rodape } from "@/components/interface"

export default function Pagina() {
    return (
        <div>
            <Cabecalho 
            titulo="AirBnb"
            subtitulo="Minhas acomodações"
            />

            <Menu />

            <Conteudo titulo="teste">
                <h1>Página Acomodações</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus et similique officia minus enim beatae, magnam ullam quo ratione quam iusto dolores facere natus architecto consectetur! Laborum eligendi ipsa veritatis.
                </p>
            </Conteudo>

            <Rodape />

        </div>
    )
}
