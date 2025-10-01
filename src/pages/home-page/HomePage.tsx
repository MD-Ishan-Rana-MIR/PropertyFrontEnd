import React from 'react'
import BannerPage from './Banner'
import Team from './Team'
import SetupProcess from './Process'

const HomePage = () => {
  return (
    <div>
      <BannerPage></BannerPage>
      <Team></Team>
      <SetupProcess></SetupProcess>
    </div>
  )
}

export default HomePage