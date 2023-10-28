import React, { useContext } from 'react'
import useInput from '../hooks/useInput'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../utils/network-data'
import { LanguageContext } from '../contexts/LanguageContext'
import * as textContent from '../asset/textContent.json'

function RegisterPage () {
  const [name, onNameChangeHandler] = useInput('')
  const [email, onEmailChangeHandler] = useInput('')
  const [password, onPasswordChangeHandler] = useInput('')
  const [confirmPassword, onConfirmPasswordChangeHandler] = useInput('')
  const navigate = useNavigate()
  const { language } = useContext(LanguageContext)

  async function onsubmitHandler (e) {
    e.preventDefault()
    if (password !== confirmPassword) { return alert('Password dan Konfirmasi Password tidak sama') }

    const { error } = await register({ name, email, password })
    if (!error) {
      alert('Registrasi berhasil, silahkan login')
      navigate('/')
    }
  }

  return (
    <section className="register-page">
      <h2>{textContent[language]['sign-up-instruction']}</h2>

      <form className="input-register" onSubmit={onsubmitHandler}>
        <label htmlFor="name">Name</label>
        <input type="name" id="name" value={name} onChange={onNameChangeHandler} autoComplete='true'/>

        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={onEmailChangeHandler} autoComplete='true'/>

        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={onPasswordChangeHandler} autoComplete='new-password'/>

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" value={confirmPassword} onChange={onConfirmPasswordChangeHandler} autoComplete='new-password'/>

        <button type="submit">Register</button>
      </form>

      <p>{textContent[language]['login-question']} <Link to='/'>{textContent[language]['login-button-inline']}</Link></p>
    </section>
  )
}

export default RegisterPage
