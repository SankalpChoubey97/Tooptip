import { useEffect, useState } from "react";
import { Outlet,NavLink } from "react-router-dom";
import styles from './navbar.module.css'

export function Navbar() {
  const [position, setPosition] = useState("left");

  useEffect(()=>{
    console.log(position);
  },[position])

  const handleClick = (pos) => {
    setPosition(pos);
  };

  const getLinkClass = (pos) =>
    `${styles.navButton} ${position === pos ? styles.active : ""}`;

  return (
    <>
      <nav className={styles.navContainer}>
        <NavLink to="#" className={getLinkClass("left")} onClick={() => handleClick("left")}>
          Left
        </NavLink>
        <NavLink to="#" className={getLinkClass("right")} onClick={() => handleClick("right")}>
          Right
        </NavLink>
        <NavLink to="#" className={getLinkClass("top")} onClick={() => handleClick("top")}>
          Top
        </NavLink>
        <NavLink to="#" className={getLinkClass("bottom")} onClick={() => handleClick("bottom")}>
          Bottom
        </NavLink>
      </nav>

      <Outlet context={position} />
    </>
  );
}