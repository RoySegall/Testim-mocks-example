import * as React from "react";

const Window = ({title, children}) => <main className="bg-neutral-100 w-100 h-screen flex flex-row w-screen justify-center items-center">
    <div className="flex flex-col w-3/4 mh-2/6 border border-black shadow-2xl shadow-lg shadow-black/50 rounded">
        <div className="p-2 bg-neutral-600 border-b border-black text-white font-extralight text-xl">
            <div className={"flex flex-row justify-between align-center"}>
                {title}
                <div className={"flex flex-row items-center"}>
                    <div className="bg-red-400 w-4 h-4 rounded-full"></div>
                    <div className="bg-yellow-400 w-4 h-4 rounded-full mx-1"></div>
                    <div className="bg-green-400 w-4 h-4 rounded-full"></div>
                </div>
            </div>
        </div>

        <div className={"bg-file-content text-white w-full"}>{children}</div>
    </div>
</main>;

export default Window