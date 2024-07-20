import { AsidelinkProps } from '../../../types/dashboard/propsType'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
export default function AsideLink({ children, href, className }: AsidelinkProps) {
    const pathname = useLocation().pathname;
    const isActive = pathname === href;
    const activeLink = "shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] bg-gradient-to-tr from-blue-600 to-blue-400";
    const inactiveLink = "hover:bg-white/10 active:bg-white/30";
    return (
        <Link to={href} className={`middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white w-full flex items-center gap-4 px-4 capitalize ${isActive ? activeLink : inactiveLink} ${className}`}>
            {children}
        </Link>
    );
}
