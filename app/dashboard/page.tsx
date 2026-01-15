"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Dashboard() {
  const router = useRouter();

  // ✅ Protect dashboard route
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (!loggedIn) {
      router.replace("/"); // redirect to login page
    }
  }, [router]);

  return (
    <>
    
        <div className="ml-auto">
          <Navbar /> {/* Logout button at Navbar */}
        </div>
    

      <main className="bg-gray-50">

        {/* 1️⃣ HERO SECTION */}
        <section className="relative w-full h-[600px]">
          <Image
            src="/cusat.png"
            alt="CUSAT Campus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div className="max-w-3xl text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Department Placement Portal
              </h1>
              <p className="text-lg mb-2">
                Department of Computer Applications, CUSAT
              </p>
              <p className="text-sm md:text-base opacity-90">
                A centralized platform for DCA students to explore recruiters,
                placement opportunities, alumni experiences, and career guidance.
              </p>
            </div>
          </div>
        </section>

        {/* 2️⃣ ABOUT */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold mb-4">About the Placement Cell</h2>
          <p className="text-gray-700 leading-relaxed">
            The Placement Cell plays a vital role in preparing students for
            successful careers through campus recruitment, training programs,
            workshops, and career guidance sessions.
          </p>
        </section>

        {/* 3️⃣ RECRUITERS – SLIDING LOGOS */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold mb-6">Our Recruiters</h2>
          <div className="relative overflow-hidden">
            <div className="flex items-center gap-12 animate-slide whitespace-nowrap">
              <Image src="/recruiters/tcs.png" alt="TCS" width={180} height={90} />
              <Image src="/recruiters/accenture.png" alt="Accenture" width={180} height={90} />
              <Image src="/recruiters/deloitte.png" alt="Deloitte" width={180} height={90} />
              <Image src="/recruiters/infosys.png" alt="Infosys" width={180} height={90} />
              <Image src="/recruiters/cognizant.png" alt="Cognizant" width={180} height={90} />
              <Image src="/recruiters/ibm.png" alt="IBM" width={180} height={90} />
              {/* Duplicate for infinite loop */}
              <Image src="/recruiters/tcs.png" alt="TCS" width={180} height={90} />
              <Image src="/recruiters/accenture.png" alt="Accenture" width={180} height={90} />
            </div>
          </div>
        </section>

        {/* 4️⃣ PLACEMENT STATS */}
        <section className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8">Placement Highlights</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <StatCard title="Highest Package" value="₹12 LPA" />
              <StatCard title="Average Package" value="₹4.5 LPA" />
              <StatCard title="Companies Visited" value="30+" />
              <StatCard title="Students Placed" value="85%" />
            </div>
          </div>
        </section>

        {/* 5️⃣ ALUMNI SUGGESTIONS */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-3 text-center">Alumni Insights</h2>
          <p className="text-gray-600 mb-10 text-center">
            Guidance from our alumni to help students succeed in placements
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SuggestionCard
              text="Focus on strong fundamentals in data structures and algorithms. Consistent practice helped me succeed."
              name="Anjali S"
              role="Software Engineer, TCS"
              delay="0s"
            />
            <SuggestionCard
              text="Mock interviews boosted my confidence and helped me perform well in technical rounds."
              name="Rahul K"
              role="Analyst, Infosys"
              delay="0.2s"
            />
            <SuggestionCard
              text="Real-time projects and internships play a huge role during interviews."
              name="Meera P"
              role="Associate Consultant, Accenture"
              delay="0.4s"
            />
            <SuggestionCard
              text="Stay calm, communicate clearly, and never underestimate HR rounds."
              name="Arjun M"
              role="System Engineer, Cognizant"
              delay="0.6s"
            />
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-gray-900 text-gray-300 py-6 text-center text-sm">
          © 2026 Department of Computer Applications, CUSAT — Placement Cell
        </footer>
      </main>
    </>
  );
}

/* 🔹 REUSABLE COMPONENTS */
function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-gray-100 rounded-lg p-6 text-center shadow">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-2xl font-bold text-red-700">{value}</p>
    </div>
  );
}

function SuggestionCard({
  text,
  name,
  role,
  delay,
}: {
  text: string;
  name: string;
  role: string;
  delay: string;
}) {
  return (
    <div
      className="bg-white rounded-xl p-6 shadow-md border hover:shadow-xl transition-all floating-card"
      style={{ animationDelay: delay }}
    >
      <p className="text-gray-700 text-sm mb-4 leading-relaxed">“{text}”</p>
      <div className="border-t pt-4">
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-xs text-gray-600">{role}</p>
      </div>
    </div>
  );
}
