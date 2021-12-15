import React, { useState } from "react";
import Form from "./Form";

const ResumeMaker = () => {
  const [fullName, setFullName] = useState({
    name:"",
    position:""
  });

  const changeInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFullName((preValue) => {
      if(name === "fname"){
        return{
          name: value,
          position: preValue.position,
        }
      }else if(name === "position"){
        return{
          name: preValue.name,
          position: value,
        }
      }
    })
  };
  const submitForm = (e) => {
    e.preventDefault();
    
    alert("ddd")
  };
  return (
    <>
      <script src="https://kit.fontawesome.com/b99e675b6e.js"></script>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "700px",
            background: "#fff",
            margin: "20px 0",
            padding: "2rem",
          }}
        >
          <h2>ADD DETAILS :</h2>

          <form
            action=""
            onSubmit={(e) => submitForm(e)}
            style={{ marginTop: "2rem" }}
          >
            <div>
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                onChange={(e) => changeInput(e)}
                value={fullName.name}
                name="fname"
              />
            </div>
            <div>
              <label htmlFor="">Position</label>
              <input
                type="text"
                placeholder="Enter your name"
                onChange={(e) => changeInput(e)}
                value={fullName.position}
                name= "position"
              />
            </div>

            <button className="primary-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div style={{ width: "800px", margin: "0 0 0 auto" }}>
          <div className="resume">
            <div className="resume_left">
              <div className="resume_profile">
                <img src="https://i.imgur.com/eCijVBe.png" alt="profile_pic" />
              </div>
              <div className="resume_content">
                <div className="resume_item resume_info">
                  <div className="title">
                    <p className="bold">{fullName.name}</p>
                    <p className="regular">{fullName.position}</p>
                  </div>
                  <ul>
                    <li>
                      <div className="icon">
                        <i className="fas fa-map-signs"></i>
                      </div>
                      <div className="data">
                        21 Street, Texas <br /> USA
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-mobile-alt"></i>
                      </div>
                      <div className="data">+324 4445678</div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="data">stephen@gmail.com</div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fab fa-weebly"></i>
                      </div>
                      <div className="data">www.stephen.com</div>
                    </li>
                  </ul>
                </div>
                <div className="resume_item resume_skills">
                  <div className="title">
                    <p className="bold">skill's</p>
                  </div>
                  <ul>
                    <li>
                      <div className="skill_name">HTML</div>
                      <div className="skill_progress">
                        <span style={{ width: "80%" }}></span>
                      </div>
                      <div className="skill_per">80%</div>
                    </li>
                    <li>
                      <div className="skill_name">CSS</div>
                      <div className="skill_progress">
                        <span style={{ width: "70%" }}></span>
                      </div>
                      <div className="skill_per">70%</div>
                    </li>
                    <li>
                      <div className="skill_name">SASS</div>
                      <div className="skill_progress">
                        <span style={{ width: "90%" }}></span>
                      </div>
                      <div className="skill_per">90%</div>
                    </li>
                    <li>
                      <div className="skill_name">JS</div>
                      <div className="skill_progress">
                        <span style={{ width: "60%" }}></span>
                      </div>
                      <div className="skill_per">60%</div>
                    </li>
                    <li>
                      <div className="skill_name">JQUERY</div>
                      <div className="skill_progress">
                        <span style={{ width: "88%" }}></span>
                      </div>
                      <div className="skill_per">88%</div>
                    </li>
                  </ul>
                </div>
                <div className="resume_item resume_social">
                  <div className="title">
                    <p className="bold">Social</p>
                  </div>
                  <ul>
                    <li>
                      <div className="icon">
                        <i className="fab fa-facebook-square"></i>
                      </div>
                      <div className="data">
                        <p className="semi-bold">Facebook</p>
                        <p>Stephen@facebook</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fab fa-twitter-square"></i>
                      </div>
                      <div className="data">
                        <p className="semi-bold">Twitter</p>
                        <p>Stephen@twitter</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fab fa-youtube"></i>
                      </div>
                      <div className="data">
                        <p className="semi-bold">Youtube</p>
                        <p>Stephen@youtube</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fab fa-linkedin"></i>
                      </div>
                      <div className="data">
                        <p className="semi-bold">Linkedin</p>
                        <p>Stephen@linkedin</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="resume_right">
              <div className="resume_item resume_about">
                <div className="title">
                  <p className="bold">About us</p>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Perspiciatis illo fugit officiis distinctio culpa officia
                  totam atque exercitationem inventore repudiandae?
                </p>
              </div>
              <div className="resume_item resume_work">
                <div className="title">
                  <p className="bold">Work Experience</p>
                </div>
                <ul>
                  <li>
                    <div className="date">2013 - 2015</div>
                    <div className="info">
                      <p className="semi-bold">Lorem ipsum dolor sit amet.</p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nostrum, voluptatibus!
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="date">2015 - 2017</div>
                    <div className="info">
                      <p className="semi-bold">Lorem ipsum dolor sit amet.</p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nostrum, voluptatibus!
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="date">2017 - Present</div>
                    <div className="info">
                      <p className="semi-bold">Lorem ipsum dolor sit amet.</p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nostrum, voluptatibus!
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="resume_item resume_education">
                <div className="title">
                  <p className="bold">Education</p>
                </div>
                <ul>
                  <li>
                    <div className="date">2010 - 2013</div>
                    <div className="info">
                      <p className="semi-bold">
                        Web Designing (Texas University)
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nostrum, voluptatibus!
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="date">2000 - 2010</div>
                    <div className="info">
                      <p className="semi-bold">Texas International School</p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nostrum, voluptatibus!
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="resume_item resume_hobby">
                <div className="title">
                  <p className="bold">Hobby</p>
                </div>
                <ul>
                  <li>
                    <i className="fas fa-book"></i>
                  </li>
                  <li>
                    <i className="fas fa-gamepad"></i>
                  </li>
                  <li>
                    <i className="fas fa-music"></i>
                  </li>
                  <li>
                    <i className="fab fa-pagelines"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeMaker;
