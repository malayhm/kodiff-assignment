import { Header } from "./components/Header";
import ViewLoader from "./components/ViewLoader";

function ViewExample() {
  return (
    <div className="App">
      <Header />
      <ViewLoader file="example1.json" />
    </div>
  );
}

export default ViewExample;
