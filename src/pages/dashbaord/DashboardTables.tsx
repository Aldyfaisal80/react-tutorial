import DashboardTableLayout from '../../components/layouts/dashboard/DashboardTableLayout'
import { Outlet } from 'react-router-dom'
export default function DashboardTables() {
  return (
    <>
      DashboardTables
      <DashboardTableLayout>
        <Outlet />
      </DashboardTableLayout>
    </>
  )
}
