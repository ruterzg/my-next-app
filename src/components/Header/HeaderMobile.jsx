"use client";

import {
  Collapse,
  Drawer,
  IconButton,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link, List, Menu, Search, ShoppingCart } from "lucide-react";
import { NAVIGATIONS } from "./Header";

const HeaderMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((prevState) => !prevState);
  };

  return (
    <>
      <header className="tw-flex md:tw-hidden tw-justify-between tw-items-center tw-px-8 tw-py-7">
        <h1 className="tw-text-2xl tw-text-[#252B42] tw-font-bold">Inspire</h1>
        <div className="tw-flex tw-gap-x-4">
          <IconButton>
            <Search />
          </IconButton>
          <IconButton>
            <ShoppingCart />
          </IconButton>

          <IconButton onClick={toggleMenu}>
            <Menu />
          </IconButton>
        </div>
      </header>

      <Collapse in={openMenu}>
        <List>
          {NAVIGATIONS.map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className="tw-no-underline hover:cursor 
             hover:text-[#424242]"
            >
              <ListItem className="tw-flex-center">
                <ListItemText
                  primary={item.primary}
                  className="tw-flex-[#737373]"
                />
              </ListItem>
            </Link>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default HeaderMobile;
