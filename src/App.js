import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import DashboardLayout from './Layout/DashboardLayout';
// import Main from './Layout/Main';
import Dashboard from './Pages/Dashboard/Dashboard';
// import Login from './Pages/Login/Login';
// import Home from '../src/Pages/Home/Home';

function App() {
  const router=createBrowserRouter([
// {
//   path:"/",
//   element:<Main></Main>,
//   children:[
//     {
//       path:'/',
//       element:<Home></Home>,
//     },
//     {
//       path:"/login",
//       element:<Login></Login>
//     },
//   ]},


  {
    path:"/",
    element:<DashboardLayout></DashboardLayout>,
    children:[
     {
      path:"/",
      element:<Dashboard></Dashboard>
     },
     
    ]

  }




  ])

   




  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    
    </div>
  );
}

export default App;
