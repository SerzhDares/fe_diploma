import './passengerData.css';

export const PassengerData = () => {
  return (
    <div className="passenger_data">
        <div className="passenger_data_title">
            <div className="pd_title_block">
                <button className="passenger_data_btn">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="15" stroke="#928F94" strokeWidth="2"/>
                        <line x1="8" y1="16" x2="24" y2="16" stroke="#928F94" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <span className="passenger_data_title_text">Пассажир 1</span>
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
                    <select name="documents" id="docs_type_select" className="doc_type_select passport_option">
                        <option className="doc_option" value="Паспорт РФ">Паспорт РФ</option>
                        <option className="doc_option" value="Свидетельство о рождении">Свидетельство о рождении</option>
                    </select>
                </div>
                <div className="document_item">
                    <span className="pd_item_title">Серия</span>
                    <input type="text" className="pd_item-input doc_input" placeholder="__ __ __ __"/>
                </div>
                <div className="document_item">
                    <span className="pd_item_title">Номер</span>
                    <input type="text" className="pd_item-input doc_input" placeholder="__ __ __ __ __ __"/>
                </div>
            </div>
            <div className="next-passenger_container">
                <button className="transparent_black_btn next-pass_btn">Следующий пассажир</button>
            </div>
        </div>
    </div>
  )
}
