import React from "react";
import repos from '../data/repos';
// import Repo from './repo';


export default () => (

  <div className="max-w-4xl mx-auto mt-12">
    <header className="text-center mt-4">
      <h2 className="text-3xl font-bold">Algunos de mis trabajo en Github</h2>
      <p>Colaboracion y aportes de codigo</p>
    </header>
    <ul>
      {
        repos.map((repo) => {
        return <li>{ repo.full_name }</li>
        }) 
      }
    </ul>    
  </div>
);
