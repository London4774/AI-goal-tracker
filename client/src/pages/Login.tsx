import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa6";
import {Link} from "react-router-dom";


export default function Login() {
  return (
      <div className="relative min-h-screen flex justify-center items-center overflow-hidden">
        <div className="bg-space absolute inset-0 pointer-events-none"/> 
           <div className="flex flex-col justify-center mx-auto z-10 border border-white/50 px-10 py-6 backdrop-blur-xl bg-white/5 rounded-xl">

            <div className="text-white text-center font-bold text-3xl py-5">
                <span className="text-green-500">Goal</span>Tracker with <span className="text-green-500">AI</span>
            </div>
             

             <h2 className="text-2xl text-center font-semibold text-white py-4">Логин</h2>

             <div className="w-full flex flex-col justify-center text-white px-10">
                <label className="font-medium py-1 px-4" htmlFor="#">Эмейл</label>
                <input className="w-full px-3 py-2 bg-white/10 border border-white/30 rounded-xl text-white placeholder-green-200/50 focus:outline-none focus:border-green-400 focus:ring-4 focus:ring-green-400/20 transition-all" type="email" placeholder="username@gmail.com"/>

                <label className="py-1 font-medium px-4" htmlFor="#">Пароль</label>
                <input className="w-full px-3 py-2 bg-white/10 border border-white/30 rounded-xl text-white placeholder-green-200/50 focus:outline-none focus:border-green-400 focus:ring-4 focus:ring-green-400/20 transition-all" type="password" placeholder="••••••••"/>
                <a className="text-green-300 text-left py-3 hover:text-green-500" href="#">Забыли пароль?</a>

                
                <button className="w-full py-4 bg-slate-900/90 hover:bg-slate-700/90 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20" type="submit">Войти</button>

                <span className="py-3 text-center">или продолжить с</span>

                <div className="flex justify-center gap-4">
                    <button className="p-3.5 bg-green-500 rounded-xl hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25">
                    <FaGoogle className="w-6 h-6" />
                    </button>
                    <button className="p-3.5 bg-green-500 rounded-xl hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25">
                    <FaGithub className="w-6 h-6" />
                    </button>
                    <button className="p-3.5 bg-green-500 rounded-xl hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25">
                    <FaFacebook className="w-6 h-6 text-white" />
                    </button>

                </div>

                <div className="text-center mt-5 text-white/80">
                    <span className="text-white">Нет аккаунта? 
                        <Link className="text-green-300 hover:text-green-500" to="/register"> Зарегистрироваться</Link>
                    </span>
                </div>
             </div>
           </div>
        </div>
  )
}
