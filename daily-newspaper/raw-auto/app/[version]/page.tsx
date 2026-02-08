import { notFound } from "next/navigation";
import { newspaperContent } from "@/lib/newspaper-content";
import { ClassicBroadsheet } from "@/components/newspaper-pages/classic-broadsheet";
import { ModernMinimalist } from "@/components/newspaper-pages/modern-minimalist";
import { BoldTabloid } from "@/components/newspaper-pages/bold-tabloid";
import { EditorialMagazine } from "@/components/newspaper-pages/editorial-magazine";
import { RetroVintage } from "@/components/newspaper-pages/retro-vintage";

const VALID_VERSIONS = ["1", "2", "3", "4", "5"] as const;

const versionComponents = {
  "1": ClassicBroadsheet,
  "2": ModernMinimalist,
  "3": BoldTabloid,
  "4": EditorialMagazine,
  "5": RetroVintage,
} as const;

export default async function VersionPage({
  params,
}: {
  params: Promise<{ version: string }>;
}) {
  const { version } = await params;
  if (!VALID_VERSIONS.includes(version as (typeof VALID_VERSIONS)[number])) {
    notFound();
  }
  const Component = versionComponents[version as keyof typeof versionComponents];
  return <Component content={newspaperContent} />;
}
