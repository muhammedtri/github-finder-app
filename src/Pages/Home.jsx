import React from "react"
import UserResults from "../Components/users/UserResults"
import UserSearch from "../Components/users/UserSearch"

function Home() {
  return (
    <div>
      <UserSearch />
      <UserResults />
    </div>
  )
}

export default Home
