"use client";

import { PolicyView } from "@/components/pages/policy-view";
import { useLocale } from "@/components/locale-provider";

export function ComplaintsView() {
  const { copy } = useLocale();

  return (
    <PolicyView
      policy={copy.complaints}
      document={{
        label: copy.complaints.document,
        href: "https://www.kgoricapital.com/wp-content/uploads/2022/11/complaints-handeling.pdf",
      }}
    />
  );
}
