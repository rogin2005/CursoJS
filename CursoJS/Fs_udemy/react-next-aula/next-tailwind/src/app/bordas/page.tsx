
export default function Aplicacao() {
    return (
        <div>

            {/* border-2, border-orange-500, border-t-2, border-y-2, border-s-2 */}
            {/* rounded-lg, rounded-t-lg, rounded-tr-lg, rounded-full, rounded-[12px], border-double */}
            <div className="
            m-8 
            border-5 
            rounded-xl 
            border-double
            border-orange-500
            ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem amet enim sequi at debitis est distinctio ex dolorum voluptatibus possimus temporibus, vero iure deserunt quod asperiores, voluptatem labore, ratione dolore!
            </div>

            <button className="
            rounded-[12px] 
            bg-blue-500 
            px-3 
            text-white
            hover:bg-blue-400
            ">Save Changes</button>

        </div>
    )
}
