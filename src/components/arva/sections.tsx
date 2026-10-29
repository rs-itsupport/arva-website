import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Hotel,
  Landmark,
  GraduationCap,
  Users2,
  Sparkles,
  Layers,
  Award,
  BookOpen,
  Cog,
  Handshake,
  CheckCircle2,
  TrendingUp,
  Compass,
  Cpu,
  Target,
  Phone,
  Mail,
  Globe,
  MapPin,
} from "lucide-react";
import { Logo, NAV } from "./SiteHeader";
import building from "@/assets/hero-building.jpg";
import capHuman from "@/assets/cap-human.jpg";
import capGov from "@/assets/cap-governance.jpg";
import capProp from "@/assets/cap-property.jpg";
import sofyanCorpLogo from "@/assets/sofyancorp-logo.png";
import groupOfArvaLogo from "@/assets/group-of-arva-logo.png";
import ackIslamica from "@/assets/ack-islamica500.png";
import ackSatyalancana from "@/assets/ack-satyalancana.png";
import ackHalalPioneer from "@/assets/ack-halal-pioneer.png";
import ackWorldHalalTravel from "@/assets/ack-world-halal-travel.png";
import ackCertificateExcellence from "@/assets/ack-certificate-excellence.png";
import ackJapanAppreciation from "@/assets/ack-japan-appreciation.png";
import contribTalkshowMahathir from "@/assets/contrib-talkshow-mahathir.png";
import contribAwardStage from "@/assets/contrib-award-stage.png";
import contribJapanSummit from "@/assets/contrib-japan-halal-summit.png";
import contribWiefSpeaker from "@/assets/contrib-wief-speaker.png";
import contribMeetingMaruf from "@/assets/contrib-meeting-maruf-amin.png";
import contribRoundtable from "@/assets/contrib-roundtable-meeting.png";
import contribForumTourism from "@/assets/contrib-forum-islamic-tourism.png";
import contribWorkshopMilenial from "@/assets/contrib-workshop-milenial.png";
import type { ReactNode } from "react";

export function PageIntro({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="container-arva pt-16 pb-6 md:pt-24 md:pb-8">
      <p className="eyebrow mb-4" data-reveal="fade">ARVA.id</p>
      <h1 className="text-4xl md:text-6xl text-foreground font-serif tracking-tight" data-reveal="up">{title}</h1>
      {subtitle && <p className="mt-4 font-serif text-lg md:text-xl text-muted-foreground max-w-3xl" data-reveal="up" data-reveal-delay="100">{subtitle}</p>}
      {children}
    </section>
  );
}

/* =========================================================================
   1. HERO & WE AIM (Slides 1 & 2)
   ========================================================================= */
export function Hero() {
  return (
    <section className="container-arva grid gap-12 py-14 md:grid-cols-[1.2fr_1fr] md:items-center md:py-24">
      <div>
        <p className="eyebrow mb-8" data-reveal="fade">ARVA.id</p>
        <h1 className="text-4xl leading-[1.12] sm:text-5xl lg:text-6xl text-foreground font-serif" data-reveal="up">
          Investing in People.
          <br />
          Advancing Responsible Governance.
          <br />
          <span className="text-burgundy">Building Sustainable Prosperity.</span>
        </h1>
        <p className="mt-6 text-sm text-muted-foreground max-w-xl leading-relaxed" data-reveal="up" data-reveal-delay="150">
          A leading ecosystem platform empowering human capital, fostering transparent governance, and unlocking
          integrated strategic value across industries.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-6" data-reveal="up" data-reveal-delay="200">
          <a
            href="#we-aim"
            className="inline-flex items-center gap-2 rounded-none border border-foreground/30 px-5 py-3 text-xs uppercase tracking-wider transition-colors hover:border-burgundy hover:text-burgundy"
          >
            We Aim &amp; Commitment <span className="text-burgundy">↓</span>
          </a>
          <Link
            to="/background"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-burgundy font-medium hover:underline underline-offset-4"
          >
            Explore Background <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
      <figure className="relative" data-reveal="scale" data-reveal-delay="150">
        <div className="overflow-hidden border border-border/80 shadow-sm">
          <img
            src={building}
            alt="ARVA sustainable architecture headquarters"
            className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
        <figcaption className="mt-3 flex items-center justify-between text-[11px] uppercase tracking-wider text-muted-foreground">
          <span>ARVA.id</span>
          <ArrowUpRight className="h-3.5 w-3.5 text-burgundy" />
        </figcaption>
      </figure>
    </section>
  );
}

export function WeAim() {
  return (
    <section id="we-aim" className="relative overflow-hidden border-y border-border">
      <img
        src={building}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover blur-[3px] scale-110 opacity-30"
      />
      <div className="absolute inset-0 aim-overlay bg-cream/90" />
      <div className="relative mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
        <div data-reveal="scale">
          <Logo className="mx-auto h-12 md:h-14" />
        </div>
        <p className="mt-5 font-serif text-xl leading-relaxed md:text-2xl text-foreground" data-reveal="up" data-reveal-delay="100">
          We aim to be a leading platform connecting people, academia, businesses, industry, NGOs, government, media,
          and other stakeholders to advance responsible governance, sustainable value creation, and shared prosperity,
          enhancing human well-being across generations.
        </p>
        <div className="mx-auto my-10 h-px w-16 bg-burgundy/60" data-reveal="scale" data-reveal-delay="150" />
        <p className="mt-5 font-serif text-base leading-relaxed md:text-lg text-burgundy font-medium" data-reveal="up" data-reveal-delay="200">
          Our Commitment to foster a dynamic and collaborative platform for innovation, knowledge exchange, and
          strategic partnerships, transforming shared challenges into opportunities for sustainable growth,
          resilience, and lasting impact; advancing through three core strategic initiatives:{" "}
          <span className="text-foreground font-semibold">Sustainable Human Capital Development</span>,{" "}
          <span className="text-foreground font-semibold">Responsible &amp; Sustainable Governance</span>, and{" "}
          <span className="text-foreground font-semibold">Property/Real Estate Investment</span>, creating long-term
          value and shared prosperity for present and future generations.
        </p>
      </div>
    </section>
  );
}

export function StrategicPillarsSection() {
  return (
    <section id="strategic-pillars" className="container-arva py-16 md:py-24 border-b border-border">
      <div className="mb-10" data-reveal="up">
        <p className="eyebrow mb-3">Strategic Framework</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-foreground">
          Three Core Strategic Acceleration Pillars
        </h2>
        <p className="mt-3 text-sm text-muted-foreground max-w-2xl">
          Key strategic frameworks driving destination competitiveness, digital marketing platforms, and institutional
          capacity building across global halal markets.
        </p>
      </div>
      <PillarGrid />
    </section>
  );
}

/* =========================================================================
   2. BACKGROUND SECTION (Slide 4 of booklet)
   ========================================================================= */
export function BackgroundSection() {
  const practicalChallenges = [
    "Lack of unified platform for collaboration",
    "Incompatible data formats and systems",
    "Unclear governance and accountability",
    "Limited interoperability between sectors",
  ];
  const researchGaps = [
    "Need for frameworks on ecosystem orchestration",
    "Limited studies on cross-sector value creation models",
    "Lack of metrics for measuring ecosystem performance",
    "Research needed on sustainable governance mechanisms",
  ];

  return (
    <section className="container-arva py-16 md:py-24">
      {/* Title & Core Subtitle */}
      <div className="border-b border-border pb-8" data-reveal="up">
        <p className="eyebrow mb-3">Slide 01 • Background Overview</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-foreground">Background</h2>
        <p className="mt-4 font-serif text-lg sm:text-xl md:text-2xl text-burgundy leading-snug max-w-4xl">
          Resources and assets exist, but fragmented stakeholders, services, data, standards, and governance prevent an
          integrated ecosystem.
        </p>
      </div>

      {/* Comparison Grid: Distributed Resources ≠ Ecosystem Capability */}
      <div className="mt-12 grid items-stretch gap-6 md:grid-cols-[1fr_auto_1fr]">
        {/* Left: Distributed Resources */}
        <div
          data-reveal="left"
          data-reveal-delay="100"
          className="rounded-none bg-navy p-8 text-navy-foreground flex flex-col justify-between shadow-sm hover-card-elevate"
        >
          <div>
            <div className="flex items-center justify-between border-b border-navy-line pb-4">
              <h3 className="font-serif text-2xl font-normal text-navy-foreground">Distributed Resources</h3>
              <Layers className="h-6 w-6 text-cream/70" />
            </div>
            {/* Visual Icon Grid Representing Fragmented Assets */}
            <div className="my-8 grid grid-cols-3 gap-4 text-center">
              <div className="rounded bg-navy-foreground/10 p-4 flex flex-col items-center">
                <Building2 className="h-6 w-6 text-cream/80 mb-2" />
                <span className="text-[10px] uppercase tracking-wider text-cream/70">Assets</span>
              </div>
              <div className="rounded bg-navy-foreground/10 p-4 flex flex-col items-center">
                <Hotel className="h-6 w-6 text-cream/80 mb-2" />
                <span className="text-[10px] uppercase tracking-wider text-cream/70">Hotels</span>
              </div>
              <div className="rounded bg-navy-foreground/10 p-4 flex flex-col items-center">
                <Users2 className="h-6 w-6 text-cream/80 mb-2" />
                <span className="text-[10px] uppercase tracking-wider text-cream/70">Services</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-cream/80 border-t border-navy-line pt-4 font-medium">
            Fragmented assets, inconsistent standards, and siloed data.
          </p>
        </div>

        {/* Center: NOT EQUAL SIGN */}
        <div data-reveal="scale" data-reveal-delay="200" className="flex items-center justify-center py-4 md:py-0">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cream text-burgundy font-serif text-3xl font-bold shadow-inner">
            ≠
          </div>
        </div>

        {/* Right: Ecosystem Capability */}
        <div
          data-reveal="right"
          data-reveal-delay="100"
          className="rounded-none border-2 border-burgundy/40 bg-card p-8 text-card-foreground flex flex-col justify-between shadow-sm hover-card-elevate"
        >
          <div>
            <div className="flex items-center justify-between border-b border-border pb-4">
              <h3 className="font-serif text-2xl font-normal text-foreground">Ecosystem Capability</h3>
              <Sparkles className="h-6 w-6 text-burgundy" />
            </div>
            {/* Interconnected Visual Network */}
            <div className="my-8 rounded bg-cream/40 border border-border/60 p-4">
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="bg-card border border-border p-2 font-medium text-burgundy">Strategic Alignment</div>
                <div className="bg-card border border-border p-2 font-medium text-navy">Data Sharing</div>
                <div className="bg-card border border-border p-2 font-medium text-burgundy">Standards</div>
              </div>
              <div className="mt-3 text-center text-[11px] text-muted-foreground uppercase tracking-widest font-semibold">
                ⇄ Cross-Sector Value Creation ⇄
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground border-t border-border pt-4 font-medium leading-relaxed">
            Strategic alignment, data sharing, service assurance standards, and cross-sector value creation.
          </p>
        </div>
      </div>

      {/* Lower Cards: Practical Challenges & Scientific Research Gap */}
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {/* Practical Challenges */}
        <div
          data-reveal="up"
          data-reveal-delay="100"
          className="overflow-hidden border border-border bg-card shadow-sm hover-card-elevate"
        >
          <div className="bg-navy px-6 py-4 text-navy-foreground flex items-center justify-between">
            <h4 className="font-sans text-xs font-semibold uppercase tracking-wider">Practical Challenges</h4>
            <span className="text-[10px] text-cream/70 uppercase">Barriers</span>
          </div>
          <ul className="p-6 space-y-4 text-xs sm:text-sm">
            {practicalChallenges.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-navy" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Scientific Research Gap */}
        <div
          data-reveal="up"
          data-reveal-delay="200"
          className="overflow-hidden border border-border bg-card shadow-sm hover-card-elevate"
        >
          <div className="bg-burgundy px-6 py-4 text-accent-foreground flex items-center justify-between">
            <h4 className="font-sans text-xs font-semibold uppercase tracking-wider">Scientific Research Gap</h4>
            <span className="text-[10px] text-cream/70 uppercase">Research Needs</span>
          </div>
          <ul className="p-6 space-y-4 text-xs sm:text-sm">
            {researchGaps.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-burgundy" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   3. BRIDGING RESOURCES TO ECOSYSTEM FUNCTIONS (Slide 5 of booklet)
   ========================================================================= */
export function BridgingSection() {
  const rows = [
    {
      resource: "Tourism & Hospitality",
      iconResource: Hotel,
      function: "Services, Transactions, Customer Journeys",
      iconFunction: Handshake,
    },
    {
      resource: "Religion & Heritage",
      iconResource: Landmark,
      function: "Religious Tourism, Education, Experiences",
      iconFunction: BookOpen,
    },
    {
      resource: "Institutions & Human Capital",
      iconResource: GraduationCap,
      function: "Research, Talent, Innovation",
      iconFunction: Cog,
    },
    {
      resource: "Social Capital & Networks",
      iconResource: Users2,
      function: "Collaboration, Distribution, Market Referrals",
      iconFunction: Handshake,
    },
    {
      resource: "Creativity & Identity",
      iconResource: Sparkles,
      function: "Differentiation, Creative Products, Branding",
      iconFunction: Award,
    },
  ];

  return (
    <section className="bg-cream/60 py-16 md:py-24 border-y border-border">
      <div className="container-arva">
        <div data-reveal="up">
          <p className="eyebrow mb-3">Slide 02 • Integration Matrix</p>
          <h2 className="max-w-2xl text-3xl sm:text-4xl md:text-5xl font-serif leading-tight text-foreground">
            Bridging Resources to Ecosystem Functions
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Systematically connecting tangible &amp; intangible assets into high-performance ecosystem capabilities.
          </p>
        </div>

        {/* Table / Flow Header */}
        <div
          data-reveal="fade"
          data-reveal-delay="100"
          className="mt-12 hidden grid-cols-[1fr_3rem_1.4fr] items-center gap-6 border-b border-border pb-4 md:grid text-xs uppercase tracking-wider font-semibold"
        >
          <span className="text-navy">Resource Base</span>
          <span className="text-center text-muted-foreground">⇄</span>
          <span className="text-burgundy">Potential Ecosystem Functions</span>
        </div>

        {/* Flow Rows */}
        <div className="mt-6 space-y-3">
          {rows.map((row, idx) => {
            const IconRes = row.iconResource;
            const IconFunc = row.iconFunction;
            const delays = ["50", "100", "150", "200", "250"];
            return (
              <div
                key={row.resource}
                data-reveal="up"
                data-reveal-delay={delays[idx % delays.length]}
                className="grid gap-3 rounded-none border border-border bg-card p-4 transition-all duration-300 hover:border-burgundy/60 hover:shadow-sm hover-card-elevate md:grid-cols-[1fr_3rem_1.4fr] md:items-center md:gap-6 md:p-5"
              >
                {/* Left Card: Resource Base */}
                <div className="flex items-center gap-4 bg-navy text-navy-foreground p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-navy-foreground/10">
                    <IconRes className="h-5 w-5 text-cream" />
                  </span>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-cream/60">0{idx + 1} • Resource</span>
                    <h3 className="font-serif text-base sm:text-lg text-cream">{row.resource}</h3>
                  </div>
                </div>

                {/* Center Arrow */}
                <div className="hidden md:flex justify-center text-burgundy">
                  <ArrowRight className="h-5 w-5 animate-pulse" />
                </div>

                {/* Right Card: Potential Function */}
                <div className="flex items-center gap-4 bg-burgundy/5 border border-burgundy/20 p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-burgundy/10">
                    <IconFunc className="h-5 w-5 text-burgundy" />
                  </span>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-burgundy font-semibold">
                      Ecosystem Function
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-foreground">{row.function}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* High-value assets statement banner (matching Slide 5 bottom banner) */}
        <div
          data-reveal="up"
          data-reveal-delay="150"
          className="mt-12 rounded-none bg-burgundy p-6 md:p-8 text-center text-accent-foreground shadow-sm"
        >
          <p className="font-serif text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl mx-auto font-medium">
            “High-value assets and resources do not, by themselves, create an ecosystem without governance mechanisms
            and capability transformation.”
          </p>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   4. KEY STRATEGIC ACCELERATOR (Slide 6 of booklet)
   ========================================================================= */
export function AcceleratorSection() {
  const steps = [
    {
      step: "01",
      title: "The Opportunity",
      desc: "Capitalizing on the global Muslim market opportunity.",
      bg: "bg-navy/5 border-navy/20",
      accent: "text-navy",
      icon: TrendingUp,
    },
    {
      step: "02",
      title: "The Paradigm",
      desc: "Moving beyond compliance to exceptional Halal-friendly experiences.",
      bg: "bg-navy/10 border-navy/30",
      accent: "text-navy",
      icon: Compass,
    },
    {
      step: "03",
      title: "The Blueprint",
      desc: "Designing immersive experiences using the 5A Framework.",
      bg: "bg-burgundy/10 border-burgundy/30",
      accent: "text-burgundy",
      icon: Layers,
    },
    {
      step: "04",
      title: "The Engine",
      desc: "Driving ecosystem transformation through Business, Digital & AI Integration.",
      bg: "bg-card border-border",
      accent: "text-navy font-semibold",
      icon: Cpu,
    },
    {
      step: "05",
      title: "The Vision",
      desc: "Indonesia: A Global Leader in the Sustainable Halal Industry.",
      bg: "bg-burgundy text-accent-foreground border-burgundy",
      accent: "text-accent-foreground font-bold",
      icon: Target,
    },
  ];

  return (
    <section className="bg-navy py-16 text-navy-foreground md:py-24 relative overflow-hidden">
      {/* Background Architectural Overlay */}
      <img
        src={building}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-15 mix-blend-luminosity scale-105"
      />
      <div className="absolute inset-0 bg-navy/90" />

      <div className="container-arva relative z-10">
        <div className="max-w-3xl" data-reveal="up">
          <p className="eyebrow !text-cream mb-3">Slide 03 • Accelerated Growth Model</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-cream leading-tight">
            Key Strategic Accelerator
          </h2>
          <p className="mt-4 text-sm text-cream/80 leading-relaxed">
            A progressive roadmap scaling from immediate market opportunities into enduring global leadership.
          </p>
        </div>

        {/* 5-Step Ascending Staircase Roadmap (matching Slide 6) */}
        <div className="mt-14 grid gap-4 md:grid-cols-5 items-stretch">
          {steps.map((st, i) => {
            const Icon = st.icon;
            const isLast = i === steps.length - 1;
            const delays = ["100", "200", "300", "400", "500"];
            return (
              <div
                key={st.title}
                data-reveal="up"
                data-reveal-delay={delays[i % delays.length]}
                className={`flex flex-col justify-between p-6 border transition-all duration-300 hover:-translate-y-1 ${isLast ? "bg-burgundy text-cream border-burgundy shadow-lg" : "bg-card text-foreground border-border"
                  }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-border/40">
                    <span className={`font-serif text-2xl font-bold ${isLast ? "text-cream" : "text-burgundy"}`}>
                      {st.step}
                    </span>
                    <Icon className={`h-5 w-5 ${isLast ? "text-cream" : "text-burgundy"}`} />
                  </div>
                  <h3 className={`mt-4 font-serif text-lg leading-snug ${isLast ? "text-cream" : "text-foreground"}`}>
                    {st.title}
                  </h3>
                </div>
                <p
                  className={`mt-6 text-xs leading-relaxed ${isLast ? "text-cream/90 font-medium" : "text-muted-foreground"
                    }`}
                >
                  {st.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Strategic Roadmap Statement Banner (matching Slide 6 bottom banner) */}
        <div
          data-reveal="up"
          data-reveal-delay="200"
          className="mt-14 border border-cream/20 bg-burgundy px-6 py-6 text-center text-cream shadow-sm"
        >
          <p className="font-serif text-lg sm:text-xl md:text-2xl font-medium tracking-wide">
            Strategic Roadmap: Collaborative Efforts, Decisive Actions, Clear Timelines, and Measurable KPIs.
          </p>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   5. STRATEGIC INITIATIVES & ROADMAP 2026-2045 (Slide 7 of booklet)
   ========================================================================= */
export const PILLARS = [
  {
    title: "Enhancing Industry and Destination Competitiveness",
    subtitle: "Pillar 01",
    items: ["Ratings, Rankings & Awards", "Research & Reports"],
    badges: ["Global Muslim Travel Index (GMTI)", "INDONESIA Muslim Travel Index", "Muslim-Friendly Rating Program"],
  },
  {
    title: "Marketing Development and Big Data Platform",
    subtitle: "Pillar 02",
    items: [
      "International Halal in Tourism Summit",
      "Familiarization Trips, Sales Missions, and B2B & B2C Travel Fairs",
      "Muslim-Friendly Tourism Guide",
    ],
    badges: ["International Halal in Tourism Summit", "Muslim-Friendly Tourism Guide Platform"],
  },
  {
    title: "Ecosystem and Institutional Development",
    subtitle: "Pillar 03",
    items: ["Capacity Building", "Technical Assistance and Training", "Advocacy"],
    badges: ["Institutional MOU Alliances", "Cross-Sector Governance Framework"],
  },
];

export function PillarGrid() {
  const delays = ["100", "200", "300"];
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {PILLARS.map((p, idx) => (
        <div
          key={p.title}
          data-reveal="up"
          data-reveal-delay={delays[idx % delays.length]}
          className="flex flex-col justify-between border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-burgundy/60 hover:shadow-md hover-card-elevate"
        >
          <div>
            <div className="flex items-center justify-between border-b border-border pb-3">
              <span className="eyebrow !text-burgundy">{p.subtitle}</span>
              <CheckCircle2 className="h-4 w-4 text-burgundy" />
            </div>
            <h3 className="mt-4 font-sans text-xs font-bold uppercase tracking-wider text-foreground leading-relaxed">
              {p.title}
            </h3>
            <ul className="dash-list mt-6 space-y-3 text-xs leading-relaxed text-muted-foreground">
              {p.items.map((i) => (
                <li key={i} className="text-foreground/90 font-medium">
                  {i}
                </li>
              ))}
            </ul>
          </div>

          {/* Badges / Key Programs */}
          <div className="mt-8 border-t border-border pt-4">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-2">
              Featured Programs:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {p.badges.map((b) => (
                <span
                  key={b}
                  className="rounded-none bg-cream px-2 py-1 text-[10px] font-medium text-navy border border-border/60"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export const CONTRIBUTION_POINTS = [
  "Development of Halal Tourism Indonesia",
  "Supporting and supervising in preparing Indonesia as Halal Tourism Destinations",
  "Supporting The Economic Development of Muslim-Friendly Business",
  "Supporting and supervising Muslim-Friendly destinations in Indonesia to improve their competitiveness",
  "Participation and Contribution to Events / Conferences, Workshops and Training",
  "Participating in ORGANIZATION OF ISLAMIC COOPERATION (OIC)",
  "Participating in GLOBAL HALAL INDUSTRY",
];

export const CONTRIBUTION_ACTIVITIES = [
  {
    title: "Talk Show Peluang & Tantangan Halal Tourism di Era Digital",
    caption: "Strategic bilateral discussion with Tun Dr. Mahathir Mohamad on unlocking regional halal tourism and digital acceleration.",
    tag: "High-Level Dialogue",
    img: contribTalkshowMahathir,
  },
  {
    title: "National Halal Tourism Industry Awards",
    caption: "Honoring leadership milestones and pioneering contributions to standardizing Indonesia's halal destination landscape.",
    tag: "Industry Honors",
    img: contribAwardStage,
  },
  {
    title: "Japan Halal Summit 2014, Tokyo",
    caption: "Leading the Indonesian delegation and presenting Muslim-friendly hospitality frameworks at the inaugural Japan Halal Summit.",
    tag: "Bilateral Summit",
    img: contribJapanSummit,
  },
  {
    title: "World Islamic Economic Forum (WIEF) Foundation",
    caption: "Keynote panelist on global Islamic economy trends, investment opportunities, and international ecosystem connectivity.",
    tag: "Global Economic Forum",
    img: contribWiefSpeaker,
  },
  {
    title: "National Syariah Economic Strategic Consultation",
    caption: "Direct consultation with K.H. Ma'ruf Amin on policy formulation and institutionalizing national halal industry growth.",
    tag: "National Strategy",
    img: contribMeetingMaruf,
  },
  {
    title: "Cross-Sector Tourism Institutional Roundtable",
    caption: "Coordinating multi-sector standards between government bodies, industry leaders, and academic researchers.",
    tag: "Stakeholder Alignment",
    img: contribRoundtable,
  },
  {
    title: "International Forum on Islamic Tourism 2014 (OIC)",
    caption: "Convened in partnership with the Ministry of Tourism & OIC to address global prospects and strategic policy frameworks.",
    tag: "OIC Multilateral Forum",
    img: contribForumTourism,
  },
  {
    title: "Millennial Halal Tourism Capacity Building Workshop",
    caption: "Empowering next-generation industry practitioners and business players through specialized training programs.",
    tag: "Human Capital Development",
    img: contribWorkshopMilenial,
  },
];

export function ContributionSection() {
  return (
    <section id="our-contribution" className="container-arva py-16 md:py-24 border-t border-border">
      {/* Section Header */}
      <div className="mb-12" data-reveal="up">
        <p className="eyebrow mb-3">Impact &amp; Industry Acceleration</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-foreground">Our Contribution</h2>
        <p className="mt-3 text-sm text-muted-foreground max-w-3xl leading-relaxed">
          Pioneering the strategic architecture, governance, and global acceleration of Indonesia's Halal Tourism and
          Muslim-friendly economy through international forums, capacity building, and cross-sector partnerships.
        </p>
      </div>

      {/* Strategic Contributions List Banner */}
      <div
        data-reveal="up"
        data-reveal-delay="100"
        className="border border-border/80 bg-card p-8 sm:p-10 mb-14 shadow-sm"
      >
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-border/80 pb-6 lg:pb-0 lg:pr-8">
            <span className="eyebrow !text-burgundy">Institutional Role</span>
            <h3 className="font-serif text-2xl sm:text-3xl text-foreground mt-2 leading-snug">
              Key Areas of Impact &amp; National Stewardship
            </h3>
            <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
              Consistently actively contributing to national policies, global forums, and human capital empowerment
              across the halal economy ecosystem.
            </p>
          </div>
          <div className="lg:col-span-8 grid gap-3.5 sm:grid-cols-2">
            {CONTRIBUTION_POINTS.map((pt, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-burgundy/10 text-burgundy text-[11px] font-bold">
                  ✓
                </span>
                <span className="text-xs sm:text-sm font-medium text-foreground/90 leading-snug">
                  {pt}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Documented Activities & Separate Photo Gallery */}
      <div className="mb-16">
        <div
          data-reveal="up"
          className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-border/80 pb-4 mb-8 gap-3"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-burgundy">Visual Milestones</p>
            <h3 className="font-serif text-2xl sm:text-3xl text-foreground mt-1">
              Documented Global Forums &amp; Engagements
            </h3>
          </div>
          <span className="text-xs text-muted-foreground font-medium">8 Documented Engagements</span>
        </div>

        {/* 8 Separated Photos Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CONTRIBUTION_ACTIVITIES.map((act, idx) => {
            const delays = ["50", "100", "150", "200"];
            return (
              <div
                key={act.title}
                data-reveal="up"
                data-reveal-delay={delays[idx % 4]}
                className="group flex flex-col justify-between border border-border/80 bg-card p-4 shadow-sm transition-all duration-300 hover:border-burgundy/60 hover:shadow-lg hover:-translate-y-1 hover-card-elevate"
              >
                <div>
                  {/* Photo Frame */}
                  <div className="aspect-[16/10] overflow-hidden border border-border/60 bg-cream/30 relative">
                    <img
                      src={act.img}
                      alt={act.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Badge & Title */}
                  <span className="mt-4 block text-[10px] font-bold uppercase tracking-wider text-burgundy">
                    {act.tag}
                  </span>
                  <h4 className="mt-1.5 font-serif text-base font-normal text-foreground leading-snug group-hover:text-burgundy transition-colors">
                    {act.title}
                  </h4>
                </div>

                {/* Caption */}
                <p className="mt-3 text-[11px] text-muted-foreground leading-relaxed border-t border-border/60 pt-2.5">
                  {act.caption}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function StrategicInitiativesSection() {
  const operationalPrinciples = [
    { title: "Collaborative Efforts", desc: "Uniting industry, academia, and government." },
    { title: "Decisive Actions", desc: "Execution-driven strategic milestones." },
    { title: "Clear Timelines", desc: "Rigorous phase-by-phase implementation." },
    { title: "Measurable KPIs", desc: "Data-backed impact tracking and growth metrics." },
  ];

  return (
    <section className="container-arva py-16 md:py-24">
      <div className="border-b border-border pb-8" data-reveal="up">
        <p className="eyebrow mb-3">Slide 04 • Long-Term Blueprint</p>
        <h2 className="max-w-4xl text-2xl uppercase leading-tight font-serif sm:text-3xl md:text-4xl text-foreground">
          Strategic Initiatives to Accelerate Sustainable Muslim-Friendly Tourism Industry and Destination Development
        </h2>
      </div>

      {/* Strategic Roadmap Banner 2026-2045 */}
      <div
        data-reveal="up"
        data-reveal-delay="100"
        className="mt-10 bg-cream p-6 md:p-8 border border-border"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="eyebrow !text-navy">Masterplan</span>
            <h3 className="font-serif text-2xl text-burgundy sm:text-3xl md:text-4xl font-semibold">
              Strategic Roadmap 2026–2045
            </h3>
          </div>
          <span className="rounded bg-burgundy px-3 py-1.5 text-xs uppercase font-medium text-cream tracking-wider">
            20-Year Vision
          </span>
        </div>

        {/* 4 Operational Principles */}
        <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border/80 pt-6 sm:grid-cols-4">
          {operationalPrinciples.map((op) => (
            <div key={op.title} className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-navy block">{op.title}</span>
              <span className="text-[11px] text-muted-foreground block">{op.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3 Core Strategic Pillars */}
      <div className="mt-12">
        <PillarGrid />
      </div>
    </section>
  );
}

/* =========================================================================
   6. CAPABILITIES (Slides 8, 9, 10, 11)
   ========================================================================= */
const CAPS = [
  {
    n: "01",
    title: "Sustainable Human Capital Development",
    items: [
      "Professional Development Program For Halal Industry Professionals And Business Players",
      "Halal Industry Management Training Consultant",
      "Mutual Recognition Training Certification Among ASEAN Countries For Halal Industry Professionals And Business Players",
    ],
  },
  {
    n: "02",
    title: "Responsible & Sustainable Governance",
    items: [
      "Responsible & Sustainable Governance Consultant",
      "Integrated Ethical Governance & Management Consultant For Business Entities Hub",
    ],
  },
  {
    n: "03",
    title: "Property / Real Estate Investment",
    items: [
      "Property Consultant & Management For Integrated Global Halal Industry Value Supply Chain For Business Entities Hub",
    ],
  },
];

const CAP_DETAILS = [
  {
    label: "Capability 01",
    title: "Sustainable Human Capital Development",
    img: capHuman,
    paras: [
      "ARVA supports sustainable human capital development through Professional Development Programs for Halal Industry Professionals and Business Players, Halal Industry Management Training Consultancy, and Mutual Recognition Training Certification among ASEAN Countries for Halal Industry Professionals and Business Players.",
      "Through these initiatives, ARVA focuses on professional development, industry management training, and mutual recognition of training certification across ASEAN countries for professionals and business players in the halal industry.",
    ],
  },
  {
    label: "Capability 02",
    title: "Responsible & Sustainable Governance",
    img: capGov,
    paras: [
      "Responsible & Sustainable Governance Consultancy integrates ethical governance and management consulting to help organizations strengthen accountability, promote ethical decision-making, implement responsible business practices, and improve organizational effectiveness, fostering sustainable and wellgoverned institutions and business entities.",
    ],
  },
  {
    label: "Capability 03",
    title: "Property & Real Estate Investment",
    img: capProp,
    paras: [
      "ARVA provides Property Consultancy & Management for Integrated Global Halal Industry Value Supply Chain for Business Entities Hub.",
      "This capability focuses on property consultancy and management in support of an integrated global halal industry value supply chain, serving the property-related needs of business entities within the hub.",
    ],
  },
];

export function CapabilitiesSection() {
  return (
    <section className="container-arva py-16 md:py-20">
      {/* 3 Pillars Overview Cards */}
      <div className="grid gap-10 md:grid-cols-3 md:gap-8">
        {CAPS.map((c, idx) => {
          const delays = ["100", "200", "300"];
          return (
            <div
              key={c.n}
              data-reveal="up"
              data-reveal-delay={delays[idx % delays.length]}
              className="border border-border bg-card p-6 shadow-sm hover-card-elevate"
            >
              <p className="font-serif text-5xl text-burgundy font-light">{c.n}</p>
              <h3 className="mt-4 min-h-12 border-b border-border pb-4 font-sans text-xs font-bold uppercase tracking-wider text-foreground leading-relaxed">
                {c.title}
              </h3>
              <ul className="dash-list mt-5 space-y-3 text-xs leading-relaxed text-muted-foreground">
                {c.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Detailed Capability Deep Dives with Photos */}
      <div className="mt-16 space-y-16">
        {CAP_DETAILS.map((d, i) => (
          <article
            key={d.label}
            data-reveal="up"
            data-reveal-delay="100"
            className="grid gap-8 border-t border-border pt-12 md:grid-cols-2 md:items-center md:gap-14"
          >
            <div className={`overflow-hidden border border-border shadow-sm ${i % 2 ? "md:order-2" : ""}`}>
              <img
                src={d.img}
                alt={d.title}
                loading="lazy"
                className="aspect-[16/11] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div>
              <p className="eyebrow">{d.label}</p>
              <h3 className="mt-4 font-serif text-3xl sm:text-4xl leading-tight text-foreground">{d.title}</h3>
              {d.paras.map((p) => (
                <p key={p.slice(0, 20)} className="mt-5 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* =========================================================================
   7. OUR NETWORK (Slide 3 & Partners)
   ========================================================================= */
export function NetworkSection() {
  return (
    <section id="our-network" className="container-arva py-16 md:py-24 border-t border-border">
      <div className="mb-10" data-reveal="up">
        <p className="eyebrow mb-3">Synergy &amp; Ecosystem</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-foreground">Our Network</h2>
        <p className="mt-3 text-sm text-muted-foreground max-w-2xl">
          Strong institutional alliances and commercial enterprises propelling sustainable development and digital
          ecosystems.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* SofyanCorp Card */}
        <a
          href="https://sofyancorp.com"
          target="_blank"
          rel="noreferrer"
          data-reveal="up"
          data-reveal-delay="100"
          className="group relative flex min-h-[380px] flex-col justify-between bg-card p-8 sm:p-10 border border-border/80 transition-all duration-300 hover:border-burgundy hover:shadow-xl hover:-translate-y-1 hover-card-elevate"
        >
          {/* Top Tag & Indicator */}
          <div className="flex items-center justify-between border-b border-border/60 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="block h-1.5 w-6 bg-burgundy" />
              <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
                Parent &amp; Hospitality Alliance
              </span>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-burgundy font-semibold px-2.5 py-1 bg-burgundy/5 border border-burgundy/15">
              Heritage &amp; Capital
            </span>
          </div>

          {/* Main Attribute: Sofyan Corp Logo */}
          <div className="my-6 flex flex-col items-start">
            <div className="flex h-24 items-center">
              <img
                src={sofyanCorpLogo}
                alt="Sofyan Corp"
                className="h-16 sm:h-18 w-auto max-w-[260px] object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-md">
              Pioneer in Halal Hospitality and ecosystem investments with over 50 years of distinguished heritage in
              Indonesia.
            </p>
          </div>

          {/* Bottom Link Action */}
          <div className="pt-4 border-t border-border/60 flex items-center justify-between">
            <span className="text-xs font-semibold text-burgundy uppercase tracking-wider underline underline-offset-4 group-hover:text-burgundy/90">
              sofyancorp.com
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cream text-burgundy transition-all duration-300 group-hover:bg-burgundy group-hover:text-cream">
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </div>
        </a>

        {/* GOArva / Group of Arva Card */}
        <a
          href="https://goarva.id"
          target="_blank"
          rel="noreferrer"
          data-reveal="up"
          data-reveal-delay="200"
          className="group relative flex min-h-[380px] flex-col justify-between bg-card p-8 sm:p-10 border border-border/80 transition-all duration-300 hover:border-navy hover:shadow-xl hover:-translate-y-1 hover-card-elevate"
        >
          {/* Top Tag & Indicator */}
          <div className="flex items-center justify-between border-b border-border/60 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="block h-1.5 w-6 bg-navy" />
              <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
                Digital Platform &amp; Ecosystem Hub
              </span>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-navy font-semibold px-2.5 py-1 bg-navy/5 border border-navy/15">
              Digital Engine
            </span>
          </div>

          {/* Main Attribute: Group of Arva Logo */}
          <div className="my-6 flex flex-col items-start">
            <div className="flex h-24 items-center">
              <img
                src={groupOfArvaLogo}
                alt="Group of Arva"
                className="h-13 sm:h-16 w-auto max-w-[320px] object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-md">
              Integrated digital marketplace, analytics, and service hub driving ecosystem transactions and smart
              solutions.
            </p>
          </div>

          {/* Bottom Link Action */}
          <div className="pt-4 border-t border-border/60 flex items-center justify-between">
            <span className="text-xs font-semibold text-navy uppercase tracking-wider underline underline-offset-4 group-hover:text-navy/90">
              goarva.id
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cream text-navy transition-all duration-300 group-hover:bg-navy group-hover:text-cream">
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}

/* =========================================================================
   8. OUR ACKNOWLEDGEMENT (Slide 13 of booklet)
   ========================================================================= */
export function AcknowledgementSection() {
  const items = [
    {
      title: "The 500 Who Make the Islamic Economy",
      citation: "ISLAMICA 500 2019.",
      tag: "Global Ranking",
      img: ackIslamica,
      fit: "object-contain p-2",
    },
    {
      title: "Satyalancana Tourism Medal of Honor",
      citation: "From President of the Republic of Indonesia, 2018.",
      tag: "State Honor",
      img: ackSatyalancana,
      fit: "object-contain p-1.5",
    },
    {
      title: "Halal Hotel Pioneers",
      citation: "In Halal in Travel Awards 2022, Singapore.",
      tag: "Industry Pioneer",
      img: ackHalalPioneer,
      fit: "object-cover",
    },
    {
      title: "World's Best Family Friendly Hotel",
      citation: "In World Halal Travel Awards 2015, Abu Dhabi, UAE.",
      tag: "World Award",
      img: ackWorldHalalTravel,
      fit: "object-contain p-1.5",
    },
    {
      title: "Certificate of Excellence",
      citation: "From the Minister of Tourism, Republic of Indonesia in developing Halal Tourism Industry, 2019.",
      tag: "National Recognition",
      img: ackCertificateExcellence,
      fit: "object-contain p-1.5",
    },
    {
      title: "Letter of Appreciation",
      citation: "From the Vice Minister of Land, Infrastructure, Transport, and Tourism, Japan, 2014.",
      tag: "International Diplomatic Recognition",
      img: ackJapanAppreciation,
      fit: "object-cover",
    },
  ];

  return (
    <section id="our-acknowledgement" className="container-arva py-16 md:py-24 border-t border-border">
      <div className="mb-10" data-reveal="up">
        <p className="eyebrow mb-3">Distinctions &amp; Honors</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-foreground">Our Acknowledgement</h2>
        <p className="mt-3 text-sm text-muted-foreground max-w-2xl">
          National and international awards recognizing ARVA and its leadership's pioneering contributions to the
          global halal economy and tourism industry.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, idx) => {
          const delays = ["50", "150", "250"];
          return (
            <div
              key={item.title}
              data-reveal="up"
              data-reveal-delay={delays[idx % 3]}
              className="group flex flex-col justify-between border border-border/80 bg-card p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-burgundy/60 hover:shadow-lg hover:-translate-y-1 hover-card-elevate"
            >
              <div>
                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-burgundy">{item.tag}</span>
                  <span className="font-serif text-xs text-muted-foreground font-semibold">0{idx + 1}</span>
                </div>
                <div className="mt-4 overflow-hidden border border-border/60 bg-white aspect-[16/10] relative flex items-center justify-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${item.fit}`}
                  />
                </div>
                <h3 className="mt-5 font-serif text-lg sm:text-xl text-foreground leading-snug">{item.title}</h3>
              </div>
              <p className="mt-4 text-xs text-muted-foreground border-t border-border/60 pt-3 leading-relaxed">
                {item.citation}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* =========================================================================
   9. CONTACT SECTION (Slide 14 of booklet)
   ========================================================================= */
export function ContactSection() {
  return (
    <section id="contact" className="bg-navy py-16 text-navy-foreground md:py-24 border-t border-border">
      <div className="container-arva">
        {/* Header matching Slide 14 */}
        <div className="text-center max-w-2xl mx-auto pb-12 border-b border-navy-line" data-reveal="up">
          <Logo className="mx-auto h-12 md:h-14 brightness-200" />
          <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-serif text-cream">Contact</h2>
          <p className="mt-3 text-xs uppercase tracking-widest text-cream/70">ARVA.id</p>
        </div>

        {/* Contact Info Columns matching Slide 14 */}
        <div className="mt-12 grid gap-10 md:grid-cols-2 md:divide-x md:divide-navy-line">
          {/* Left Column: Office & Telephones */}
          <div className="space-y-6 md:pr-10" data-reveal="left" data-reveal-delay="100">
            <div className="flex items-center gap-3 text-cream">
              <Building2 className="h-5 w-5 text-cream/80" />
              <h3 className="font-serif text-2xl text-cream font-normal">Head Office</h3>
            </div>
            <div className="space-y-3 text-sm text-cream/90">
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-cream/60 shrink-0 mt-1" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-cream/60">Telephone</p>
                  <p className="font-medium">
                    <a href="tel:0213905971" className="hover:text-cream transition-colors underline-offset-4 hover:underline">
                      021-3905971
                    </a>{" "}
                    /{" "}
                    <a href="tel:0218905972" className="hover:text-cream transition-colors underline-offset-4 hover:underline">
                      021-8905972
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-cream/60 shrink-0 mt-1" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-cream/60">Office Mobile</p>
                  <p className="font-medium">
                    <a href="tel:085215251984" className="hover:text-cream transition-colors underline-offset-4 hover:underline">
                      085215251984
                    </a>{" "}
                    /{" "}
                    <a href="tel:08121922121" className="hover:text-cream transition-colors underline-offset-4 hover:underline">
                      0812-1922-121
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Web, Email & Executive Contact */}
          <div className="space-y-6 md:pl-10" data-reveal="right" data-reveal-delay="200">
            <div className="flex items-center gap-3 text-cream">
              <Globe className="h-5 w-5 text-cream/80" />
              <h3 className="font-serif text-2xl text-cream font-normal">Online &amp; Inquiries</h3>
            </div>
            <div className="space-y-4 text-sm text-cream/90">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-cream/60">Official Website</p>
                <a
                  href="https://arva.website"
                  target="_blank"
                  rel="noreferrer"
                  className="font-serif text-2xl text-cream hover:text-cream/80 underline underline-offset-4 transition-colors"
                >
                  arva.website
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-cream/60 shrink-0 mt-1" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-cream/60">Executive Email</p>
                  <a
                    href="mailto:riyanto.Sofyan@sofyancorp.com"
                    className="hover:text-cream transition-colors font-medium underline-offset-4 hover:underline"
                  >
                    riyanto.Sofyan@sofyancorp.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-cream/60 shrink-0 mt-1" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-cream/60">Direct Inquiries Mobile</p>
                  <p className="font-medium">
                    <a href="tel:0811903505" className="hover:text-cream transition-colors underline-offset-4 hover:underline">
                      0811-903-505
                    </a>{" "}
                    /{" "}
                    <a href="tel:0816808708" className="hover:text-cream transition-colors underline-offset-4 hover:underline">
                      0816-808-708
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   10. SITE FOOTER
   ========================================================================= */
export function SiteFooter() {
  return (
    <footer className="bg-cream border-t border-border" data-reveal="fade">
      <div className="container-arva py-12">
        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3 border-b border-border pb-8 text-xs uppercase tracking-wider">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="hover:text-burgundy text-foreground/80 transition-colors">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <div className="flex items-center gap-4">
            <Logo className="h-7" />
            <span className="text-xs text-muted-foreground font-serif">
              Investing in People. Advancing Responsible Governance.
            </span>
          </div>
          <span className="text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} ARVA.id. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
