import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import HomePageCard from "../../components/HomePageCard/HomePageCard";
import Loading from "../../components/Loading/index";
import { selectUser } from "../../store/user/selectors";
import MyHomepageForm from "./MyHomepageForm";
import StoryForm from "./StoryForm";

export default function MyHomePage() {
  const { token, homepage, id } = useSelector(selectUser);
  const history = useHistory();
  const [editMode, setEditMode] = useState(false);
  const [postStoryMode, setPostStoryMode] = useState(false);

  console.log("HOMEPAGE", homepage);
  if (token === null) {
    history.push("/");
  }

  if (homepage === null) {
    return <Loading />;
  }
  console.log("Token:", token, "homepage:", homepage, "id:", id);

  const displayButtons =
    id === homepage.userId && editMode === false && postStoryMode === false;

  deleteStoryHandler(storyId);

  return (
    <div>
      <Jumbotron
        style={{
          color: homepage.color,
          backgroundColor: homepage.backgroundColor,
        }}
      >
        <h1>{homepage.title}</h1>
        <p>{homepage.description}</p>
      </Jumbotron>
      <Container>
        {displayButtons ? (
          <Card>
            <Button onClick={() => setEditMode(true)}>Edit my page</Button>
            <Button onClick={() => setPostStoryMode(true)}>
              Post a cool story bro
            </Button>
          </Card>
        ) : null}
        {editMode ? (
          <Card>
            <MyHomepageForm />
          </Card>
        ) : null}

        {postStoryMode ? (
          <Card>
            <StoryForm />
          </Card>
        ) : null}
      </Container>
      <center>
        {homepage.stories.map((story) => {
          return (
            <div key={story.id}>
              <h2>{story.name}</h2>
              <p>{homepage.createdAt}</p>
              <p>
                <img src={story.imageUrl} />
              </p>
              <p>{story.content}</p>
              <button onClick={deleteStoryHandler}>delete story</button>
            </div>
          );
        })}
      </center>
    </div>
  );
}
