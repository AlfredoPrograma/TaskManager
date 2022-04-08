import { useContext } from 'react'
import { AuthContext } from 'context/Auth'

import { TasksDashboard } from 'components/Home/Tasks/Dashboard'
import { Sidebar } from 'components/Home/Sidebar'
import { HomeLayout } from 'components/Home/Layout'
import { HomeHeader } from 'components/Home/Header'

export default function Home () {
  const user = useContext(AuthContext)
  return (
    <>
      <HomeLayout>
        <Sidebar />
        <HomeHeader userData={user}/>
        <TasksDashboard userData={user}/>
      </HomeLayout>
    </>
  )
}
