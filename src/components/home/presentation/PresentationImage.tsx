import NextImage from 'next/image'
import { Image } from '@nextui-org/react'
import React from 'react'

export const PresentationImage = () => {
    return (
        <div className="overflow-hidden">
            <Image
                as={NextImage}
                src={'https://static.videezy.com/system/resources/thumbnails/000/044/652/original/50586_Aquafina-3D-water-background_HD_BG.jpg'}
                alt="Foto de perfil"
                width={1000}
                height={900}
                className='clip-drop'
            />
        </div>
    )
}
