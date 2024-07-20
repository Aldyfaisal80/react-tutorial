import TableLayout from '../../../components/fragments/dashboard/TableLayout'

export default function CustomerPage() {
  return (
    <TableLayout title='customers'>
      <table className="w-full min-w-[640px] table-auto">
        <thead>
          <tr>
            <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
              <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">name</p>
            </th>
            <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
              <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">email</p>
            </th>
            <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
              <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">phone</p>
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
  )
}
