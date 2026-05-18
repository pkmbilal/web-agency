import BlogPageClient from "@/components/blog/BlogPageClient";

export const metadata = {
  title: "Blog | Codesudio",
  description:
    "Codesudio blog is under construction. Insights, web design ideas, development tips, and digital growth content will be published soon.",
  alternates: {
    canonical: "/blog",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}
