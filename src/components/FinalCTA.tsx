import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

const inputClass =
  "w-full bg-brand-black border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-gray-600 focus:border-brand-gold focus:outline-none transition-colors";
const labelClass =
  "block text-xs font-bold uppercase tracking-wide text-gray-400 mb-2";
const errorClass = "block text-xs text-brand-red font-semibold mt-1.5";

export default function FinalCTA() {
  const [state, handleSubmit] = useForm("mdajapjb");

  return (
    <section
      id="order"
      className="relative section overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0a0a0a 0%, #1a0707 50%, #0a0a0a 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(192,57,43,0.25),_transparent_70%)]" />

      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase leading-[0.95] mb-6 text-balance">
          Ready to Build Your
          <br />
          <span className="text-brand-gold">Competitive Edge?</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto text-pretty">
          Every custom solution starts with understanding your unique business. Let&apos;s schedule a call to explore what&apos;s possible.
        </p>

        {state.succeeded ? (
          /* Success state */
          <div className="bg-brand-dark/80 backdrop-blur border border-brand-gold/40 rounded-lg p-10 md:p-12 text-center">
            <div className="flex justify-center mb-5">
              <div className="w-16 h-16 rounded-full bg-brand-gold flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9 text-black" />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold uppercase mb-3">
              Request Received.
            </h3>
            <p className="text-gray-300 text-base md:text-lg max-w-md mx-auto">
              I&apos;ve got your details. I&apos;ll reach out within 24 hours to schedule our discovery call.
            </p>
            <p className="text-gray-500 text-sm mt-6">
              Need me sooner? Email{" "}
              <a
                href="mailto:nick@nicholasturner.ca"
                className="text-brand-gold hover:underline"
              >
                nick@nicholasturner.ca
              </a>
            </p>
          </div>
        ) : (
          /* Form */
          <form
            onSubmit={handleSubmit}
            className="bg-brand-dark/80 backdrop-blur border border-brand-gold/20 rounded-lg p-6 md:p-8 text-left space-y-4"
          >
            {/* Subject line for the notification email Nick receives */}
            <input
              type="hidden"
              name="_subject"
              value="New Discovery Call Request — nicholasturner.ca"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Your Name
                </label>
                <input
                  required
                  id="name"
                  type="text"
                  name="name"
                  placeholder="John Smith"
                  className={inputClass}
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                  className={errorClass}
                />
              </div>
              <div>
                <label htmlFor="business" className={labelClass}>
                  Business Name
                </label>
                <input
                  required
                  id="business"
                  type="text"
                  name="business"
                  placeholder="Smith Plumbing Co."
                  className={inputClass}
                />
                <ValidationError
                  prefix="Business"
                  field="business"
                  errors={state.errors}
                  className={errorClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                Email
              </label>
              <input
                required
                id="email"
                type="email"
                name="email"
                placeholder="you@business.com"
                className={inputClass}
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className={errorClass}
              />
            </div>

            <div>
              <label htmlFor="website" className={labelClass}>
                Current Website URL{" "}
                <span className="text-gray-600 normal-case font-medium">(if you have one)</span>
              </label>
              <input
                id="website"
                type="text"
                name="website"
                placeholder="yoursite.com"
                className={inputClass}
              />
              <ValidationError
                prefix="Website"
                field="website"
                errors={state.errors}
                className={errorClass}
              />
            </div>

            <div>
              <label htmlFor="details" className={labelClass}>
                What are you looking to build?{" "}
                <span className="text-gray-600 normal-case font-medium">(optional)</span>
              </label>
              <textarea
                id="details"
                name="details"
                rows={3}
                placeholder="New website, CRM, automations, lead funnel — tell me what you're thinking."
                className={`${inputClass} resize-none`}
              />
              <ValidationError
                prefix="Details"
                field="details"
                errors={state.errors}
                className={errorClass}
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="btn-gold w-full !py-5 text-base md:text-lg group disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {state.submitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Schedule My Discovery Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            <ValidationError
              errors={state.errors}
              className="block text-center text-sm text-brand-red font-semibold"
            />

            <p className="text-center text-xs text-gray-500 pt-2">
              Your information is secure. I&apos;ll reach out within 24 hours.
            </p>
            <p className="text-center text-xs text-gray-500">
              Questions first? Email{" "}
              <a
                href="mailto:nick@nicholasturner.ca"
                className="text-brand-gold hover:underline"
              >
                nick@nicholasturner.ca
              </a>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
