import './App.css';
import SideContent from './component/sidebar/side_content';
import ToDo_bar from './component/ToDoBar/ToDo_bar';
function App() {
  return (
    <div className="Learn-bar"> 
      <SideContent/>
      <ToDo_bar/>
    </div>
  );
}

export default App;
