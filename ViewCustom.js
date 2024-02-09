import { Header } from "./components/Header";
import ViewLoader from "./components/ViewLoader";

function ViewCustom() {
  return (
    <div className="App">
      <Header />
      <ViewLoader file="example2.json" />
    </div>
  );
}

export default ViewCustom;
