import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import Introduction from "./pages/introduction/Introduction";
import JSXComponent from "./pages/jsx-component/JSXComponent";
import { LifecycleFunctionalComponent } from "./pages/lifecycle-component/LifecycleComponent";
import StudentComponent from "./pages/student-form/StudentForm";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Basic Example</h1>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/jsx">JSX example</Link>
            </li>
            <li>
              <Link to="/life-cycle">Lifecycle example</Link>
            </li>
            <li>
              <Link to="/student-form">Student Form</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route exact path="/" element={<Introduction />} />
          <Route exact path="/jsx" element={<JSXComponent />} />
          <Route exact path="/life-cycle" element={<LifecycleFunctionalComponent />} />
          <Route exact path="/student-form" element={<StudentComponent />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
