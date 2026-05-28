import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-black">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-6 text-sm text-white sm:px-6 lg:px-8">
        <p>
          {t("siteName")} - {t("contact.address")}
        </p>
        <p>
          {t("contact.emailLabel")}: {t("contact.email")} | {t("contact.hoursLabel")}:{" "}
          {t("contact.hours")}
        </p>
        <p className="whitespace-pre-line">
          {t("contact.phoneLabel")}: {t("contact.phone")}
        </p>
        <p>
          {year} {t("siteName")} - {t("footer.rights")}
        </p>
        <p>
          Designed by{" "}
          <a
            className="underline underline-offset-2 hover:text-slate-300"
            href="https://tr.linkedin.com/in/eneagega"
            target="_blank"
            rel="noreferrer"
          >
            Enea Gega
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
