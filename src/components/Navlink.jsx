import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Navlink = ({href, className,children }) => {
    const path = usePathname()
const active = href == path
    return (
        <div>
            <Link href={href} className={`${active ? "text-violet-400 hover:text-violet-300 transition":""}${className} `}>{children}</Link>
        </div>
    );
};

export default Navlink;