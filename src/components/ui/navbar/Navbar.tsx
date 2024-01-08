import { Navbar as Nav, NavbarBrand, NavbarContent, NavbarItem as NavItem, Button } from "@nextui-org/react";
import { INavbarItem, NavbarItem } from "./NavbarItem";
import Link from "next/link";

const navbarItems: INavbarItem[] = [
    { route: '/productos', title: 'Productos' },
    { route: '/conocenos', title: 'Conocénos' },
    { route: '/contact', title: 'Contactanos' },
    { route: '/cotizacion', title: 'Cotizar' },
];

export const Navbar = () => {
    return (
        <Nav shouldHideOnScroll className="animate__animated animate__fadeInUp shadow-md m-0 flex items-center bg-black text-white">
            <NavbarBrand>
                <Link href="/">
                    <p className="font-bold text-inherit">FIGES SPA</p>
                </Link>
            </NavbarBrand>
            <NavbarContent className="hidden mx-0 sm:mx-16 sm:flex gap-4 " >
                {
                    navbarItems.map(item => (
                        <NavbarItem key={item.route} {...item} />
                    ))
                }
            </NavbarContent>

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
