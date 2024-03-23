import React from 'react';

const Home = () => {
    const style ={
        middle:{
          minHeight: "calc(91vh - 149px)",
          padding: "10px"
        },
    display :{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    pic :{
        width: "500px",
        height: "300px",
    },
    }
    
  return (
    <>
    <h1  className="container text-center mt-5" >Welcome to My Website</h1>
    <div style={{ ...style.middle, ...style.display }} className="container text-center mt-2">
      <div className="row">
        <div className="col-md-6">
          <h3>My University</h3>
          <div className="col-md-6">
          <img style={style.pic} src="https://www.app.com.pk/wp-content/uploads/2024/01/nust-e1704720413494.jpg" alt="" srcset="" />
          </div>
        </div>
        <div className="col-md-6">
          <h3>My Campus</h3>
          <div className="col-md-6">
          <img style={style.pic} src="https://mcs.nust.edu.pk/wp-content/uploads/2020/03/mcsHistoryPage.jpg" alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
