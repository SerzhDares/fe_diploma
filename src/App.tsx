import { Routes, Route } from 'react-router-dom';
import { MainPage } from './components/MainPage/MainPage';
import { TrainChoosing } from './components/TrainChoosing/TrainChoosing';
import { PlacesChoosing } from './components/PlacesChoosing/PlacesChoosing';
import { Passengers } from './components/Passengers/Passengers';

function App() {

  return (
    <>
    {/* <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/trains' element={<TrainChoosing/>}/>
      <Route path='/seats' element={<PlacesChoosing/>}/>
    </Routes> */}
    <Passengers/>
    </>
  )
}

export default App;
