export type AsidelinkProps = {
    children: React.ReactNode
    href: string
    className?: string
}
export type BadgeProps = {
    children: React.ReactNode
    className?: string
}

export type BadgeIconProps = { 
    icon: React.ReactNode, 
    className?: string 
}
export type BadgeTitleProps = { 
    title: string, 
    value: string, 
    className?: string 
}
export type BadgeDescriptionProps = { 
    percentage: number, 
    period: string, 
    className?: string 
}

export type DashboardMainLayoutProps = {
    children: React.ReactNode
}

export type TableNavLinkProps = {
    children: React.ReactNode
    href: string
    className?: string
}