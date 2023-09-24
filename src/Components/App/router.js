import { createBrowserRouter } from 'react-router-dom';
import ProjectPage from '../ProjectPage';
import ProjectAddandEdit from '../ProjectsAddandEditPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <ProjectPage />,
    },
    {
        path: '/upsert',
        element: <ProjectAddandEdit />,
    }
])

export default router;