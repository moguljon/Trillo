import React from 'react';
import Logo from '../../../src/img/logo.png';
import Svg from '../../../src/img/sprite.svg';
import User from '../../../src/img/faceshot.jpg';
import img1 from '../../img/hotel1.jpg';
import img2 from '../../img/hotel2.jpg';
import img3 from '../../img/hotel4.jpg';
import user1 from '../../img/user-1.jpg';
import user2 from '../../img/user-2.jpg';
import user3 from '../../img/user-3.jpg';
import user4 from '../../img/user-4.jpg';

const Header = () => {
    const currentDate = new Date().getFullYear();
    return(
        <div className='container'>
          <header className='header'>
            <img src={Logo} alt='trillo logo' className='logo' />

            <form action='##' className='input'>
              <input type='text' className='input__one' placeholder='Search hotels' />
              <button className='input__button'>
                <svg className='input__search'>
                  <use xlinkHref={`${Svg}#icon-magnifying-glass`}></use>
                </svg>
              </button>
            </form>

            <nav className='user-nav'>
              <div className='user-nav__icons'>
                <svg className='user-nav__icon'>
                  <use xlinkHref={`${Svg}#icon-message`}></use>
                </svg>
                <span className='user-nav__notifications'>8</span>
              </div>
              <div className='user-nav__icons'>
                <svg className='user-nav__icon'>
                  <use xlinkHref={`${Svg}#icon-bookmark`}></use>
                </svg>
                <span className='user-nav__notifications'>13</span>
              </div>
              <div className='user-nav__user'>
                <img src={User} alt='user' className='user-nav__photo' />
                <span className='user-nav__user-name'>Jon A</span>
              </div>
            </nav>
          </header>

          <div className='content'>
            <nav className='sidebar'>
              <ul className='list'>
                <li className='list__items list__items--active'>
                  <svg className='list__icon'>
                    <use xlinkHref={`${Svg}#icon-home`} ></use>
                  </svg>
                  <span className='list__text'>Hotel</span>
                </li>
                <li className='list__items'>
                  <svg className='list__icon'>
                    <use xlinkHref={`${Svg}#icon-aircraft-take-off`} ></use>
                  </svg>
                  <span className='list__text'>Flight</span>
                </li>
                <li className='list__items'>
                  <svg className='list__icon'>
                    <use xlinkHref={`${Svg}#icon-key`} ></use>
                  </svg>
                  <span className='list__text'>Rental</span>
                </li>
                <li className='list__items'>
                  <svg className='list__icon'>
                    <use xlinkHref={`${Svg}#icon-icloud`} ></use>
                  </svg>
                  <span className='list__text'>Tours</span>
                </li>
              </ul>
              <div className='copyright'>
                &copy; {`Copyright ${currentDate}. By Trillo.`}
              </div>
            </nav>

            <main className='hotel-view'>
              <div className='gallery'>
                <figure className='gallery__figure'>
                  <img src={img1} alt='hotel 1' className='gallery__images' />
                </figure>
                <figure className='gallery__figure'>
                  <img src={img2} alt='hotel 2' className='gallery__images' />
                </figure>
                <figure className='gallery__figure'>
                  <img src={img3} alt='hotel 3' className='gallery__images' />
                </figure>
              </div>

              <div className='overview'>
                <h1 className='overview__header'>Hotel Las Palmas</h1>
                <div className='overview__stars'>
                  <svg className='overview__star'>
                    <use xlinkHref={`${Svg}#icon-star`}></use>
                  </svg>
                  <svg className='overview__star'>
                    <use xlinkHref={`${Svg}#icon-star`}></use>
                  </svg>
                  <svg className='overview__star'>
                    <use xlinkHref={`${Svg}#icon-star`}></use>
                  </svg>
                  <svg className='overview__star'>
                    <use xlinkHref={`${Svg}#icon-star`}></use>
                  </svg>
                </div>
                <div className='overview__location'>
                  <svg className='overview__icons'>
                    <use xlinkHref={`${Svg}#icon-pin`}></use>
                  </svg>
                  <button className='overview__button'>Elizabeth, NJ</button>
                </div>
                <div className='overview__ratings'>
                  <div className='overview__rating'>8.6</div>
                  <div className='overview__rating'>520 Votes</div>
                </div>
              </div>

              <div className='user-reviews'>
                <div className='user-review'>
                  <p className='list-paragraph'>
                  We’re committed to creating a safe and relaxing experience, including delivering an even cleaner stay from check-in to check-out.
                  </p>
                  <p className='list-paragraph'>
                  By offering continued travel flexibility and putting the health and safety of our guest and team members front and center. 
                  </p>
                  <ul className='list-reviews'>
                    <li className='list-reviews__items'>Close to the beach</li>
                    <li className='list-reviews__items'>Free pool outdoors</li>
                    <li className='list-reviews__items'>all to yourself lunch</li>
                    <li className='list-reviews__items'>2 private bathrooms</li>
                    <li className='list-reviews__items'>Free outdoor padio</li>
                    <li className='list-reviews__items'>Nexus on charge always</li>
                    <li className='list-reviews__items'>No fee after two more days</li>
                    <li className='list-reviews__items'>Feed the people you know what</li>
                  </ul>
                  <div className='recommended'>
                    <div className='recommended__paragraph'>Lucy and 3 other frends recommended this hotel.</div>
                    <div className='recommended__user'>
                      <img src={user1} alt='user1' className='recommended__photo' />
                      <img src={user2} alt='user2' className='recommended__photo' />
                      <img src={user3} alt='user3' className='recommended__photo' />
                      <img src={user4} alt='user4' className='recommended__photo' />
                    </div>
                  </div>
                </div>
                <figure className='side-review'>
                  <figure className='review__figure'>
                    <p className='review__paragraph'>
                    Close to home or across the world, Trillo is there for you with memorable offers and experiences. Check out what’s new.
                    </p>
                    <figcaption className='review__figCaption'>
                      <img src={user2} alt='' className='review__photo' />
                      <div className='review__container'>
                        <p className='review__name'>Mary Thomas</p>
                        <p className='review__date'>Sep 13th 2020</p>
                      </div>
                      <p className='review__number'>7.7</p>
                    </figcaption>
                  </figure>
                  <figure className='review__figure'>
                    <p className='review__paragraph'>
                    Make your travel dreams come true this season with our 2X Points Package.
                    </p>
                    <figcaption className='review__figCaption'>
                      <img src={user3} alt='' className='review__photo' />
                      <div className='review__container'>
                        <p className='review__name'>Jones Thomas</p>
                        <p className='review__date'>Sep 13th 2020</p>
                      </div>
                      <p className='review__number'>7.7</p>
                    </figcaption>
                  </figure>
                  <button className='overview__button review__button'>Next &rarr;</button>
                </figure>
                
              </div>
              <div className='cta'>
                  <h2 className='cta__book'>
                    Good news! We have 4 free rooms for your dates
                  </h2>
                  <button className='btn'>
                    <span className='btn__visible'>Book now</span>
                    <span className='btn__invisible'>only 4 rooms left</span>
                  </button>
                </div>
            </main>
          </div>
        </div>
    )
}

export default Header;