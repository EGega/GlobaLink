import { useTranslation } from "react-i18next";
import ServiceCard from "../components/ServiceCard";
import { usePageTitle } from "../hooks/usePageTitle";

function ServicesPage() {
  const { t } = useTranslation();
  usePageTitle("nav.services");
  const services = t("services.items", { returnObjects: true });
  const serviceBackgrounds = [
    "/assets/factory.jpg",
    "/assets/priceNeg.jpg",
    "/assets/inspect.jpg",
    "/assets/communication.jpg",
    "/assets/logistics.jpg",
    "/assets/scam.jpg",
    "/assets/orders.jpg",
  ];

  return (
    <section>
      <h1 className="mb-6 text-3xl font-bold text-brand">{t("services.title")}</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {services.map((service, index) => (
          <ServiceCard
            description={service.description}
            key={service.title}
            title={service.title}
            backgroundImage={serviceBackgrounds[index]}
            textScale={1.5}
            alignTopCenter
          />
        ))}
      </div>
    </section>
  );
}

export default ServicesPage;
