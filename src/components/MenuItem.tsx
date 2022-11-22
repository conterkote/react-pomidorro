import React, {
  CSSProperties,
  DetailedHTMLProps, HTMLAttributes,
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

interface MenuItemProps {
  logo: menuItemLogo,
  itemName: string,
  currentPage: string,
  onClick: (e: React.SyntheticEvent) => void;
}

function MenuItem({logo, itemName, currentPage, onClick}: MenuItemProps) {
  const itemNameRef = useRef<HTMLSpanElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);
  const [setTransition, setSetTransition] = useState(0);
  useEffect(() => {
    if (itemNameRef.current) {
      const spanRef = itemNameRef.current;
      if (spanRef) {
        setWidth(spanRef.offsetWidth + 84);
      }
    }
  }, [itemNameRef]);
  const style = {'--width': `${width}px`} as CSSProperties
  return (
    <div ref={rootRef} style={style} className={classes.MenuItem}>
      <div
        ref={wrapperRef}
        className={currentPage !== itemName ? `${classes.MenuItemWrapper}` : `${classes.MenuItemCurrentWrapper}`}
        onClick={onClick}>
        <img className={classes.logo} src={`${logo}`} alt=""/>
        <span ref={itemNameRef} className={currentPage !== itemName ? `${classes.MenuItemName}` : `${classes.MenuItemCurrentName}`}
        >{itemName}</span>
      </div>
    </div>
  );
}

export default MenuItem;