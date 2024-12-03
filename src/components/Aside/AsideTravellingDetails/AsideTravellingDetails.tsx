import '../AsideOptions/TimeChoosing/timeChoosing.css';
import './asideTravellingDetails.css';
import { MoreButton } from '../MoreButton';
import { useState } from 'react';

export const AsideTravellingDetails = () => {

  const [isOpen, setIsOpen] = useState(false);
  const openBtn = () => {setIsOpen(!isOpen)};

  return (
    <aside className="aside_block details_aside_block">
        <div className="aside_block_item details_title">
            детали поездки
        </div>
        <div className="aside_block_item time_choosing time_choosing_there">
            <div className="time_choosing_title">
                <span className="time_choosing_text">Туда</span>
                <span className="travel_date">30.10.2024</span>
                <MoreButton btnSetState={openBtn} btnState={isOpen}/>
            </div>
            <div className={isOpen ? "travel_info open" : "travel_info"}>
                <div className="ti_text_block">
                    <span className="ti_text_option">№ поезда</span>
                    <span className="ti_text_number">116С</span>
                </div>
                <div className="ti_text_block">
                    <span className="ti_text_option">Название</span>
                    <span className="ti_text_route">Адлер<br/>Санкт-Петербург</span>
                </div>
                <div className="train_departure_arrival tda_details">
                    <div className="train_time departure_time">
                        <span className="time_text">00:10</span>
                        <span className="travel_date ti_travel_date">30.10.2024</span>
                    </div>
                    <div className="travel_time travel_time_there tt_details">
                        <span className="travel_time_value tt_value_details">9 : 42</span>
                    </div>
                    <div className="train_time arrival_time">
                        <span className="time_text arrival_time_text">09:52</span>
                        <span className="travel_date ti_travel_date">30.10.2024</span>
                    </div>
                </div>
                <div className="details_points">
                    <div className="details_point details_start_point">
                        <span className="settlement details_settlement">Москва</span>
                        <span className="station details_station">Курский вокзал</span>
                    </div>
                    <div className="details_point end_point">
                        <span className="settlement details_settlement">Санкт-Петербург</span>
                        <span className="station details_station">Ладожский вокзал</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="aside_block_item time_choosing time_choosing_back">
            <div className="time_choosing_title">
                <span className="time_choosing_text">Обратно</span>
                <span className="travel_date travel_date_back">09.11.2024</span>
                <MoreButton btnSetState={openBtn} btnState={isOpen}/>
            </div>
            <div className={isOpen ? "travel_info open" : "travel_info"}>
                <div className="ti_text_block">
                    <span className="ti_text_option">№ поезда</span>
                    <span className="ti_text_number">116С</span>
                </div>
                <div className="ti_text_block">
                    <span className="ti_text_option">Название</span>
                    <span className="ti_text_route">Адлер<br/>Санкт-Петербург</span>
                </div>
                <div className="train_departure_arrival tda_details">
                    <div className="train_time departure_time">
                        <span className="time_text">00:10</span>
                        <span className="travel_date ti_travel_date">09.11.2024</span>
                    </div>
                    <div className="travel_time travel_time_back tt_details">
                        <span className="travel_time_value tt_value_details">9 : 42</span>
                    </div>
                    <div className="train_time arrival_time">
                        <span className="time_text arrival_time_text">09:52</span>
                        <span className="travel_date ti_travel_date">09.11.2024</span>
                    </div>
                </div>
                <div className="details_points">
                    <div className="details_point details_start_point">
                        <span className="settlement details_settlement">Москва</span>
                        <span className="station details_station">Курский вокзал</span>
                    </div>
                    <div className="details_point end_point">
                        <span className="settlement details_settlement">Санкт-Петербург</span>
                        <span className="station details_station">Ладожский вокзал</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="aside_block_item time_choosing passengers_info">
            <div className="time_choosing_title">
                <span className="time_choosing_text">Пассажиры</span>
                <MoreButton btnSetState={openBtn} btnState={isOpen}/>
            </div>
            <div className={isOpen ? "travel_info passengers_travel_info open" : "travel_info passengers_travel_info"}>
                <div className="ti_text_block">
                    <span className="ti_text_option">2 взрослых</span>
                    <span className="price">
                        <span className="price_value details_price_value">5 840</span>
                        <span className="currency ticket_currency"> ₽</span>
                    </span>
                </div>
                <div className="ti_text_block">
                    <span className="ti_text_option">1 ребенок</span>
                    <span className="price">
                        <span className="price_value details_price_value">1 920</span>
                        <span className="currency ticket_currency"> ₽</span>
                    </span>
                </div>
            </div>
        </div>
        <div className="aside_block_item time_choosing">
            <div className="ti_text_block total_text_block">
                <span className="ti_text_total">итого </span>
                <span className="price">
                    <span className="total_price">7 760</span>
                    <span className="total_currency"> ₽</span>
                </span>
            </div>
        </div>
    </aside>
  )
}
