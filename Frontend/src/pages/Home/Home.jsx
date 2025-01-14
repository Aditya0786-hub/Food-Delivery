import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/Explore menu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Appdownload from '../../components/App-download/Appdownload'


const Home = () => {

    const[category,setcategory] = useState("All");
    console.log(category)

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setcategory={setcategory}/>
      <FoodDisplay category={category}/>
      <Appdownload/>
    </div>
  )
}

export default Home
