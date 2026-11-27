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
      setErrorMessage("Please enter your full name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!formData.subject.trim()) {
      setErrorMessage("Please enter a subject for your message.");
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage("Please enter your message or inquiry details.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);
    window.location.href = mailtoHref;
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM);
    setIsSubmitted(false);
    setErrorMessage(null);
  };

  const mailtoHref = `mailto:riyanto.sofyan@arva.id?subject=${encodeURIComponent(
    `[ARVA Inquiry: ${formData.category}] ${formData.subject || "Direct Inquiry"}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nPhone/WhatsApp: ${formData.phone || "-"}\nOrganization: ${
      formData.organization || "-"
    }\nCategory: ${formData.category}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <>
      <PageIntro
        title="Contact ARVA"
        subtitle="Reach the ARVA leadership team for partnerships, advisory work and official correspondence."
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
                      Jalan Cut Mutia No. 9, Menteng, Jakarta Pusat, DKI Jakarta 10330
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3.5 border-t border-border/60 pt-4">
                  <Phone className="h-4 w-4 shrink-0 text-burgundy mt-1" />
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">
                      Telephone
                    </p>
                    <p className="mt-0.5 font-medium text-foreground">
                      <a href="tel:+62213905971" className="hover:text-burgundy transition-colors underline-offset-4 hover:underline">
                        +62 21 390 5971
                      </a>{" "}
                      /{" "}
                      <a href="tel:+62213905972" className="hover:text-burgundy transition-colors underline-offset-4 hover:underline">
                        +62 21 390 5972
                      </a>
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Mobile:{" "}
                      <a href="tel:+62811903505" className="hover:text-burgundy underline-offset-4 hover:underline">
                        +62 811 903 505
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 border-t border-border/60 pt-4">
                  <Mail className="h-4 w-4 shrink-0 text-burgundy mt-1" />
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">
                      Email
                    </p>
                    <a
                      href="mailto:riyanto.sofyan@arva.id"
                      className="mt-0.5 block font-medium text-burgundy hover:underline underline-offset-4 break-all"
                    >
                      riyanto.sofyan@arva.id
                    </a>
                    <a
                      href="mailto:r.sofyan@riyantosofyan.com"
                      className="mt-0.5 block font-medium text-burgundy hover:underline underline-offset-4 break-all"
                    >
                      r.sofyan@riyantosofyan.com
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
                  Office Hours &amp; Response Time
                </h4>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                The ARVA Secretariat is open Monday to Friday, 09:00–17:00 WIB (UTC+7). Partnership proposals, advisory
                requests and official inquiries are answered within 1–2 business days.
              </p>
            </div>
          </div>

          {/* Right Column: Direct Interactive Contact Form */}
          <div className="lg:col-span-7" data-reveal="right">
            <div className="border border-border bg-card p-6 sm:p-10 shadow-sm">
              <div className="border-b border-border pb-5 mb-8">
                <span className="eyebrow !text-burgundy">Inquiry Form</span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-foreground">Send us a message</h2>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Tell us who you are and what you would like to discuss. Your message goes to the ARVA executive
                  secretariat.
                </p>
              </div>

              {/* Success Card Confirmation */}
              {isSubmitted ? (
                <div className="bg-cream/50 border border-burgundy/30 p-8 text-center animate-fadeIn">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-burgundy/10 text-burgundy mb-4">
                    <CheckCircle2 className="h-8 w-8 text-burgundy" />
                  </div>
                  <h3 className="font-serif text-2xl text-foreground font-semibold">
                    Your email is ready to send
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
                    Thank you, <strong className="text-foreground">{formData.name}</strong>. Your email app should now be
                    open with your message about <span className="text-burgundy font-medium">"{formData.subject}"</span>.
                    Please press send there. If nothing opened, use the button below or write to us directly at
                    riyanto.sofyan@arva.id.
                  </p>

                  <div className="my-6 border-y border-border/60 py-4 max-w-md mx-auto text-left text-xs space-y-2 bg-white/70 p-4">
                    <p className="flex justify-between">
                      <span className="text-muted-foreground uppercase text-[10px] tracking-wider">Sender Email:</span>
                      <span className="font-medium text-foreground">{formData.email}</span>
                    </p>
                    {formData.organization && (
                      <p className="flex justify-between">
                        <span className="text-muted-foreground uppercase text-[10px] tracking-wider">Organization:</span>
                        <span className="font-medium text-foreground">{formData.organization}</span>
                      </p>
                    )}
                    <p className="flex justify-between">
                      <span className="text-muted-foreground uppercase text-[10px] tracking-wider">Category:</span>
                      <span className="font-medium text-burgundy">{formData.category}</span>
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                    <a
                      href={mailtoHref}
                      className="inline-flex items-center gap-2 bg-burgundy px-5 py-3 text-xs uppercase font-semibold tracking-wider text-cream hover:bg-burgundy/90 transition-colors"
                    >
                      <span>Open in Email App</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 border border-border bg-card px-5 py-3 text-xs uppercase font-medium tracking-wider text-foreground hover:bg-cream transition-colors cursor-pointer"
                    >
                      <RotateCcw className="h-3.5 w-3.5" />
                      <span>Send Another Message</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="bg-destructive/10 border border-destructive/30 p-3.5 text-xs text-destructive font-medium flex items-center gap-2">
                                            <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name & Email Row */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-foreground block">
                        Full Name <span className="text-burgundy">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full border border-border/80 bg-background px-4 py-3 text-sm text-foreground focus:border-burgundy focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-foreground block">
                        Email Address <span className="text-burgundy">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@organization.com"
                        className="w-full border border-border/80 bg-background px-4 py-3 text-sm text-foreground focus:border-burgundy focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone & Organization Row */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-foreground block">
                        Telephone / WhatsApp
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
                        Institution / Company / Organization
                      </label>
                      <input
                        id="organization"
                        name="organization"
                        type="text"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="Company or institution"
                        className="w-full border border-border/80 bg-background px-4 py-3 text-sm text-foreground focus:border-burgundy focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Category Selection */}
                  <div className="space-y-1.5">
                    <label htmlFor="category" className="text-xs font-semibold uppercase tracking-wider text-foreground block">
                      Inquiry &amp; Partnership Category <span className="text-burgundy">*</span>
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full border border-border/80 bg-background px-4 py-3 text-sm text-foreground focus:border-burgundy focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="Strategic Partnership & Investment">Strategic Partnership &amp; Ecosystem Investment</option>
                      <option value="International Trade & Expo Collaboration">International Trade &amp; Investment Expo / Summit Collaboration</option>
                      <option value="Pillar 01: Industry Sustainable Competitiveness">Pillar 01: Enhancing Industry Sustainable Competitiveness</option>
                      <option value="Pillar 02: Marketing Development & Big Data Platform">Pillar 02: Marketing Development &amp; Big Data Platform</option>
                      <option value="Pillar 03: Ecosystem & Institutional Development">Pillar 03: Ecosystem &amp; Institutional Development</option>
                      <option value="Governance & Advisory Consultation">Responsible Governance &amp; Advisory Consultation</option>
                      <option value="General Inquiries & Media">General Inquiries, Research &amp; Media</option>
                    </select>
                  </div>

                  {/* Subject Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-foreground block">
                      Subject / Inquiry Title <span className="text-burgundy">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Strategic Partnership on Big Data Platform"
                      className="w-full border border-border/80 bg-background px-4 py-3 text-sm text-foreground focus:border-burgundy focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Message Content */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-foreground block">
                      Message Details / Collaboration Scope <span className="text-burgundy">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please outline your objectives, proposed collaboration scope, or questions for the ARVA leadership team..."
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
                          <span>Opening your email app...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                    <p className="mt-3 text-center text-[11px] text-muted-foreground">
                      This opens your email app with the message addressed to{" "}
                      <span className="text-foreground">riyanto.sofyan@arva.id</span>
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
