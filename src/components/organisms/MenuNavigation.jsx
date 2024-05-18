import Link from "next/link";
import ThemeSwitch from "@/utilities/dark-light-functionality/ThemeSwitch";

function MenuNavigation() {

    return (
        <>
            <div className="flex flex-row">
                <nav>
                    <Link href="/certificaciones" className="px-2">Certificaciones</Link>
                    <Link href="/explora" className="px-2">Alineaciones y talleres</Link>
                    <Link href="/soluciones" className="px-2">Soluciones empresariales</Link>
                    <Link href="/socios" className="px-2">Socios</Link>
                    <Link href="/blog" className="px-2">Blog</Link>
                </nav>
                <ThemeSwitch></ThemeSwitch>
            </div>
        </>
    );
}
export default MenuNavigation