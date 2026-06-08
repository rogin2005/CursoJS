
export function AplicacaoLargura() {
    return (
        <div className="flex">
            {/* w-96, w-[500px], w-full,  */}
            <div className="
                bg-orange-400 w-1/5
            ">
                Lorem ipsum dolor sit 1
            </div>

            <div className="
                bg-red-400 w-4/5
            ">
                Lorem ipsum dolor sit 2
            </div>

        </div>
    )
}



export default function Aplicacao() {
    return (
        <div>
            {/* w-96, w-[500px], w-full, max-w-sm, w-screen, size-40 */}
            <div className="
                bg-orange-400 w-screen
            ">
                Lorem ipsum dolor sit 1
            </div>

            <div className="bg-purple-500 size-40">Tamanho</div>

        </div>
    )
}
