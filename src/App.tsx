import Header from "./components/Header";
import Menu from "./components/Menu";
import Today from "./components/Pages/Today/Today";
import React, {useState} from "react";

export enum Pages {
  today = 'Today',
  relax = 'Relax ideas',
  wishlist = 'Wishlist',
  calendar = 'Calendar'
}


function App() {
  const [currentPage, setCurrentPage] = useState<string>('Today');
  const onClick = (e: React.SyntheticEvent): void => {
    setCurrentPage((e.currentTarget.lastChild as HTMLSpanElement).innerText)
  }
  return (
    <>
      <Header username={'restinl'}/>
      <div className="App">
        <Menu currentPage={currentPage} onClick={onClick} />
        <Today/>
      </div>
    </>
  )
}

export default App
