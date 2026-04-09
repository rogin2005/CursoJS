import Image from "next/image"

export default function Page() {

    const usuario = {
        nome: "Leticia Costa",
        urlPerfil: "https://img.freepik.com/fotos-premium/retrato-de-estudio-de-uma-jovem-profissional-com-ia-generativa_94628-7498.jpg"
    }

    return (
        <div>
            <h1>Imagens</h1>
            <Image 
            src="/img/formula1.jpg"
            alt={ "Nome: " + usuario.nome }
            width={300}
            height={300}
            />
            {/* <img
            // src={usuario.urlPerfil}
            src= "/img/formula1.jpg"
            alt={ "Nome: " + usuario.nome }
            style={ 
                {width: 250, height: 200}
             }
            /> */}
        </div>
    )
}
