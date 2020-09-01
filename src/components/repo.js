import React from "react";


export default (props) => (

    <li className="flex items-center">
      <div className="w-10/12 overflow-x-hidden">
        <h4 className="text-gray-700 font-bold truncate">{props.repo.name}</h4>
        <p className="text-sm text-gray-600 overflow-y-hidden">{props.repo.description}</p>
      </div>
      <div className="flex-1 text-right">
        <a href={props.repo.html_url} target="_blank" rel="noopener noreferrer"> Abrir Repo</a>
      </div>
    </li>

);
