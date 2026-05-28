import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();
  const heroStyle = {
    backgroundImage:
      "linear-gradient(rgba(3, 7, 18, 0.5), rgba(3, 7, 18, 0.5)), url('/assets/container.jpg')",
  };

  return (
    <section
      className="rounded-2xl bg-cover bg-center px-6 py-12 text-white md:px-10"
      style={heroStyle}
    >
      <h1 className="max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
        {t("hero.title")}
      </h1>
      <p className="mt-4 max-w-2xl text-base text-slate-100 md:text-lg">{t("hero.subtitle")}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link className="rounded bg-white px-4 py-2 font-semibold text-brand" to="/services">
          {t("hero.ctaPrimary")}
        </Link>
        <Link className="rounded border border-white px-4 py-2 font-semibold text-white" to="/contact">
          {t("hero.ctaSecondary")}
        </Link>
      </div>
    </section>
  );
}

export default Hero;
