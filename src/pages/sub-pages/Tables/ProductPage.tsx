import TableLayout from "../../../components/fragments/dashboard/TableLayout"
import { useState, useEffect } from 'react'
import Spinner from '../../../components/elements/Spinner'
type Product = {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: { rate: number, count: number }
}

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      fetch('https://fakestoreapi.com/products?limit=5')
        .then(response => response.json())
        .then(data => setProducts(data))
      setIsLoading(false)
    }, 1000)
  }, [])

  const renderElement = () => {
    return products?.map((product: Product, index: number) => {
      return <tr key={index}>
        <td className="py-3 px-5 border-b border-blue-gray-50">
          <div className="flex items-center gap-4">
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">{product.title}</p>
          </div>
        </td>
        <td className="py-3 px-5 border-b border-blue-gray-50">
          <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600 capitalize">{product.category}</p>
        </td>
        <td className="py-3 px-5 border-b border-blue-gray-50">
          <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">${product.price}</p>
        </td>
      </tr>
    })
  }

  return (
    <TableLayout title="products">
      <table className="w-full min-w-[640px] table-auto">
        <thead>
          <tr>
            <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
              <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">name</p>
            </th>
            <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
              <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">category</p>
            </th>
            <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
              <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">price</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? <Spinner /> : null}
          {!isLoading ? renderElement() : null}
        </tbody>
      </table>
    </TableLayout>
  )
}
