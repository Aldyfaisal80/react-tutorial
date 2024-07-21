import Badge from "../../components/elements/dashboard/Badge";
import { FaMoneyBills, FaSignal, FaUser } from "react-icons/fa6";
import { HiUserAdd } from "react-icons/hi";
import TableLayout from "../../components/fragments/dashboard/TableLayout";
export default function Dashboard() {
  return (
    <>
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        <Badge>
          <Badge.Icon icon={<FaMoneyBills className="text-2xl" />} className="from-blue-600 to-blue-400 text-white shadow-blue-500/40" />
          <Badge.Title title="Today's Money" value="$53k" />
          <Badge.Description percentage={55} period="than last week" />
        </Badge>
        <Badge>
          <Badge.Icon icon={<FaUser />} className="from-pink-600 to-pink-400 text-white shadow-pink-500/40" />
          <Badge.Title title="Today's Users" value="2,300" />
          <Badge.Description percentage={3} period="than last month" />
        </Badge>
        <Badge>
          <Badge.Icon icon={<HiUserAdd className="text-2xl" />} className="from-green-600 to-green-400 text-white shadow-green-500/40" />
          <Badge.Title title="New Clients" value="3,462" />
          <Badge.Description percentage={-2} period="than yesterday" />
        </Badge>
        <Badge>
          <Badge.Icon icon={<FaSignal className="text-xl font-bold" />} className="from-orange-600 to-orange-400 text-white shadow-orange-500/40" />
          <Badge.Title title="Sales" value="$103,430" />
          <Badge.Description percentage={5} period="than yesterday" />
        </Badge>
      </div>

      <TableLayout title="projects">
        <table className="w-full min-w-[640px] table-auto">
          <thead>
            <tr>
              <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">companies</p>
              </th>
              <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">budget</p>
              </th>
              <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">completion</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="flex items-center gap-4">
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Material XD Version</p>
                </div>
              </td>

              <td className="py-3 px-5 border-b border-blue-gray-50">
                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">$14,000</p>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="w-10/12">
                  <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">60%</p>
                  <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                    <div className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white" style={{ width: "60%" }}></div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </TableLayout>
    </>
  )
}
