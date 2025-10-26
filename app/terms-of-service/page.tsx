import Link from "next/link"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      {/* Starfield background */}
      <div className="starfield">
        {Array.from({ length: 100 }, (_, i) => ({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          delay: Math.random() * 3,
        })).map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.delay}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <Link href="/" className="text-blue-400 hover:text-blue-300 mb-8 inline-block">
            ← Back to home
          </Link>

          <div className="rounded-lg border border-blue-500/30 bg-slate-900/80 backdrop-blur-sm p-8">
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

            <div className="space-y-6 text-slate-300">
              <section>
                <h2 className="text-2xl font-bold text-blue-400 mb-3">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using the Provide FiveM server and website, you accept and agree to be bound by the
                  terms and provision of this agreement. If you do not agree to abide by the above, please do not use
                  this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-400 mb-3">2. Use License</h2>
                <p>
                  Permission is granted to temporarily download one copy of the materials (information or software) on
                  Provide FiveM for personal, non-commercial transitory viewing only. This is the grant of a license,
                  not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Modifying or copying the materials</li>
                  <li>Using the materials for any commercial purpose or for any public display</li>
                  <li>Attempting to decompile or reverse engineer any software contained on the server</li>
                  <li>Removing any copyright or other proprietary notations from the materials</li>
                  <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-400 mb-3">3. Disclaimer</h2>
                <p>
                  The materials on Provide FiveM are provided on an 'as is' basis. Provide FiveM makes no warranties,
                  expressed or implied, and hereby disclaims and negates all other warranties including, without
                  limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or
                  non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-400 mb-3">4. Limitations</h2>
                <p>
                  In no event shall Provide FiveM or its suppliers be liable for any damages (including, without
                  limitation, damages for loss of data or profit, or due to business interruption) arising out of the
                  use or inability to use the materials on Provide FiveM.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-400 mb-3">5. Accuracy of Materials</h2>
                <p>
                  The materials appearing on Provide FiveM could include technical, typographical, or photographic
                  errors. Provide FiveM does not warrant that any of the materials on its website are accurate,
                  complete, or current. Provide FiveM may make changes to the materials contained on its website at any
                  time without notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-400 mb-3">6. Links</h2>
                <p>
                  Provide FiveM has not reviewed all of the sites linked to its website and is not responsible for the
                  contents of any such linked site. The inclusion of any link does not imply endorsement by Provide
                  FiveM of the site. Use of any such linked website is at the user's own risk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-400 mb-3">7. Modifications</h2>
                <p>
                  Provide FiveM may revise these terms of service for its website at any time without notice. By using
                  this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-400 mb-3">8. Governing Law</h2>
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of the Czech
                  Republic, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
