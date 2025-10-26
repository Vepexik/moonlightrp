import Link from "next/link"

export default function PrivacyPolicyPage() {
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
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

            <div className="space-y-6 text-slate-300">
              <section>
                <h2 className="text-2xl font-bold text-blue-400 mb-3">1. Introduction</h2>
                <p>
                  Provide FiveM ("we" or "us" or "our") operates the website. This page informs you of our policies
                  regarding the collection, use, and disclosure of personal data when you use our service and the
                  choices you have associated with that data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-400 mb-3">2. Information Collection and Use</h2>
                <p>
                  We collect several different types of information for various purposes to provide and improve our
                  service to you.
                </p>
                <h3 className="text-lg font-semibold text-blue-300 mt-3 mb-2">Types of Data Collected:</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Discord Account Information (username, user ID, avatar)</li>
                  <li>Usage Data (pages visited, time spent, referral source)</li>
                  <li>Device Information (browser type, IP address, operating system)</li>
                  <li>Server Activity Data (gameplay statistics, in-game actions)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-400 mb-3">3. Use of Data</h2>
                <p>Provide FiveM uses the collected data for various purposes:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>To provide and maintain our service</li>
                  <li>To notify you about changes to our service</li>
                  <li>To allow you to participate in interactive features of our service</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information so that we can improve our service</li>
                  <li>To monitor the usage of our service</li>
                  <li>To detect, prevent and address technical issues</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-400 mb-3">4. Security of Data</h2>
                <p>
                  The security of your data is important to us but remember that no method of transmission over the
                  Internet or method of electronic storage is 100% secure. While we strive to use commercially
                  acceptable means to protect your personal data, we cannot guarantee its absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-400 mb-3">5. Changes to This Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the "effective date" at the top of this Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-400 mb-3">6. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us by visiting our Discord server
                  or sending us an email.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-400 mb-3">7. Your Rights</h2>
                <p>
                  You have the right to access, update, or delete the information we have on you. If you would like to
                  exercise this right, please contact us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-400 mb-3">8. GDPR Compliance</h2>
                <p>
                  If you are located in the European Union, you have certain data protection rights. Provide FiveM aims
                  to take reasonable steps to allow you to correct, amend, delete, or limit the use of your personal
                  data.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
