import { Favorites } from "./Favorites/Favorites";
import { Basket } from "./Basket/Basket";
import { Profile } from "./Profile/Profile";
import "./userBar.scss";
export const UserBar = () => {
  return (
    <div className="user-bar">
      <Favorites />
      <Basket />
      <Profile />
    </div>
  );
};
