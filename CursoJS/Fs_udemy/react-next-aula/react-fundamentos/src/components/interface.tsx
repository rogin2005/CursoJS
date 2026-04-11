export function Acomodacao() {
    return (
        <div>
            <span>IMAGEM ACOMODAÇÃO</span>
            <h1>São Roque, Brasil</h1>
            <p>Desc. Perto da vinícola Goes</p>
        </div>
    )
}

export function Menu() {
    return (
        <div className="bg-blue-700">
            Acomodações | Experiências
        </div>
    )
}

export function Cabecalho( props: any ) {
    return (
        <div className="bg-blue-200">
            <p>{props.titulo}</p>
            <p>{props.subtitulo}</p>
        </div>
    )
}

export function Rodape() {
    return (
        <div className="bg-blue-200">
            <p>Rodapé</p>
        </div>
    )
}

export function Conteudo( props: any ) {
    return (
        <div className="bg-gray-200">
            {props.children}
        </div>
    )
}
