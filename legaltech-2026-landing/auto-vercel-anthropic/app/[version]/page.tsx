import { notFound } from "next/navigation";
import { LandingV1 } from "./landing-v1";
import { LandingV2 } from "./landing-v2";
import { LandingV3 } from "./landing-v3";
import { LandingV4 } from "./landing-v4";
import { LandingV5 } from "./landing-v5";

const VALID_VERSIONS = ["1", "2", "3", "4", "5"] as const;

export function generateStaticParams() {
  return VALID_VERSIONS.map((version) => ({ version }));
}

const versionComponents = {
  "1": LandingV1,
  "2": LandingV2,
  "3": LandingV3,
  "4": LandingV4,
  "5": LandingV5,
} as const;

type VersionParam = (typeof VALID_VERSIONS)[number];

export default async function VersionPage({
  params,
}: {
  params: Promise<{ version: string }>;
}) {
  const { version } = await params;
  if (!VALID_VERSIONS.includes(version as VersionParam)) {
    notFound();
  }
  const Component = versionComponents[version as VersionParam];
  return <Component />;
}
