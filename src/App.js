import "./App.css";
import ProjectsPage from "./Components/ProjectsPage";
import Header from "./Components/Header";
import ProjectCard from "./Components/ProjectCard/index";

function App() {
  return (
    <div className="App">
      <Header />
      <ProjectsPage />
      <ProjectCard />
    </div>
  );
}

export default App;
