import { useTranslation } from "react-i18next";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import { usePageTitle } from "../hooks/usePageTitle";

function HomePage() {
  const { t } = useTranslation();
  usePageTitle("nav.home");

  const highlightedServices = t("services.items", { returnObjects: true }).slice(0, 4);
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
    <div className="space-y-10">
      <Hero />
      <section>
        <h2 className="mb-4 text-2xl font-bold text-brand">{t("services.title")}</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {highlightedServices.map((item, index) => (
            <ServiceCard

              key={item.title}
              title={item.title}
              backgroundImage={serviceBackgrounds[index]}
              textScale={1.8}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
