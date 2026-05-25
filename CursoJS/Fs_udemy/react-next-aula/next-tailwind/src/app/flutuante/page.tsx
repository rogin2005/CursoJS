import Image from "next/image"

export default function Aplicacao() {
    return (
        // <div className="p-2 columns-3 gap-8">
        <div className="border p-3"> 

            <Image
            className="float-left m-2"
                src="/img/cidade.jpg"
                alt="Descrição"
                width={120}
                height={120}
            />

            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi iure dolor libero excepturi temporibus architecto, voluptatum voluptas eligendi dolorum velit! Dolore ipsam exercitationem libero numquam voluptatum, nesciunt amet odit quisquam.
            </p>

            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi iure dolor libero excepturi temporibus architecto, voluptatum voluptas eligendi dolorum velit! Dolore ipsam exercitationem libero numquam voluptatum, nesciunt amet odit quisquam.
            </p>

        </div>
    )
}
