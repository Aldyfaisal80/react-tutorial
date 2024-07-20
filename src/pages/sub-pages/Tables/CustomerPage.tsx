import TableLayout from "../../../components/fragments/dashboard/TableLayout"
import { useState, useEffect } from 'react'
import TableProductSkaleton from "../../../components/elements/TableProductSkaleton"
// import { ProductType } from "../../../types/dashboard/propsType"

type CustomerType = {
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

export default function CustomerPage() {
  const [customers, setCustomers] = useState<CustomerType[]>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true);
    fetch('https://fakestoreapi.com/users')
      .then(response => response.json())
      .then(data => {
        setCustomers(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching customers:', error);
        setIsLoading(false);
      });
  }, []);

  const renderElement = () => {
    return customers?.map((customer: CustomerType, index: number) => {
      return <tr key={index}>
        <td className="py-3 px-5 border-b border-blue-gray-50">
          <div className="flex items-center gap-4">
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 capitalize">{customer.name.firstname + ' ' + customer.name.lastname}</p>
          </div>
        </td>
        <td className="py-3 px-5 border-b border-blue-gray-50">
          <button>
            Detail
          </button>
        </td>
      </tr>
    })
  }

  return (
    <TableLayout title="customers" count={customers?.length}>
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
          {!isLoading ? renderElement() : <TableProductSkaleton />}
        </tbody>
      </table>
    </TableLayout>
  )
}
