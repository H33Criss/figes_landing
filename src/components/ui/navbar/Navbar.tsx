import { Navbar as Nav, NavbarBrand, NavbarContent, NavbarItem as NavItem, Button } from "@nextui-org/react";
import { INavbarItem, NavbarItem } from "./NavbarItem";
import Link from "next/link";

const navbarItems: INavbarItem[] = [
    { route: '/conocenos', title: 'Conocénos' },
    { route: '/contact', title: 'Contactanos' },
    { route: '/cotizacion', title: 'Cotizar' },
    { route: '/productos', title: 'Productos' },
];

export const Navbar = () => {
    return (
        <Nav shouldHideOnScroll className="shadow-md flex items-center bg-black text-white">
            <NavbarBrand>
                <Link href="/">
                    <p className="font-bold text-inherit">FIGES SPA</p>
                </Link>
            </NavbarBrand>
            <div className="flex-grow"></div> {/* Spacer para empujar al segundo elemento al medio */}
            <NavbarContent className="hidden sm:flex gap-4 " >
                {
                    navbarItems.map(item => (
                        <NavbarItem key={item.route} {...item} />
                    ))
                }
            </NavbarContent>
            <div className="flex-grow"></div> {/* Spacer para empujar al tercer elemento al final */}
            <NavbarContent >
                <NavItem className="hidden lg:flex">
                    <Link href="#">Iniciar sesion</Link>
                </NavItem>
                <NavItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Crear cuenta
                    </Button>
                </NavItem>
            </NavbarContent>
        </Nav>
    )
}
