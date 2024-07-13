import React from 'react'

type AsidelinkProps = {
    children: React.ReactNode
    href: string
}
export default function AsideLink({ children, href }: AsidelinkProps) {
    return (
        <a aria-current="page" className="active" href={href}>
            <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize" type="button">
                {children}
            </button>
        </a>
    )
}
