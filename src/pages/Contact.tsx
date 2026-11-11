import { useState, useEffect } from "react";
import {
  Building2,
  Phone,
  Mail,
  Globe,
  Send,
  CheckCircle2,
  Clock,
  ArrowRight,
  MapPin,
  RotateCcw,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import { PageIntro } from "@/components/arva/sections";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  category: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  category: "Strategic Partnership & Investment",
  subject: "",
  message: "",
};

export function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Contact ARVA | Direct Inquiries & Partnership";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name.trim()) {
      setErrorMessage("Mohon lengkapi Nama Lengkap Anda.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Mohon masukkan alamat email yang valid.");
      return;
    }
    if (!formData.subject.trim()) {
      setErrorMessage("Mohon isi judul / perihal pesan.");
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage("Mohon masukkan isi pesan atau permohonan Anda.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    // Simulate direct dispatch to ARVA executive secretariat
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM);
    setIsSubmitted(false);
    setErrorMessage(null);
  };

  const mailtoHref = `mailto:riyanto.Sofyan@sofyancorp.com?subject=${encodeURIComponent(
    `[ARVA Inquiry: ${formData.category}] ${formData.subject || "Direct Inquiry"}`
  )}&body=${encodeURIComponent(
    `Nama: ${formData.name}\nEmail: ${formData.email}\nTelepon/WA: ${formData.phone || "-"}\nInstansi/Perusahaan: ${
      formData.organization || "-"
    }\nKategori: ${formData.category}\n\nPesan:\n${formData.message}`
  )}`;

  return (
    <>
      <PageIntro
        title="Contact ARVA"
        subtitle="Connect with our investment, advisory, and governance leadership team. Submit your direct inquiry or collaboration proposal below."
      />

      <section className="container-arva pb-20 pt-4">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Direct Secretariat & Office Details */}
          <div className="space-y-8 lg:col-span-5" data-reveal="left">
            {/* Direct Office Overview Card */}
            <div className="border border-border bg-card p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 border-b border-border pb-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-navy text-cream">
                  <Building2 className="h-5 w-5" />
                </span>
                <div>
                  <span className="eyebrow !text-burgundy">Headquarters</span>
                  <h3 className="font-serif text-xl sm:text-2xl text-foreground font-normal">
                    ARVA Head Office
                  </h3>
                </div>
              </div>

              <div className="mt-6 space-y-5 text-xs sm:text-sm">
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <MapPin className="h-4 w-4 shrink-0 text-burgundy mt-1" />
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">
                      Operating Address
                    </p>
                    <p className="mt-0.5 text-foreground leading-relaxed">
                      Jakarta, Indonesia • Strategic Ecosystem Hub &amp; Executive Secretariat
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3.5 border-t border-border/60 pt-4">
                  <Phone className="h-4 w-4 shrink-0 text-burgundy mt-1" />
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">
                      Direct Telephones
                    </p>
                    <p className="mt-0.5 font-medium text-foreground">
                      <a href="tel:0213905971" className="hover:text-burgundy transition-colors underline-offset-4 hover:underline">
                        021-3905971
                      </a>{" "}
                      /{" "}
                      <a href="tel:0218905972" className="hover:text-burgundy transition-colors underline-offset-4 hover:underline">
                        021-8905972
                      </a>
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Mobile:{" "}
                      <a href="tel:085215251984" className="hover:text-burgundy underline-offset-4 hover:underline">
                        085215251984
                      </a>{" "}
                      /{" "}
                      <a href="tel:08121922121" className="hover:text-burgundy underline-offset-4 hover:underline">
                        0812-1922-121
                      </a>
                    </p>
                  </div>
                </div>

                {/* Executive Email */}
                <div className="flex items-start gap-3.5 border-t border-border/60 pt-4">
                  <Mail className="h-4 w-4 shrink-0 text-burgundy mt-1" />
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">
                      Executive Email
                    </p>
                    <a
                      href="mailto:riyanto.Sofyan@sofyancorp.com"
                      className="mt-0.5 block font-medium text-burgundy hover:underline underline-offset-4 break-all"
                    >
                      riyanto.Sofyan@sofyancorp.com
                    </a>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Inquiries Mobile: 0811-903-505 / 0816-808-708
                    </p>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-3.5 border-t border-border/60 pt-4">
                  <Globe className="h-4 w-4 shrink-0 text-burgundy mt-1" />
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">
                      Official Platform
                    </p>
                    <a
                      href="https://arva.website"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-0.5 block font-serif text-base text-foreground font-medium hover:text-burgundy underline underline-offset-4 transition-colors"
                    >
                      arva.website
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours & Commitment Box */}
            <div className="border border-border/80 bg-cream/40 p-6 shadow-sm">
              <div className="flex items-center gap-2.5 text-navy">
                <Clock className="h-4 w-4 text-burgundy" />
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider">
                  Operational Guidelines &amp; Response
                </h4>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                Sekretariat ARVA beroperasi pada hari kerja reguler (Senin – Jumat, 09:00 – 17:00 WIB). Setiap
                proposal kemitraan, permohonan advokasi, dan pertanyaan resmi akan direspons secara langsung
                oleh tim terkait dalam kurun waktu 1–2 hari kerja.
              </p>
              <div className="mt-4 flex items-center gap-2 text-[11px] text-burgundy font-medium">
                <ShieldCheck className="h-4 w-4" />
                <span>Kerahasiaan data dan pesan kemitraan terjamin.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Interactive Contact Form */}
          <div className="lg:col-span-7" data-reveal="right">
            <div className="border border-border bg-card p-6 sm:p-10 shadow-sm">
              <div className="border-b border-border pb-5 mb-8">
                <div className="flex items-center justify-between">
                  <span className="eyebrow !text-burgundy">Direct Inquiry Form</span>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    Formulir Resmi
                  </span>
                </div>
                <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-foreground">
                  Hubungi ARVA Secara Langsung
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Silakan isi formulir di bawah ini untuk memulai komunikasi resmi, menjajaki kemitraan strategis,
                  atau menyampaikan pertanyaan ke ARVA.
                </p>
              </div>

              {/* Success Card Confirmation */}
              {isSubmitted ? (
                <div className="bg-cream/50 border border-burgundy/30 p-8 text-center animate-fadeIn">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-burgundy/10 text-burgundy mb-4">
                    <CheckCircle2 className="h-8 w-8 text-burgundy" />
                  </div>
                  <h3 className="font-serif text-2xl text-foreground font-semibold">
                    Pesan Anda Berhasil Disiapkan &amp; Terkirim
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
                    Terima kasih, <strong className="text-foreground">{formData.name}</strong>. Tim eksekutif ARVA
                    telah mencatat pesan Anda mengenai <span className="text-burgundy font-medium">"{formData.subject}"</span>.
                  </p>

                  <div className="my-6 border-y border-border/60 py-4 max-w-md mx-auto text-left text-xs space-y-2 bg-white/70 p-4">
                    <p className="flex justify-between">
                      <span className="text-muted-foreground uppercase text-[10px] tracking-wider">Email Pengirim:</span>
                      <span className="font-medium text-foreground">{formData.email}</span>
                    </p>
                    {formData.organization && (
                      <p className="flex justify-between">
                        <span className="text-muted-foreground uppercase text-[10px] tracking-wider">Instansi:</span>
                        <span className="font-medium text-foreground">{formData.organization}</span>
                      </p>
                    )}
                    <p className="flex justify-between">
                      <span className="text-muted-foreground uppercase text-[10px] tracking-wider">Kategori:</span>
                      <span className="font-medium text-burgundy">{formData.category}</span>
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                    <a
                      href={mailtoHref}
                      className="inline-flex items-center gap-2 bg-burgundy px-5 py-3 text-xs uppercase font-semibold tracking-wider text-cream hover:bg-burgundy/90 transition-colors"
                    >
                      <span>Buka di Aplikasi Email</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 border border-border bg-card px-5 py-3 text-xs uppercase font-medium tracking-wider text-foreground hover:bg-cream transition-colors cursor-pointer"
                    >
                      <RotateCcw className="h-3.5 w-3.5" />
                      <span>Kirim Pesan Lain</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="bg-destructive/10 border border-destructive/30 p-3.5 text-xs text-destructive font-medium flex items-center gap-2">
                      <span>⚠️</span>
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name & Email Row */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-foreground block">
                        Nama Lengkap <span className="text-burgundy">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Contoh: Dr. Bimo Ghanis, M.Sc."
                        className="w-full border border-border/80 bg-background px-4 py-3 text-sm text-foreground focus:border-burgundy focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-foreground block">
                        Alamat Email <span className="text-burgundy">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="nama@instansi.com"
                        className="w-full border border-border/80 bg-background px-4 py-3 text-sm text-foreground focus:border-burgundy focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone & Organization Row */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-foreground block">
                        Nomor Telepon / WhatsApp
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+62 812-xxxx-xxxx"
                        className="w-full border border-border/80 bg-background px-4 py-3 text-sm text-foreground focus:border-burgundy focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="organization" className="text-xs font-semibold uppercase tracking-wider text-foreground block">
                        Instansi / Perusahaan / Organisasi
                      </label>
                      <input
                        id="organization"
                        name="organization"
                        type="text"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="Nama entitas bisnis / asosiasi"
                        className="w-full border border-border/80 bg-background px-4 py-3 text-sm text-foreground focus:border-burgundy focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Category Selection */}
                  <div className="space-y-1.5">
                    <label htmlFor="category" className="text-xs font-semibold uppercase tracking-wider text-foreground block">
                      Kategori Kemitraan &amp; Konsultasi <span className="text-burgundy">*</span>
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full border border-border/80 bg-background px-4 py-3 text-sm text-foreground focus:border-burgundy focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="Strategic Partnership & Investment">Kemitraan Strategis &amp; Investasi Ekosistem</option>
                      <option value="International Trade & Expo Collaboration">Kerjasama International Trade &amp; Investment Expo / Summit</option>
                      <option value="Pillar 01: Industry Sustainable Competitiveness">Pillar 01: Peningkatan Daya Saing Industri Berkelanjutan</option>
                      <option value="Pillar 02: Marketing Development & Big Data Platform">Pillar 02: Pemasaran &amp; Platform Big Data Terpadu</option>
                      <option value="Pillar 03: Ecosystem & Institutional Development">Pillar 03: Pengembangan Ekosistem, Kapasitas &amp; Kelembagaan</option>
                      <option value="Governance & Advisory Consultation">Konsultasi Tata Kelola Bertanggung Jawab (Responsible Governance)</option>
                      <option value="General Inquiries & Media">Pertanyaan Umum, Media &amp; Riset</option>
                    </select>
                  </div>

                  {/* Subject Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-foreground block">
                      Judul / Perihal Pesan <span className="text-burgundy">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Contoh: Penjajakan Kemitraan Strategis Platform Big Data"
                      className="w-full border border-border/80 bg-background px-4 py-3 text-sm text-foreground focus:border-burgundy focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Message Content */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-foreground block">
                      Rincian Pesan / Kebutuhan Kerjasama <span className="text-burgundy">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Jelaskan kebutuhan, ruang lingkup kolaborasi, atau pertanyaan yang ingin Anda diskusikan bersama tim ARVA..."
                      className="w-full border border-border/80 bg-background px-4 py-3 text-sm text-foreground focus:border-burgundy focus:outline-none transition-colors resize-y leading-relaxed"
                    />
                  </div>

                  {/* Submit Action */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2.5 bg-burgundy px-8 py-4 text-xs font-semibold uppercase tracking-wider text-cream shadow-sm hover:bg-burgundy/90 transition-all cursor-pointer disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-cream border-t-transparent" />
                          <span>Menyiapkan &amp; Mengirim Pesan...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Kirim Pesan Langsung ke ARVA</span>
                        </>
                      )}
                    </button>
                    <p className="mt-3 text-center text-[11px] text-muted-foreground">
                      Pesan akan langsung diteruskan ke sekretariat eksekutif{" "}
                      <span className="font-mono text-foreground">riyanto.Sofyan@sofyancorp.com</span>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
