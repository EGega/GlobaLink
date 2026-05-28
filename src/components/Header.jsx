import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/services", label: t("nav.services") },
    { to: "/gallery", label: t("nav.gallery") },
    { to: "/contact", label: t("nav.contact") },
  ];

  const navClass = ({ isActive }) =>
    `rounded px-2 py-1.5 text-xs font-medium md:px-3 md:py-2 md:text-sm ${
      isActive ? "bg-brand text-white" : "text-slate-700 hover:bg-slate-200"
    }`;

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-3 sm:px-6 lg:px-8">
        <img
          src="/assets/gallery/textLogo.jpeg"
          alt={t("siteName")}
          className="h-10 w-auto shrink-0"
        />
        <nav className="flex flex-wrap items-center justify-end gap-1 md:gap-2">
          {links.map((link) => (
            <NavLink className={navClass} key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
          <button
            className="ml-1 rounded border border-brand px-2 py-1 text-xs font-semibold text-brand md:ml-3 md:px-3"
            onClick={() => i18n.changeLanguage(i18n.language === "en" ? "sq" : "en")}
            type="button"
          >
            {i18n.language === "en" ? "ALB" : "EN"}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
