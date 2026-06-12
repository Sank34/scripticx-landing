import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ForumPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="relative py-20 sm:py-28 px-4 sm:px-6 text-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-green-200 via-white to-green-100" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-green-300/40 blur-[80px] sm:blur-[120px] rounded-full" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Forum
            </h1>
            <p className="text-muted-foreground mt-5 text-base sm:text-lg">
              Coming soon.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
