import ozonetherapydual from '../assets/ozonetherapydual.png';
import prptherapy from '../assets/prptherapy.png';
import biogel from '../assets/biogel.png';
import { GiStethoscope } from "react-icons/gi";
import { TbPhysotherapist } from "react-icons/tb";
import { ImAccessibility } from "react-icons/im";
import { BiInjection } from "react-icons/bi";
import {
 back,
 shoulder,
 knee,
 backblue,
 shoulderblue,
 kneeblue,
 backgroundoperation,
 bgdotsblack,
 bgdotswhite,
 logo,
 logoDark,
 doctor,
 newdoc,
 backpain,
 shoulderpain,
 kneepain,
 
} from './index.js'


export const servicesData = [
  {
    id : 1,
    img : ozonetherapydual,
    icon : GiStethoscope ,
    title : 'Ozone Therapy',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Acsantium, cupiditate sapiente.',
  },
  {
    id : 2,
    img : prptherapy,
    icon : BiInjection ,
    title : 'Prp Therapy',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Acsantium, cupiditate sapiente.',
  },
  {
    id : 3,
    img : biogel,
    icon : ImAccessibility ,
    title : 'Biogel Therapy',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Acsantium, cupiditate sapiente.',
  },
  {
    id : 4,
    img : ozonetherapydual,
    icon : TbPhysotherapist ,
    title : 'Laser & Physio Therapy',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Acsantium, cupiditate sapiente.',
  },
  
  
] ;

export const conditionsData = [
  {
    id : 1,
    img : backpain,
    icon : GiStethoscope ,
    title : 'Low back pain',
    description : 'Low back pain/sciatica due to disc bulge at l4/l5, S1/S2',
  },
  {
    id : 2,
    img : kneepain,
    icon : BiInjection ,
    title : 'Knee pain',
    description : 'Knee pain due to Osteo / Rheumatoidarthritis / Gout',
  },
  {
    id : 3,
    img : shoulderpain,
    icon : ImAccessibility ,
    title : 'Shoulder pain',
    description : 'Shoulder pain due to Frozen shoulder/Osteoarthritis',
  },
  
  
] 