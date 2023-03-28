import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  /*axios.get('').then();
  const getData = async () => {
    let response = await axios.get('');
    return response.data;
  }

  let res = getData();

  res.then((data) => {
    console.log(data);
  });*/

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;

// 라우터 관리