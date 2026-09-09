import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  Home,
  Building2,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import { RESIDENTIAL_SERVICES, COMMERCIAL_SERVICES } from '../../data/siteData';
import type { ServiceItem } from '../../types';
import { Button } from '../ui/Button';


interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: ServiceItem | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState<'residential' | 'commercial'>(
    initialService?.category || 'residential'
  );
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialService?.id || (category === 'residential' ? 'res-deep' : 'com-office')
  );
  const [homeSize, setHomeSize] = useState<string>('2bhk');
  const [officeSqft, setOfficeSqft] = useState<string>('2000');
  const [frequency, setFrequency] = useState<string>('one-time');
  const [date, setDate] = useState<string>('');
  const [timeSlot, setTimeSlot] = useState<string>('morning');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [city, setCity] = useState<string>('Kakinada');
  const [bookingReference, setBookingReference] = useState<string>('');

  if (!isOpen) return null;

  const currentServices =
    category === 'residential' ? RESIDENTIAL_SERVICES : COMMERCIAL_SERVICES;
  const currentServiceObj =
    currentServices.find((s) => s.id === selectedServiceId) || currentServices[0];

  // Dynamic estimate calculation
  const calculateEstimate = () => {
    let base = 1499;
    if (category === 'residential') {
      if (selectedServiceId === 'res-deep') base = 2499;
      else if (selectedServiceId === 'res-standard') base = 1199;
      else if (selectedServiceId === 'res-kitchen') base = 1499;
      else if (selectedServiceId === 'res-bathroom') base = 899;
      else if (selectedServiceId === 'res-vacuum') base = 799;
      else if (selectedServiceId === 'res-dusting') base = 699;

      if (homeSize === '1bhk') base *= 0.85;
      else if (homeSize === '3bhk') base *= 1.35;
      else if (homeSize === '4bhk') base *= 1.7;
      else if (homeSize === 'villa') base *= 2.4;
    } else {
      if (selectedServiceId === 'com-office') base = 4999;
      else if (selectedServiceId === 'com-floor') base = 3500;
      else if (selectedServiceId === 'com-disinfect') base = 2200;
      else if (selectedServiceId === 'com-event') base = 5500;
      else base = 3000;

      const sq = parseInt(officeSqft) || 1000;
      base = Math.round((base * (sq / 1000)));
    }

    if (frequency === 'monthly') base *= 0.85; // 15% discount
    else if (frequency === 'bi-weekly') base *= 0.8; // 20% discount

    return Math.round(base);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'SUB-' + Math.floor(100000 + Math.random() * 900000);
    setBookingReference(ref);
    setStep(4);
  };

  const resetAndClose = () => {
    setStep(1);
    setBookingReference('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#17212B]/60 backdrop-blur-xs overflow-y-auto"
      onClick={resetAndClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-[8px] shadow-[0_24px_60px_rgba(23,33,43,0.2)] border border-[#E2E8F0] overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#F8FAFC] px-6 py-4 border-b border-[#E2E8F0] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-[6px] bg-white border border-[#E2E8F0] p-1 flex items-center justify-center shrink-0 shadow-xs">
              <img
                src={`${import.meta.env.BASE_URL}logo-sm.webp`}
                alt="SUBRA"
                width={28}
                height={26}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="font-display font-bold text-[17px] text-[#17212B] leading-none">
                {step === 4 ? 'Booking Confirmed' : 'Book a Cleaning / Get Quote'}
              </h3>
              <p className="font-sans text-[12px] text-[#64748B] mt-0.5">
                {step === 1 && 'Step 1 of 3: Service & Requirements'}
                {step === 2 && 'Step 2 of 3: Date & Preferred Window'}
                {step === 3 && 'Step 3 of 3: Contact & Address'}
                {step === 4 && 'Transparent, Fixed & Insured Service'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={resetAndClose}
            className="p-1.5 text-[#94A3B8] hover:text-[#17212B] hover:bg-[#F1F5F4] rounded-[4px] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {step === 1 && (
            <div className="space-y-5">
              {/* Category Segmented Control */}
              <div>
                <label className="block text-[12px] font-bold font-sans uppercase tracking-wider text-[#17212B] mb-2">
                  Select Environment
                </label>
                <div className="grid grid-cols-2 gap-2 bg-[#F1F5F4] p-1 rounded-[6px] border border-[#E2E8F0]">
                  <button
                    type="button"
                    onClick={() => {
                      setCategory('residential');
                      setSelectedServiceId('res-deep');
                    }}
                    className={`py-2 px-3 rounded-[4px] text-[13px] font-semibold flex items-center justify-center gap-2 transition-all ${
                      category === 'residential'
                        ? 'bg-white text-[#17212B] shadow-xs'
                        : 'text-[#64748B] hover:text-[#17212B]'
                    }`}
                  >
                    <Home className="w-4 h-4 text-[#16C2B0]" />
                    <span>Residential Home</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setCategory('commercial');
                      setSelectedServiceId('com-office');
                    }}
                    className={`py-2 px-3 rounded-[4px] text-[13px] font-semibold flex items-center justify-center gap-2 transition-all ${
                      category === 'commercial'
                        ? 'bg-white text-[#17212B] shadow-xs'
                        : 'text-[#64748B] hover:text-[#17212B]'
                    }`}
                  >
                    <Building2 className="w-4 h-4 text-[#16C2B0]" />
                    <span>Commercial Office</span>
                  </button>
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-[12px] font-bold font-sans uppercase tracking-wider text-[#17212B] mb-2">
                  Choose Service Package
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-[190px] overflow-y-auto p-1">
                  {currentServices.map((srv) => (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setSelectedServiceId(srv.id)}
                      className={`p-3 rounded-[6px] border text-left transition-all ${
                        selectedServiceId === srv.id
                          ? 'border-[#16C2B0] bg-[#ECFDF9] text-[#078F82]'
                          : 'border-[#E2E8F0] hover:border-[#CBD5E1] bg-white text-[#17212B]'
                      }`}
                    >
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#16C2B0]">
                        {srv.subtitle}
                      </div>
                      <div className="font-display font-bold text-[14px] leading-snug mt-0.5 text-[#17212B]">
                        {srv.title}
                      </div>
                      <div className="text-[12px] font-medium text-[#64748B] mt-1">
                        from {srv.startingPrice}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Scope Options */}
              {category === 'residential' ? (
                <div>
                  <label className="block text-[12px] font-bold font-sans uppercase tracking-wider text-[#17212B] mb-2">
                    Property Configuration
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {[
                      { id: '1bhk', label: '1 BHK' },
                      { id: '2bhk', label: '2 BHK' },
                      { id: '3bhk', label: '3 BHK' },
                      { id: '4bhk', label: '4 BHK' },
                      { id: 'villa', label: 'Villa' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setHomeSize(item.id)}
                        className={`py-2 rounded-[4px] text-[13px] font-bold border transition-all ${
                          homeSize === item.id
                            ? 'bg-[#16C2B0] text-white border-[#16C2B0]'
                            : 'border-[#E2E8F0] bg-white text-[#17212B] hover:bg-[#F8FAFC]'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <label className="block text-[12px] font-bold font-sans uppercase tracking-wider text-[#17212B] mb-2">
                    Approximate Office Floor Area (Sq. Ft.)
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {['1000', '2500', '5000', '10000+'].map((sq) => (
                      <button
                        key={sq}
                        type="button"
                        onClick={() => setOfficeSqft(sq)}
                        className={`py-2 rounded-[4px] text-[13px] font-bold border transition-all ${
                          officeSqft === sq
                            ? 'bg-[#16C2B0] text-white border-[#16C2B0]'
                            : 'border-[#E2E8F0] bg-white text-[#17212B] hover:bg-[#F8FAFC]'
                        }`}
                      >
                        {sq} sq ft
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Live Estimate Card */}
              <div className="bg-[#F8FAFC] rounded-[6px] p-4 border border-[#E2E8F0] flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                    Transparent Flat Estimate
                  </span>
                  <div className="font-display font-extrabold text-[24px] text-[#17212B]">
                    ₹{calculateEstimate().toLocaleString()}
                    <span className="text-[12px] font-normal text-[#64748B] ml-1">
                      (All taxes & equipment incl.)
                    </span>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="md"
                  onClick={() => setStep(2)}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="booking-date"
                  className="block text-[12px] font-bold font-sans uppercase tracking-wider text-[#17212B] mb-2"
                >
                  Select Preferred Date
                </label>
                <input
                  id="booking-date"
                  name="booking-date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full h-11 px-3.5 rounded-[4px] border border-[#E2E8F0] text-[14px] text-[#17212B] focus:border-[#16C2B0] focus:ring-1 focus:ring-[#16C2B0] outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-[12px] font-bold font-sans uppercase tracking-wider text-[#17212B] mb-2">
                  Preferred Arrival Window
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: 'morning', label: 'Morning', time: '8:00 AM - 12:00 PM' },
                    { id: 'afternoon', label: 'Afternoon', time: '12:00 PM - 4:00 PM' },
                    { id: 'evening', label: 'Evening', time: '4:00 PM - 8:00 PM' },
                  ].map((slot) => (
                    <button
                      key={slot.id}
                      type="button"
                      onClick={() => setTimeSlot(slot.id)}
                      className={`p-3 rounded-[6px] border text-left transition-all ${
                        timeSlot === slot.id
                          ? 'border-[#16C2B0] bg-[#ECFDF9] text-[#078F82]'
                          : 'border-[#E2E8F0] hover:border-[#CBD5E1] bg-white text-[#17212B]'
                      }`}
                    >
                      <div className="font-display font-bold text-[14px]">{slot.label}</div>
                      <div className="text-[11px] text-[#64748B] mt-0.5">{slot.time}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-bold font-sans uppercase tracking-wider text-[#17212B] mb-2">
                  Frequency Plan
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: 'one-time', title: 'One-Time', desc: 'Standard single clean' },
                    { id: 'monthly', title: 'Monthly', desc: 'Save 15% recurring' },
                    { id: 'bi-weekly', title: 'Bi-Weekly', desc: 'Save 20% recurring' },
                  ].map((freq) => (
                    <button
                      key={freq.id}
                      type="button"
                      onClick={() => setFrequency(freq.id)}
                      className={`p-3 rounded-[6px] border text-left transition-all ${
                        frequency === freq.id
                          ? 'border-[#16C2B0] bg-[#ECFDF9] text-[#078F82]'
                          : 'border-[#E2E8F0] hover:border-[#CBD5E1] bg-white text-[#17212B]'
                      }`}
                    >
                      <div className="font-display font-bold text-[13px]">{freq.title}</div>
                      <div className="text-[11px] text-[#64748B] mt-0.5">{freq.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between">
                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => setStep(1)}
                  icon={<ArrowLeft className="w-4 h-4" />}
                  iconPosition="left"
                >
                  Back
                </Button>

                <Button
                  variant="primary"
                  size="md"
                  onClick={() => setStep(3)}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Next: Contact Info
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="booking-name"
                    className="block text-[12px] font-bold font-sans uppercase tracking-wider text-[#17212B] mb-1"
                  >
                    Your Full Name
                  </label>
                  <input
                    id="booking-name"
                    name="booking-name"
                    type="text"
                    required
                    placeholder="e.g. Ramesh Varma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full h-11 px-3.5 rounded-[4px] border border-[#E2E8F0] text-[14px] text-[#17212B] focus:border-[#16C2B0] focus:ring-1 focus:ring-[#16C2B0] outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="booking-phone"
                    className="block text-[12px] font-bold font-sans uppercase tracking-wider text-[#17212B] mb-1"
                  >
                    Mobile Number (for SMS & WhatsApp)
                  </label>
                  <input
                    id="booking-phone"
                    name="booking-phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full h-11 px-3.5 rounded-[4px] border border-[#E2E8F0] text-[14px] text-[#17212B] focus:border-[#16C2B0] focus:ring-1 focus:ring-[#16C2B0] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="booking-city"
                    className="block text-[12px] font-bold font-sans uppercase tracking-wider text-[#17212B] mb-1"
                  >
                    City / Area
                  </label>
                  <select
                    id="booking-city"
                    name="booking-city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full h-11 px-3.5 rounded-[4px] border border-[#E2E8F0] text-[14px] text-[#17212B] focus:border-[#16C2B0] focus:ring-1 focus:ring-[#16C2B0] outline-none bg-white"
                  >
                    <option value="Kakinada">Kakinada</option>
                    <option value="Rajahmundry">Rajahmundry</option>
                    <option value="Amalapuram">Amalapuram</option>
                    <option value="Samalkota">Samalkota</option>
                    <option value="East Godavari Rural">Other East Godavari</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="booking-address"
                    className="block text-[12px] font-bold font-sans uppercase tracking-wider text-[#17212B] mb-1"
                  >
                    Complete Street Address & Landmark
                  </label>
                  <input
                    id="booking-address"
                    name="booking-address"
                    type="text"
                    required
                    placeholder="Apartment / Flat No, Street, Landmark"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full h-11 px-3.5 rounded-[4px] border border-[#E2E8F0] text-[14px] text-[#17212B] focus:border-[#16C2B0] focus:ring-1 focus:ring-[#16C2B0] outline-none"
                  />
                </div>
              </div>

              {/* Order Summary Recap */}
              <div className="bg-[#ECFDF9] rounded-[6px] p-4 border border-[#D6F8F2] flex items-center justify-between text-[13px]">
                <div>
                  <span className="font-bold text-[#078F82]">Selected: </span>
                  <span className="text-[#17212B] font-medium">
                    {currentServiceObj.title} ({category === 'residential' ? homeSize.toUpperCase() : `${officeSqft} sqft`})
                  </span>
                </div>
                <div className="font-display font-extrabold text-[18px] text-[#078F82]">
                  ₹{calculateEstimate().toLocaleString()}
                </div>
              </div>

              <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between">
                <Button
                  variant="secondary"
                  size="md"
                  type="button"
                  onClick={() => setStep(2)}
                  icon={<ArrowLeft className="w-4 h-4" />}
                  iconPosition="left"
                >
                  Back
                </Button>

                <Button
                  variant="primary"
                  size="md"
                  type="submit"
                  icon={<CheckCircle2 className="w-4 h-4" />}
                >
                  Confirm & Reserve Slot
                </Button>
              </div>
            </form>
          )}

          {step === 4 && (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#ECFDF9] text-[#16C2B0] border border-[#D6F8F2] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9 stroke-[2.2]" />
              </div>

              <h4 className="font-display font-extrabold text-[24px] text-[#17212B]">
                Your Slot Is Confirmed!
              </h4>

              <p className="font-sans text-[15px] text-[#64748B] max-w-[460px] mx-auto">
                Thank you, <span className="font-bold text-[#17212B]">{name || 'valued customer'}</span>. A lead supervisor has been assigned to your booking. We have sent the confirmation & crew ID card to <span className="font-semibold text-[#17212B]">{phone || 'your phone'}</span>.
              </p>

              <div className="inline-block bg-[#F8FAFC] px-5 py-3 rounded-[6px] border border-[#E2E8F0]">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">
                  Booking Reference Number
                </div>
                <div className="font-display font-mono font-bold text-[20px] text-[#078F82] tracking-wider mt-0.5">
                  {bookingReference}
                </div>
              </div>

              <div className="pt-4">
                <Button
                  variant="primary"
                  size="md"
                  onClick={resetAndClose}
                >
                  Return to Website
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
