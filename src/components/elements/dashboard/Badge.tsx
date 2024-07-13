import { BadgeProps, BadgeIconProps, BadgeTitleProps, BadgeDescriptionProps } from "../../../types/dashboard/propsType"

const Badge = ({ children, className }: BadgeProps) => {
    return (
        <div className={`relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md ${className}`}>
            {children}
        </div>
    )
}

const Title = ({ title, value, className }: BadgeTitleProps) => {
    return (
        <div className={`p-4 text-right ${className}`}>
            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">{title}</p>
            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{value}</h4>
        </div>
    )
}

const Icon = ({ icon, className }: BadgeIconProps) => {
    return (
        <div className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center ${className}`}>
            {icon}
        </div>
    )
}

const Description = ({ percentage, period, className }: BadgeDescriptionProps) => {
    return (
        <div className={`border-t border-blue-gray-50 p-4 ${className}`}>
            <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                <strong className={`${percentage > 0 ? "text-green-500" : "text-red-500"}`}>{percentage}%</strong>&nbsp;{period}
            </p>
        </div>
    )
}

Badge.Icon = Icon
Badge.Title = Title
Badge.Description = Description

export default Badge