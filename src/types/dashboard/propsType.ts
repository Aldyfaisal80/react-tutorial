// Props Type

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

// Model Type

export type ProductType = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: { rate: number, count: number }
}

export type UserType = {
    address: {
        geolocation: { lat: string, long: string },
        city: string,
        street: string,
        number: number,
        zipcode: string
    },
    id: number,
    email: string,
    username: string,
    password: string,
    name: { firstname: string, lastname: string },
    phone: string,
    __v: number
}


// Error Handler

export type ErrorType = {
    message: string;
};