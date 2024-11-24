import { GeneralHeader } from "../Header/GeneralHeader";
import { StagesLine } from "../Header/Stages/StagesLine";
import { AsideOptions } from "../AsideOptions/AsideOptions";
import { LastTickets } from "../LastTickets/LastTickets";
import { ChooseOtherTrain } from "./ChooseOtherTrain";
import { TrainTimeInfo } from "./TrainTimeInfo";
import { TicketsQuantity } from "./TicketsQuantity";
import { WagonTypeChoosing } from "./WagonTypeChoosing";
import { Footer } from "../Footer/Footer";

export const PlacesChoosing = () => {

  const trainTimeInfoParams = {
    trainNumber: "116C",
    startPoint: "Адлер",
    from: "Москва",
    to: "Санкт-Петербург",
    departureTime: "00:10",
    arrivalTime: "09:52",
    stationFrom: "Курский вокзал",
    stationTo: "Ладожский вокзал",
    durationHours: 9,
    durationMinutes: 42,
    directionArrow: "/src/images/orange_right_arrow.svg"
  }

  return (
    <>
    <GeneralHeader/>
    <StagesLine currentStage={1}/>
    <div className="choosing_page_container">
        <div className="container places_choosing_container">
            <aside className="aside_block">
                <AsideOptions/>
                <LastTickets/>
            </aside>
            <main className="places_choosing_content">
                <h2 className="choosing_pages_title places_choosing_title">выбор мест</h2>
                <div className="places_choosing_params">
                    <ChooseOtherTrain 
                        directionClass={"choose_other_there"} 
                        directionImg={"/src/images/choose_other_there.svg"}
                    />
                    <TrainTimeInfo {...trainTimeInfoParams}/>
                    <TicketsQuantity/>
                    <WagonTypeChoosing/>
                </div>
                <div className="places_choosing_params">
                    <ChooseOtherTrain 
                        directionClass={"choose_other_back"}
                        directionImg={"/src/images/choose_other_back.svg"}
                    />
                    <TrainTimeInfo
                        trainNumber={"116C"}
                        startPoint={"Адлер"} 
                        from={"Москва"} 
                        to={"Санкт-Петербург"}
                        departureTime={"00:10"}
                        arrivalTime={"09:52"}
                        stationFrom={"Курский вокзал"}
                        stationTo={"Ладожский вокзал"}
                        durationHours={9}
                        durationMinutes={42}
                        directionArrow={"/src/images/orange_left_arrow.svg"}
                    />
                    <TicketsQuantity/>
                    <WagonTypeChoosing/>
                </div>
                <div className="btn_container">
                  <button className="orange_btn next_btn">Далее</button>
                </div>
            </main>
        </div>
    </div>
    <Footer/>
    </>
  )
}
