import React, { useState } from 'react'
import Cardpost from './Cardpost'
import Post from './postCardData.js'

const Postpage = () => {
    
    const [postData, setPostData] = useState(Post);

    
  return (
    <>
     <div className="search-bar">
      <input type="text" placeholder='Search Here ...' />
      <button>🔍</button>
    </div>
    <Cardpost postData= {postData}/>
    </>
  )
}

export default Postpage
