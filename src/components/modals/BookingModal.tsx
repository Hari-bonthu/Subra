import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  Home,
  Building2,
  ArrowRight,
  ArrowLeft,
  MessageSquare,
  Phone,
  Sparkles,
  MapPin,
  Calendar,
} from 'lucide-react';
import { RESIDENTIAL_SERVICES, COMMERCIAL_SERVICES } from '../../data/siteData';
import type { ServiceItem } from '../../types';
import { Button } from '../ui/Button';
import { isValidIndianPhone, formatIndianPhone } from '../../utils/validation';
import { trackConversion } from '../../utils/analytics';

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
  const [phoneError, setPhoneError] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [city, setCity] = useState<string>('Rajahmundry');
  const [notes, setNotes] = useState<string>('');
  const [whatsappUrl, setWhatsappUrl] = useState<string>('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentServices =
    category === 'residential' ? RESIDENTIAL_SERVICES : COMMERCIAL_SERVICES;
  const currentServiceObj =
    currentServices.find((s) => s.id === selectedServiceId) || currentServices[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidIndianPhone(phone)) {
      setPhoneError('Please enter a valid 10-digit mobile number (e.g. 98765 43210)');
      return;
    }
    setPhoneError('');

    const scopeLabel =
      category === 'residential'
        ? homeSize.toUpperCase()
        : `${officeSqft} sq ft`;

    const slotLabels: Record<string, string> = {
      morning: 'Morning (8:00 AM - 12:00 PM)',
      afternoon: 'Afternoon (12:00 PM - 4:00 PM)',
      evening: 'Evening (4:00 PM - 8:00 PM)',
    };

    const freqLabels: Record<string, string> = {
      'one-time': 'One-Time Service',
      'monthly': 'Monthly Maintenance',
      'bi-weekly': 'Bi-Weekly Upkeep',
      'weekly': 'Weekly Care',
    };

    const message = [
      `*New Service Inquiry — SUBRA House Service*`,
      `--------------------------------------`,
      `• *Customer:* ${name}`,
      `• *Phone:* ${formatIndianPhone(phone)}`,
      `• *Service:* ${currentServiceObj.title} (${category === 'residential' ? 'Residential' : 'Commercial'})`,
      `• *Property Scope:* ${scopeLabel}`,
      `• *Preferred Date:* ${date || 'Flexible / As soon as possible'}`,
      `• *Arrival Window:* ${slotLabels[timeSlot] || timeSlot}`,
      `• *Frequency:* ${freqLabels[frequency] || frequency}`,
      `• *City:* ${city}`,
      `• *Address:* ${address}`,
      notes.trim() ? `• *Special Requirements:* ${notes.trim()}` : null,
      `--------------------------------------`,
      `_Please share custom quote and confirm worker availability._`,
    ]
      .filter(Boolean)
      .join('\n');

    const encodedMessage = encodeURIComponent(message);
    const waLink = `https://wa.me/919392430205?text=${encodedMessage}`;
    setWhatsappUrl(waLink);

    trackConversion('booking_modal_submit', {
      source: 'booking_modal_form',
      category,
      service: currentServiceObj.title,
      city,
    });

    // Automatically trigger WhatsApp in a new tab/window
    try {
      window.open(waLink, '_blank', 'noopener,noreferrer');
    } catch {
      // Browser popup blocker fallback
    }

    setStep(4);
  };

  const resetAndClose = () => {
    setStep(1);
    setWhatsappUrl('');
    setPhoneError('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#17212B]/60 backdrop-blur-xs overflow-y-auto"
      onClick={resetAndClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-[8px] shadow-[0_24px_60px_rgba(23,33,43,0.2)] border border-[#E2E8F0] overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#F8FAFC] px-6 py-4 border-b border-[#E2E8F0] flex items-center justify-between shrink-0">
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
                {step === 4 ? 'Inquiry Sent to WhatsApp' : 'Get Custom Quote & Book'}
              </h3>
              <p className="font-sans text-[12px] text-[#64748B] mt-0.5">
                {step === 1 && 'Step 1 of 3: Service & Space Requirements'}
                {step === 2 && 'Step 2 of 3: Preferred Date & Time Window'}
                {step === 3 && 'Step 3 of 3: Contact & Property Location'}
                {step === 4 && 'Direct WhatsApp & Phone Confirmation'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={resetAndClose}
            className="w-8 h-8 flex items-center justify-center text-[#94A3B8] hover:text-[#17212B] hover:bg-[#F1F5F4] rounded-[4px] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
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
                    className={`py-2 px-3 rounded-[4px] text-[13px] font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
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
                    className={`py-2 px-3 rounded-[4px] text-[13px] font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
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
                  Choose Service Scope
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-[190px] overflow-y-auto p-1">
                  {currentServices.map((srv) => (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setSelectedServiceId(srv.id)}
                      className={`p-3 rounded-[6px] border text-left transition-all cursor-pointer ${
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
                      <div className="text-[11.5px] text-[#64748B] mt-1 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-[#16C2B0]" />
                        <span>Custom Quote</span>
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
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
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
                        className={`py-2 rounded-[4px] text-[13px] font-bold border transition-all cursor-pointer ${
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
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['1000', '2500', '5000', '10000+'].map((sq) => (
                      <button
                        key={sq}
                        type="button"
                        onClick={() => setOfficeSqft(sq)}
                        className={`py-2 rounded-[4px] text-[13px] font-bold border transition-all cursor-pointer ${
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

              {/* Requirement Summary Card */}
              <div className="bg-[#F8FAFC] rounded-[6px] p-4 border border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                    Selected Scope
                  </span>
                  <div className="font-display font-bold text-[16px] sm:text-[17px] text-[#17212B]">
                    {currentServiceObj.title} &bull;{' '}
                    <span className="text-[#078F82]">
                      {category === 'residential' ? homeSize.toUpperCase() : `${officeSqft} sq ft`}
                    </span>
                  </div>
                  <p className="text-[12px] text-[#64748B] mt-0.5">
                    Zero hidden charges &bull; Requirement-based worker allocation
                  </p>
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
                />
                <p className="text-[11.5px] text-[#64748B] mt-1">
                  Leave empty if you are flexible or need emergency same-day dispatch.
                </p>
              </div>

              <div>
                <label className="block text-[12px] font-bold font-sans uppercase tracking-wider text-[#17212B] mb-2">
                  Preferred Arrival Window
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'morning', label: 'Morning', time: '8:00 AM - 12:00 PM' },
                    { id: 'afternoon', label: 'Afternoon', time: '12:00 PM - 4:00 PM' },
                    { id: 'evening', label: 'Evening', time: '4:00 PM - 8:00 PM' },
                  ].map((slot) => (
                    <button
                      key={slot.id}
                      type="button"
                      onClick={() => setTimeSlot(slot.id)}
                      className={`p-3 rounded-[6px] border text-left transition-all cursor-pointer ${
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
                  Frequency Preference
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'one-time', title: 'One-Time', desc: 'Single session clean' },
                    { id: 'monthly', title: 'Monthly', desc: 'Regular upkeep' },
                    { id: 'bi-weekly', title: 'Bi-Weekly', desc: 'Frequent maintenance' },
                  ].map((freq) => (
                    <button
                      key={freq.id}
                      type="button"
                      onClick={() => setFrequency(freq.id)}
                      className={`p-3 rounded-[6px] border text-left transition-all cursor-pointer ${
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
                    Your Full Name *
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
                    Mobile Number (WhatsApp) *
                  </label>
                  <input
                    id="booking-phone"
                    name="booking-phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (phoneError) setPhoneError('');
                    }}
                    className={`w-full h-11 px-3.5 rounded-[4px] border text-[14px] text-[#17212B] outline-none transition-colors ${
                      phoneError
                        ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-[#E2E8F0] focus:border-[#16C2B0] focus:ring-1 focus:ring-[#16C2B0]'
                    }`}
                  />
                  {phoneError && (
                    <p className="font-sans text-[11.5px] text-red-600 mt-1 font-medium">
                      {phoneError}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="booking-city"
                    className="block text-[12px] font-bold font-sans uppercase tracking-wider text-[#17212B] mb-1"
                  >
                    City / Region *
                  </label>
                  <select
                    id="booking-city"
                    name="booking-city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full h-11 px-3.5 rounded-[4px] border border-[#E2E8F0] text-[14px] text-[#17212B] focus:border-[#16C2B0] focus:ring-1 focus:ring-[#16C2B0] outline-none bg-white"
                  >
                    <option value="Rajahmundry">Rajahmundry</option>
                    <option value="Kakinada">Kakinada</option>
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
                    Street Address & Landmark *
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

              <div>
                <label
                  htmlFor="booking-notes"
                  className="block text-[12px] font-bold font-sans uppercase tracking-wider text-[#17212B] mb-1"
                >
                  Special Requirements / Specific Room Focus (Optional)
                </label>
                <textarea
                  id="booking-notes"
                  name="booking-notes"
                  rows={2}
                  placeholder="e.g. Extra focus on kitchen chimney degreasing, or balconies require pressure washing..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-3 rounded-[4px] border border-[#E2E8F0] text-[13.5px] text-[#17212B] focus:border-[#16C2B0] focus:ring-1 focus:ring-[#16C2B0] outline-none resize-none"
                />
              </div>

              {/* Order Summary Recap */}
              <div className="bg-[#ECFDF9] rounded-[6px] p-4 border border-[#D6F8F2] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[13px]">
                <div>
                  <span className="font-bold text-[#078F82]">Inquiry Target: </span>
                  <span className="text-[#17212B] font-medium">
                    {currentServiceObj.title} ({category === 'residential' ? homeSize.toUpperCase() : `${officeSqft} sq ft`})
                  </span>
                </div>
                <div className="text-[12px] text-[#078F82] font-semibold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#16C2B0]" />
                  <span>Custom Quote on WhatsApp</span>
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
                  icon={<MessageSquare className="w-4 h-4" />}
                >
                  Submit & Chat on WhatsApp
                </Button>
              </div>
            </form>
          )}

          {step === 4 && (
            <div className="text-center py-4 space-y-5">
              <div className="w-14 h-14 rounded-full bg-[#ECFDF9] text-[#16C2B0] border border-[#D6F8F2] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 stroke-[2.2]" />
              </div>

              <div>
                <h4 className="font-display font-extrabold text-[22px] sm:text-[24px] text-[#17212B]">
                  Inquiry Prepared & WhatsApp Opened!
                </h4>
                <p className="font-sans text-[14px] sm:text-[15px] text-[#64748B] max-w-[480px] mx-auto mt-2">
                  Thank you, <span className="font-bold text-[#17212B]">{name || 'valued customer'}</span>. Your requirement details have been structured to connect directly with our founder and lead supervisor.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackConversion('whatsapp_click', { source: 'booking_modal_step4', phone: '+91 93924 30205' })}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[6px] bg-[#25D366] text-white font-display font-bold text-[14.5px] hover:bg-[#20bd5a] transition-all shadow-sm hover:shadow-md cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-white text-white" />
                  <span>Open WhatsApp Chat</span>
                </a>

                <a
                  href="tel:+919704380535"
                  onClick={() => trackConversion('call_dispatch', { source: 'booking_modal_step4', phone: '+91 97043 80535' })}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[6px] bg-[#F8FAFC] border border-[#E2E8F0] text-[#17212B] font-sans font-semibold text-[14px] hover:bg-[#F1F5F4] transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#16C2B0]" />
                  <span>Call: +91 97043 80535</span>
                </a>
              </div>

              {/* Inquiry Recap Card */}
              <div className="bg-[#F8FAFC] p-4 rounded-[6px] border border-[#E2E8F0] text-left max-w-[500px] mx-auto text-[13px] space-y-1.5 text-[#64748B]">
                <div className="flex items-center justify-between text-[#17212B] font-semibold border-b border-[#E2E8F0] pb-2 mb-2">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#16C2B0]" />
                    <span>Inquiry Overview</span>
                  </span>
                  <span className="text-[#078F82] font-mono text-[12px]">{category.toUpperCase()}</span>
                </div>
                <div>
                  <span className="font-medium text-[#17212B]">Service: </span>
                  {currentServiceObj.title} ({category === 'residential' ? homeSize.toUpperCase() : `${officeSqft} sq ft`})
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#94A3B8]" />
                  <span>{date ? `Scheduled for ${date} (${timeSlot})` : 'Flexible Date / On Demand'}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#94A3B8]" />
                  <span className="truncate">{address}, {city}</span>
                </div>
                <p className="text-[11.5px] text-[#94A3B8] pt-2 border-t border-[#E2E8F0]">
                  *Our supervisor will confirm worker availability and quote directly on WhatsApp within 15 minutes.
                </p>
              </div>

              <div className="pt-2">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={resetAndClose}
                >
                  Close & Return to Website
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
