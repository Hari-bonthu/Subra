import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

interface ContactPageProps {
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Kakinada',
    service: 'residential-deep',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Header Section */}
      <section className="pt-12 pb-14 sm:pt-16 sm:pb-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-[840px]">
          <h1 className="font-display font-extrabold text-[36px] sm:text-[46px] lg:text-[52px] text-[#17212B] leading-[1.08] tracking-[-0.03em]">
            Contact Subra House Service
          </h1>
          <p className="font-sans text-[16px] sm:text-[18px] text-[#64748B] leading-[1.6] mt-4">
            Connect directly with our founder-led dispatch team in East Godavari. We respond promptly with upfront quotes and flexible scheduling.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 sm:py-20 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="font-display font-extrabold text-[26px] sm:text-[30px] text-[#17212B] tracking-tight">
                Direct Dispatch Channels
              </h2>
              <p className="font-sans text-[14.5px] text-[#64748B] mt-1.5 leading-[1.6]">
                Reach our team via call, WhatsApp, or email. We are available 7 days a week.
              </p>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-[8px] bg-white border border-[#E2E8F0] flex items-start gap-4">
              <div className="w-10 h-10 rounded-[6px] bg-[#ECFDF9] text-[#16C2B0] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-[16px] text-[#17212B]">Toll-Free Dispatch</h3>
                <a
                  href="tel:+918842345678"
                  className="font-display font-semibold text-[18px] text-[#16C2B0] hover:text-[#078F82] block mt-1"
                >
                  +91 884 234 5678
                </a>
                <p className="font-sans text-[12.5px] text-[#64748B] mt-1">Available 7:00 AM – 8:30 PM (Mon – Sun)</p>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="p-6 rounded-[8px] bg-white border border-[#E2E8F0] flex items-start gap-4">
              <div className="w-10 h-10 rounded-[6px] bg-[#ECFDF9] text-[#16C2B0] flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-[16px] text-[#17212B]">WhatsApp Quick Help</h3>
                <p className="font-sans text-[13px] text-[#64748B] mt-1">
                  Send room photos or floor plans for instant estimate.
                </p>
                <a
                  href="https://wa.me/918842345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#16C2B0] hover:text-[#078F82] mt-2"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-[8px] bg-white border border-[#E2E8F0] flex items-start gap-4">
              <div className="w-10 h-10 rounded-[6px] bg-[#ECFDF9] text-[#16C2B0] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-[16px] text-[#17212B]">Corporate & Billing Inquiries</h3>
                <a
                  href="mailto:care@subra.in"
                  className="font-sans font-medium text-[15px] text-[#17212B] hover:text-[#16C2B0] block mt-1"
                >
                  care@subra.in
                </a>
                <p className="font-sans text-[12.5px] text-[#64748B] mt-1">Invoices, enterprise RFPs & feedback</p>
              </div>
            </div>

            {/* Coverage Zones */}
            <div className="p-6 rounded-[8px] bg-[#F1F5F4] border border-[#E2E8F0]">
              <div className="flex items-center gap-2 text-[#17212B] font-display font-bold text-[15px] mb-2">
                <MapPin className="w-4 h-4 text-[#16C2B0]" />
                <span>Service Coverage Districts</span>
              </div>
              <p className="font-sans text-[13px] text-[#64748B] leading-[1.6]">
                Headquartered in Kakinada with active mobile squads covering Rajahmundry, Amalapuram, Samalkota, Peddapuram, and neighboring communities.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Callback / Query Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[12px] p-8 sm:p-10 border border-[#E2E8F0] shadow-[0_8px_30px_rgba(23,33,43,0.04)]">
              <h2 className="font-display font-extrabold text-[24px] sm:text-[28px] text-[#17212B] tracking-tight">
                Send Us a Message
              </h2>
              <p className="font-sans text-[14px] text-[#64748B] mt-1.5 mb-8">
                Fill out the details below and our team will get in touch within 2 hours.
              </p>

              {submitted ? (
                <div className="p-8 bg-[#ECFDF9] border border-[#16C2B0]/30 rounded-[8px] text-center">
                  <div className="w-12 h-12 rounded-full bg-[#16C2B0] text-white flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-[20px] text-[#17212B]">Message Received!</h3>
                  <p className="font-sans text-[14px] text-[#078F82] mt-1 max-w-[400px] mx-auto">
                    Thank you {formData.name}. Our dispatch manager will contact you shortly at {formData.phone}.
                  </p>
                  <Button
                    variant="outline-teal"
                    size="sm"
                    className="mt-5"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        city: 'Kakinada',
                        service: 'residential-deep',
                        notes: '',
                      });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[13px] font-semibold text-[#17212B] mb-1.5">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Varma"
                        className="w-full px-3.5 py-2.5 text-[14px] bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px] text-[#17212B] focus:border-[#16C2B0] focus:bg-white focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[13px] font-semibold text-[#17212B] mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 text-[14px] bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px] text-[#17212B] focus:border-[#16C2B0] focus:bg-white focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[13px] font-semibold text-[#17212B] mb-1.5">
                        City / Location <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-[14px] bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px] text-[#17212B] focus:border-[#16C2B0] focus:bg-white focus:outline-none transition-all"
                      >
                        <option value="Kakinada">Kakinada</option>
                        <option value="Rajahmundry">Rajahmundry</option>
                        <option value="Amalapuram">Amalapuram</option>
                        <option value="Samalkota">Samalkota</option>
                        <option value="Other">Other (East Godavari)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[13px] font-semibold text-[#17212B] mb-1.5">
                        Service Interested In
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-[14px] bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px] text-[#17212B] focus:border-[#16C2B0] focus:bg-white focus:outline-none transition-all"
                      >
                        <option value="residential-deep">Residential Deep Clean</option>
                        <option value="residential-standard">Standard Regular Cleaning</option>
                        <option value="bathroom-kitchen">Bathroom / Kitchen Focused</option>
                        <option value="commercial-office">Commercial Office Upkeep</option>
                        <option value="floor-buffing">Floor Buffing & Descaling</option>
                        <option value="other">Custom Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-[#17212B] mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.name@example.com"
                      className="w-full px-3.5 py-2.5 text-[14px] bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px] text-[#17212B] focus:border-[#16C2B0] focus:bg-white focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-[#17212B] mb-1.5">
                      Property Details or Questions
                    </label>
                    <textarea
                      rows={4}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Tell us about the property (e.g. 3 BHK flat in Bhanugudi, needs kitchen degreasing and sofa extraction)..."
                      className="w-full px-3.5 py-2.5 text-[14px] bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px] text-[#17212B] focus:border-[#16C2B0] focus:bg-white focus:outline-none transition-all"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                    <Button
                      variant="primary"
                      size="md"
                      type="submit"
                      className="w-full sm:w-auto"
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      Submit Message
                    </Button>

                    <span className="text-[12px] text-[#64748B]">
                      Or skip the wait and{' '}
                      <button
                        type="button"
                        onClick={onOpenBooking}
                        className="text-[#16C2B0] font-semibold underline hover:text-[#078F82]"
                      >
                        calculate price instantly
                      </button>
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
