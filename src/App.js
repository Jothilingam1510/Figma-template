import React from 'react';
import './App.css';
import financial from "./image/financial.jpg";
import Persondollar from './image/persondollar.png'
import Shieldhome from './image/shieldhome.png'
import Shieldfire from './image/shieldfire.png'
import Handspanner from './image/handspanner.png'
import moneybag from './image/moneybag.png'
import Shielddollar from './image/shielddollar.png'
import Handperson from './image/handperson.png'
import Lock from './image/lock.png'
import Aeroplane from './image/aeroplane.png'
import Buildingfire from './image/buildingfire.png'
import contractorshield from './image/contractorshield.png'
import Marinecargo from './image/Marinecargo.png'
import hand from './image/handperson.png'
import Smiley from './image/smileys.png'
import Congress from './image/congress.png'
import Welcome from './image/welcome.png'
import Card from './image/card.png'

import Listcard from './Components/card';
import Listcardtwo from './Components/health';

import './Components/card.css'
import './Components/health.css'

function App() {
  const card = [{Title:'Public Liability Insurance', Imagename:Persondollar, Nameforid:'publicliability' }, {Title:'Property Insurance: All Risk', Imagename:Shieldhome, Nameforid:'propertyinsurance'}, {Title:'Property Insurance: Fire And Additional Perils', Imagename:Shieldfire, Nameforid:'fireadd'}, 
{Title:'Professional Indemnity Insurance for Stock Brokers', Imagename:Handspanner, Nameforid:'professionalind' }, {Title:'Money Insurance', Imagename:moneybag, Nameforid:'moneyins' }, {Title:'Fidelity Guarantee Insurance', Imagename:Shielddollar, Nameforid:'fidelity' },
{Title:'Crime Bond Insurance', Imagename:Handperson , Nameforid:'crimebond'},{Title:'Theft Insurance', Imagename:Lock, Nameforid:'theft'},{Title:'Business Travel Insurance', Imagename:Aeroplane,Nameforid:'business' },
{Title:'Sabotage & Terrorism Insurance', Imagename:Buildingfire, Nameforid:'sabotage' },{Title:'Contractors All Risks Insurance', Imagename:contractorshield, Nameforid:'allrisks' },{Title:'Marine Cargo Insurance', Imagename:Marinecargo, Nameforid:'marine' }];

const health = [{Title:'Boost Employee Retention', Imagename:hand}, {Title:'Strengthen Employee Motivation', Imagename:Smiley},
{Title:'Enhance their Mental Wellbeing', Imagename:Congress},{Title:'Protect them from Severe Health Conditions', Imagename:Welcome}, {Title:'6400+ Cashless Hospitals', Imagename:Card}]


return(
<div>

  <div className='container'>
    <div className='topframe'>
      
          <img className='image' src={financial} alt=''/>
          <div className='financial'>Financial <br/> & Investment Insurance</div>
          <div className='borderline'><hr></hr></div>
          <div className='insideright'>
          <div className='para'>We designed this collection of insurance products especially for the Financial Institution & Investment business to provide the appropriate protection to transact its activities safely.</div>
          <button className='button'>Get Quote</button></div>
      </div>
    </div>

   
      <div className='cardframe'>
        
      {card.map(({Title,Imagename, Nameforid},index) => {
            return(
            <Listcard key={index} imagename={Imagename} titlename={Title} Idname={Nameforid} />
            );
          } )}
          
          </div>

          <div className='protectemployeepart'>
<div className='wholehealthpara '>
  <div className='healthpara'>
    <div className='whyproject'>Why protect your employees’ health <br></br> with a Health Insurance policy?</div>
    <div className='thesaudi'>The Saudi insurance pioneer, will help you to identify, analyze and manage such risks and suggest <br></br> appropriate insurance solutions.</div>
  </div>

  <div className='healthframe'>
    {health.map(({Title,Imagename},index) => {
    return(
    <Listcardtwo key={index} Imagename={Imagename} Titlename={Title} />
    );
    })}
  </div>
</div>
</div>      
 
 <div className='wholehealthpara nextwholepara'>
  <div className='healthpara'>
    <div className='whyproject'>Take your plan to the next level!</div>
    <div className='thesaudi additional'>Additional programs that will greatly improve your plan performance.</div>
  </div>
  </div>
<div className='wholebanner'>
  
    <div className='blue'></div>
    <div className='red'></div>
    <div className='lightblue'></div>
</div>


</div>
)
}

export default App