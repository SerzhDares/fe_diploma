import { GeneralHeader } from "../Header/GeneralHeader";
import { StagesLine } from "../Header/Stages/StagesLine";
import { AsideTravellingDetails } from "../Aside/AsideTravellingDetails/AsideTravellingDetails";
import { PassengerData } from "./PassengerData/PassengerData";
import { ErrorData } from "./ErrorData/ErrorData";
import { SuccessfullData } from "./SuccessfullData/SuccessfullData";
import { Footer } from "../Footer/Footer";

export const Passengers = () => {
  return (
    <>
        <GeneralHeader/>
        <StagesLine currentStage={2}/>
        <div className="choosing_page_container">
          <div className="container passengers_container">
          <AsideTravellingDetails/>
          <main className="passengers_data">
          <PassengerData/>
          <div className="passenger_data">
            <div className="passenger_data_title">
              <div className="pd_title_block">
                <button className="passenger_data_btn">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="15" stroke="#928F94" strokeWidth="2"/>
                    <line x1="8" y1="16" x2="24" y2="16" stroke="#928F94" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <span className="passenger_data_title_text">Пассажир 2</span>
              </div>
              <button className="delete_passenger_btn">
                <img src="/src/images/delete_passenger_icon.svg" alt="удалить" className="delete_passenger_icon"/>
              </button>
            </div>
            <div className="passenger_data_main">
              <div className="about_passenger">
                <select name="ages" id="age_type_select" className="age_type_select">
                  <option className="age_option" value="Взрослый">Взрослый</option>
                  <option className="age_option" value="Детский">Детский</option>
                </select>
                <div className="full_name_container">
                  <div className="pd_item">
                    <span className="pd_item_title">Фамилия</span>
                    <input type="text" className="pd_item-input fn_item-input"/>
                  </div>
                  <div className="pd_item">
                    <span className="pd_item_title">Имя</span>
                    <input type="text" className="pd_item-input fn_item-input"/>
                  </div>
                  <div className="pd_item">
                    <span className="pd_item_title">Отчество</span>
                    <input type="text" className="pd_item-input fn_item-input"/>
                  </div>
                </div>
                <div className="sex_birthday_container">
                  <div className="sb_item">
                    <span className="pd_item_title">Пол</span>
                    <div className="check_sex_container">
                      <span className="check_sex check_sex_m checked_sex">М</span>
                      <span className="check_sex">Ж</span>
                    </div>
                  </div>
                  <div className="sb_item">
                    <span className="pd_item_title">Дата рождения</span>
                    <input type="text" className="pd_item-input" placeholder="ДД.ММ.ГГ"/>
                  </div>
                </div>
                <div className="limited_mobility_container">
                  <input type="checkbox" className="lm_checkbox"/>
                  <span className="lm_text">ограниченная подвижность</span>
                </div>
              </div>
              <div className="document_container">
                <div className="document_item">
                  <span className="pd_item_title">Тип документа</span>
                  <select name="documents" id="docs_type_select" className="doc_type_select birth_sertificate_option">
                    <option className="doc_option" value="Паспорт РФ">Паспорт РФ</option>
                    <option className="doc_option" value="Свидетельство о рождении">Свидетельство о рождении</option>
                  </select>
                </div>
                <div className="document_item">
                  <span className="pd_item_title">Номер</span>
                  <input type="text" className="pd_item-input doc_input" placeholder="_ _ _ _ _ _ _ _ _ _ _ _"/>
                </div>
              </div>
              <div className="next-passenger_container">
                <button className="transparent_black_btn next-pass_btn">Следующий пассажир</button>
              </div>
              <ErrorData/>
              <SuccessfullData/>
            </div>
          </div>
          <div className="passenger_data">
            <div className="passenger_data_title">
              <div className="pd_title_block">
                <button className="passenger_data_btn">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.9449 8.46381L14.9449 14.9449L8.46378 14.9449C7.86089 14.9449 7.40871 15.3971 7.40871 16C7.40871 16.6029 7.86089 17.0551 8.46378 17.0551L14.9449 17.0551L14.9449 23.5362C14.9449 24.1391 15.3971 24.5913 15.9246 24.5159L16.0753 24.5159C16.6782 24.5159 17.1304 24.0637 17.055 23.5362L17.055 17.0551L23.3854 17.0551C23.9883 17.0551 24.4405 16.6029 24.4405 16C24.4405 15.3971 23.9883 14.9449 23.3854 14.9449L17.055 14.9449L17.055 8.46381C17.055 7.86091 16.6029 7.40874 16.0753 7.4841L15.9246 7.4841C15.3217 7.4841 14.8695 7.93628 14.9449 8.46381Z" fill="#FFA800"/>
                    <circle cx="16" cy="16" r="15" stroke="#FFA800" strokeWidth="2"/>
                  </svg>                    
                </button>
                <span className="passenger_data_title_text">Пассажир 3</span>
              </div>
            </div>
          </div>
          <div className="passenger_data">
            <div className="passenger_data_title">
              <div className="pd_title_block">
                <span className="passenger_data_title_text">Добавить пассажира</span>
              </div>
              <button className="add_passenger_btn">
                <img src="/src/images/add_passenger_icon.svg" alt="добавить" className="add_passenger_icon"/>
              </button>
            </div>
          </div>
          <div className="btn_container">
            <button className="orange_btn next_btn disabled_btn">Далее</button>
          </div>
        </main>
      </div>
    </div>
        <Footer/>
    </>
  )
}
