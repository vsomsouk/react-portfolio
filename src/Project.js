import React from "react";
import {Row, Col, Container, Card, Button} from 'react-bootstrap';
import Navbar from "./Navbar";



function Project() {
    return (
        <div className="container">
        <Container fluid="md" className="vertical">
        <Navbar />
          <Row>
           <Col xs="1"></Col>
           <Col xs="10" className="projectdiv">

             <div className="d-flex justify-content-center mt-5">              
             <Card className="project" style={{ width: '30rem' }}>
                 <Card.Img variant="top" src="dayscheduleimg.jpg" />
                  <Card.Body>
                    <Card.Title className="title">Work Scheduler</Card.Title>
                     <Card.Text>
                     This application includes JQuery, moment.js and Bootstrap. The scheduler will 
                     allow users to save events for each hour of the work day. When they type in an event, 
                     they will be able to click save. If they close out of their web browser or need to change 
                     details of their scheduled event, the application will remain saved when they go back to the page.
                      </Card.Text>
                    <Button variant="outline-secondary" href="https://vsomsouk.github.io/work-day-scheduler/">Deployed Link</Button>
                    <Button variant="outline-secondary" href="https://github.com/vsomsouk/work-day-scheduler">Github</Button>
                  </Card.Body>
                </Card>

                <Card className="project" style={{ width: '30rem' }}>
                 <Card.Img variant="top" src="weatherimg.JPG" />
                  <Card.Body>
                    <Card.Title className="weathertext title">Weather Dashboard</Card.Title>
                     <Card.Text >
                     As a user, we want to create a weather dashboard where they can
                    search a particular city and view the current forecast.
                    The forecast will include the temperature, humidity, wind speed and UV index.
                     A 5-day forecast will be shown below what the weather will look like in the future.
                      </Card.Text>
                    <Button variant="outline-secondary" href="https://vsomsouk.github.io/weather-dashboard/">Deployed Link</Button>
                    <Button variant="outline-secondary" href="https://github.com/vsomsouk/weather-dashboard">Github</Button>
                  </Card.Body>
                </Card>
                </div>

                <div className="d-flex justify-content-center">              
             <Card className="project" style={{ width: '30rem' }}>
                 <Card.Img variant="top" src="projectoneimg.JPG" />
                  <Card.Body>
                    <Card.Title className="title">Recipe Now!</Card.Title>
                     <Card.Text>
                     A no-nonsense application that returns a recipe to users based on their given search
                    parameter.
                    We wanted to create a very streamlined and straight forward website that preforms two different API calls and
                   returns two sets of data that work together in the result.
                      </Card.Text>
                    <Button variant="outline-secondary" href="https://iron318davis.github.io/RecipeNow/">Deployed Link</Button>
                    <Button variant="outline-secondary" href="https://github.com/iron318davis/RecipeNow/">Github</Button>
                  </Card.Body>
                </Card>

                <Card className="project" style={{ width: '30rem' }}>
                 <Card.Img variant="top" src="quizimg.JPG" className="codeimg" />
                  <Card.Body>
                    <Card.Title className="codetext title">Code Quiz</Card.Title>
                     <Card.Text>
                     A multiple choice code quiz with a timer included. As the user goes through the
                     quiz and answers incorrectly, the timer will be docked 10 seconds. Once all the questions have been answered,
                    a score will appear at the end.
                      </Card.Text>
                    <Button variant="outline-secondary" href="https://vsomsouk.github.io/code-quiz/">Deployed Link</Button>
                    <Button variant="outline-secondary" href="https://github.com/vsomsouk/code-quiz">Github</Button>
                  </Card.Body>
                </Card>
                </div>   

                <div className="d-flex justify-content-center">              
             <Card className="project" style={{ width: '30rem' }}>
                 <Card.Img variant="top" src="burger.JPG" />
                  <Card.Body>
                    <Card.Title className="title">Devour A Burger!</Card.Title>
                     <Card.Text>
                     Using a MVC design pattern, MySQL, Node, Express, Handlebars and ORM will be used to create 
                     a burger logger. User will be able to add a burger and let it sit in queue. When the user 
                     decides which burger they want to devour, they can click a button and have the burger devoured.
                      </Card.Text>
                    <Button variant="outline-secondary" href="https://radiant-wave-21711.herokuapp.com/">Deployed Link</Button>
                    <Button variant="outline-secondary" href="https://github.com/vsomsouk/burger-logger">Github</Button>
                  </Card.Body>
                </Card>

                <Card className="project" style={{ width: '30rem' }}>
                 <Card.Img variant="top" src="mixtape.JPG" className="mixtapeimg" />
                  <Card.Body>
                    <Card.Title className="mixtapetext title">Mixtape</Card.Title>
                     <Card.Text >
                     Mixtape is a social media music sharing website built on node-express and MySQL.
                      It has a simple interface for creating, editing and posting playlists. A upvote and
                      downvote is an additional feature.
                      </Card.Text>
                    <Button variant="light" href="https://project-2-mixtape.herokuapp.com/">Deployed Link</Button>
                    <Button variant="light" href="https://github.com/vsomsouk/mixtape">Github</Button>
                  </Card.Body>
                </Card>
                </div>   




           </Col>
           <Col xs="1"></Col>
          </Row>
        </Container>
        </div>
    );
  }
  
  export default Project;