import React from "react";
import styles from "./Code.module.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

export const Code = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Coding Projects</h2>
        <div className={styles.content}>
          <div className={styles.grid}>
          {/* Krita Plugin */}
          <Card className={styles.codeItem}>
            <Carousel variant="dark" interval={null} controls={true}>
              <Carousel.Item> 
                <img 
                  className="d-block w-100"
                  src="assets\code\Image To Palette\itp_interface.png"
                  alt="Image Two"
                />   
              </Carousel.Item> 
              <Carousel.Item>
              <video className="d-block w-100" controls autoPlay muted loop>
                  <source src="assets\code\Image To Palette\itp_demo_dragndrop.mp4"
                  type="video/mp4"
                  />
                </video>
              </Carousel.Item>
              <Carousel.Item>
              <video className="d-block w-100" controls autoPlay muted loop>
                  <source src="assets\code\Image To Palette\itp_demo_saving.mp4"
                  type="video/mp4"
                  />
                </video>
              </Carousel.Item>  
              </Carousel>
            <Card.Body>
              <h3 className={styles.projectTitle}>Image to Palette Krita Plugin</h3>
              <p className={styles.subtitle}>Python, PyQt, Krita API</p>
              <ul className={styles.bodyul}>
                  <li className={styles.bodyli}>
                    Developed a Krita docker plugin for generating color palettes from images.
                  </li>
                  <li className={styles.bodyli}>
                    Implemented functionality to load, regenerate, save, and display color palettes, including drag-and-drop image support.
                  </li>
                  <li className={styles.bodyli}>
                    Managed JSON file conversion to support color palette saving and recent palette history across Krita sessions.
                  </li>
                  <li className={styles.bodyli}>
                    Utilized PyQt5 and Krita’s API for a dynamic and intuitive user interface.
                  </li>
                </ul>
                <a href="https://github.com/meredithscott131/ImageToPalette"
            target="_blank" className={styles.githubLink}>Github Repo</a>
            </Card.Body>
          </Card>

          {/* Production Plan */}
          <Card className={styles.codeItem}>
            <Carousel variant="dark" interval={null} controls={true}>
              <Carousel.Item> 
                <img 
                  className="d-block w-100"
                  src="assets\code\Production Plan\ppg_1.png"
                  alt="Image Two"
                />   
              </Carousel.Item>
              <Carousel.Item> 
                <img 
                  className="d-block w-100"
                  src="assets\code\Production Plan\ppg_2.png"
                  alt="Image Two"
                />   
              </Carousel.Item> 
              <Carousel.Item>
              <video className="d-block w-100" controls autoPlay muted loop>
                  <source src="assets\code\Production Plan\production_plan_demo.mp4"
                  type="video/mp4"
                  />
                </video>
              </Carousel.Item> 
              </Carousel>
            <Card.Body>
              <h3 className={styles.projectTitle}>Animation Production Plan Generator</h3>
              <p className={styles.subtitle}>Typescript, Javascript, React, Generative AI</p>
              <ul className={styles.bodyul}>
                  <li className={styles.bodyli}>
                    Collaborated with a team to develop a web application that generates production plans with OpenAI for animation students and creative hobbyists.
                  </li>
                  <li className={styles.bodyli}>
                    Incorporated csv export and spreadsheet stylization for a user-friendly experience.
                  </li>
                  <li className={styles.bodyli}>
                    Interviewed capstone students to understand current frustrations with spreadsheet platforms and find prototype errors.
                  </li>
                </ul>
                <a href="https://github.com/Abby-Dennin/Animation-Production-Plan-Generator"
            target="_blank" className={styles.githubLink}>Github Repo</a>
            </Card.Body>
          </Card>

          {/* Quiz Database */}
          <Card className={styles.codeItem}>
            <Carousel interval={null} controls={true}>
              <Carousel.Item> 
                <img 
                  className="d-block w-100"
                  src="assets\code\Quizzy\diagram.png"
                  alt="Image Two"
                />   
              </Carousel.Item> 
              <Carousel.Item>
              <video className="d-block w-100" controls autoPlay muted loop>
                  <source src="assets\code\Quizzy\quizzy_demo.mp4"
                  type="video/mp4"
                  />
                </video>
              </Carousel.Item> 
              </Carousel>
            <Card.Body>
              <h3 className={styles.projectTitle}>"Quizzy" Database</h3>
              <p className={styles.subtitle}>Python, MySQL, REST API, Docker, Appsmith</p>
              <ul className={styles.bodyul}>
                  <li className={styles.bodyli}>
                    Conceptualized and implemented a database for a proof-of-concept quiz taking platform with a team of peers.
                  </li>
                  <li className={styles.bodyli}>
                    Arranged user profiles with functionality to create, delete and edit quizzes as well as view their aggregated statistics.
                  </li>
                  <li className={styles.bodyli}>
                    Managed the REST API implementation of query commands in Python to optimize the retrieval of quiz statistics and management of user profiles.
                  </li>
                  <li className={styles.bodyli}>
                    Adapted the database to a front-end application by a local Appsmith server with sample data.
                  </li>
                </ul>
                <a href="https://github.com/nicolesorial/quizzy"
            target="_blank" className={styles.githubLink}>Github Repo</a>
            </Card.Body>
          </Card>
          
          {/* Bullet Journal */}
          <Card className={styles.codeItem}>
            <Carousel variant="dark" interval={null} controls={true}>
              <Carousel.Item> 
                <img 
                  className="d-block w-100"
                  src="assets\code\Bullet Journal\journal_preview.png"
                  alt="Image Two"
                />   
              </Carousel.Item> 
              <Carousel.Item>
                <img 
                    className="d-block w-100"
                    src="assets\code\Bullet Journal\filePopup.png"
                    alt="Image Two"
                  /> 
              </Carousel.Item>
              </Carousel>
            <Card.Body>
              <h3 className={styles.projectTitle}>Bullet Journal</h3>
              <p className={styles.subtitle}>Java, JavaFX, MVC Pattern</p>
              <ul className={styles.bodyul}>
                  <li className={styles.bodyli}>
                    Collaborated with a team to create a bullet journal application with a variety of features including event/task creation, event/task ordering, file creation, and theme customization.
                  </li>
                  <li className={styles.bodyli}>
                    Directed the custom .bujo file creation and saving features for the application, utilizing JSON conversion.
                  </li>
                  <li className={styles.bodyli}>
                    Structured the project with the model-view-controller design pattern for a streamlined development process. 
                  </li>
                  <li className={styles.bodyli}>
                    Implemented graphics in JavaFX using Scene Builder to create dynamic layouts.
                  </li>
                </ul>
                <a href="https://github.com/meredithscott131/bullet-journal"
            target="_blank" className={styles.githubLink}>Github Repo</a>
            </Card.Body>
          </Card>
          </div>
        </div>
    </section>
  );
};