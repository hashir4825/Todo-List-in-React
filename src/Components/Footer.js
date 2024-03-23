import React from 'react'
const style ={
  footer_css : {
    backgroundColor: "#eb5c08d1",
    padding : "10px",
  }
}

const Footer = () => {
  return (
    <>
      <div style={style.footer_css} className=" text-light text-center">
        &copy; 2024 Todo List by Hashir Iqbal.
      </div>
    </>
  )
}

export default Footer
