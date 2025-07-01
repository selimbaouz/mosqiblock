import { getMenu } from "@/data/shopify";
import Home from "@/components/Home";

export default async function LocaleHome() {
  const menu = await getMenu("main-menu");

  return (
    <Home menu={menu} />
  );
}
