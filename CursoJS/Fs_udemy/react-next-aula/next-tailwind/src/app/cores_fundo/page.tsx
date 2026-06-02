export default function Aplicacao() {
    return (
        <div>
            <h1 className="text-orange-400/100">Cores</h1>
            <h1 className="text-orange-400/50">Cores</h1>
            <h1 className="text-[#50d71e]">Cores</h1>

            <button className="bg-orange-600 hover:bg-orange-300">Botão</button>
            <button className="bg-[#50d71e]">Botão</button>

            <h1 className="
            h-96
            bg-orange-200
            /* bg-[url(/img/cidade.jpg)] */
            bg-[url(/img/nuvem.png)]
            bg-no-repeat
            bg-top-left
            ">
                Fundo imagem
            </h1>

        </div>
    )
}