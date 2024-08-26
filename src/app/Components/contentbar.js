export default function ContentBar() {
    return (
        <div className="flex-col absolute right-0 w-7/12 background bg-fixed">
            <BentoBox/>
            <List/>
        </div>
    );
}

function SectionTitle({ name }) {
    return (
        <div>
            <h1 className="font-Bebas_Neue text-3xl menu-underline underline-offset-8">{ name }</h1>
        </div>
    );
}

function BentoBox() {
    return (
        <div className="grid grid-cols-3 grid-row-4 gap-6 h-96 my-12 pl-20 pr-12">
            <div className="col-span-3">
                <SectionTitle name={"About Me"}/>
            </div>
            <div className="row-span-3 bento-box px-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum eu mi eu cursus. Morbi id eros sed risus cursus rhoncus. Aliquam dictum turpis sit amet ante sollicitudin porta ac eget tortor.
                Mauris non ligula nec magna efficitur fringilla eu sed odio. Aenean non magna eu nunc suscipit luctus. 
            </div>
            <div className="col-span-2 bento-box px-6">
                Aliquam volutpat sagittis fermentum. Fusce eu mollis tellus. Donec tristique lobortis commodo. Donec pellentesque massa non nulla sagittis, ut dignissim orci venenatis. Quisque et urna sit
                amet urna feugiat viverra nec eu elit. 
            </div>
            <div className="row-span-2 col-span-1 bento-box px-5">
                <ul className="list-disc list-inside marker:text-orange-400">
                    <li>Lorem</li>
                    <li>ipsum</li>
                    <li>dolor </li>
                    <li>sit </li>
                    <li>amet</li>
                    <li>consectetur </li>
                </ul>
            </div>
            <div className="row-span-2 col-span-1 bento-box px-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum
            </div>
        </div>
    );
}


function List() {
    return (
        <div className="flex flex-col pt-4 pl-20 pr-12 gap-2">
            <SectionTitle name={"Projects"}/>
            <a href="https://github.com/Jasonzh1" className="bento-box mt-6">
                My Project 1
            </a>
        </div>
    );
}