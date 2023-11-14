import * as React from "react";
import "../styles/navigation.css";
import { PoemContext } from '../PoemProvider';

export default function Navigation(){

  const { currVerse, setCurrVerse} = React.useContext(PoemContext);

  function handelForward(){
    if(currVerse === 4){
      return
    }else{
      setCurrVerse(prevVerse => prevVerse + 1)
    }
  }

  function handelBackward(){
    if(currVerse === 1){
      return
    }else{
      setCurrVerse(prevVerse => prevVerse - 1)
    }
  }

  return(
    <div className="navigation-container">
      <svg onClick={handelBackward} version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="256" height="256" transform="scale(.2)">
        <switch>
          <g>
            <path fill="#3498db" stroke="#3498db" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="m39.466 134.765 90.868 61.313c6.703 3.869 11.666.704 11.666-7.036v-40.869l67.197 47.905c6.703 3.869 11.803.704 11.803-7.036V66.416c0-7.74-5.148-10.905-11.851-7.036L142 107.33V66.416c0-7.74-5.012-10.905-11.715-7.036l-90.792 61.313c-6.702 3.87-6.73 10.202-.027 14.072z"/>
          </g>
        </switch>
      </svg>
      <span>
        Verse {currVerse}
      </span>
      <svg onClick={handelForward} version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="256" height="256" transform="scale(.2)">
        <switch>
          <g>
            <path fill="#3498db" stroke="#3498db" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="m216.55 120.691-91.376-61.313C118.471 55.51 113 58.674 113 66.414v40.869L45.803 59.379C39.1 55.51 34 58.674 34 66.414v122.625c0 7.74 5.148 10.906 11.852 7.037L113 148.125v40.914c0 7.74 5.52 10.906 12.223 7.037l91.046-61.313c6.702-3.87 6.984-10.202.281-14.072z"/>
          </g>
        </switch>
      </svg>
    </div>
  )
}
