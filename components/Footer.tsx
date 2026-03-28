"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { siGithub, siX, siYoutube } from "simple-icons";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-32">

      {/* top security bar */}
      <div className="py-6 text-center text-sm text-muted-foreground border-b border-white/10">
        <span>We protect your data.</span>{" "}
        <span className="text-green-400 cursor-pointer hover:underline">
          More on Security
        </span>
        <span className="mx-4">•</span>
        <span>✔ SOC2 Type 2 Certified</span>
        <span className="mx-4">•</span>
        <span>✔ HIPAA Compliant</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* top row */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* logo + socials */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              ScripticX
            </h2>

            <div className="flex gap-4 text-muted-foreground">
              {/* GitHub */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="hover:text-white cursor-pointer transition"
              >
                <path d={siGithub.path} />
              </svg>

              {/* Twitter */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="hover:text-white cursor-pointer transition"
              >
                <path d={siX.path} />
              </svg>

              {/* Discord / Chat */}
              <MessageCircle className="w-5 h-5 hover:text-white cursor-pointer transition" />

              {/* YouTube */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="hover:text-white cursor-pointer transition"
              >
                <path d={siYoutube.path} />
              </svg>
            </div>
          </div>

          {/* links grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 text-sm">

            <div>
              <h3 className="text-white mb-3">Product</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="#">Problems</Link></li>
                <li><Link href="#">Editor</Link></li>
                <li><Link href="#">Community</Link></li>
                <li><Link href="#">Pricing</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white mb-3">Solutions</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="#">Students</Link></li>
                <li><Link href="#">Teachers</Link></li>
                <li><Link href="#">Beginners</Link></li>
                <li><Link href="#">Teams</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white mb-3">Resources</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="#">Docs</Link></li>
                <li><Link href="#">Blog</Link></li>
                <li><Link href="#">Support</Link></li>
                <li><Link href="#">Status</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white mb-3">Developers</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="#">API</Link></li>
                <li><Link href="#">Open Source</Link></li>
                <li><Link href="#">Changelog</Link></li>
                <li><Link href="#">Contributing</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white mb-3">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="#">About</Link></li>
                <li><Link href="#">Privacy</Link></li>
                <li><Link href="#">Terms</Link></li>
                <li><Link href="#">Contact</Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* bottom */}
        <div className="border-t border-white/10 mt-16 pt-6 flex items-center justify-between text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} ScripticX</span>
        </div>

      </div>
    </footer>
  );
}