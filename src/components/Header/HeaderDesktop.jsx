import { Link, Menu, Search, ShoppingCart } from "lucide-react";
import { NAVIGATIONS } from "./Header";

const HeaderDesktop = () => {
  return (
    <header className="tw-hidden tw-md:tw-flex tw-justify-between tw-items-center tw-px-8 tw-py-7">
      <div className="tw-flex tw-items-center tw-gap-x-10">
        <h1 className="tw-text-2xl tw-text-[#252B42] tw-font-bold">Inspire</h1>
        <nav>
          {NAVIGATIONS.map((item) => (
            <Link key={item.title} href={item.href}>
              {item.title}
            </Link>
          ))}
          <Link href="/">Home</Link>
          <Link href="/">Shop</Link>
          <Link href="/">About</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Contacts</Link>
          <Link href="/">Pages</Link>
        </nav>
      </div>
      <div className="tw-flex tw-gap-x-4">
        <Search />
        <ShoppingCart />
        <Menu />
      </div>
    </header>
  );
};

export default HeaderDesktop;
