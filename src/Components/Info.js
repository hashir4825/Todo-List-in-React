import React from 'react'

const style = {
    headings : {
        backgroundColor: "#9d00ff",
        padding: "10px",
        marginBottom: "25px",
        marginTop: '20px',
        textAlign: 'center', 
        color: 'white'
        },
    spacing:{
        margin: "2px",
        padding: "3px"
    }
}

const Info = () => {
    return (
        <div>
          <div >
            <div className="container">
              <h2 style={style.headings}>What is a Todo List?</h2>
              <p>A todo list is a list of tasks or items that need to be completed. It is used as a tool to organize, prioritize, and track progress on tasks.</p>
    
              <h2 style={style.headings}>Why Use a Todo List?</h2>
              <ul>
                <li style={style.spacing}><strong>Organization:</strong> Helps organize tasks and provides a clear overview of what needs to be done.</li>
                <li style={style.spacing}><strong>Prioritization:</strong> Allows you to prioritize tasks based on urgency or importance.</li>
                <li style={style.spacing}><strong>Productivity:</strong> Breaks down larger tasks into smaller, manageable ones, increasing productivity.</li>
                <li style={style.spacing}><strong>Time Management:</strong> Helps manage time effectively by setting deadlines and allocating time for each task.</li>
                <li style={style.spacing}> <strong>Memory Aid:</strong> Serves as a memory aid, ensuring important tasks are not forgotten.</li>
                <li style={style.spacing}><strong>Stress Reduction:</strong> Reduces stress and anxiety associated with forgetting tasks or feeling overwhelmed.</li>
              </ul>
    
              <h2 style={style.headings} >Advantages of Using a Todo List</h2>
              <ul>
                <li style={style.spacing}>Improves organization and time management.</li>
                <li style={style.spacing}>Increases productivity and motivation.</li>
                <li style={style.spacing}>Reduces stress and anxiety.</li>
                <li style={style.spacing}>Helps track progress and celebrate achievements.</li>
                <li style={style.spacing}>Provides a sense of accomplishment as tasks are completed.</li>
              </ul>
            </div>
          </div>
        </div>
      );
}

export default Info
