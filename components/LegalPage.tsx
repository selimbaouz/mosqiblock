import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const handleMap: Record<string, string> = {
  "legal-notice": "notice",
  "refund-policy": "refund",
  "shipping-policy": "shipping",
  "privacy-policy": "privacy",
  "terms-and-conditions-of-use": "terms",
  // Ajoute d'autres handles si besoin
};


export default function LegalPage({handle}: { handle: string }) {
  const t = useTranslations("fe.legalPages");
  const jsonKey = handleMap[handle];

  // Si le handle n'est pas reconnu, affiche une erreur
  if (!jsonKey) {
    return (
      <div className={cn("px-6 text-left space-y-6", "lg:max-w-4xl lg:mx-auto")}>
        <h2 className="text-3xl font-bold">Page not found</h2>
      </div>
    );
  }

  const page = t.raw(jsonKey) as { title: string; sections: { heading: string; content: string[] }[] } | undefined;

  if (!page || !Array.isArray(page.sections)) {
    return (
      <div className={cn("px-6 text-left space-y-6", "lg:max-w-4xl lg:mx-auto")}>
        <h2 className="text-3xl font-bold">Page not found</h2>
      </div>
    );
  }

  return (
    <div className={cn("px-6 text-left space-y-6", "lg:max-w-4xl lg:mx-auto")}>
      <h2 className={cn(
        "text-[28px] text-left pb-14 leading-tight font-semibold ",
        "lg:text-6xl",
        "xl:text-5xl xl:leading-[1.4]",
        "pointer-events-none whitespace-pre-wrap",
      )}>{page.title}</h2>
      {page.sections.map((section, index) => (
        <div key={index} className="space-y-6">
          <h3 className={cn(
            "text-xl text-left leading-tight font-semibold",
            "lg:text-3xl lg:mx-auto",
            "xl:leading-[1.4]",
            "pointer-events-none whitespace-pre-wrap",
          )}>{section.heading}</h3>
          {section.content.map((paragraph, idx) => (
            <p key={idx} className={cn("text-base w-full", "lg:text-base lg:mx-auto lg:pb-2", "xl:text-lg xl:leading-relaxed")}>
              {paragraph}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};