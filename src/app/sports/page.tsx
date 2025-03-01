
import React from 'react'
import Separator from "@/components/Separator";
import Lampeffectforsports from '@/components/Lampeffectforsports';
import Uniformoutdoorgames from '@/components/Uniformoutdoorgames';
import UniformIndoorgames from '@/components/Uniformindoorsportsgrid';

const Sports = () => {
    return (

        <main className="relative flex justify-center items-center flex-col overflow-hidden sm:px-0">
            <div className=" w-full">
                <Lampeffectforsports/>
                <Uniformoutdoorgames/>
                <Separator />
                <UniformIndoorgames/>
            </div>
        </main>

    )
}
export default Sports;