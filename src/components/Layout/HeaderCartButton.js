import classes from "./HeaderCartButton.module.scss";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Seu carrinho</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
