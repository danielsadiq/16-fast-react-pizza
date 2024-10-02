import { getMenu } from "../../services/apiRestaurant";
function Menu() {
  return <h1>Menu</h1>;
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader(){
  const menu = await getMenu();
  return menu;
}

export default Menu;

