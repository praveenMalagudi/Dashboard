import React from 'react'

const signin = ({img,title}) => {
  return (
    <div className="login__page-right_sign-signin">
    <div id='icon'/>{img}<div/>
     <p>{title}</p>
     </div>
  )
}

export default signin