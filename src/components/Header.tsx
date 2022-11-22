import classes from "./styles/Header.module.css";

interface HeaderProps {
  username: string
}

export default function Header({username}: HeaderProps) {
  return (
    <header className={classes.substrate}>

      <div className={classes.elementsWrapper}>
        <img className={classes.logoImg} src="/src/assets/images/headerLogo.svg" alt=""/>
        <div className={classes.userMenu}>
          <span className={classes.username}>{username}</span>
          <div className={classes.imageWrapper}>
            <img src="https://sun9-8.userapi.com/impg/n29LHPWdJloHIjpGIN_ws4G54Tpjl_P2jEHLtg/aQfrcQTOLjM.jpg?size=1620x2160&quality=95&sign=3188a33c17fb36b6e0595e376c1a3d3a&type=album" alt="404"/>
          </div>
        </div>
      </div>
    </header>
  )
};