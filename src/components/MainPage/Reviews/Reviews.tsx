import './reviews.css';

export const Reviews = () => {
  return (
    <section className="reviews" id="reviews">
     <div className="container">
      <h2 className="section_title">Отзывы</h2>
      <div className="reviews_container">
        <div className="review">
          <img src="/src/images/review_1.png" alt="photo" className="review_photo"/>
          <div className="review_content">
            <span className="review_title">Екатерина Вальнова</span>
            <blockquote className="review_text">
              Доброжелательные подсказки
              на всех этапах помогут правильно заполнить
              поля и без затруднений купить авиа или ж/д
              билет, даже если вы заказываете онлайн билет
              впервые.
            </blockquote>
          </div>
        </div>
        <div className="review">
          <img src="/src/images/review_2.png" alt="photo" className="review_photo"/>
          <div className="review_content">
            <span className="review_title">Евгений Стрыкало</span>
            <blockquote className="review_text">
              СМС-сопровождение до посадки
              сразу после оплаты ж/д билетов
              и за 3 часа до отправления мы пришлем
              вам СМС-напоминание о поездке.
            </blockquote>
          </div>
        </div>
      </div>
     </div>
    </section>
  )
}
