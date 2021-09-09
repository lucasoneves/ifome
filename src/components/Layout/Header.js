import mealsImage from "../../assets/meals.jpeg";
import classes from './Header.module.scss';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Ifome</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="Mesa com refeição completa" />
      </div>
    </>
  );
};

export default Header;
