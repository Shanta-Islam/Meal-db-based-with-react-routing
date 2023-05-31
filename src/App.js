import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Meals from './components/Meals/Meals';
import Main from './layout/Main';
import MealDetails from './components/MealDetails/MealDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "about",
          element: <About></About>,
        },
        {
          path: "meals",
          loader: ()=>{
            return fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=k')
          },
          element: <Meals></Meals>,
        },
        {
          path: "/meal/:mealId",
          loader: ({params})=>{
            return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`)
          },
          element: <MealDetails></MealDetails>,
        }
      ]
    },
    {
      path: "*",
      element: <div>This route not found 404</div>
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}


export default App;
