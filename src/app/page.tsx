'use client'
import Image from 'next/image'
import { useState } from 'react';
import { render } from 'react-dom';
import "./page.css";


export default function Home() {
  const [value, setValue] = useState<number>(0);

  function calculate() {
    const grade1 = document.getElementById('grade1') as HTMLInputElement;
    const grade2 = document.getElementById('grade2') as HTMLInputElement;
    const grade3 = document.getElementById('grade3') as HTMLInputElement;
    const grade4 = document.getElementById('grade4') as HTMLInputElement;
    const grade5 = document.getElementById('grade5') as HTMLInputElement;
    const weight1 = document.getElementById('weight1') as HTMLInputElement;
    const weight2 = document.getElementById('weight2') as HTMLInputElement;
    const weight3 = document.getElementById('weight3') as HTMLInputElement;
    const weight4 = document.getElementById('weight4') as HTMLInputElement;
    const weight5 = document.getElementById('weight5') as HTMLInputElement;
    setValue(Number(grade1.value) * Number(weight1.value) + Number(grade2.value) * Number(weight2.value) + Number(grade3.value) * Number(weight3.value) + Number(grade4.value) * Number(weight4.value) + Number(grade5.value) * Number(weight5.value));
  }

  return (
    <div className="page">
      <div>Grade Calculator</div>
      <div className="row">
        <div className="header">Grades</div>
        <div className="header">Weight</div>
      </div>  
      <div className="row">
        <input className="input" id="grade1"/>
        <input className="input" id="weight1"/>
      </div>
      <div className="row">
        <input className="input" id="grade2"/>
        <input className="input" id="weight2"/>
      </div>
      <div className="row">
        <input className="input" id="grade3"/>
        <input className="input" id="weight3"/>
      </div>
      <div className="row">
        <input className="input" id="grade4"/>
        <input className="input" id="weight4"/>
      </div>
      <div className="row">
        <input className="input" id="grade5"/>
        <input className="input" id="weight5"/>
      </div>
      <div className="button" onClick={calculate}>Calculate</div>
      <div>Grade: {value}</div>
    </div>
  )
}
