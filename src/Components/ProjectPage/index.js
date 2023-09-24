import Header from "../Header";
import ProjectCard from "../ProjectCard";
import details from '../../mocks' ;
import { RouterProvider } from 'react-router-dom';
import "./index.css";

function ProjectPage() {
  return (
    <div className="App">
      <Header />
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

export default ProjectPage;