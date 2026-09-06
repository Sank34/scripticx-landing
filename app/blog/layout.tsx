import Footer from "@/components/Footer";

export default function BlogLayout({children}: {children: React.ReactNode}) {
  return <><main className="mx-auto min-h-[70svh] w-full max-w-[90rem] px-5 pb-24 pt-28 sm:px-8 lg:px-12">{children}</main><Footer /></>;
}
