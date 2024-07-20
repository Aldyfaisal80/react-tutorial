import React from 'react'
import { Link } from 'react-router-dom'
import { TableNavLinkProps } from '../../../types/dashboard/propsType';

export default function TableNavLink({ children, href, className }: TableNavLinkProps) {
    const activeLinkClasses = "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500";
    // const inactiveLinkClasses = "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300";

    return (
        <Link to={href} className={`inline-block p-4 border-b-2 rounded-t-lg ${activeLinkClasses} ${className}`}>
            {children}
        </Link>
    )
}
