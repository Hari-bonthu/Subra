import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Heart, Users, Award } from 'lucide-react';
import { Button } from '../components/ui/Button';

interface AboutPageProps {
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Header Section */}
      <section className="pt-12 pb-14 sm:pt-16 sm:pb-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-[840px]">
          <h1 className="font-display font-extrabold text-[36px] sm:text-[46px] lg:text-[52px] text-[#17212B] leading-[1.08] tracking-[-0.03em]">
            Clean Spaces. Better Living.
          </h1>
          <p className="font-sans text-[16px] sm:text-[18px] text-[#64748B] leading-[1.6] mt-4">
            Subra was founded in East Godavari to replace guesswork, caustic chemicals, and unreliable service with clinical-grade, founder-supervised hygiene.
          </p>
        </div>
      </section>

      {/* Origin Story Narrative */}
      <section className="py-16 sm:py-20 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <h2 className="font-display font-extrabold text-[30px] sm:text-[38px] text-[#17212B] leading-[1.15] tracking-tight">
              Why We Started Subra House Service
            </h2>
            <p className="font-sans text-[15px] text-[#64748B] leading-[1.7]">
              Like many families and business owners in Kakinada and Rajahmundry, we struggled to find reliable, professional cleaning. Traditional house help lacked clinical tools, and conventional contractors frequently used harsh, corrosive acids that permanently etched expensive bathroom tiles and damaged chrome fittings.
            </p>
            <p className="font-sans text-[15px] text-[#64748B] leading-[1.7]">
              We saw an urgent need for an honest, technology-enabled cleaning service that respects both the property owner and the cleaning squad. We invested in brand-new hospital-grade HEPA vacuum extractors, non-toxic bio-degradable cleaning compounds, and structured training protocols.
            </p>
            <p className="font-sans text-[15px] text-[#17212B] font-medium leading-[1.7]">
              Because we are a growing startup, every customer matters immensely to us. We don’t cut corners or hide behind corporate call centers. Our founders directly oversee operations, ensuring every visit meets our clinical standard.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-[12px] overflow-hidden border border-[#E2E8F0] shadow-[0_12px_40px_rgba(23,33,43,0.08)]">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80"
                alt="Subra cleaning specialist preparing eco-friendly equipment"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17212B]/90 via-[#17212B]/30 to-transparent flex flex-col justify-end p-8">
                <span className="font-display font-bold text-[20px] text-white">
                  "Cleanliness is not merely aesthetic—it is preventative healthcare for your family and workforce."
                </span>
                <span className="text-[13px] text-[#16C2B0] font-sans mt-2 font-medium">
                  Subra Founding Principle
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Startup Pillars */}
      <section className="py-16 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-[680px] mx-auto mb-14">
            <h2 className="font-display font-extrabold text-[30px] sm:text-[36px] text-[#17212B] tracking-tight">
              Our Core Commitments
            </h2>
            <p className="font-sans text-[15px] text-[#64748B] mt-2">
              The fundamental standards that guide every single cleaning session we execute.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-[8px] bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="w-11 h-11 rounded-[6px] bg-[#ECFDF9] text-[#16C2B0] flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-[17px] text-[#17212B] mb-2">
                Founder Supervision
              </h3>
              <p className="font-sans text-[13.5px] text-[#64748B] leading-[1.6]">
                The founders directly monitor team training and review inspection reports for every appointment.
              </p>
            </div>

            <div className="p-6 rounded-[8px] bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="w-11 h-11 rounded-[6px] bg-[#ECFDF9] text-[#16C2B0] flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-[17px] text-[#17212B] mb-2">
                Safe Bio-Compounds
              </h3>
              <p className="font-sans text-[13.5px] text-[#64748B] leading-[1.6]">
                Zero pungent fumes or harmful acids. Our solutions are certified eco-friendly and safe around children and pets.
              </p>
            </div>

            <div className="p-6 rounded-[8px] bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="w-11 h-11 rounded-[6px] bg-[#ECFDF9] text-[#16C2B0] flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-[17px] text-[#17212B] mb-2">
                Brand-New Machinery
              </h3>
              <p className="font-sans text-[13.5px] text-[#64748B] leading-[1.6]">
                Fresh, regularly maintained HEPA filtration vacuums, steam sanitizers, and high-speed single disc buffers.
              </p>
            </div>

            <div className="p-6 rounded-[8px] bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="w-11 h-11 rounded-[6px] bg-[#ECFDF9] text-[#16C2B0] flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-[17px] text-[#17212B] mb-2">
                Dignified Employment
              </h3>
              <p className="font-sans text-[13.5px] text-[#64748B] leading-[1.6]">
                Police-verified personnel paid fair living wages, equipped with proper PPE and comprehensive medical safety insurance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Promise Banner */}
      <section className="py-14 bg-[#17212B] text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-[700px]">
            <div className="flex items-center gap-2 text-[#16C2B0] mb-2">
              <Heart className="w-4 h-4" />
              <span className="text-[13px] font-semibold">Our Personal Word</span>
            </div>
            <h3 className="font-display font-bold text-[24px] sm:text-[28px] text-white">
              Experience the Subra difference on your first booking.
            </h3>
            <p className="font-sans text-[14px] text-[#94A3B8] mt-1">
              If anything is not up to our clinical standard, our founders will personally ensure it is made right.
            </p>
          </div>

          <Button
            variant="primary"
            size="md"
            onClick={onOpenBooking}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Book Your First Clean
          </Button>
        </div>
      </section>
    </div>
  );
};
