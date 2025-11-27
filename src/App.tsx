import { RouterProvider } from "react-router/dom";
import { router } from "./routes/router";

function App() {
  return <RouterProvider router={router} />;
  // 변경 테스트
}

export default App;
