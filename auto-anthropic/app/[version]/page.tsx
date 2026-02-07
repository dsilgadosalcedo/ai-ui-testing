import { notFound } from "next/navigation";
import { LandingV1 } from "@/components/landing-v1";
import { LandingV2 } from "@/components/landing-v2";
import { LandingV3 } from "@/components/landing-v3";
import { LandingV4 } from "@/components/landing-v4";
import { LandingV5 } from "@/components/landing-v5";

const VALID_VERSIONS = ["1", "2", "3", "4", "5"] as const;

const LANDING_COMPONENTS = {
  "1": LandingV1,
  "2": LandingV2,
  "3": LandingV3,
  "4": LandingV4,
  "5": LandingV5,
} as const;

export function generateStaticParams() {
  return VALID_VERSIONS.map((version) => ({ version }));
}

export default async function VersionPage({
  params,
}: {
  params: Promise<{ version: string }>;
}) {
  const { version } = await params;
  if (!VALID_VERSIONS.includes(version as (typeof VALID_VERSIONS)[number])) {
    notFound();
  }
  const Component =
    LANDING_COMPONENTS[version as (typeof VALID_VERSIONS)[number]];
  return <Component />;
}
