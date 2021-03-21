import React from "react";
import UsersContainer from "../components/UsersContainer";
import UserContainer from "../components/UserContainer";
import { Route } from "react-router-dom";

const UsersPage = () => {
  return (
    <>
      <UsersContainer />
      <Route
        path="/users/:id"
        render={({ match }) => <UserContainer id={match.params.id} />}
      />
    </>
  );
};

export default UsersPage;
