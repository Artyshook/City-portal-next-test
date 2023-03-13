import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { NavbarAction, StoreStateAll } from "@/store/interfaces/interfaces";
import { NavbarItem } from "@/store/interfaces/interfaces";
import {fetchNavbar} from "@/store/api/fetchNavbar/fetchNavbar";

export const Navbar = () => {
  const links: NavbarItem[] = useSelector(
    (state: StoreStateAll) => state.navbar.links
  );

  const dispatch =
    useDispatch<ThunkDispatch<StoreStateAll, undefined, NavbarAction>>();

  useEffect(() => {
    dispatch(fetchNavbar());
  }, []);

  return (
    <nav>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          gap: "1rem",
          fontSize: "1.5rem",
        }}
      >
        {links?.map((link) => (
          <li key={link.name}>
            <Link href={`${link.uri}`} >{link.name}</Link>
          </li>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          gap: "1rem",
          fontSize: "1.5rem",
        }}
      >
        {/*<Link href="/articles">Articles</Link>*/}
          <Link href="/vyrazte-za-kraskou-a-zviretem-nebo-za-loutkami-vikend-bude-kulturni">
              <p>Example Article</p>
          </Link>

      </div>
    </nav>
  );
};
