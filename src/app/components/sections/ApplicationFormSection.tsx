import { motion } from "motion/react";
import { useState } from "react";
import { Send, User, Mail, Phone, MessageSquare, CheckCircle } from "lucide-react";

import bgImage from "@/assets/interior1.webp";
import { useI18n } from "@/i18n/I18nContext";

export function ApplicationFormSection() {
  const { t } = useI18n();
  const a = t.application;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClasses =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-[#C9A96E]/50 focus:bg-white/[0.07] transition-all duration-300";

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 w-full min-h-screen flex items-center py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Side - Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-4 sm:gap-5"
            >
              <span
                style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.3em" }}
                className="text-[#C9A96E] uppercase text-sm sm:text-base"
              >
                {a.eyebrow}
              </span>
              <h2
                style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.1 }}
                className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
              >
                {a.title}{" "}
                <span className="italic text-[#C9A96E]">{a.titleItalic}</span>
              </h2>
              <div className="w-16 h-[1px] bg-gradient-to-r from-[#C9A96E] to-transparent" />
              <p
                style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.8 }}
                className="text-white/60 max-w-lg text-lg sm:text-xl"
              >
                {a.body}
              </p>

              <div className="flex flex-col gap-3 mt-4">
                {a.bullets.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
                    <span
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      className="text-white/50 text-lg"
                    >
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {submitted ? (
                <div className="bg-white/5 backdrop-blur-sm border border-[#C9A96E]/20 rounded-2xl p-8 sm:p-10 flex flex-col items-center text-center gap-5">
                  <div className="w-16 h-16 rounded-full bg-[#C9A96E]/10 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-[#C9A96E]" />
                  </div>
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-white text-2xl"
                  >
                    {a.successTitle}
                  </h3>
                  <p
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    className="text-white/50 text-sm max-w-sm"
                  >
                    {a.successBody}
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col gap-4"
                >
                  {/* Name */}
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <input
                      type="text"
                      placeholder={a.namePh}
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      className={`${inputClasses} pl-11`}
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <input
                      type="email"
                      placeholder={a.emailPh}
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      className={`${inputClasses} pl-11`}
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <input
                      type="tel"
                      placeholder={a.phonePh}
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      className={`${inputClasses} pl-11`}
                    />
                  </div>

                  {/* Budget */}
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    className={`${inputClasses} appearance-none cursor-pointer ${
                      formData.budget ? "text-white" : "text-white/30"
                    }`}
                  >
                    <option value="" className="bg-black text-white/30">{a.budgetPh}</option>
                    <option value="100-150k" className="bg-black text-white">$100.000 – $150.000</option>
                    <option value="150-200k" className="bg-black text-white">$150.000 – $200.000</option>
                    <option value="200-300k" className="bg-black text-white">$200.000 – $300.000</option>
                    <option value="300k+" className="bg-black text-white">$300.000+</option>
                  </select>

                  {/* Message */}
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-white/30" />
                    <textarea
                      placeholder={a.messagePh}
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      className={`${inputClasses} pl-11 resize-none`}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="mt-2 w-full bg-gradient-to-r from-[#C9A96E] to-[#B8963E] text-black font-medium py-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#C9A96E]/20 transition-all duration-300 active:scale-[0.98] cursor-pointer"
                    style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.05em" }}
                  >
                    <Send className="w-4 h-4" />
                    {a.submit}
                  </button>

                  <p
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    className="text-white/30 text-xs text-center mt-1"
                  >
                    {a.privacy}
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
