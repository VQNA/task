import './App.css';
import ToDo_bar from './features/ToDo_bar';
import SideContent from './features/sidebar/side_content';
function App() {
  return (
    <div className="Learn-bar"> 
      <SideContent/>
      <ToDo_bar/>
    </div>
  );
}

export default App;
