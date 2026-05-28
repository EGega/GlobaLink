import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle";

function ContactSuccessPage() {
  const { t } = useTranslation();
  usePageTitle("contact.title");

  return (
    <section className="mx-auto max-w-2xl rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
      <h1 className="text-3xl font-bold text-brand">{t("contact.title")}</h1>
      <p className="mt-4 text-slate-700">{t("contact.success")}</p>
      <Link className="mt-6 inline-block rounded bg-brand px-4 py-2 font-semibold text-white" to="/">
        {t("nav.home")}
      </Link>
    </section>
  );
}

export default ContactSuccessPage;
