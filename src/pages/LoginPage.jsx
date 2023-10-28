import React, { useContext, useState } from 'react'
import useInput from '../hooks/useInput'
import { Link, useNavigate } from 'react-router-dom'
import { login, putAccessToken } from '../utils/network-data'
import * as textContent from '../asset/textContent.json'
import { LanguageContext } from '../contexts/LanguageContext'
import LoadingPage from './LoadingPage'

function LoginPage () {
  const [email, onEmailChangeHandler] = useInput('')
  const [password, onPasswordChangeHandler] = useInput('')
  const navigate = useNavigate()
  const { language } = useContext(LanguageContext)
  const [loading, setLoading] = useState(false)

  async function onsubmitHandler (e) {
    e.preventDefault()
    setLoading(true)
    const { error, data } = await login({ email, password })
    if (!error) {
      putAccessToken(data.accessToken)
      navigate(0)
    }
    setLoading(false)
  }

  return loading
    ? (<LoadingPage />)
    : (
    <>
      <section className="login-page" onSubmit={onsubmitHandler}>
        <h2>{textContent[language]['login-instruction']}</h2>

        <form className="input-login">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={onEmailChangeHandler} autoComplete='true'/>

          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={onPasswordChangeHandler} autoComplete='current-password'/>

          <button type="submit">Login</button>
        </form>

        <p>{textContent[language]['sign-up-question']} <Link to='/register'>{ textContent[language]['sign-up-button-inline'] }</Link></p>
      </section>
    </>
      )
}

export default LoginPage
