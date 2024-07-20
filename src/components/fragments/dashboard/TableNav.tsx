import React from 'react'
import TableNavLink from '../../elements/dashboard/TableNavLink'

export default function TableNav() {
    return (
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px">
                <li className="me-2">
                    <TableNavLink href="">Products</TableNavLink>
                </li>
            </ul>
        </div>
    )
}
