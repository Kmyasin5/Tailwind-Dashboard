import { Outlet } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex">
      <div className='basis-[12%] h-[100vh]'>
        <Sidebar/>
      </div>
      <div className='basis-[88%] border'>
        <Dashboard />
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default App;
