import Members from "./pages/Members";
import MemberDetail from "./pages/MemberDetail";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Members}></Route>
        <Route path="/user/:id" component={MemberDetail}></Route>
      </Switch>
    </div>
  );
}

export default App;
