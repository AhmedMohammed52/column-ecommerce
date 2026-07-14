import { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { LuShoppingBag } from "react-icons/lu";
import { FaBars } from "react-icons/fa6";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    {
      path: "/",
      name: "Shop",
    },
    {
      path: "/products",
      name: "Products",
    },
    {
      path: "/new",
      name: "New",
    },
    {
      path: "/editorial",
      name: "Editorial",
    },
  ];

  return (
    <div className="flex justify-center fixed inset-x-0 top-0 px-3 py-3 sm:pt-5 z-50">
      <header className="w-full max-w-6xl flex items-center gap-3 sm:gap-6 px-3 sm:px-5 py-2 bg-surface/80 rounded-full border border-hairline transition-all backdrop-blur-xl">
        <Link to="/" className="flex gap-2 items-center pl-1 pr-2">
          <div className="w-7 h-7 rounded-full bg-ink text-background text-[13px] font-semibold flex items-center justify-center">
            ◐
          </div>

          <span className="hidden sm:inline tracking-tight font-semibold text-[15px] text-black">
            Column
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `rounded-full px-3 py-1.5 transition-colors text-sm
            ${
              isActive
                ? "bg-secondary text-ink"
                : "text-ink-muted hover:text-ink"
            }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden min-w-0 flex-1 items-center md:flex">
          <div className="group relative flex w-full max-w-sm items-center">
            <CiSearch className=" pointer-events-none absolute left-3 h-4 w-4 text-ink-muted" />

            <input
              type="search"
              placeholder="Search for products, brands…"
              className="w-full h-9 rounded-full border border-hairline bg-secondary/60 pl-9 pr-3 text-sm outline-none transition placeholder:text-ink-muted focus:border-ink/20 focus:bg-surface focus:ring-2 focus:ring-brand/30"
            />
          </div>
        </div>

        <div className="flex items-center gap-1 ml-auto md:ml-2">
          <Link
            to="/profile"
            className="w-9 h-9 rounded-full flex items-center justify-center text-ink-muted hover:bg-secondary hover:text-ink"
          >
            <FiUser className="h-4.5 w-4.5" />
          </Link>

          <Link
            to="/wishlist"
            className="w-9 h-9 rounded-full flex items-center justify-center text-ink-muted hover:bg-secondary hover:text-ink"
          >
            <GoHeart className="h-4.5 w-4.5" />
          </Link>

          <Link
            to="/cart"
            className="w-9 h-9 rounded-full flex items-center justify-center bg-ink text-background hover:opacity-90 relative"
          >
            <LuShoppingBag className="h-4.5 w-4.5" />
            <span className=" absolute -right-1 -top-1 w-4 h-4 rounded-full flex items-center justify-center bg-brand text-brand-foreground font-semibold text-[10px] ">
              2
            </span>
          </Link>

          <button
            type="button"
            aria-label="Open menu"
            className="w-9 h-9 rounded-full flex items-center justify-center text-ink-muted hover:bg-secondary hover:text-ink md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars className="h-4.5 w-4.5" />
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed top-20 inset-x-3 rounded-2xl border border-hairline bg-surface/95 p-3 shadow-lift backdrop-blur md:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2 text-sm text-ink 
                ${isActive ? "bg-secondary" : "hover:bg-secondary"}`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* <Link
            to=""
            className="block rounded-lg px-3 py-2 text-sm text-ink hover:bg-secondary"
          >
            Shop
          </Link>

          <Link
            to=""
            className="block rounded-lg px-3 py-2 text-sm text-ink hover:bg-secondary"
          >
            Products
          </Link>

          <Link
            to=""
            className="block rounded-lg px-3 py-2 text-sm text-ink hover:bg-secondary"
          >
            New
          </Link>

          <Link
            to=""
            className="block rounded-lg px-3 py-2 text-sm text-ink hover:bg-secondary"
          >
            Editorial
          </Link> */}
        </div>
      )}
    </div>
  );
}
