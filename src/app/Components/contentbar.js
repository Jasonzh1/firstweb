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
                My dream vacation is in Dubai because there are many cool attractions located there. 
                The world&apos;s tallest skyscraper and a entire man-made island. I also play saxophone. I prefer songs with no words 
                because it helps me think better.
            </div>
            <div className="col-span-2 bento-box px-6">
                These 3 songs are my favorite song and the ones I listen to the most. I really enjoy 
                EDM and saxophone partly because I also play saxophone. I prefer songs with no words 
                because it helps me think better.
            </div>
            <div className="row-span-2 col-span-1 bento-box px-5">
                <ul className="list-disc list-inside marker:text-orange-400">
                    <li>Reading</li>
                    <li>Skiing</li>
                    <li>Basketball</li>
                    <li>Coding</li>
                    <li>Math</li>
                    <li>Flying</li>
                </ul>
            </div>
            <div className="row-span-2 col-span-1 bento-box px-4">
                You can explore the history of Dubai while living in one of the most technological advanced country.
            </div>
        </div>
    );
}


function List() {
    return (
        <div className="flex flex-col pl-20 pr-12 gap-3">
            <SectionTitle name={"Projects"}/>
            <a href="https://github.com/Jasonzh1" className="bento-box mt-6">
                My Project 1
            </a>
        </div>
    );
}