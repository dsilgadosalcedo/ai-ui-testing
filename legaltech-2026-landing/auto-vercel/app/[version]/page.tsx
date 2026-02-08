import { notFound } from "next/navigation";
import { LandingV1 } from "./landing-v1";
import { LandingV2 } from "./landing-v2";
import { LandingV3 } from "./landing-v3";
import { LandingV4 } from "./landing-v4";
import { LandingV5 } from "./landing-v5";

const VALID_VERSIONS = ["1", "2", "3", "4", "5"] as const;

type VersionParam = { version: string };

function isValidVersion(
  version: string
): version is (typeof VALID_VERSIONS)[number] {
  return VALID_VERSIONS.includes(version as (typeof VALID_VERSIONS)[number]);
}

export default async function VersionPage({
  params,
}: {
  params: Promise<VersionParam>;
}) {
  const { version } = await params;
  if (!isValidVersion(version)) {
    notFound();
  }
  switch (version) {
    case "1":
      return <LandingV1 />;
    case "2":
      return <LandingV2 />;
    case "3":
      return <LandingV3 />;
    case "4":
      return <LandingV4 />;
    case "5":
      return <LandingV5 />;
    default:
      notFound();
  }
}
