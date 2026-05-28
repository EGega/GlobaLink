import { useTranslation } from "react-i18next";
import GalleryGrid from "../components/GalleryGrid";
import { galleryItems } from "../data/galleryData";
import { usePageTitle } from "../hooks/usePageTitle";

function GalleryPage() {
  const { t } = useTranslation();
  usePageTitle("nav.gallery");

  const filteredItems = galleryItems.filter((item) => !item.category.includes("logo"));

  return (
    <section>
      <h1 className="text-3xl font-bold text-brand">{t("gallery.title")}</h1>
      <p className="mb-6 mt-3 text-slate-700">{t("gallery.subtitle")}</p>
      <GalleryGrid items={filteredItems} />
    </section>
  );
}

export default GalleryPage;
