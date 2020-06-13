import React, { useEffect } from "react";
import { Jumbotron } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  selectHomePageLoading,
  selectHomePages,
} from "../../store/homePage/selectors";
import { fetchHomePageData } from "../../store/homePage/actions";
import HomePageCard from "../../components/HomePageCard/HomePageCard";
import { selectUser } from "../../store/user/selectors";

export default function HomePage() {
  const loading = useSelector(selectHomePageLoading);
  const homePages = useSelector(selectHomePages);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomePageData);
  }, [dispatch]);

  return (
    <>
      <Jumbotron>
        <h1>Home Page</h1>
      </Jumbotron>

      <center>{loading ? <em>loading...</em> : null}</center>
      {homePages.map((homePage) => {
        return (
          <div key={homePage.id}>
            <HomePageCard
              key={homePage.id}
              id={homePage.id}
              title={homePage.title}
              color={homePage.color}
              backgroundColor={homePage.backgroundColor}
              description={homePage.description}
            />
          </div>
        );
      })}
    </>
  );
}
