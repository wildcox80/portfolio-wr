import React from "react";


export default () => (
  <form className="mt-16 text-center">
    <label htmlFor="contact-info" className="block text-gray-700 text-sm font-bold mb-2">Cuentame de esa idea que quieres convertir en realidad: </label>
    <div className="flex shadow rounded bg-white p-2">
      <textarea
       id="contact-info"
       name="contact-info"
       className="flex-1 py-2 px-3 text-gray-700 focus:shadow-outline"></textarea>
      <button className="btn">Enviar</button>

    </div>
  </form>


)
