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

export function Cabecalho() {
    return (
        <div className="bg-blue-700">
            <h1>Logo</h1>
            {Menu()}
        </div>
    )
}


