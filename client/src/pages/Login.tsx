import {Link} from "react-router-dom";


export default function Login() {
  return (
      <div className="relative min-h-screen flex justify-center items-center">
        <div className="bg-space absolute inset-0 pointer-events-none"/> 
           <div className="flex flex-col items-center justify-center mx-auto z-10 border border-white px-20 py-12 backdrop-blur-lg">
             <h1 className="text-4xl text-white">Login</h1>

             <div className="w-full flex flex-col justify-center items-center text-white">
                <label className="text-left" htmlFor="#">Email</label>
                <input className="border border-white rounded-2xl px-2 py-1" type="email" placeholder="Введите почту..."/>

                <label htmlFor="#">Password</label>
                <input className="border border-white rounded-2xl px-2 py-1" type="password" placeholder="Введите пароль..."/>

                <button className="border border-white px-6 text-white rounded-2xl">Войти</button>
             </div>

            <span className="text-white">Нет аккаунта? 
                <Link className="text-green-300" to="/register"> Зарегистрироваться</Link>
            </span>
           </div>
        </div>
  )
}
