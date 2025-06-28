import Header from "@/components/Header";
import StickyBar from "@/components/navigation/StickyBar";
import NavBar from "@/components/navigation/NavBar";
import { getMenu } from "@/data/shopify";
import { cn } from "@/lib/utils";
import { stacksData } from "@/data";

export default async function Home() {
  const menu = await getMenu("main-menu");
  /* const footerMenu = await getMenu("footer"); */

  return (
    <div>
      <div className={cn("sticky top-0 w-full z-50", "lg:hidden")}>
        <StickyBar stacksData={stacksData} className='bg-primary text-white' iconClassName='text-white'  />
        <NavBar menu={menu} />
      </div>
      <Header menu={menu} />
    </div>
  );
}
