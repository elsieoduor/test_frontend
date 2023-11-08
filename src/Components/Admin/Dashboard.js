import React from 'react'
import Sidebar from './Sidebar'
import Homes from './Homes'
import Users from './Users'
// import UserList from './UserList'
// import UserForm from './UserForm'
// import HomesForm from './HomesForm'
// import HomesList from './HomesList'
// import Analytics from './Analytics'
// import NavBar from '../NavBar'

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* <NavBar /> */}
      <div className="flex flex-1">
        <Sidebar />
        <div className="w-full p-8">
          <Homes />
          <Users />
          {/* <Analytics /> */}
          {/* <UserList /> */}
          {/* < UserForm/> */}
          {/* <HomesForm /> */}
          {/* <HomesList /> */}
         
        </div>
      </div>
    </div>
  )
}

export default Dashboard