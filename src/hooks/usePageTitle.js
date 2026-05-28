import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export function usePageTitle(titleKey) {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t(titleKey)} | GlobaLink`;
  }, [t, titleKey]);
}
