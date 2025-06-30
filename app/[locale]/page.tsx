import { getMenu } from "@/data/shopify";
import Home from "@/components/Home";

export default async function LocaleHome() {
  const menu = await getMenu("main-menu");
  const footerMenu = await getMenu("footer");

  return (
    <Home menu={menu} footerMenu={footerMenu} />
  );
}
