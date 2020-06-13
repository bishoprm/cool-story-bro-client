import React, { useEffect } from "react";
import { Jumbotron } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectHomepageDetails } from "../../store/homepageDetails/selectors";
import { fetchHomepageById } from "../../store/homepageDetails/actions";

export default function DetailPage() {
  const { id } = useParams();
  const homepage = useSelector(selectHomepageDetails);

  console.log("WHATS HOMEPAGE:", homepage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomepageById(id));
  }, [dispatch, id]);
  console.log("WHATS HOMEPAGE:", homepage);

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
            </div>
          );
        })}
      </center>
    </div>
  );
}
