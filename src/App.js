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
import ithra from './image/ithra.png'
import TawuniyaLogo from './image/TawuniyaLogo.png'
import vector from './image/Vector.png'
import Orangearrow from './image/orangearrow.png';
import twodayago from './image/twodayago.png';
import twoweekago from './image/twoweekago.png'
import tenmay from './image/tenmay.png'
import weekago from './image/weekago.png'
import Listcard from './Components/card';
import Listcardtwo from './Components/health';
import Listcardthree from './Components/FAQ';
import Listcardfour from './Components/banner';
import Listcardfive from './Components/webfooter';

import './Components/card.css'
import './Components/health.css'
import './Components/webfooter.css'
import './Components/banner.css'

function App() {
  const card = [{Title:'Public Liability Insurance', Imagename:Persondollar, Nameforid:'publicliability' }, {Title:'Property Insurance: All Risk', Imagename:Shieldhome, Nameforid:'propertyinsurance'}, {Title:'Property Insurance: Fire And Additional Perils', Imagename:Shieldfire, Nameforid:'fireadd'}, 
{Title:'Professional Indemnity Insurance for Stock Brokers', Imagename:Handspanner, Nameforid:'professionalind' }, {Title:'Money Insurance', Imagename:moneybag, Nameforid:'moneyins' }, {Title:'Fidelity Guarantee Insurance', Imagename:Shielddollar, Nameforid:'fidelity' },
{Title:'Crime Bond Insurance', Imagename:Handperson , Nameforid:'crimebond'},{Title:'Theft Insurance', Imagename:Lock, Nameforid:'theft'},{Title:'Business Travel Insurance', Imagename:Aeroplane,Nameforid:'business' },
{Title:'Sabotage & Terrorism Insurance', Imagename:Buildingfire, Nameforid:'sabotage' },{Title:'Contractors All Risks Insurance', Imagename:contractorshield, Nameforid:'allrisks' },{Title:'Marine Cargo Insurance', Imagename:Marinecargo, Nameforid:'marine' }];

const health = [{Title:'Boost Employee Retention', Imagename:hand , para:'Health insurance will not only give your employees and their families enough financial security, but an overall sense of satisfaction that their employer actually cares about them.'}, {Title:'Strengthen Employee Motivation', Imagename:Smiley , para:'Happy employees make happy workspaces and evidently successful companies! It’s no surprise that the safer and satisfied employees feel happier and motivated!'},
{Title:'Enhance their Mental Wellbeing', Imagename:Congress ,para:'Health insurance will not only safeguard the employees  savings but also enhance their overall mental well being with the right support '},{Title:'Protect them from Severe Health Conditions', Imagename:Welcome ,para:'Safeguard your employees from the same, amongst other diseases; the earlier these issues are diagnosed, the earlier they can be treated and resolved. '}, {Title:'6400+ Cashless Hospitals', Imagename:Card , para:'With more than 6400+ cashless hospitals across KSA, your employees can be covered at ease no matter where they are!'}]

const question = ['What is insurance fraud?','What kind of people/Organizations commits insurance fraud?','What is fraud vs. Mistake?','How does fraud impact you?','What is medical fraud unit?','What are some examples of insurance fraud/Abuse?','What are we doing to prevent fraud?','Shall I get a reward for reporting medical insurance fraud?']

const Banner = [{Mainclass:'firstimage',text:'Tawanuyia',imageone:ithra,classone:'ithras', textone:'Access to hundreds of exclusive offers, discounts and more'},
{Mainclass:'secondimage',imageone:TawuniyaLogo,classone:'tlogo',textone:'Get 30% Off annual fitness time gym membership',Idforcontent:'get'},
{Mainclass:'thirdimage',classone:'vector',imageone:vector, textone:'Special services and programmes to cover your needs',Idforcontent:'post'}]


const website =[{Imagename:tenmay,date:'10 May  2022' , news:"Tawuniya appoints Dr. Ammr Kurdi as Chief Financial Officer",Nameforid:'tenmay'},{Imagename:twodayago,date:'2 days ago',news:'Tawuniya is the first company in the Kingdom to install vehicle insurance policies',Nameforid:'twoday'},{Imagename:weekago,date:'week ago',news:'Tawuniya launches Covid-19 Travel Insurance program',Nameforid:'week'},{Imagename:twoweekago,date:'2 weeks ago',news:'“Tawuniya Vitality” changes the healthy lifestyle of the Saudi Society New program is a first for the Kingdom, the Middle East and North Africa',Nameforid:'twoweek'},{Imagename:tenmay,date:'10 May  2022' , news:'Tawuniya appoints Dr. Ammr Kurdi as Chief Financial Officer',Nameforid:'tenmay'}]
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
    {health.map(({Title,Imagename,para},index) => {
    return(
    <Listcardtwo key={index} Imagename={Imagename} Titlename={Title} Paragraph={para} />
    );
    })}
  </div>
</div>
</div>      
 
 <div className='wholehealthpara nextwholepara'>
  <div className='healthpara'>
    <div className='whyproject'>Take your plan to the next level!</div>
    <div className=' additional'>Additional programs that will greatly improve your plan performance.</div>
  </div>
  </div>
<div className='wholebanner'>
  
{Banner.map(({Mainclass,textone,imagearabic,imageone,imagetwo,imagethree,text,images,Idforcontent,classone},index) => {
                return(
                  <Listcardfour key={index} Mainclass={Mainclass} imageone={imageone} imagetwo={imagetwo} text={text} image={images}
                  imagethree={imagethree} textone={textone} imagearabic={imagearabic}  Idforcontent={Idforcontent} classone={classone}
                  />
                );
              })}
</div>



<div className='wholehealthpara nextwholepara'>
  <div className='healthpara'>
    <div className='questionanswer '>You’ve got questions, we’ve got answers</div>
    <div className=' review'>Review answers to commonly asked questions at Tawuniya, which enable you to be directly involved in improving our support experience..</div>
  </div>
  </div>

  <div className='Question'>
    {question.map((questions,index) => {
    return(
    <Listcardthree key={index} whatquestion={questions} />
    );
    })}
  </div>

<div className='vaquestion'>VIEW ALL QUESTION <img className='orarrow' src={Orangearrow} alt=''/></div>

<div className='lastportion'>
<div className='tnow'>Tawuniya Now,</div>
<div className='highlights'>Highlights</div>
</div>
<div className='lastonelinepara'>
We provide the best and trusted products for our customers
</div>

<div className='lastboximage'>
{website.map(({Imagename,date,news,Nameforid},index) => {
    return(
    <Listcardfive  key={index} imagename={Imagename} Date={date} News={news}  Idname={Nameforid}/>
    );
    })}
</div>


</div>
)
}

export default App