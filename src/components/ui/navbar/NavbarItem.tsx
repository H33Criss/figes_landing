'use client'
import { NavbarItem as NavItem } from '@nextui-org/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export interface INavbarItem {
    route: string,
    title: string,
}

export const NavbarItem = ({ route, title }: INavbarItem) => {
    const pathName = usePathname();

    return (
        <NavItem className={`mx-2 ${pathName === route && 'text-blue-600 font-bold'}`} >
            <Link color="foreground" href={route}>
                {title}
            </Link>
        </NavItem>
    )
}
