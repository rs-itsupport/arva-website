import { useState } from "react";
import {
  Sparkles,
  Phone,
  Mail,
  Globe,
  Building2,
  Clock,
  ArrowRight,
  Eye,
  CheckCircle2,
  RefreshCw,
  ExternalLink,
} from "lucide-react";
import logo from "@/assets/arva-logo.png";
import building from "@/assets/hero-building.jpg";
import sofyanCorpLogo from "@/assets/sofyancorp-logo.png";
import groupOfArvaLogo from "@/assets/group-of-arva-logo.png";

interface UnderConstructionProps {
  onPreview?: () => void;
}

export function UnderConstruction({ onPreview }: UnderConstructionProps) {
  const [showContactDetails, setShowContactDetails] = useState(false);

  return (
    <div className="relative min-h-screen bg-navy text-navy-foreground flex flex-col justify-between overflow-hidden selection:bg-burgundy selection:text-cream">
      {/* Background Architectural Ambient Image with Luxury Dark Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={building}
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-20 scale-105 blur-[2px] mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/90 to-navy" />
        {/* Subtle Ambient Radial Glows */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-burgundy/25 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-[500px] h-[400px] bg-cream/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Top Header Bar */}
      <header className="relative z-10 border-b border-navy-line bg-navy/60 backdrop-blur-md">
        <div className="container-arva py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="ARVA Investment Holdings" className="h-8 md:h-9 w-auto brightness-200" />
            <div className="hidden sm:block border-l border-navy-line pl-3">
              <span className="text-[10px] uppercase tracking-widest text-cream/70 font-semibold block">
                ARVA Investment Holdings
              </span>
              <span className="text-[9px] text-cream/50 tracking-wider block font-serif">
                Investing in People • Responsible Governance
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-burgundy/40 bg-burgundy/20 px-3 py-1 text-[11px] font-medium text-cream tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cream opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cream" />
              </span>
              Under Construction
            </span>

            {onPreview && (
              <button
                onClick={onPreview}
                className="hidden md:inline-flex items-center gap-1.5 rounded-none border border-cream/20 bg-cream/5 px-3.5 py-1.5 text-xs text-cream/90 hover:bg-cream/15 hover:text-cream transition-colors cursor-pointer"
                title="Buka pratinjau website untuk melihat item yang perlu diganti"
              >
                <Eye className="h-3.5 w-3.5 text-cream/70" />
                <span>Pratinjau Draft</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Announcement Content */}
      <main className="relative z-10 container-arva py-12 md:py-16 my-auto">
        <div className="max-w-4xl mx-auto">
          {/* Eyebrow & Live Status */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 border border-cream/20 bg-cream/5 px-4 py-1.5 text-[11px] uppercase tracking-widest text-cream/80 backdrop-blur-sm">
              <RefreshCw className="h-3 w-3 animate-spin text-burgundy" style={{ animationDuration: "6s" }} />
              <span>Official System &amp; Content Update</span>
            </div>
          </div>

          {/* Core Announcement Title */}
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-cream leading-[1.12] tracking-tight">
              Website Under Construction
            </h1>
            <p className="mt-6 text-base sm:text-lg md:text-xl font-serif text-cream/80 max-w-2xl mx-auto leading-relaxed">
              Kami sedang melakukan pembaharuan data, foto dokumentasi, dan materi profil resmi ARVA untuk memastikan
              seluruh informasi yang disajikan merupakan versi yang paling mutakhir.
            </p>
            <p className="mt-3 text-xs sm:text-sm text-cream/60 max-w-xl mx-auto font-sans">
              We are currently enhancing our website content, visual milestones, and institutional frameworks to present
              our latest and most up-to-date corporate profile.
            </p>
          </div>

          {/* Status Breakdown Grid */}
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {/* Card 1: Content Replacement */}
            <div className="border border-cream/15 bg-card/10 backdrop-blur-sm p-6 text-left transition-all hover:border-burgundy/60">
              <div className="flex items-center justify-between border-b border-cream/10 pb-3">
                <span className="text-[10px] uppercase tracking-wider text-cream/60 font-semibold">Pembaruan 01</span>
                <Clock className="h-4 w-4 text-cream/70" />
              </div>
              <h3 className="mt-4 font-serif text-lg text-cream">Pembaruan Materi &amp; Foto</h3>
              <p className="mt-2 text-xs text-cream/70 leading-relaxed">
                Penggantian foto dokumentasi kegiatan, forum global, serta visual milestone ke versi terbaru.
              </p>
            </div>

            {/* Card 2: Strategic Frameworks */}
            <div className="border border-cream/15 bg-card/10 backdrop-blur-sm p-6 text-left transition-all hover:border-burgundy/60">
              <div className="flex items-center justify-between border-b border-cream/10 pb-3">
                <span className="text-[10px] uppercase tracking-wider text-cream/60 font-semibold">Pembaruan 02</span>
                <Sparkles className="h-4 w-4 text-burgundy" />
              </div>
              <h3 className="mt-4 font-serif text-lg text-cream">Penghargaan &amp; Pengakuan</h3>
              <p className="mt-2 text-xs text-cream/70 leading-relaxed">
                Validasi dan sinkronisasi sertifikat, penghargaan halal, serta pencapaian institusional terkini.
              </p>
            </div>

            {/* Card 3: Network & Ecosystem */}
            <div className="border border-cream/15 bg-card/10 backdrop-blur-sm p-6 text-left transition-all hover:border-burgundy/60">
              <div className="flex items-center justify-between border-b border-cream/10 pb-3">
                <span className="text-[10px] uppercase tracking-wider text-cream/60 font-semibold">Pembaruan 03</span>
                <Building2 className="h-4 w-4 text-cream/70" />
              </div>
              <h3 className="mt-4 font-serif text-lg text-cream">Sinergi Jaringan Ekosistem</h3>
              <p className="mt-2 text-xs text-cream/70 leading-relaxed">
                Integrasi aliansi strategis bersama SofyanCorp dan Group of Arva (GOArva) secara komprehensif.
              </p>
            </div>
          </div>

          {/* Direct Inquiries & Contact Banner */}
          <div className="mt-10 border border-burgundy/40 bg-burgundy/15 backdrop-blur-md p-6 sm:p-8 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-burgundy font-semibold">
                  Layanan &amp; Hubungi Kami
                </span>
                <h2 className="mt-1 text-xl sm:text-2xl font-serif text-cream">
                  Butuh Informasi atau Kerjasama Selama Masa Perbaikan?
                </h2>
                <p className="mt-1 text-xs text-cream/80 max-w-xl">
                  Layanan korespondensi resmi, konsultasi, dan kemitraan strategis kami tetap berjalan normal.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowContactDetails(!showContactDetails)}
                className="inline-flex items-center justify-center gap-2 bg-cream text-navy px-5 py-3 text-xs uppercase tracking-wider font-semibold hover:bg-cream/90 transition-colors shrink-0 cursor-pointer shadow-sm"
              >
                <span>{showContactDetails ? "Tutup Info Kontak" : "Lihat Kontak Resmi"}</span>
                <ArrowRight className="h-3.5 w-3.5 text-burgundy" />
              </button>
            </div>

            {/* Expandable Contact Details */}
            {showContactDetails && (
              <div className="mt-8 pt-6 border-t border-cream/15 grid gap-6 sm:grid-cols-3 text-xs">
                {/* Telephone */}
                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase tracking-wider text-cream/60 flex items-center gap-1.5">
                    <Phone className="h-3 w-3 text-cream/70" /> Telepon Kantor
                  </span>
                  <p className="text-cream font-medium">
                    <a href="tel:0213905971" className="hover:underline">021-3905971</a> /{" "}
                    <a href="tel:0218905972" className="hover:underline">021-8905972</a>
                  </p>
                  <p className="text-cream/80">
                    Mobile: <a href="tel:085215251984" className="hover:underline">085215251984</a>
                  </p>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase tracking-wider text-cream/60 flex items-center gap-1.5">
                    <Mail className="h-3 w-3 text-cream/70" /> Email Eksekutif
                  </span>
                  <p className="text-cream font-medium">
                    <a
                      href="mailto:riyanto.Sofyan@sofyancorp.com"
                      className="hover:underline break-all"
                    >
                      riyanto.Sofyan@sofyancorp.com
                    </a>
                  </p>
                  <p className="text-cream/80">
                    Direct WA: <a href="tel:0811903505" className="hover:underline">0811-903-505</a>
                  </p>
                </div>

                {/* Office */}
                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase tracking-wider text-cream/60 flex items-center gap-1.5">
                    <Globe className="h-3 w-3 text-cream/70" /> Website &amp; Portal
                  </span>
                  <p className="text-cream font-medium">arva.website • arva.id</p>
                  <p className="text-cream/70">Jakarta, Indonesia</p>
                </div>
              </div>
            )}
          </div>

          {/* Action Row for the User / Team Preview */}
          {onPreview && (
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 border border-cream/10 bg-navy/80 text-xs">
              <div className="flex items-center gap-2.5 text-cream/80 text-center sm:text-left">
                <CheckCircle2 className="h-4 w-4 text-cream/60 shrink-0" />
                <span>
                  <strong>Akses Pratinjau:</strong> Ingin memeriksa item-item mana yang perlu diganti pada draft website?
                </span>
              </div>
              <button
                type="button"
                onClick={onPreview}
                className="inline-flex items-center gap-2 border border-cream/30 px-4 py-2 text-xs uppercase tracking-wider text-cream hover:border-burgundy hover:text-cream hover:bg-burgundy/30 transition-colors shrink-0 cursor-pointer font-medium"
              >
                <Eye className="h-3.5 w-3.5" />
                <span>Buka Pratinjau Website</span>
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Footer & Affiliates */}
      <footer className="relative z-10 border-t border-navy-line bg-navy/80 py-8 backdrop-blur-md">
        <div className="container-arva flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-cream/60">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
            <span className="text-[10px] uppercase tracking-wider text-cream/50">Ecosystem Network:</span>
            <a
              href="https://sofyancorp.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-cream transition-colors"
            >
              <img src={sofyanCorpLogo} alt="SofyanCorp" className="h-5 w-auto brightness-200 opacity-70 hover:opacity-100" />
              <ExternalLink className="h-3 w-3" />
            </a>
            <a
              href="https://goarva.id"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-cream transition-colors"
            >
              <img src={groupOfArvaLogo} alt="Group of Arva" className="h-4 w-auto brightness-200 opacity-70 hover:opacity-100" />
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <div className="text-center md:text-right text-[11px] text-cream/50">
            © {new Date().getFullYear()} ARVA Investment Holdings (ARVA.id). All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
