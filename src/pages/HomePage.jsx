import React, { useRef } from 'react'
import { setTrainer } from '../slice/trainer.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './styles/homePage.css'

const HomePage = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const textInput = useRef();

  
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(setTrainer(textInput.current.value.trim()))
    textInput.current.value = ''
    navigate('/pokedex')
  }

  return (
    <div className='homepage'>
      <figure className='homepage__img'>
          <img src="../../../assets/pokedex.png" alt="pokedex image" />
      </figure>
      <h2 className='homepage__title'>¡Hi trainer!</h2>
      <p className='homepage__subtitle'>Put your name to start</p>
      <div className='homepage__container'>
        <form className='homepage__form' onSubmit={handleSubmit}>
        <input ref={textInput} type="text" placeholder='Your name...'/>
        <button className='homepage__btn'>Start</button>
        </form>
      </div>
      <div className='footer'>
        <div className='red-bar'></div>
        <div className='black-bar'>
          <div className='circle'>
            <div className='incircle'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
