import { notFound } from "next/navigation";
import { LandingVersion1 } from "@/app/components/landing-version-1";
import { LandingVersion2 } from "@/app/components/landing-version-2";
import { LandingVersion3 } from "@/app/components/landing-version-3";
import { LandingVersion4 } from "@/app/components/landing-version-4";
import { LandingVersion5 } from "@/app/components/landing-version-5";

const VALID_VERSIONS = ["1", "2", "3", "4", "5"] as const;

const versionComponents = {
  "1": LandingVersion1,
  "2": LandingVersion2,
  "3": LandingVersion3,
  "4": LandingVersion4,
  "5": LandingVersion5,
} as const;

type VersionParam = (typeof VALID_VERSIONS)[number];

function isValidVersion(v: string | undefined): v is VersionParam {
  return v !== undefined && VALID_VERSIONS.includes(v as VersionParam);
}

export function generateStaticParams() {
  return VALID_VERSIONS.map((version) => ({ version }));
}

export default async function VersionPage({
  params,
}: {
  params: Promise<{ version: string }>;
}) {
  const { version } = await params;
  if (!isValidVersion(version)) notFound();
  const Component = versionComponents[version];
  return (
    <div data-version={version}>
      <Component />
    </div>
  );
}
