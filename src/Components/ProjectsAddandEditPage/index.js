import Header from '../Header';
import PlaceholderImage from '../../Images/placeholder.png';
import './index.css';

const ProjectsAddandEditPage = () => {
    const handleSave = () => {
        console.log('Save button has been clciked');
    }

    return (
        <div>
            <Header />
            <div className='new-project-container'>
                <img src={PlaceholderImage} alt="preview" className='new-image' /><br />
                <input type="file" className='new-image-picker' /><br />
                <input type='text' placeholder='Enter project name' className='new-project-name' /><br />
                <input type='text' placeholder='Enter project URL' className='new-project-url' /><br />
                <input type='text' placeholder='Enter project description' className='new-project-description' /><br />
                <button onClick={handleSave} className='new-project-submission'>Save</button>
            </div>
        </div>
    );
}

export default ProjectsAddandEditPage;