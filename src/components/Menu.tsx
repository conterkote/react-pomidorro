import MenuItem, {menuItemLogo} from "./MenuItem";

interface MenuProps {
  onClick: (e: React.SyntheticEvent) => void;
  currentPage: string
}

export default function Menu({onClick, currentPage} : MenuProps) {
    return (
        <div className="Menu">
            <MenuItem
              currentPage={currentPage}
              onClick={onClick}
              itemName={`Today`} logo={menuItemLogo.Today}/>
            <MenuItem
              currentPage={currentPage}
              onClick={onClick}
              itemName={`Relax ideas`} logo={menuItemLogo.Relax}/>
            <MenuItem
              currentPage={currentPage}
              onClick={onClick}
              itemName={`Wishlist`} logo={menuItemLogo.Wishlist}/>
            <MenuItem
              currentPage={currentPage}
              onClick={onClick}
              itemName={`Calendar`} logo={menuItemLogo.Calendar}/>
        </div>
    )
}