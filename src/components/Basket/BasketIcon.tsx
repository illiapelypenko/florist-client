import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { State } from "../../redux/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export let makeAnimation: () => void;

const BasketIcon = () => {
  // const basket = useSelector((state: State) => {
  //   return state.basket;
  // });

  const [needAnimation, setNeedAnimation] = useState(false);

  makeAnimation = () => {
    console.log("jgygjhgj");
    setNeedAnimation(true);
  };

  // const handleAddClick = () => {};

  // const flowerBtn = () => {
  //   return (
  //     <div className='flower__add-btn-container' onClick={handleAddClick}>
  //       <FontAwesomeIcon icon={faPlus} />
  //     </div>
  //   );
  // };

  return (
    <Link className='sticky-container' to='/basket'>
      <div
        className={`sticky-icon ${needAnimation ? "sticky-icon--animate" : ""}`}
      >
        <svg
          // className='sticky-icon__svg '
          className={`sticky-icon__svg`}
          id='Layer_1'
          height='512'
          viewBox='0 0 510.735 510.735'
          width='512'
          // xmlns='http://www.w3.org/2000/svg'
        >
          <path d='m482.082 171.571h-51.609l-71.834-135.683c-3.876-7.321-12.951-10.114-20.275-6.238-7.321 3.876-10.114 12.954-6.238 20.275l64.403 121.646h-282.41l64.403-121.646c3.876-7.321 1.083-16.399-6.238-20.275-7.319-3.875-16.399-1.083-20.275 6.238l-71.835 135.683h-51.521c-15.799 0-28.653 12.854-28.653 28.653v33.321c0 15.134 11.796 27.557 26.677 28.577l50.322 209.217c1.621 6.741 7.651 11.492 14.584 11.492h327.47c6.93 0 12.958-4.748 14.582-11.484l50.44-209.227c14.873-1.028 26.66-13.447 26.66-28.575v-33.321c0-15.799-12.853-28.653-28.653-28.653zm-452.082 30h450.735v30.626h-450.735zm403.846 140.895h-65.674l10.022-80.269h75.003zm-163.458 110.365v-80.365h63.805l-10.034 80.365zm-83.774 0-10.043-80.365h63.817v80.365zm-129.063-190.634h75.008l10.031 80.269h-65.732zm105.24 0h77.597v80.269h-67.566zm107.597 80.269v-80.269h77.573l-10.022 80.269zm-186.315 30h62.265l10.043 80.365h-52.978zm323.166 80.365h-52.847l10.034-80.365h62.187z' />
        </svg>
      </div>
    </Link>
  );
};

export default BasketIcon;
