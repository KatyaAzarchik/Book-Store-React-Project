import { Favorites } from "./Favorites/Favorites";
import { Cart } from "./Cart/Cart";
import { Profile } from "./Profile/Profile";
import "./userBar.scss";

export const UserBar = () => {
  return (
    <div className="user-bar">
      <Favorites />
      <Cart />
      <Profile />
    </div>
  );
};
