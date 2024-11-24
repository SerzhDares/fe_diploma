import classNames from "classnames";

interface ChooseOtherTrainProps {
  directionClass: string;
  directionImg: string;
}

export const ChooseOtherTrain = ({directionClass, directionImg}: ChooseOtherTrainProps) => {
  return (
    <div className={classNames("choose_other", directionClass)}>
      <img src={directionImg} alt="стрелка" className="choose_other_img"/>
      <button className="transparent_black_btn">Выбрать другой поезд</button>
  </div>
  )
}
