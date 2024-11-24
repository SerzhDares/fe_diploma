import { Routes, Route } from 'react-router-dom';
import { MainPage } from './components/MainPage/MainPage';
import { TrainChoosing } from './components/TrainChoosing/TrainChoosing';
import { PlacesChoosing } from './components/PlacesChoosing/PlacesChoosing';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/trains' element={<TrainChoosing/>}/>
      <Route path='/seats' element={<PlacesChoosing/>}/>
    </Routes>
    </>
  )
}

export default App;
