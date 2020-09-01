import React from "react";
import illustration from '../img/web_developer.svg';
import Form from "../components/contact.form";

export default () => (
  <header className="bg-gray-300">
    <div className="container mx-auto p-12 max-w-4xl">
      <div className = "flex justify-center items-center">
        <div className="flex-1">
          <h1 className="text-6xl font-bold text-purple-600">Hola! Soy Wilds Rincon</h1>
          <p className="text-xl font-light">Diseñador Web & Desarrollador Web Freelance</p>
        </div>
        <img src={illustration} alt="web developer" style={{height: "300px"}}/>
      </div>
      <div>
        <Form />
      </div>
    </div>
  </header>
)

