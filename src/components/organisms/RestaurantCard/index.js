import React from 'react'
import { injectGlobal} from 'styled-components'

injectGlobal`
  .restaurant-contacts img{
    width: 500px;
    height:300px;
  }
  .lolkek{
    display:flex;
    height:55px;
    width:auto;
    margin-bottom:20px;
  }
  .lolkek p {
    font-size:11px;
  }
  .lolkek h1{
    font-size:36px;
  }
  .header-content{
    margin-top:25px;
    margin-left:40px;
  }
  .linkks{
    display:felx;
  }
  .linkks a{
    display:block;
    width:240px;
  }
  .rep{
    display:flex;
  }
  .logo{
    text-align:center;
    background-color:#ff7a49;
    max-width:300px;
    min-width:300px;
    height:125px;
  }
  .linkks  img{
      height:30px;
      padding:10px;
    }
    a{
      text-decoration:none;
    }
`

const RestaurantCard = ({ ...props }) => {
  const item = props.location.state
  return (
  <div>
    <div className='rep'>
      <div className='logo'>
        <img src='toimaster_small.svg' />
      </div>
      <div className='linkks'>
          <a href='/'>
            <p>Рестораны</p>
            <img src="restaurants_icon.svg" alt="" />
          </a>
          <a href='/'>
            <p>Ведущие</p>
            <img src="showmen_icon.svg" alt="" />
          </a>
          <a href='/'>
            <p>Шоу-программа</p>
            <img src="shows_icon.svg" alt="" />
          </a>
          <a href='/'>
            <p>Фото/Видеосьемка</p>
            <img src="videos_icon.svg" alt="" />
          </a>
          <a href='/'>
            <p>Прочее</p>
            <img src="other_icon.svg" alt="" />
          </a>
      </div>
    </div>
    <div className='container'>
      <div className="restaurant-card">
        <div className='lolkek'>
          <h1>{item.name}</h1>
          <div className='header-content'>
            <div className="reviews-content-card-star-rt">
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
            </div>
            <p>11 отзывов</p>
          </div>
        </div>
        <hr></hr>
        <div className="restaurant-contacts row">
          <div className='col-lg-6'>
            <p>Кухня: Национальная, европейская</p>
            Телефон: {item.phone}
              <br />
            Адрес:{item.address}
          </div>
          <div className='col-lg-6'>
            <img src={item.photo} alt="" />
          </div>
        </div>
        <div className="restaurant-desc">
          <div>
            <h2>Описание</h2>
          </div>
          <hr></hr>
          {item.description}
        </div>
      </div>
    </div>
  </div>
  )
}

RestaurantCard.propTypes = {}

export default RestaurantCard
