"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { MdLanguage } from "react-icons/md";
import { Locale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

// Ajoute ces imports ou déclare-les si ce n'est pas déjà fait :
import { localeNames, locales } from "@/i18n/request";

const LocaleSwitcher = ({
  locale,
}: {
  locale: Locale;
}) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Select onValueChange={(v) => router.replace(pathname, { locale: v })} value={locale}>
      <SelectTrigger className="w-auto">
        <MdLanguage className="h-5 w-5" />
      </SelectTrigger>
      <SelectContent className="min-w-4">
        <SelectGroup>
          {locales.map((loc, index) => (
            <SelectItem key={index} value={loc}>
              {localeNames[loc]}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default LocaleSwitcher;
