import { Helmet } from "@dr.pogodin/react-helmet";

interface SEOProps {
  title?: string;
  description?: string;
}

export default function SEO({
  title = "TezkorNews24 - Dasturchi tomonidan uylab topilgan g'oya portfolio uchun yaratilgan sayt",
  description = "TezkorNews24 - bu Dasturchi tomonidan uylab topilgan g'oya portfolio uchun yaratgan edim. bu saytga ishonib qolmang, bu faqat namuna.",
}: SEOProps) {
  return (
    <Helmet>
      <html lang="uz" />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
