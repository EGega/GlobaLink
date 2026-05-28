import { useState } from "react";
import { useTranslation } from "react-i18next";

const initialState = {
  name: "",
  email: "",
  company: "",
  subject: "",
  message: "",
};

function ContactForm() {
  const { t } = useTranslation();
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const validate = () => {
    if (!values.name.trim() || !values.subject.trim() || !values.message.trim()) {
      return false;
    }
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim());
  };

  const handleSubmit = (event) => {
    if (!validate()) {
      event.preventDefault();
      setError(t("contact.error"));
    } else {
      setError("");
    }
  };

  return (
    <form
      action="/contact-success"
      className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
      data-netlify="true"
      method="POST"
      name="contact"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input name="form-name" type="hidden" value="contact" />
      <input name="bot-field" type="hidden" />

      <h3 className="text-xl font-semibold text-brand">{t("contact.formTitle")}</h3>
      {error && <p className="rounded bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}

      <label className="block text-sm">
        <span>{t("contact.fields.name")}</span>
        <input
          className="mt-1 w-full rounded border border-slate-300 px-3 py-2"
          name="name"
          onChange={handleChange}
          required
          type="text"
          value={values.name}
        />
      </label>

      <label className="block text-sm">
        <span>{t("contact.fields.email")}</span>
        <input
          className="mt-1 w-full rounded border border-slate-300 px-3 py-2"
          name="email"
          onChange={handleChange}
          required
          type="email"
          value={values.email}
        />
      </label>

      <label className="block text-sm">
        <span>{t("contact.fields.company")}</span>
        <input
          className="mt-1 w-full rounded border border-slate-300 px-3 py-2"
          name="company"
          onChange={handleChange}
          type="text"
          value={values.company}
        />
      </label>

      <label className="block text-sm">
        <span>{t("contact.fields.subject")}</span>
        <input
          className="mt-1 w-full rounded border border-slate-300 px-3 py-2"
          name="subject"
          onChange={handleChange}
          required
          type="text"
          value={values.subject}
        />
      </label>

      <label className="block text-sm">
        <span>{t("contact.fields.message")}</span>
        <textarea
          className="mt-1 min-h-28 w-full rounded border border-slate-300 px-3 py-2"
          name="message"
          onChange={handleChange}
          required
          value={values.message}
        />
      </label>

      <button className="rounded bg-brand px-4 py-2 font-semibold text-white" type="submit">
        {t("contact.submit")}
      </button>
    </form>
  );
}

export default ContactForm;
