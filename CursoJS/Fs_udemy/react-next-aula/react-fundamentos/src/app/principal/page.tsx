export function Acomodacao() {
    return (
        <div>
            <span>IMAGEM ACOMODAÇÃO</span>
            <h1>São Roque, Brasil</h1>
            <p>Desc. Perto da vinícola Goes</p>
        </div>
    )
}

export default function Page() {
    return (
        <div>
            {Acomodacao()}
            <hr />
            {Acomodacao()}
            <hr />
        </div>
    )
}
