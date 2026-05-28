import { useTranslation } from "react-i18next";
import ContactForm from "../components/ContactForm";
import { usePageTitle } from "../hooks/usePageTitle";

function ContactPage() {
  const { t } = useTranslation();
  usePageTitle("nav.contact");

  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold text-brand">{t("contact.title")}</h1>
        <div className="mt-5 space-y-3 text-slate-700">
          <p>
            <span className="font-semibold">{t("contact.addressLabel")}:</span> {t("contact.address")}
          </p>
          <p>
            <span className="font-semibold">{t("contact.emailLabel")}:</span> {t("contact.email")}
          </p>
          <p>
            <span className="font-semibold">{t("contact.phoneLabel")}:</span>{" "}
            <span className="whitespace-pre-line">{t("contact.phone")}</span>
          </p>
          <p>
            <span className="font-semibold">{t("contact.hoursLabel")}:</span> {t("contact.hours")}
          </p>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}

export default ContactPage;
