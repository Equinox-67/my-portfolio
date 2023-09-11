import "./App.css";
import ProjectsPage from "./Components/ProjectsPage";
import Header from "./Components/Header";
import ProjectCard from "./Components/ProjectCard/index";
import details from './mocks';

function App() {
  return (
    <div className="App">
      <Header />
      <ProjectsPage />
      <div className="detail-list">
        {details.map((detail, index) => {
          return (
            <ProjectCard
              key={index}
              image={detail.image}
              name={detail.name}
              url={detail.url}
              description={detail.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
