import TableNav from '../../fragments/dashboard/TableNav'

type TableLayoutProps = {
    children: React.ReactNode
}

export default function DashboardTableLayout({ children }: TableLayoutProps) {
    return (
        <>
            <TableNav />
            <div className='p-5 mt-2'>
                {children}
            </div>
        </>
    )
}
