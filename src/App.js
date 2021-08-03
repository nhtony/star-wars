import { BrowserRouter } from "react-router-dom";
import { BaseLayout } from "./components";
import { AppRouter } from "./routing";

function App() {
  return (
    <BaseLayout>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </BaseLayout>
  );
}

export default App;
