import { useState } from 'react';
import { TalentCourse } from '../../types';
import { useTalentCourses } from '../../hooks/useTalentCourses';
import { useTalentWebinars } from '../../hooks/useTalentWebinars';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Play, 
  Clock, 
  Star, 
  BookOpen, 
  Search, 
  ArrowRight, 
  Calendar, 
  Wifi, 
  ArrowLeft, 
  Gift,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Bot,
  Zap,
  Award,
  MessageSquare,
  ShieldCheck,
  Layers,
  DollarSign,
  Users,
  Target,
  Briefcase,
  ChevronRight
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function AcademyPage() {
  const { courses, loading } = useTalentCourses();
  const { webinars: upcomingWebinars } = useTalentWebinars();
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['all', 'tech sales', 'ai prospecting', 'b2b strategy', 'closing deals'];

  const filteredCourses = courses.filter(c => {
    const matchesFilter = filter === 'all' || c.category?.toLowerCase() === filter.toLowerCase();
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         (c.description || '').toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const whatsappEnrollUrl = "https://wa.me/2347073848138?text=Hi%20DigiHire%2C%20I%E2%80%99d%20like%20to%20apply%20for%20the%20AI-Powered%20Tech%20Sales%20Certification%20Program%20(50%25%20Off%20Cohort).";

  return (
    <div className="bg-[#06111F] text-slate-100 min-h-screen">
      {/* ═════════════════════════════════════════════════════════
          TOP BAR & BREADCRUMB
      ═════════════════════════════════════════════════════════ */}
      <div className="border-b border-white/10 bg-[#0B1D33]/80 backdrop-blur-md sticky top-0 z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <button 
            type="button" 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm font-medium"
          >
            <ArrowLeft size={16} /> Back to Dashboard
          </button>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Cohort Applications Open
            </span>
            <a 
              href={whatsappEnrollUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#06111F] bg-[#00C2FF] hover:bg-[#33CFFF] px-4 py-1.5 rounded-full transition-all shadow-sm"
            >
              <MessageSquare size={13} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════
          FLAGSHIP COURSE HERO
      ═════════════════════════════════════════════════════════ */}
      <div className="relative overflow-hidden py-16 lg:py-24 border-b border-white/10 bg-gradient-to-b from-[#0B1D33] via-[#06111F] to-[#06111F]">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00C2FF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left 7 cols: Course Overview */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.55 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00C2FF]/15 border border-[#00C2FF]/30 text-xs font-bold uppercase tracking-wider text-[#00C2FF] mb-6">
                <Sparkles size={14} className="text-[#00C2FF]" /> Flagship Certification Track • 2026 Cohort
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] mb-6">
                AI-Powered Tech Sales &amp; <span className="text-[#00C2FF]">B2B Growth</span> Certification
              </h1>

              <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
                The premier career launch and revenue accelerator. Master AI-driven prospecting, land high-paying tech sales clients, bypass gatekeepers, close enterprise deals, and earn high-ticket commissions and affiliate payouts with top technology companies.
              </p>

              {/* Quick Feature Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                  <Bot size={18} className="text-[#00C2FF] flex-shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">AI Prospecting Mastery</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                  <TrendingUp size={18} className="text-emerald-400 flex-shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">Big Commissions &amp; Payouts</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                  <Briefcase size={18} className="text-amber-400 flex-shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">Tech Roles &amp; Founder Sales</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a 
                  href={whatsappEnrollUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#00C2FF] text-[#06111F] font-bold text-sm hover:bg-[#33CFFF] transition-all shadow-lg shadow-[#00C2FF]/20"
                >
                  Apply for Next Cohort <ArrowRight size={16} />
                </a>
                <a 
                  href="#curriculum"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white font-semibold text-sm hover:bg-white/15 transition-all"
                >
                  View Full Curriculum
                </a>
              </div>
            </motion.div>

            {/* Right 5 cols: Pricing & Enrollment Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.55, delay: 0.15 }}
              className="lg:col-span-5"
            >
              <div className="rounded-3xl bg-gradient-to-b from-[#0F2544] to-[#0A182D] border-2 border-[#00C2FF]/40 p-7 sm:p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-gradient-to-l from-rose-500 to-amber-500 text-white text-[11px] font-black uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl shadow-md">
                  50% OFF SPECIAL
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-[#00C2FF] mb-2 flex items-center gap-1.5">
                  <Award size={14} /> Official Certification
                </div>

                <h3 className="text-xl font-bold text-white mb-4">Cohort Enrollment &amp; Tuition</h3>

                {/* Slashed Pricing */}
                <div className="p-4 rounded-2xl bg-black/30 border border-white/10 mb-6">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Standard Tuition:</span>
                    <span className="text-base text-slate-400 line-through font-bold">₦750,000</span>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">₦375,000</span>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                      SAVE 50%
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">Limited cohort access • Only 25 seats allocated per stream</p>
                </div>

                {/* Payment Plan Highlight */}
                <div className="p-4 rounded-2xl bg-sky-950/40 border border-sky-500/30 mb-6">
                  <div className="flex items-start gap-3">
                    <DollarSign size={18} className="text-[#00C2FF] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                        Flexible Payment Plan Available
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Spread your tuition across the duration of the program in convenient installments:
                      </p>
                      <div className="mt-2 text-xs font-semibold text-[#00C2FF] flex items-center gap-2">
                        <span>• 2 Payments: ₦195,000 / month</span>
                        <span className="text-slate-500">or</span>
                        <span>• 3 Payments: ₦135,000 / month</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What's Included Bullets */}
                <div className="space-y-2.5 mb-7 text-xs text-slate-200">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={15} className="text-emerald-400 flex-shrink-0" />
                    <span>8 Weeks intensive live training + practical deal simulation</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={15} className="text-emerald-400 flex-shrink-0" />
                    <span>AI prospecting toolkit, C-Suite email scripts &amp; cold calling frameworks</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={15} className="text-emerald-400 flex-shrink-0" />
                    <span>Priority placement in DigiHire Verified Sales Talent Pool</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={15} className="text-emerald-400 flex-shrink-0" />
                    <span>Founder selling playbook for SaaS, apps &amp; enterprise technology</span>
                  </div>
                </div>

                <a 
                  href={whatsappEnrollUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#00C2FF] text-[#06111F] font-bold text-sm hover:bg-[#33CFFF] transition-all shadow-lg shadow-[#00C2FF]/20"
                >
                  <MessageSquare size={16} /> Enroll / Secure Your Seat
                </a>

                <div className="mt-3 text-center">
                  <span className="text-[11px] text-slate-400">
                    Questions about financing? <a href={whatsappEnrollUrl} target="_blank" rel="noopener noreferrer" className="text-[#00C2FF] underline hover:text-[#33CFFF]">Speak to Admissions</a>
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════
          PROGRAM CURRICULUM & PILLARS
      ═════════════════════════════════════════════════════════ */}
      <div id="curriculum" className="py-20 bg-[#08172B] border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00C2FF]">Comprehensive Syllabus</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
              Everything You Need to Succeed in Modern Tech Sales
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Designed by top sales leaders and recruiters to take you from foundational sales concepts to closing high-ticket enterprise contracts using modern AI tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Pillar 1 */}
            <div className="p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#00C2FF]/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#00C2FF]/10 text-[#00C2FF] flex items-center justify-center mb-5">
                <Briefcase size={22} />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#00C2FF] mb-2">Module 1</div>
              <h3 className="text-lg font-bold text-white mb-2">Tech Sales Career Launch</h3>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Break into tech sales with confidence. Master SDR, BDR, and Account Executive roles, SaaS economics, commission structures (OTE), and high-paying career trajectories.
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center gap-2">• Tech sales terminology &amp; SaaS business models</li>
                <li className="flex items-center gap-2">• OTE, commissions, accelerators &amp; contracts</li>
                <li className="flex items-center gap-2">• Resume optimization &amp; interview prep</li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#00C2FF]/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-5">
                <Bot size={22} />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-purple-400 mb-2">Module 2</div>
              <h3 className="text-lg font-bold text-white mb-2">AI Prospecting &amp; ICP Research</h3>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Turn hours of manual search into automated pipeline. Use AI to scrape high-intent leads, build Ideal Customer Profiles, and generate verified decision-maker lists.
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center gap-2">• Modern AI prompting for lead discovery</li>
                <li className="flex items-center gap-2">• Automated data enrichment &amp; email verification</li>
                <li className="flex items-center gap-2">• Building hyper-targeted account lists in minutes</li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#00C2FF]/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-5">
                <Target size={22} />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-2">Module 3</div>
              <h3 className="text-lg font-bold text-white mb-2">Hacking Decision Makers</h3>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Bypass gatekeepers and land straight on the calendars of CEOs, CTOs, and Heads of Growth with battle-tested multi-channel outreach strategies.
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center gap-2">• C-Suite cold email templates with 40%+ open rates</li>
                <li className="flex items-center gap-2">• LinkedIn social selling &amp; video outreach</li>
                <li className="flex items-center gap-2">• Cold calling scripts that overcome instant objections</li>
              </ul>
            </div>

            {/* Pillar 4 */}
            <div className="p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#00C2FF]/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-5">
                <Award size={22} />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-2">Module 4</div>
              <h3 className="text-lg font-bold text-white mb-2">Enterprise Closing &amp; Demos</h3>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Run flawless discovery calls, deliver product demos that hook stakeholders, navigate budget approvals, and close high-ticket software contracts.
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center gap-2">• MEDDPICC &amp; BANT discovery frameworks</li>
                <li className="flex items-center gap-2">• High-converting product walkthroughs</li>
                <li className="flex items-center gap-2">• Pricing defense, negotiation &amp; closing scripts</li>
              </ul>
            </div>

            {/* Pillar 5 */}
            <div className="p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#00C2FF]/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-5">
                <TrendingUp size={22} />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-2">Module 5</div>
              <h3 className="text-lg font-bold text-white mb-2">Tech Companies &amp; Affiliates</h3>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Learn how to partner with fast-growing tech brands, earn uncapped sales commissions, set up affiliate distribution funnels, and monetize your network.
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center gap-2">• Sourcing performance-based sales contracts</li>
                <li className="flex items-center gap-2">• Setting up recurring affiliate revenue streams</li>
                <li className="flex items-center gap-2">• Scaling international remote client acquisition</li>
              </ul>
            </div>

            {/* Pillar 6 */}
            <div className="p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#00C2FF]/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center mb-5">
                <Zap size={22} />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-sky-400 mb-2">Module 6</div>
              <h3 className="text-lg font-bold text-white mb-2">Founder B2B Selling Track</h3>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Specialized track for technical founders: how to sell your own proprietary software, AI apps, APIs, or enterprise solutions to corporate buyers.
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center gap-2">• Founder-led sales playbooks &amp; early pilot deals</li>
                <li className="flex items-center gap-2">• Positioning technical features as financial ROI</li>
                <li className="flex items-center gap-2">• Building a scalable outbound sales motion</li>
              </ul>
            </div>

          </div>

          {/* CTA Box */}
          <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-sky-900/30 via-[#0B1D33] to-sky-900/30 border border-[#00C2FF]/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h4 className="text-xl font-bold text-white mb-1">Ready to master AI tech sales?</h4>
              <p className="text-xs text-slate-300">Cohort tuition: ₦375,000 (50% Off) • Flexible payment plan available</p>
            </div>
            <a 
              href={whatsappEnrollUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00C2FF] text-[#06111F] font-bold text-sm hover:bg-[#33CFFF] transition-all whitespace-nowrap"
            >
              Apply via WhatsApp <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════
          WHO THIS PROGRAM IS BUILT FOR
      ═════════════════════════════════════════════════════════ */}
      <div className="py-20 border-b border-white/10 bg-[#06111F]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00C2FF]">Target Candidates</span>
            <h2 className="text-3xl font-extrabold text-white mt-2 mb-3">Who Should Enroll?</h2>
            <p className="text-slate-400 text-sm">Designed for ambitious individuals looking to multiply their earnings in technology sales.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="text-[#00C2FF] font-bold text-base mb-2">Career Switchers</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Graduates, customer support agents, and professionals wanting to transition into high-paying B2B tech sales roles.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="text-emerald-400 font-bold text-base mb-2">Existing Sales Reps</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Sales professionals in traditional industries (real estate, insurance, retail) ready to upgrade to SaaS, tech SDR, and AE compensation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="text-purple-400 font-bold text-base mb-2">Tech Founders</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Builders with products who need to master founder-led B2B sales, outbound prospecting, and enterprise client acquisition.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="text-amber-400 font-bold text-base mb-2">Independent Closers</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Freelance closers and affiliate marketers looking to partner with high-growth startups and earn top commission checks.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════
          FREE TRAINING RESOURCES & WEBINARS
      ═════════════════════════════════════════════════════════ */}
      <div className="py-20 bg-[#08172B]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Upcoming Live Sessions */}
          {upcomingWebinars.length > 0 && (
            <div className="mb-20 bg-slate-900/80 rounded-3xl p-8 text-white border border-white/10 relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#00C2FF] mb-2">
                    <Wifi size={12} /> Live Sessions
                  </div>
                  <h2 className="text-2xl font-bold">Upcoming Academy Webinars</h2>
                </div>
                <Link
                  to="/academy/timetable"
                  className="flex items-center gap-2 text-xs font-bold text-[#00C2FF] hover:text-[#33CFFF] transition-colors"
                >
                  View All Timetable <ArrowRight size={14} />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {upcomingWebinars.slice(0, 3).map(w => (
                  <Link key={w.id} to="/academy/timetable" className="group p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                    <div
                      className="h-1 w-12 rounded-full mb-4"
                      style={{ background: w.cover_color }}
                    />
                    <h3 className="font-bold text-white mb-3 line-clamp-2 group-hover:text-[#00C2FF] transition-colors">{w.title}</h3>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Calendar size={12} />
                        {new Date(w.scheduled_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Clock size={12} />
                        {new Date(w.scheduled_at).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: true })} · {w.duration_minutes} min
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Free Resource Library */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-widest">
                <Gift size={13} /> Free Training Library
              </div>
            </div>
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white">Watch Past Training Sessions</h2>
                <p className="text-slate-400 text-sm mt-1">Free masterclasses and recordings for all registered DigiHire sales talent.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ResourceCard
                title="Sales Process & High-Ticket Closing"
                date="Recorded Live Session"
                description="Live sales training covering key techniques for closing deals, overcoming resistance, and managing pipeline velocity effectively."
                driveFileId="1fV-fozDtss0HQNLVOzXXxruA1DRhOEDa"
              />
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

function ResourceCard({ title, date, description, driveFileId }: {
  title: string;
  date: string;
  description: string;
  driveFileId: string;
}) {
  return (
    <motion.div whileHover={{ y: -4 }} className="rounded-2xl bg-white/[0.03] border border-white/10 shadow-sm overflow-hidden hover:border-[#00C2FF]/30 transition-all">
      <div className="aspect-video w-full bg-slate-900 relative">
        <iframe
          src={`https://drive.google.com/file/d/${driveFileId}/preview`}
          className="w-full h-full"
          allow="autoplay"
          allowFullScreen
          title={title}
        />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest">Free Masterclass</span>
          <span className="text-[11px] text-slate-400">{date}</span>
        </div>
        <h3 className="text-base font-bold text-white mb-1">{title}</h3>
        <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">{description}</p>
      </div>
    </motion.div>
  );
}
