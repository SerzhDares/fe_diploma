import { useState } from 'react';
import './App.css';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from  "react-datepicker";
import { ru } from 'date-fns/locale/ru';
registerLocale('ru', ru)

const Example = () => {
  const [startDate, setStartDate] = useState("");
  return (
    <DatePicker 
    locale="ru" 
    selected={startDate} 
    onChange={(date) => setStartDate(date)}
    minDate={new Date()}
    dateFormat={"dd MMMM"}
    placeholderText={"ДД/ММ/ГГ"} 
     />
  );
};

function App() {

  return (
    <header className="header" id="header">
      <div className="container">
        <span className="logo">
          <a href="#header" className="logo_link">Лого</a>
        </span>
      </div>
      <nav className="header_menu">
        <div className="container">
          <ul className="menu_list">
            <li className="menu_list-item">
              <a href="#about" className="item_link">О нас</a>
            </li>
            <li className="menu_list-item">
              <a href="#info" className="item_link">Как это работает</a>
            </li>
            <li className="menu_list-item">
              <a href="#reviews" className="item_link">Отзывы</a>
            </li>
            <li className="menu_list-item">
              <a href="#contacts" className="item_link">Контакты</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <div className="header_bottom-block">
          <h1 className="header_title">Вся жизнь - <br/><b>путешествие!</b></h1>
          <form action="" className="header__form">
            <div className="form_inputs route-inputs">
              <span className="input_title">Направление</span>
              <input type="text" className="form__input form__input_geo" placeholder="Откуда"/>
              <button className="backwards_btn"></button>
              <input type="text" className="form__input form__input_geo" placeholder="Куда"/>
            </div>
            <div className="form_inputs date-inputs">
              <div className="date-input-title">
                <span className="input_title">Дата</span>
                <Example/>
              </div>
              <Example/>
            </div>
            <button className="orange_btn search_btn">Найти билеты</button>
          </form>
        </div>
      </div>
    </header>
  )
}

export default App
