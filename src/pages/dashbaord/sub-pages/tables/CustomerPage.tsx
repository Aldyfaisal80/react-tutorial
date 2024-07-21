import TableLayout from "../../../../components/fragments/dashboard/TableLayout"
import TableProductSkaleton from "../../../../components/elements/TableProductSkaleton"
import { UserType } from "../../../../types/dashboard/propsType"
import { useUsers } from "../../../../features/user"
import { Link } from "react-router-dom"

export default function CustomerPage() {
  const { users, loading } = useUsers()

  const renderElement = () => {
    return users?.map((user: UserType, index: number) => {
      return <tr key={index}>
        <td className="py-3 px-5 border-b border-blue-gray-50">
          <div className="flex items-center gap-4">
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 capitalize">{user.name.firstname + ' ' + user.name.lastname}</p>
          </div>
        </td>
        <td className="py-3 px-5 border-b border-blue-gray-50">
          <Link to={`/dashboard/tables/customer/${user.id}`} className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
            Detail
          </Link>
        </td>
      </tr>
    })
  }

  return (
    <TableLayout title="users" count={users?.length}>
      <table className="w-full min-w-[640px] table-auto">
        <thead>
          <tr>
            <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
              <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">name</p>
            </th>
            <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
              <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Action</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {!loading ? renderElement() : <TableProductSkaleton />}
        </tbody>
      </table>
    </TableLayout>
  )
}
