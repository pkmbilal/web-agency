import HomePageClient from "../components/home/HomePageClient";

/** @type {import("next").Metadata} */
export const metadata = {
  title: "Codesudio | Web Development Agency",
  description:
    "Codesudio builds modern websites, web applications, and SaaS products for growing businesses.",
};

export default function Page() {
  return <HomePageClient />;
}