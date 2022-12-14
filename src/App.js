import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './component/Route/Route';

function App() {
  return (
    <div data-theme="dark">
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
