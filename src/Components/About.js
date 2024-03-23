import React from "react";
import myPic from "./me.jpg";

const About = () => {
    const style = {
        space: {
          marginTop: "100px",
        },
      };
  return (
    <>
      <div className="container my-5 text-center">
        <div className="row">
          <div className="col-md-3">
            <img
              src={myPic}
              alt="Profile"
              className="img-fluid rounded-circle"
            />
          </div>
          <div className="col-md-8">
            <h2>About Me</h2>
            <p>
              Hi, I'm Hashir Iqbal, a passionate Software Engineering student at
              NUST. I have a keen interest in web and app development, and I
              enjoy creating innovative solutions that make a positive impact. I
              believe in continuous learning and exploring new technologies to
              enhance my skills.
            </p>
            <p>
              Apart from coding, I have a strong passion for sports, especially
              cricket. I find joy in playing cricket and watching matches in my
              leisure time. I also have a creative side and love expressing
              myself through painting. It's a therapeutic activity for me that
              allows me to unwind and explore my imagination.
            </p>
            <p>
              I'm excited about the opportunities that lie ahead in my career
              and look forward to contributing to the field of software
              development. Feel free to reach out to me if you'd like to connect
              or collaborate on any projects!
            </p>
          </div>
        </div>
      </div>
      <div className="container my-5 text-center">
        <div className="row">
          <div className="col-md-3">
            <img style={style.space}
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D"
              alt="Web and App Development Concept"
              className="img-fluid"
            />
          </div>
          <div className="col-md-8">
            <h2>Web and App Development</h2>
            <p>
              As a web and app developer, I specialize in creating dynamic and
              user-friendly websites and mobile applications. I utilize a
              variety of programming languages and technologies, including HTML,
              CSS, JavaScript, and React for front-end development, and Node.js
              for back-end development. My goal is to provide innovative
              solutions that meet the unique needs of each project, ensuring a
              seamless user experience and high functionality.
              <p>
                I collaborate closely with clients and team members to
                understand project requirements and deliver solutions that
                exceed expectations. My attention to detail, problem-solving
                skills, and passion for technology drive me to continuously
                learn and adapt to new technologies and trends in the industry.
              </p>
              <p>
                In addition to my technical skills, I am also dedicated to
                delivering projects on time and within budget. I prioritize
                clear communication and collaboration throughout the development
                process to ensure that all stakeholders are informed and
                involved.
              </p>
            </p>
          </div>
        </div>
      </div>
      <div className="container my-5 text-center">
        <div className="row">
          <div className="col-md-3">
          <img style={style.space} src="https://images.unsplash.com/photo-1531913764164-f85c52e6e654?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBhaW50aW5nfGVufDB8fDB8fHww" alt="Web and App Development" className="img-fluid" />
          </div>
          <div className="col-md-8">
            <h2>Hobbies</h2>
            <p>
  In my spare time, I enjoy playing cricket, a sport that I have been passionate about since my childhood. Playing cricket not only allows me to stay physically active but also helps me unwind and relax after a long day of work or study. I often participate in friendly matches with friends and colleagues, which not only keeps me fit but also strengthens my bond with others.
</p>
<p>
  Another hobby of mine is painting, which I find to be a therapeutic and creative outlet. I love experimenting with different painting styles and techniques, from abstract art to landscapes. Painting allows me to express my thoughts and emotions in a visual form and provides me with a sense of accomplishment when I complete a piece.
</p>
<p>
  As a web and app developer, I also enjoy exploring the latest trends and technologies in the field of technology. I often spend time reading tech blogs, watching tutorial videos, and experimenting with new tools and frameworks. This hobby not only helps me stay updated with the latest developments but also enhances my skills and expertise in my profession.
</p>

          </div>
        </div>
      </div>
    </>
  );
};

export default About;
