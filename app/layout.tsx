import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Toolnest",
    template: "%s | Toolnest",
  },
  description: "A toolbox of quick, browser-based utilities for text and images.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#fafafa", color: "#111" }}>{children}</body>
    </html>
  );
}
