import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/services", label: t("nav.services") },
    { to: "/gallery", label: t("nav.gallery") },
    { to: "/contact", label: t("nav.contact") },
  ];

  const navClass = ({ isActive }) =>
    `rounded px-3 py-2 text-sm font-medium ${
      isActive ? "bg-brand text-white" : "text-slate-700 hover:bg-slate-200"
    }`;

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <img
          src="/assets/textLogo.jpeg"
          alt={t("siteName")}
          className="h-10 w-auto"
        />
        <button
          className="rounded border border-slate-300 px-3 py-2 text-sm md:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          type="button"
        >
          Menu
        </button>
        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink className={navClass} key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
          <button
            className="ml-3 rounded border border-brand px-3 py-1 text-xs font-semibold text-brand"
            onClick={() => i18n.changeLanguage(i18n.language === "en" ? "sq" : "en")}
            type="button"
          >
            {i18n.language === "en" ? "ALB" : "EN"}
          </button>
        </nav>
      </div>
      {menuOpen && (
        <div className="space-y-2 border-t border-slate-200 px-4 py-3 md:hidden">
          {links.map((link) => (
            <NavLink
              className={navClass}
              key={link.to}
              onClick={() => setMenuOpen(false)}
              to={link.to}
            >
              {link.label}
            </NavLink>
          ))}
          <button
            className="rounded border border-brand px-3 py-2 text-xs font-semibold text-brand"
            onClick={() => i18n.changeLanguage(i18n.language === "en" ? "sq" : "en")}
            type="button"
          >
            {i18n.language === "en" ? "ALB" : "EN"}
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
