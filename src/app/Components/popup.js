import React, { useState } from "react";
import Image from "next/image";


export default function PopupMsg() {
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setTimeout(() => {
                setOpen(false);
        }, 100);
    };

    return (
        <div>
            {open && <div className="fixed inset-0 bg-transparent/65">
                <button className="bg-orange-500 inset-60 absolute rounded-xl popup-animation items-center flex" onClick={handleClick}>
                    <div className="flex flex-row items-center w-10/12 justify-around m-auto">
                        <Image
                            src={'/helmet.png'}
                            alt="Icon of roadwork"
                            height={190}
                            width={190}
                        />
                        <div className="flex flex-col items-start">
                            <h1 className="text-6xl font-Bebas_Neue">Caution Contruction Ahead...</h1>
                            <h2 className="text-lg">This site is currently under development so please pardon the dust.</h2>
                            <h2 className="text-lg">Grab a hardhat and lets go!</h2>
                        </div>
                    </div>                
                </button>
            </div>}
        </div>
    );
}