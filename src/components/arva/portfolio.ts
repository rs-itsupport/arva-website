// Portfolio of programmes and engagements under ARVA's strategic pillars.
// Photos live in src/assets/portfolio/<slug>/ (cover.jpg + 01.jpg, 02.jpg, ...).
// To add photos to an activity, drop more numbered .jpg files into its folder.

const covers = import.meta.glob<string>("@/assets/portfolio/*/cover.jpg", {
  eager: true,
  query: "?url",
  import: "default",
});
const photos = import.meta.glob<string>("@/assets/portfolio/*/[0-9]*.jpg", {
  eager: true,
  query: "?url",
  import: "default",
});

export interface PortfolioActivity {
  slug: string;
  title: string;
  /** Date and place, shown above the title. */
  meta: string;
  desc: string;
  cover: string;
  photos: string[];
}

export interface PortfolioSubPillar {
  id: string;
  number: string;
  title: string;
  summary: string;
  activities: PortfolioActivity[];
}

export interface PortfolioPillar {
  id: string;
  number: string;
  title: string;
  intro: string;
  subPillars: PortfolioSubPillar[];
}

function activity(slug: string, title: string, meta: string, desc: string): PortfolioActivity {
  const folder = `/assets/portfolio/${slug}/`;
  const list = Object.keys(photos)
    .filter((k) => k.includes(folder))
    .sort()
    .map((k) => photos[k]);
  const coverKey = Object.keys(covers).find((k) => k.includes(folder));
  return { slug, title, meta, desc, cover: coverKey ? covers[coverKey] : list[0], photos: list };
}

export const PORTFOLIO: PortfolioPillar[] = [
  {
    id: "pillar-02",
    number: "02",
    title: "Marketing Development and Big Data Platform",
    intro: "International summits, business forums and partner networks that bring Indonesia’s Muslim-friendly tourism to domestic and global markets.",
    subPillars: [
      {
        id: "international-trade-and-investment-summit",
        number: "01",
        title: "International Trade and Investment Summit",
        summary: "Summits held within the Indonesia Sharia Economic Festival (ISEF), bringing government, industry and international partners together.",
        activities: [
          activity(
            "ihts-2021",
            "3rd Indonesia Halal Tourism Summit (IHTS) 2021",
            "26 OCT 2021 · 8TH ISEF",
            "Held within the 8th Indonesia Sharia Economic Festival under the theme “Wellness Tourism: Journey for Healthy and Prosperous Life”. Halal destinations were encouraged to develop wellness tourism programmes in line with their own business lines.",
          ),
          activity(
            "imftc-isef-2022",
            "International Muslim Friendly Tourism Conference (IMFTC) & Industry Exhibition",
            "7 OCT 2022 · 9TH ISEF",
            "An international conference and industry exhibition at the 9th ISEF, bringing together government, industry and partners around Muslim-friendly tourism as a driver of inclusive recovery.",
          ),
          activity(
            "ihts-2023",
            "The 5th International Halal Tourism Summit (IHTS) 2023 & Silaturahmi Nasional PPHI",
            "25 OCT 2023 · JAKARTA CONVENTION CENTER",
            "The fifth summit, held together with PPHI’s national gathering, discussed the role of digital technology, AI and sustainability in growing the Muslim-friendly tourism industry.",
          ),
          activity(
            "ihts-2024",
            "6th IHTS at the 11th Indonesia Sharia Economic Festival 2024",
            "OCT 2024 · JAKARTA CONVENTION CENTER",
            "Centred on building an inclusive Muslim-friendly tourism industry through collaboration across stakeholders. The Basic Service Guidelines for Muslim-Friendly Tourism were launched at this summit.",
          ),
        ],
      },
      {
        id: "expo-and-business-forum",
        number: "02",
        title: "International Trade & Investment Expo and Business Forum",
        summary: "Business forums and exhibitions that connect Muslim-friendly tourism businesses with partners and local government.",
        activities: [
          activity(
            "bincang-bisnis-jateng",
            "Bincang Bisnis: Peluang Industri Pariwisata Halal di Jawa Tengah",
            "16 MAR 2023 · KOTA LAMA, SEMARANG",
            "A business talk show on halal tourism opportunities in Central Java, held together with the inauguration of the PPHI Central Java regional board and an exhibition of local Muslim-friendly tourism businesses.",
          ),
        ],
      },
      {
        id: "trade-and-business-directory",
        number: "03",
        title: "Trade and Business Directory",
        summary: "Partnerships that link businesses across markets and promote Muslim-friendly products and services.",
        activities: [
          activity(
            "kolaborasi-prm",
            "Muslim-Friendly Tourism Development Collaboration",
            "2022 · JAKARTA",
            "Joint programmes with Bank Sumsel Babel, Sushi Tei and the Jakarta Tourism and Creative Economy Office to develop and promote Muslim-friendly products and services.",
          ),
          activity(
            "cross-promotion-johor",
            "Cross Promotion with Johor Tourism Board",
            "2022 · JAKARTA",
            "A cross-promotion partnership between Johor Tourism Board and Indonesian Muslim-friendly tourism businesses, opening referral and distribution links between the two markets.",
          ),
        ],
      },
    ],
  },
  {
    id: "pillar-03",
    number: "03",
    title: "Ecosystem and Institutional Development",
    intro: "Training, technical guidance and policy advocacy that strengthen the people and institutions behind the Muslim-friendly tourism ecosystem.",
    subPillars: [
      {
        id: "capacity-building",
        number: "01",
        title: "Capacity Building",
        summary: "Webinars, seminars and talks that build understanding of halal and Muslim-friendly tourism among students, professionals and business owners.",
        activities: [
          activity(
            "webinar-wisata-halal-pandemi",
            "Webinar Wisata Halal: Tantangan di Tengah Pandemi",
            "18 FEB 2021 · WITH IAI & IHLC",
            "Halal tourism practice and sharia accounting, with a call for incentives for Muslim-friendly businesses through the pandemic.",
          ),
          activity(
            "rise-of-world-halal-tourism",
            "International Webinar: The Rise of World Halal Tourism",
            "8 MAR 2021 · UIN MAKASSAR",
            "Encouraged participants to explore Muslim-friendly tourism and take an active role in the industry within their own fields.",
          ),
          activity(
            "apa-meet-friend",
            "APA Meet Friend: Exploring Entrepreneurship Beyond Your Field Study",
            "9 JUN 2021 · ONLINE",
            "Introduced students and young professionals to business opportunities in Muslim-friendly and sharia tourism.",
          ),
          activity(
            "sharia-economic-inspiring-seminar",
            "Sharia Economic Inspiring Seminar",
            "26 SEP 2021 · IPB BOGOR",
            "“Potency of Halal Tourism Based on Local Wisdom in the Development of Sharia Finance”.",
          ),
          activity(
            "webinar-sef-2021",
            "International Webinar, Sharia Economic Festival 2021",
            "19 OCT 2021 · UIN JAKARTA & IAEI",
            "Optimising the sharia economy for post-pandemic recovery, with Muslim-friendly tourism as one of the focus sectors.",
          ),
        ],
      },
      {
        id: "technical-assistance-and-training",
        number: "02",
        title: "Technical Assistance and Training",
        summary: "Technical guidance, rating programmes and practical guidelines for tourism businesses and local governments.",
        activities: [
          activity(
            "bimtek-paket-wisata",
            "Bimtek Penyusunan Produk Paket Wisata Ramah Muslim",
            "2022 · WITH DKI JAKARTA GOVERNMENT",
            "Technical guidance for tour operators and businesses on designing Muslim-friendly travel packages, organised with the Jakarta provincial government.",
          ),
          activity(
            "buku-panduan-prm",
            "Launch of Muslim-Friendly Tourism Guidebooks for 5 Priority Destinations",
            "2022 · ISLAMIC DIGITAL DAY, KNEKS",
            "Release of practical Muslim-friendly tourism guidebooks for Indonesia’s five super-priority destinations, presented at Islamic Digital Day 2022.",
          ),
          activity(
            "sosialisasi-mfr-phri",
            "Muslim Friendly Rating for Services and Facilities at Rapimnas & Munassus PHRI 2023",
            "8 FEB 2023 · SAHID JAYA, YOGYAKARTA",
            "Introduction of the Muslim Friendly Rating programme to hotel and restaurant owners at the PHRI national leadership meeting.",
          ),
          activity(
            "sosialisasi-mfr-gipi",
            "Muslim Friendly Rating for Services and Facilities at Rakernas & Rapimnas GIPI 2023",
            "2023 · RAKERNAS & RAPIMNAS GIPI",
            "The same rating programme presented to tourism industry associations under GIPI, encouraging members to take part in the assessment.",
          ),
          activity(
            "bimtek-inovasi-prm",
            "Bimtek: Inovasi untuk Pengembangan Wisata Ramah Muslim yang Berkelanjutan",
            "13 JUL 2023 · HOTEL BOROBUDUR, JAKARTA",
            "Held with Disparekraf DKI Jakarta following Indonesia’s first place in the Global Muslim Travel Index 2023, preparing Jakarta businesses for the Muslim Friendly Rating by CrescentRating and PPHI.",
          ),
          activity(
            "technical-guidance-jakarta",
            "Technical Guidance on Development of Muslim Friendly Tourism in Jakarta Province",
            "17 SEP 2024 · JS LUWANSA, JAKARTA",
            "A follow-up guidance programme with Disparekraf DKI Jakarta for local tourism businesses and staff.",
          ),
          activity(
            "pedoman-layanan-dasar-prm",
            "Launch of the Basic Service Guidelines for Muslim-Friendly Tourism",
            "30 OCT 2024 · 6TH IHTS, JAKARTA",
            "A reference for the minimum services Muslim-friendly tourism businesses should provide, launched at the 6th IHTS.",
          ),
        ],
      },
      {
        id: "advocacy",
        number: "03",
        title: "Advocacy",
        summary: "Focus group discussions, policy forums and stakeholder meetings that carry the industry’s views into national and regional policy.",
        activities: [
          activity(
            "fgd-pariwisata-ramah-muslim",
            "FGD Pariwisata Ramah Muslim",
            "25 JAN 2021 · WITH BANK INDONESIA",
            "Recommended a practical action plan for members and positioned Muslim-friendly tourism as a leading sector in economic recovery.",
          ),
          activity(
            "forum-dialog-banten",
            "Forum Dialog Wisata Halal: Banten Menuju Destinasi Wisata Halal Dunia",
            "25 MAR 2021 · BANTEN",
            "Discussed Banten’s nature, culture and spiritual heritage as a base for a world-class halal destination.",
          ),
          activity(
            "webinar-muslim-friendly-tourism",
            "Webinar Muslim Friendly Tourism",
            "27 APR 2021 · WITH KEMENPAREKRAF",
            "“The Rise of Indonesia Muslim Friendly Tourism in the New Normal Era”, with a call for business stimulus.",
          ),
          activity(
            "webinar-halal-bi-halal",
            "Webinar Halal bi Halal Ekonomi Syariah",
            "20 MAY 2021 · ONLINE",
            "The future of Indonesia’s sharia economy: literacy, destinations, industry, human capital, institutions and marketing.",
          ),
          activity(
            "talkshow-halal-tourism",
            "Talkshow Halal Tourism",
            "30 JUL 2021 · WITH BANK INDONESIA",
            "“Halal Tourism as an Effort to Accelerate Regional Economic Recovery”, part of the Road to ISEF series.",
          ),
          activity(
            "fgd-ruu-ekonomi-syariah",
            "FGD Rancangan Undang-Undang Ekonomi Syariah",
            "15 OCT 2021 · WITH BANK INDONESIA",
            "Input on the draft sharia economy law so that Muslim-friendly tourism is covered in national policy.",
          ),
          activity(
            "fgd-prm-syariah",
            "FGD Pariwisata Ramah Muslim & Syariah sebagai Pilar Kemandirian Ekonomi",
            "3 NOV 2021 · EAST JAVA",
            "Muslim-friendly and sharia tourism as a pillar of economic self-reliance, aligned with the strategic plan.",
          ),
          activity(
            "fgd-series-isef-2022",
            "FGD Series Towards Resolution on Muslim Friendly Tourism",
            "2022 · ISEF 2022",
            "A series of discussions with stakeholders to draft a joint resolution on Muslim-friendly tourism.",
          ),
          activity(
            "kongres-halal-mui-2022",
            "Kongres Halal Internasional MUI 2022",
            "2022 · MUI",
            "Participation in MUI’s international halal congress on the development of the halal industry.",
          ),
          activity(
            "rakor-pengembangan-prm",
            "Coordination Meeting on Muslim-Friendly Tourism Development",
            "28 FEB 2023 · TANAH ABANG, JAKARTA",
            "17 Kemenparekraf directorates with KNEKS, Bank Indonesia’s sharia department, PPHI and MES.",
          ),
          activity(
            "afebis-2023",
            "International Conference on Islamic Economics & Business and Rakernas AFEBIS",
            "14 MAR 2023 · UIN SMH BANTEN",
            "Included the signing of a cooperation declaration between PPHI and AFEBIS.",
          ),
          activity(
            "pertemuan-kadin",
            "Meeting with KADIN Indonesia",
            "29 MAY 2023 · PPHI SECRETARIAT",
            "Follow-up on cooperation and PPHI membership within the Indonesian Chamber of Commerce.",
          ),
          activity(
            "pertemuan-uzbekistan",
            "Meeting with the Ministry of Tourism & Cultural Heritage of Uzbekistan",
            "30 MAY 2023 · PPHI SECRETARIAT",
            "Exploring cooperation on Muslim-friendly tourism between Indonesia and Uzbekistan.",
          ),
          activity(
            "audiensi-disparekraf-dki",
            "Audience with Disparekraf DKI Jakarta",
            "25 AUG 2023 · PPHI SECRETARIAT",
            "Discussion of Muslim-friendly tourism products and events planned for Jakarta.",
          ),
          activity(
            "audiensi-hiccip",
            "Audience with the President of HICCIP",
            "30 OCT 2023 · SOFYAN HOTEL CUT MEUTIA",
            "Meeting with the Halal International Chamber of Commerce & Industries of the Philippines.",
          ),
          activity(
            "fgd-jakarta-kota-global",
            "FGD Disparekraf: Jakarta Kota Global",
            "1 NOV 2023 · TUGU KUNSTKRING PALAIS",
            "Input on the role of Muslim-friendly tourism in Jakarta’s plan to become a global city.",
          ),
          activity(
            "rapimnas-kadin-2023",
            "Rapimnas & Rakernas KADIN Indonesia 2023",
            "7 DEC 2023 · SWISSOTEL PIK AVENUE",
            "Attended through KADIN’s associations division, representing the Muslim-friendly tourism industry.",
          ),
        ],
      },
    ],
  },
];

/** Number of activities per sub-pillar id, used by the pillar cards on the home page. */
export const SUB_PILLAR_COUNTS: Record<string, number> = Object.fromEntries(
  PORTFOLIO.flatMap((p) => p.subPillars.map((s) => [s.id, s.activities.length])),
);
