import { useTranslation } from "react-i18next";
import { usePageTitle } from "../hooks/usePageTitle";

function AboutPage() {
  const { t } = useTranslation();
  usePageTitle("nav.about");
  const relevancePoints = t("about.relevancePoints", { returnObjects: true });

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h1 className="text-3xl font-bold text-brand">{t("about.title")}</h1>
      <p className="mt-4 max-w-4xl leading-7 text-slate-700">{t("about.description")}</p>
      <h2 className="mt-6 text-xl font-semibold text-brand">{t("about.relevanceTitle")}</h2>
      <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700">
        {relevancePoints.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <h2 className="mt-6 text-xl font-semibold text-brand">{t("about.trustTitle")}</h2>
      <p className="mt-3 max-w-4xl leading-7 text-slate-700">{t("about.trustDescription")}</p>
    </section>
  );
}

export default AboutPage;
