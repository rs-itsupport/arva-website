import type React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { type ReactNode } from "react";

/* Assets taken from the ARVA company profile deck (01_Profile_ARVA, Nov 2026). */
const FILES = import.meta.glob("../../assets/profile/*", { eager: true, import: "default" }) as Record<string, string>;
export const A = (name: string): string => FILES[`../../assets/profile/${name}`] ?? "";

/* =========================================================================
   DATA
   ========================================================================= */
type Impact = { icon: string; text: string };
type Capability = { icon: string; title: string; text: string };
export type Pillar = {
  id: string;
  no: string;
  title: string;
  cover: string;
  intro: string;
  overview: { icon: string; label: string }[];
  items: Capability[];
  photos: string[];
  impact: Impact[];
};

export const CAPABILITIES_INTRO =
  "Strategic advisory, integrated solutions, and institutional capacity building to enhance sustainable industry competitiveness, advance marketing development and data-driven platforms, and strengthen business ecosystems and institutional capabilities across industries and global markets.";

export const PILLARS: Pillar[] = [
  {
    id: "industry-competitiveness",
    no: "01",
    title: "Enhancing Industry Sustainable Competitiveness",
    cover: "cap-01.webp",
    intro:
      "Raising quality and competitiveness across industries through professional advisory, quality standards, and research-based market intelligence that support better business, investment, and policy decisions.",
    overview: [
      { icon: "ic-competitiveness.svg", label: "Industry Competitiveness, Quality Standards & Professional Advisory" },
      { icon: "ic-research.svg", label: "Industry Research, Property & Tourism Market Intelligence" },
    ],
    items: [
      {
        icon: "ic-competitiveness.svg",
        title: "Industry Competitiveness, Quality Standards & Professional Advisory",
        text: "Helping businesses and destinations raise service quality and meet industry standards through assessment, benchmarking, ratings, and professional advisory.",
      },
      {
        icon: "ic-research.svg",
        title: "Industry Research, Property & Tourism Market Intelligence",
        text: "Providing industry research, publications, and market intelligence on property and tourism to guide investment and strategic decisions for businesses and institutions.",
      },
    ],
    photos: ["cap1-collage.webp"],
    impact: [
      { icon: "ic-impact-business.svg", text: "More competitive businesses and destinations." },
      { icon: "ic-impact-market.svg", text: "Higher service quality and compliance with industry standards." },
      { icon: "ic-impact-partnership.svg", text: "Evidence-based investment and policy decisions." },
    ],
  },
  {
    id: "marketing-big-data",
    no: "02",
    title: "Marketing Development and Big Data Platform",
    cover: "cap-02.webp",
    intro:
      "Driving industry growth and market expansion through strategic events, integrated marketing programs, and data-driven platforms that connect businesses, investors, and opportunities across industries.",
    overview: [
      { icon: "ic-trade.svg", label: "International Trade, Investment & Business Networking" },
      { icon: "ic-bizdev.svg", label: "Business Development, Integrated Marketing & Investment Promotion" },
      { icon: "ic-directory.svg", label: "Digital Business Directory & Integrated Information Platforms" },
    ],
    items: [
      {
        icon: "ic-trade.svg",
        title: "International Trade, Investment & Business Networking",
        text: "Facilitating high-level forums and summits that bring together industry players, investors, and institutions to drive collaboration, investment, and cross-sector business opportunities.",
      },
      {
        icon: "ic-bizdev.svg",
        title: "Business Development, Integrated Marketing & Investment Promotion",
        text: "Delivering targeted business matching, promotional programs, and market expansion initiatives to strengthen industry visibility and attract investment across key sectors.",
      },
      {
        icon: "ic-directory.svg",
        title: "Digital Business Directory & Integrated Information Platforms",
        text: "Providing a centralized, data-driven platform that profiles business players, investment opportunities, and industry insights to enable broader collaboration and market access.",
      },
    ],
    photos: ["cap2-1.webp", "cap2-2.webp", "cap2-3.webp"],
    impact: [
      { icon: "ic-impact-business.svg", text: "Greater business exposure and investment opportunities." },
      { icon: "ic-impact-market.svg", text: "Wider market access and stronger destination promotion." },
      { icon: "ic-impact-partnership.svg", text: "Expanded partnership and global collaboration for education." },
    ],
  },
  {
    id: "ecosystem-institutional",
    no: "03",
    title: "Ecosystem and Institutional Development",
    cover: "cap-03.webp",
    intro:
      "Strengthening industry ecosystems and institutional capabilities through talent development, technical advisory, certification and governance support, and strategic advocacy across industries.",
    overview: [
      { icon: "ic-profdev.svg", label: "Professional Development, Education & Institutional Capacity Building" },
      { icon: "ic-technical.svg", label: "Technical Consultancy, Certification & Governance Advisory" },
      { icon: "ic-institutional.svg", label: "Institutional Development, Business Legal Support & Strategic Advocacy" },
    ],
    items: [
      {
        icon: "ic-profdev.svg",
        title: "Professional Development, Education & Institutional Capacity Building",
        text: "Developing human capital and institutional readiness through structured learning programs, professional development, and knowledge exchange to meet industry and market needs.",
      },
      {
        icon: "ic-technical.svg",
        title: "Technical Consultancy, Certification & Governance Advisory",
        text: "Providing technical assistance, product and service certification (e.g., halal and other relevant standards), and responsible & sustainable governance advisory to enhance compliance, quality, and business resilience.",
      },
      {
        icon: "ic-institutional.svg",
        title: "Institutional Development, Business Legal Support & Strategic Advocacy",
        text: "Strengthening industry collaboration and regulatory readiness through institutional development, business legal services (including virtual office and entity support), and evidence-based policy advocacy.",
      },
    ],
    photos: ["cap3-1.webp", "cap3-2.webp", "cap3-3.webp"],
    impact: [
      { icon: "ic-impact-stronger.svg", text: "Stronger and more sustainable property and IT ecosystem." },
      { icon: "ic-impact-capable.svg", text: "More capable and competitive tourism and hospitality industry." },
      { icon: "ic-impact-quality.svg", text: "Higher quality and globally competitive education institutions." },
    ],
  },
];

/* =========================================================================
   SHARED
   ========================================================================= */
function SectionHead({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: ReactNode }) {
  return (
    <div className="mb-10 md:mb-12" data-reveal="up">
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-foreground">{title}</h2>
      {children && <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">{children}</p>}
    </div>
  );
}

function GoldIcon({ src, className = "h-7 w-7" }: { src: string; className?: string }) {
  return <img src={A(src)} alt="" aria-hidden className={`${className} shrink-0 object-contain`} />;
}

/* =========================================================================
   OUR CAPABILITIES (overview) — deck slide 4
   ========================================================================= */
export function CapabilitiesOverview({ withLink = true }: { withLink?: boolean }) {
  return (
    <section id="our-capabilities" className="container-arva border-b border-border py-16 md:py-24">
      <SectionHead eyebrow="What we do" title="Our Capabilities">
        {CAPABILITIES_INTRO}
      </SectionHead>
      <div className="grid gap-6 md:grid-cols-3">
        {PILLARS.map((p, i) => (
          <article
            key={p.id}
            data-reveal="up"
            data-reveal-delay={["100", "200", "300"][i]}
            className="flex min-w-0 flex-col border border-border bg-card"
          >
            <div className="relative overflow-hidden border-b border-border">
              <img src={A(p.cover)} alt="" aria-hidden className="aspect-[3/1] w-full object-cover" />
              <span className="absolute left-0 top-0 bg-navy px-4 py-2 font-sans text-lg font-bold text-cream">{p.no}</span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-sans text-xs font-bold uppercase leading-relaxed tracking-wider text-foreground">{p.title}</h3>
              <ul className="mt-5 flex-1 divide-y divide-border border-y border-border">
                {p.overview.map((o) => (
                  <li key={o.label} className="flex items-center gap-4 py-3.5">
                    <GoldIcon src={o.icon} className="h-6 w-6" />
                    <span className="text-xs leading-snug text-foreground/85">{o.label}</span>
                  </li>
                ))}
              </ul>
              {withLink && (
                <Link
                  to={`/capabilities#${p.id}`}
                  className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-burgundy hover:underline underline-offset-4"
                >
                  Read more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* =========================================================================
   STRATEGIC CAPABILITIES (detail) — deck slides 5–7
   ========================================================================= */
export function CapabilityDetail({ p, flip = false }: { p: Pillar; flip?: boolean }) {
  return (
    <section id={p.id} className="scroll-mt-24 border-b border-border py-16 md:py-20">
      <div className="container-arva">
        <div className={`grid gap-10 lg:grid-cols-2 lg:items-center ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <div data-reveal={flip ? "right" : "left"}>
            <p className="eyebrow mb-3">Strategic Capabilities</p>
            <div className="flex items-start gap-4">
              <span className="bg-burgundy px-3 py-1.5 font-sans text-xl font-bold text-cream">{p.no}</span>
              <h2 className="font-sans text-xl font-bold uppercase leading-snug tracking-wide text-foreground md:text-2xl">
                {p.title}
              </h2>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">{p.intro}</p>
            <ul className="mt-8 space-y-6">
              {p.items.map((it) => (
                <li key={it.title} className="flex gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center border border-border bg-cream">
                    <GoldIcon src={it.icon} className="h-7 w-7" />
                  </span>
                  <div className="border-l-2 border-burgundy pl-4">
                    <h3 className="font-sans text-sm font-bold leading-snug text-foreground">{it.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground md:text-sm">{it.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col" data-reveal={flip ? "left" : "right"}>
            {p.photos.map((ph, i) => (
              <img
                key={ph}
                src={A(ph)}
                alt=""
                aria-hidden
                loading="lazy"
                className={`w-full ${i > 0 ? "-mt-[9%]" : ""}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 grid overflow-hidden border border-border bg-card sm:grid-cols-[auto_1fr_1fr_1fr]" data-reveal="up">
          <div className="flex items-center bg-burgundy px-5 py-4 font-sans text-[11px] font-bold uppercase leading-tight tracking-wider text-cream">
            Impact across
            <br className="hidden sm:block" /> industry &amp; business
          </div>
          {p.impact.map((im) => (
            <div key={im.text} className="flex items-center gap-4 border-t border-border px-5 py-4 sm:border-l sm:border-t-0">
              <GoldIcon src={im.icon} className="h-8 w-8" />
              <span className="text-xs leading-snug text-foreground/80">{im.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   SELECTED PORTFOLIO — deck slides 8–9
   ========================================================================= */
type Tone = "navy" | "burgundy";
function PortfolioRow({ icon, title, tone, children }: { icon: string; title: string; tone: Tone; children: ReactNode }) {
  return (
    <div className="grid overflow-hidden border border-border bg-card md:grid-cols-[230px_1fr]" data-reveal="up">
      <div
        className={`flex items-center gap-4 px-6 py-5 md:border-r-4 md:border-r-[#c08b34] ${
          tone === "navy" ? "bg-navy" : "bg-burgundy"
        }`}
      >
        <GoldIcon src={icon} className="h-9 w-9" />
        <h3 className="font-sans text-base font-bold leading-tight text-cream">{title}</h3>
      </div>
      <div className="min-w-0 p-5 md:p-6">{children}</div>
    </div>
  );
}

function Shot({ src, alt, className = "", contain = false }: { src: string; alt: string; className?: string; contain?: boolean }) {
  return (
    <div className={`overflow-hidden border border-border/70 bg-white ${className}`}>
      <img
        src={A(src)}
        alt={alt}
        loading="lazy"
        className={`h-full w-full ${contain ? "object-contain p-1.5" : "object-cover"}`}
      />
    </div>
  );
}

function Caption({ children }: { children: ReactNode }) {
  return <p className="mt-2 text-center text-[11px] font-semibold leading-snug text-foreground">{children}</p>;
}


type GroupItem = { name: string; desc?: string; photos: string[]; paper?: boolean; logo?: string };
const AR: Record<string, number> = {"edu-madina-1.jpg": 0.782, "edu-madina-2.jpg": 1.183, "edu-amal-school.jpg": 1.659, "edu-amal-school-2.jpg": 1.499, "edu-amal-school-3.jpg": 1.499, "edu-amal-cottage.jpg": 1.715, "prop-arva.jpg": 1.689, "prop-arvahub.jpg": 1.668, "prop-coffice.jpg": 1.681, "logo-madina.png": 3.265, "logo-amal-mulia-school.png": 4.485, "logo-amal-mulia-pondok.png": 2.077, "logo-arva-building.png": 2.320, "logo-arvahub.png": 2.985, "logo-coffice.png": 3.556, "logo-safar.png": 4.347, "logo-infotiket.png": 4.702, "logo-sofis.png": 3.403, "advisory.jpg": 1.560, "it-infotiket.jpg": 1.658, "it-safar.jpg": 1.697, "it-sewakantoran.jpg": 1.715, "it-sofis.jpg": 1.713, "paper-1.png": 1.629, "paper-2.png": 2.270, "paper-3.png": 2.776, "prop-arva-1.jpg": 1.689, "prop-arva-2.jpg": 1.224, "prop-arvahub-1.jpg": 1.226, "prop-arvahub-2.jpg": 1.668, "prop-avo.jpg": 1.681, "prop-townhouse.jpg": 1.225};
const ar = (f: string) => AR[f] ?? 1.5;

/* Photos in one row share the same height: each image grows in proportion to its aspect ratio. */
function WithCaption({ caption, children }: { caption: string; children: ReactNode }) {
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_200px] lg:items-center">
      {children}
      <p className="border-t border-[#c08b34] pt-3 text-xs italic leading-relaxed text-foreground/80 lg:border-l lg:border-t-0 lg:pl-4 lg:pt-0">
        {caption}
      </p>
    </div>
  );
}

function GroupRow({ items }: { items: GroupItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:flex sm:items-start sm:justify-around sm:gap-8">
      {items.map((g) => {
        const total = g.photos.reduce((t, p) => t + ar(p), 0);
        return (
          <figure key={g.name} className={`flex min-w-0 flex-col [flex:var(--f)] sm:[flex:0_1_auto] ${g.photos.length > 1 ? "col-span-2" : ""}`} style={{ "--f": `${total} 1 0%` } as React.CSSProperties}>
            <div className="flex gap-1.5">
              {g.photos.map((p) => (
                <img
                  key={p}
                  src={A(p)}
                  alt={g.name}
                  loading="lazy"
                  style={{ "--f": `${ar(p)} 1 0%`, aspectRatio: String(ar(p)) } as React.CSSProperties}
                  className={`min-w-0 object-cover [flex:var(--f)] sm:h-24 sm:w-auto sm:[flex:0_1_auto] ${g.paper ? "border border-border bg-white shadow-sm" : ""}`}
                />
              ))}
            </div>
            {g.logo ? (
              <figcaption className="mt-3 flex h-12 items-center justify-center">
                {/* logos are sized by area so wide and compact marks look equally heavy */}
                <img src={A(g.logo)} alt={g.name} loading="lazy" style={{ "--h": `${Math.round(64 / Math.sqrt(ar(g.logo)))}px` } as React.CSSProperties} className="h-[calc(var(--h)*0.75)] w-auto max-w-full sm:h-[var(--h)]" />
              </figcaption>
            ) : (
              <figcaption className="mt-2 text-center leading-tight">
                <span className="block text-[11px] font-semibold text-foreground">{g.name}</span>
                {g.desc && <span className="block text-[11px] text-muted-foreground">{g.desc}</span>}
              </figcaption>
            )}
          </figure>
        );
      })}
    </div>
  );
}

const EDUCATION: GroupItem[] = [
  { name: "Madina Islamic School", photos: ["edu-madina-1.jpg", "edu-madina-2.jpg"], logo: "logo-madina.png" },
  { name: "Amal Mulia Islamic School", photos: ["edu-amal-school.jpg", "edu-amal-school-2.jpg", "edu-amal-school-3.jpg"], logo: "logo-amal-mulia-school.png" },
  { name: "Pondok Penghafal Quran Amal Mulia", photos: ["edu-amal-cottage.jpg"], logo: "logo-amal-mulia-pondok.png" },
];
const PROPERTY: GroupItem[] = [
  { name: "ARVA Building", photos: ["prop-arva.jpg"], logo: "logo-arva-building.png" },
  { name: "ArvaHub", photos: ["prop-arvahub.jpg"], logo: "logo-arvahub.png" },
  { name: "Coffice", photos: ["prop-coffice.jpg"], logo: "logo-coffice.png" },
];
const IT: GroupItem[] = [
  { name: "Safar Friendly", photos: ["it-safar.jpg"], logo: "logo-safar.png" },
  { name: "Info Tiket", photos: ["it-infotiket.jpg"], logo: "logo-infotiket.png" },
  { name: "SOFIS", photos: ["it-sofis.jpg"], logo: "logo-sofis.png" },
];
const RESEARCH: GroupItem[] = [
  { name: "Research Paper", photos: ["paper-1.png", "paper-2.png", "paper-3.png"], paper: true },
  { name: "Policy & Strategic Advisory", photos: ["advisory.jpg"] },
];

const PARTNERS = [
  "KNEKS", "Ministry of Tourism", "Bank Indonesia", "Ministry of Industry", "Ministry of Trade", "Islamic Tourism Centre",
  "Organisation of Islamic Cooperation", "SMIIC", "MLIT Japan", "OCVB", "Savob Group", "Nozoly", "KADIN Indonesia",
  "SESRIC", "The New Otani", "GIPI", "IAEI", "PHRI", "Universitas Muhammadiyah Sumatera Barat", "STP Bandung",
  "Institut Pariwisata Trisakti",
];

export const PORTFOLIO_INTRO =
  "A glimpse of our portfolio across Hospitality & Tourism, Technical Consultancy, Education, Property, and Information Technology, showcasing real projects that deliver sustainable value.";

export function SelectedPortfolio({ withHead = true }: { withHead?: boolean }) {
  return (
    <section id="selected-portfolio" className="container-arva py-16 md:py-24">
      {withHead && (
        <SectionHead eyebrow="Portfolio" title="Selected Portfolio">
          {PORTFOLIO_INTRO}
        </SectionHead>
      )}

      <div className="space-y-4">
        <PortfolioRow icon="ic-hospitality.svg" title="Hospitality & Tourism" tone="navy">
          <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <Shot key={n} src={`hotel-${n}.jpg`} alt={`Sofyan hotel ${n}`} className="aspect-square" />
            ))}
          </div>
          <Caption>More than 20 hotels, including Sofyan Afra in Thailand</Caption>
          <div className="mt-5 grid gap-5 border-t border-border pt-5 lg:grid-cols-2">
            <div>
              <div className="grid grid-cols-4 gap-2">
                <Shot src="logo-hti.png" alt="Halal Tourism Indonesia logo" className="aspect-[4/3]" contain />
                <Shot src="hti-room.jpg" alt="Hotel room" className="aspect-[4/3]" />
                <Shot src="hti-landscape.jpg" alt="Indonesian destination" className="aspect-[4/3]" />
                <Shot src="hti-aceh.jpg" alt="Aceh" className="aspect-[4/3]" />
              </div>
              <Caption>Halal Tourism Indonesia</Caption>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-2">
                <Shot src="logo-ocvb.png" alt="Okinawa Convention & Visitors Bureau logo" className="aspect-[4/3]" contain />
                <Shot src="okinawa-1.jpg" alt="Okinawa" className="aspect-[4/3]" />
                <Shot src="okinawa-2.jpg" alt="Okinawa" className="aspect-[4/3]" />
              </div>
              <Caption>Okinawa – Japan</Caption>
            </div>
          </div>
        </PortfolioRow>

        <PortfolioRow icon="ic-technical.svg" title="Technical Consultancy" tone="burgundy">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {[
              ["client-amf.jpg", "AMF (Chicken Sausage)", "Bangkok"],
              ["client-kgf.png", "KGF (Disinfectant)", "Osaka – Japan"],
              ["client-kanematsu.png", "Kanematsu (Green Tea)", "Shimeda – Japan"],
              ["client-ilaki.jpg", "PT ILAKI (Agar Powder)", "Indonesia"],
              ["logo-homyped.png", "PT Inti Prima", "Indonesia"],
            ].map(([src, name, place]) => (
              <div key={name}>
                <Shot src={src} alt={name} className="aspect-[16/9]" contain />
                <Caption>
                  {name}
                  <span className="block font-normal text-muted-foreground">{place}</span>
                </Caption>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-5 border-t border-border pt-5 lg:grid-cols-[3fr_2fr]">
            <div>
              <div className="grid grid-cols-3 gap-2">
                <Shot src="log-ship.jpg" alt="Shipping" className="aspect-[16/9]" />
                <Shot src="log-certificate.jpg" alt="Certificate" className="aspect-[16/9]" contain />
                <Shot src="log-port.jpg" alt="Container port" className="aspect-[16/9]" />
              </div>
              <Caption>Diayajaya Forwarding Indonesia</Caption>
            </div>
            <div>
              <div className="grid grid-cols-[3fr_1fr] gap-2">
                <Shot src="log-warehouse.jpg" alt="Mitsubishi Logistics warehouse" className="aspect-[3/1] sm:aspect-auto sm:h-full" />
                <Shot src="logo-mitsubishi.png" alt="Mitsubishi Logistics logo" className="aspect-square" contain />
              </div>
              <Caption>Mitsubishi Logistics (Warehouse Cibitung, Indonesia)</Caption>
            </div>
          </div>
        </PortfolioRow>

        <PortfolioRow icon="ic-education.svg" title="Education" tone="navy">
          <WithCaption caption="Inclusive, quality education that empowers people and communities.">
            <GroupRow items={EDUCATION} />
          </WithCaption>
        </PortfolioRow>
        <PortfolioRow icon="ic-property.svg" title="Property" tone="navy">
          <WithCaption caption="Integrated property solutions and business spaces that create long-term value.">
            <GroupRow items={PROPERTY} />
          </WithCaption>
        </PortfolioRow>
        <PortfolioRow icon="ic-directory.svg" title="Information Technology" tone="burgundy">
          <WithCaption caption="Digital platforms that drive efficiency, accessibility, and business growth.">
            <GroupRow items={IT} />
          </WithCaption>
        </PortfolioRow>

        <PortfolioRow icon="ic-research.svg" title="Research & Advisory" tone="navy">
          <GroupRow items={RESEARCH} />
        </PortfolioRow>

        <PortfolioRow icon="ic-partnership.svg" title="Strategic Partnerships & Collaboration" tone="burgundy">
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-7">
            {PARTNERS.map((name, i) => (
              <div key={name} className="flex aspect-[5/4] items-center justify-center border border-border/70 bg-white p-3 shadow-sm">
                <img
                  src={A(`partner-${String(i + 1).padStart(2, "0")}.png`)}
                  alt={name}
                  title={name}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
          <p className="mt-5 text-[11px] italic leading-relaxed text-muted-foreground">
            Partners include: Kemenpar, Kemendag, Kemenperin, Bank Indonesia, OJK, ITPC, MLIT Japan, OCVB, ICTM, ITC
            Malaysia, PHRI, GIPI, KADIN Indonesia, USADA ASEAN, MUSIAD, OIC, SMIIC, SESRIC, COMCEC, and other national and
            international institutions.
          </p>
        </PortfolioRow>
      </div>
    </section>
  );
}

/* =========================================================================
   OUR CONTRIBUTIONS — deck slide 10
   ========================================================================= */
const CONTRIBUTIONS = [
  "Development of Halal Tourism Indonesia",
  "Supporting and supervising in preparing Indonesia as Halal Tourism Destinations",
  "Supporting the Economic Development of Muslim-Friendly Business",
  "Supporting and supervising Muslim-Friendly destinations in Indonesia to improve their competitiveness",
  "Participation and Contribution to Events / Conferences, Workshops and Training",
  "Participating in Organization of Islamic Cooperation (OIC)",
  "Participating in Global Halal Industry",
];
const CONTRIB_PHOTOS = [
  ["contrib-1.jpg", "Talk show on halal tourism opportunities and challenges"],
  ["contrib-2.jpg", "World Halal Tourism Awards"],
  ["contrib-3.jpg", "Japan Halal Summit 2014"],
  ["contrib-4.jpg", "World Islamic Economic Forum Foundation"],
  ["contrib-5.jpg", "High-level discussion"],
  ["contrib-6.jpg", "Coordination meeting"],
  ["contrib-7.jpg", "International Forum on Islamic Tourism 2014"],
  ["contrib-8.jpg", "Halal tourism workshop for the millennial generation"],
];

export function ContributionsSection() {
  return (
    <section id="our-contribution" className="container-arva py-16 md:py-24">
      <SectionHead eyebrow="Impact" title="Our Contributions" />
      <div className="grid gap-8 lg:grid-cols-[2fr_3fr]">
        <ul className="space-y-3" data-reveal="left">
          {CONTRIBUTIONS.map((c, i) => (
            <li key={c} className="flex items-center gap-4 border border-border bg-card px-4 py-3.5 shadow-sm">
              <GoldIcon src={`ic-contrib-${i + 1}.svg`} className="h-7 w-7" />
              <span className="border-l border-burgundy/40 pl-4 text-xs leading-snug text-foreground md:text-sm">{c}</span>
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-2 gap-2.5 border border-border bg-card p-2.5 shadow-sm" data-reveal="right">
          {CONTRIB_PHOTOS.map(([src, alt]) => (
            <img key={src} src={A(src)} alt={alt} loading="lazy" className="aspect-[16/10] w-full object-cover" />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   OUR ACKNOWLEDGEMENT — deck slide 11
   ========================================================================= */
const ACKS = [
  { photos: ["ack-islamica.jpg"], title: "The 500 Who Make the Islamic Economy", text: "ISLAMICA 500 2019." },
  {
    photos: ["ack-satyalancana-cert.jpg", "ack-satyalancana.jpg"],
    title: "Satyalancana Tourism Medal of Honor",
    text: "From President of the Republic of Indonesia, 2018.",
  },
  { photos: ["ack-pioneers.jpg"], title: "Halal Hotel Pioneers", text: "In Halal in Travel Awards 2022, Singapore." },
  {
    photos: ["ack-whta.jpg", "ack-whta-trophy.jpg"],
    title: "World’s Best Family Friendly Hotel",
    text: "In World Halal Travel Awards 2015, Abu Dhabi, UAE.",
  },
  {
    photos: ["ack-excellence.jpg", "ack-excellence-cert.jpg"],
    title: "Certificate of Excellence",
    text: "From the Minister of Tourism, Republic of Indonesia in developing Halal Tourism Industry, 2019.",
  },
  {
    photos: ["ack-japan.jpg"],
    title: "Letter of Appreciation",
    text: "From the Vice Minister of Land, Infrastructure, Transport, and Tourism, Japan, 2014.",
  },
];

export function AcknowledgementsSection() {
  return (
    <section id="our-acknowledgement" className="border-t border-border bg-cream/40 py-16 md:py-24">
      <div className="container-arva">
        <SectionHead eyebrow="Distinctions & Honors" title="Our Acknowledgement" />
        <div className="grid gap-5 md:grid-cols-2">
          {ACKS.map((a, i) => (
            <article
              key={a.title}
              data-reveal="up"
              data-reveal-delay={["50", "150"][i % 2]}
              className="grid items-center gap-5 border border-border bg-card p-4 shadow-sm sm:grid-cols-[1.25fr_1fr]"
            >
              <div className={`grid h-full gap-2 ${a.photos.length > 1 ? "grid-cols-[1fr_auto]" : ""}`}>
                {a.photos.map((p, k) => (
                  <img
                    key={p}
                    src={A(p)}
                    alt={a.title}
                    loading="lazy"
                    className={k === 0 ? "aspect-[4/3] h-full w-full bg-white object-contain" : "h-full max-h-44 w-auto self-center object-contain"}
                  />
                ))}
              </div>
              <div>
                <img src={A("ic-laurel.svg")} alt="" aria-hidden className="mb-2 h-6 w-auto" />
                <h3 className="font-sans text-base font-bold leading-snug text-foreground">{a.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{a.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
