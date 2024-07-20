import Footer from '../../fragments/dashboard/Footer'
import Aside from '../../fragments/dashboard/Aside'
import Navbar from '../../fragments/dashboard/Navbar'
import { Outlet } from 'react-router-dom'

export default function DashboardMainLayout() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <Aside />
      <div className="p-4 xl:ml-80">
        <Navbar />
        <div className="mt-12">
          {/* {children} */}
          <Outlet />
        </div>
        <div className="text-blue-gray-600">
          <Footer />
        </div>
      </div>
    </div>
  )
}
