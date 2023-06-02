import React from "react";
import Header from "./components/Header";
import Articles from "./components/Articles";
import Form from "./components/Form";
import { UserData } from "./types/userTypes";

const App = () => {
  const [user, setUser] = React.useState<UserData>({ name: "", password: "" });
  const hasUser = user.name !== "" && user.password !== "";

  const handleUser = (data: UserData) => {
    setUser(data);
  };

  return (
    <div className="h-screen">
      <Header user={user} />
      {hasUser && <Articles />}
      {!hasUser && <Form handleUser={handleUser} />}
    </div>
  );
};

export default App;