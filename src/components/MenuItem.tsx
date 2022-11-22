import React, {
  DetailedHTMLProps,
  DetailedReactHTMLElement, HTMLAttributes,
  MouseEventHandler,
  SyntheticEvent,
  useEffect,
  useRef, useState
} from 'react';
import classes from './styles/MenuItem.module.css';

export enum menuItemLogo {
  Today = "/src/assets/images/menuItems/Today.svg",
  Relax = "/src/assets/images/menuItems/Relax.svg",
  Wishlist = "/src/assets/images/menuItems/Wishlist.svg",
  Calendar = "/src/assets/images/menuItems/Calendar.svg"
}

export interface MenuItemProps {
  logo: menuItemLogo,
  itemName: string,
  currentPage: string,
  onClick: (e: React.SyntheticEvent) => void;
}

function MenuItem({logo, itemName, currentPage, onClick}: MenuItemProps) {
  return (
    <div className={classes.MenuItem}>
      <div className={classes.MenuItemCurrentWrapper}>
        <img className={classes.logo} src={`${logo}`} alt=""/>
        <span className={`${classes.MenuItemCurrentName}`}
        >{itemName}</span>
      </div>
    </div>
  );
}

export default MenuItem;