import type { ServiceItem, TestimonialItem, TrustItem, ProcessStep, WhyChooseItem } from '../types';

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'For Homes', href: '/residential' },
  { name: 'For Business', href: '/commercial' },
  { name: 'About', href: '/about' },
  { name: 'Process', href: '/process' },
  { name: 'Contact', href: '/contact' },
];

export const TRUST_STRIP_ITEMS: TrustItem[] = [
  {
    icon: 'ShieldCheck',
    title: 'Founder Supervised',
    description: 'Direct hands-on quality oversight on every appointment',
  },
  {
    icon: 'Sparkles',
    title: 'Brand-New Hospital Gear',
    description: 'Fresh HEPA extractors & certified eco-safe bio sanitizers',
  },
  {
    icon: 'Clock',
    title: 'Transparent Flat Pricing',
    description: 'No hidden surcharges. Book in 60s with free slot changes',
  },
];

export const RESIDENTIAL_SERVICES: ServiceItem[] = [
  {
    id: 'res-standard',
    category: 'residential',
    title: 'Standard Cleaning',
    subtitle: 'Everyday Maintenance',
    description: 'Comprehensive regular upkeep covering sweeping, wet mopping, dusting, surface wipe-down, and trash clearing.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Professional cleaner dusting a bright modern living room',
    features: [
      'All living spaces, bedrooms & hallways',
      'Surface sanitization & dust removal',
      'Floor sweeping & microfiber wet mopping',
      'Waste bin emptying & bag replacement'
    ],
    startingPrice: '₹1,199',
    duration: '2.5 - 3 Hours',
    tag: 'Popular'
  },
  {
    id: 'res-deep',
    category: 'residential',
    title: 'Deep Cleaning',
    subtitle: 'Intensive Restoration',
    description: 'Heavy-duty clinical sanitization reaching hard-to-access corners, ceiling fixtures, baseboards, and grime buildup.',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Deep cleaning specialist scrubbing tile grout',
    features: [
      'Scale removal & grout sanitization',
      'Behind & underneath major furniture',
      'High ceiling corners & lighting fixtures',
      'Door frames, window tracks & switchplates'
    ],
    startingPrice: '₹2,499',
    duration: '4 - 6 Hours',
    tag: 'Signature'
  },
  {
    id: 'res-bathroom',
    category: 'residential',
    title: 'Bathroom Cleaning',
    subtitle: 'Tile & Sanitary Care',
    description: 'Hospital-grade descaling, ceramic tile scrubbing, shower screen buffing, and high-pressure steam sanitization.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Sparkling clean bathroom with sanitized fixtures',
    features: [
      'Hard water stain & limescale descaling',
      'Ceramic tile wall-to-floor acid-safe scrub',
      'Mirror, glass door & chrome polishing',
      'Drain disinfestation & odor neutralizer'
    ],
    startingPrice: '₹899',
    duration: '1.5 - 2 Hours',
    tag: 'Essential'
  },
  {
    id: 'res-kitchen',
    category: 'residential',
    title: 'Kitchen Cleaning',
    subtitle: 'Degreasing & Hygiene',
    description: 'Thorough degreasing of chimney exteriors, stovetops, countertop tiles, cabinet exteriors, and sink disinfestation.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Pristine modern kitchen countertop after professional cleaning',
    features: [
      'Industrial grease emulsification',
      'Countertops, backsplash & hob scrub',
      'Exterior cleaning of microwave & fridge',
      'Stainless steel sink bactericidal scrub'
    ],
    startingPrice: '₹1,499',
    duration: '2 - 3 Hours',
    tag: 'High Demand'
  },
  {
    id: 'res-vacuum',
    category: 'residential',
    title: 'Vacuuming & Mopping',
    subtitle: 'Floor Precision',
    description: 'HEPA-filter deep extraction for carpets, rugs, and upholstery followed by PH-neutral microfiber scrubbing on stone or wood.',
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Cleaner vacuuming rug with high filtration machine',
    features: [
      'Industrial HEPA allergen extraction',
      'Carpet & mattress surface dry vacuuming',
      'Italian marble & vitrified tile damp polish',
      'Edge & corner dust extraction'
    ],
    startingPrice: '₹799',
    duration: '1.5 Hours',
    tag: 'Quick'
  },
  {
    id: 'res-dusting',
    category: 'residential',
    title: 'Dusting Services',
    subtitle: 'Air & Surface Detail',
    description: 'Microfiber electrostatic treatment of architectural louvers, art frames, electronic consoles, and ornamental woodwork.',
    image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Detail dusting of bookshelves and interior woodwork',
    features: [
      'Electrostatic duster for delicate art & frames',
      'Curtain track & AC vent wiping',
      'Bookshelf & console surface care',
      'Zero chemical scratch-free cloths'
    ],
    startingPrice: '₹699',
    duration: '1 - 2 Hours',
    tag: 'Care'
  }
];

export const COMMERCIAL_SERVICES: ServiceItem[] = [
  {
    id: 'com-office',
    category: 'commercial',
    title: 'Office Cleaning',
    subtitle: 'Workplace Excellence',
    description: 'Desk sanitation, ergonomic chair dusting, common area maintenance, and conference room preparation for corporate teams.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Pristine corporate office space with clean workstations',
    features: [
      'Individual workstation wipe-down & sanitized keyboard surfaces',
      'Executive boardroom polish & glass board care',
      'Pantry hygiene & coffee station deep clean',
      'Daily, bi-weekly or custom shift schedules'
    ],
    startingPrice: '₹4,999 / mo',
    duration: 'Custom Contract',
    tag: 'Office'
  },
  {
    id: 'com-floor',
    category: 'commercial',
    title: 'Floor Maintenance',
    subtitle: 'Heavy Traffic Care',
    description: 'Rotary machine scrubbing, diamond buffing, and slip-resistant protective sealing for commercial terrazzo, granite, and vinyl.',
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Commercial floor polishing and maintenance in progress',
    features: [
      'High-speed single disc rotary buffing',
      'Granite & marble crystallization',
      'Slip-resistant industrial gloss sealant',
      'Grout line deep chemical extraction'
    ],
    startingPrice: '₹3,500',
    duration: 'Per 1000 Sq Ft',
    tag: 'Specialized'
  },
  {
    id: 'com-disinfect',
    category: 'commercial',
    title: 'Disinfection',
    subtitle: 'Pathogen Elimination',
    description: 'ULV cold fogging with certified virucidal compounds to sterilize high-touch corporate, clinic, and education spaces.',
    image: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Disinfection misting in modern commercial premises',
    features: [
      'ULV cold mist aerosol dispersion',
      'Non-corrosive, non-toxic bio-compounds',
      '99.999% microbial clearance standard',
      'Safe for electronics, monitors & paperwork'
    ],
    startingPrice: '₹2,200',
    duration: '1 - 3 Hours',
    tag: 'Clinical'
  },
  {
    id: 'com-waste',
    category: 'commercial',
    title: 'Waste Removal',
    subtitle: 'Responsible Disposal',
    description: 'Structured segregation of recyclables, electronic scrap, confidential shredding disposal, and scheduled municipality handover.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Organized recycling and eco-friendly waste bins',
    features: [
      'Dry & wet waste source segregation',
      'Eco-compliant corporate recycling audit',
      'Confidential document safe disposal',
      'Scheduled daily or weekly removal cycles'
    ],
    startingPrice: '₹1,800 / mo',
    duration: 'Contractual',
    tag: 'Eco-System'
  },
  {
    id: 'com-event',
    category: 'commercial',
    title: 'Post-Event Cleaning',
    subtitle: 'Rapid Venue Turnover',
    description: 'Fast-response cleanup squads for banquets, corporate town halls, exhibitions, and venue restoration within hours.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Cleaned corporate event venue after conference',
    features: [
      'Immediate trash clearance & floor restoration',
      'Restroom emergency restock & sanitization',
      'Stage, lobby & banquet perimeter care',
      'Rapid turnaround team mobilization'
    ],
    startingPrice: '₹5,500',
    duration: '3 - 5 Hours',
    tag: 'Rapid'
  },
  {
    id: 'com-scheduled',
    category: 'commercial',
    title: 'Scheduled Cleaning',
    subtitle: 'Managed Facility Contracts',
    description: 'Dedicated janitorial personnel with on-site supervisor, automated quality audits, and transparent service-level agreements.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Professional cleaning team reviewing facility checklist',
    features: [
      'Dedicated background-checked uniformed staff',
      'On-site supervisor with digital audit logs',
      'All equipment & chemicals provided',
      'Strict contractual SLA & liability protection'
    ],
    startingPrice: 'Custom Plan',
    duration: 'Annual / Semi-Annual',
    tag: 'Turnkey'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Choose Your Service',
    description: 'Select your preferred residential tier or commercial scope with upfront transparent pricing.',
    details: 'Customize room count, square footage, and specialized focus areas without hidden charges.'
  },
  {
    step: '02',
    title: 'Schedule a Time',
    description: 'Pick an exact date and arrival window that aligns seamlessly with your schedule.',
    details: 'Receive instant confirmation and real-time WhatsApp updates directly with your assigned supervisor.'
  },
  {
    step: '03',
    title: 'Enjoy a Cleaner Space',
    description: 'Our uniformed crew arrives with brand-new equipment and completes the clinical checklist.',
    details: 'Inspect the results alongside our lead supervisor. 100% satisfaction or we re-clean free.'
  }
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    icon: 'ShieldCheck',
    title: 'Founder-Led Quality',
    description: 'Every job is treated as a reputation-defining visit. The founding team directly monitors training and audits every single checklist.'
  },
  {
    icon: 'Sparkles',
    title: 'Hospital-Grade Eco Sanitizers',
    description: 'We use non-toxic, child-safe, and pet-friendly biodegradable solutions engineered to eliminate 99.9% of harmful bacteria.'
  },
  {
    icon: 'Receipt',
    title: 'Transparent Flat Pricing',
    description: 'Zero hidden fees, zero surprise surcharges on arrival. The rate you see during booking is the exact amount you pay.'
  },
  {
    icon: 'CheckCircle2',
    title: '100% Free Re-Clean Guarantee',
    description: 'If any spot within your agreed scope does not meet our clinical standard, we re-clean it free of charge within 24 hours.'
  },
  {
    icon: 'CalendarSync',
    title: 'Flexible Rescheduling',
    description: 'Plans change. Easily reschedule your appointment up to 2 hours prior to arrival with zero cancellation penalties.'
  },
  {
    icon: 'Users',
    title: 'Police-Verified Personnel',
    description: 'Every team member passes strict identity verification and background checks so you can trust who enters your space.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: 'Subra made booking a deep clean incredibly easy. The founder personally checked in, the crew arrived on time in clean uniforms, and our kitchen and bathrooms looked brand new.',
    author: 'Priya S.',
    role: 'Homeowner',
    serviceType: 'Residential Deep Clean',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80',
    location: 'Kakinada'
  },
  {
    id: 'test-2',
    quote: 'As a newly launched co-working floor in Rajahmundry, we needed a responsive cleaning partner who cares as much about details as we do. Subra has been outstanding.',
    author: 'Arvind K.',
    role: 'Workspace Manager',
    serviceType: 'Commercial Maintenance',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
    location: 'Rajahmundry'
  },
  {
    id: 'test-3',
    quote: 'They brought industrial vacuum extractors and eco-friendly citrus cleaners that smelled fresh without harsh chemical fumes. You can feel their genuine passion for quality.',
    author: 'Sunita R.',
    role: 'Resident',
    serviceType: 'Villa Deep Sanitization',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80',
    location: 'East Godavari'
  }
];

export const FAQ_ITEMS = [
  {
    q: 'Do I need to supply cleaning chemicals or equipment?',
    a: 'No. Our team arrives fully equipped with hospital-grade, eco-certified chemicals, industrial HEPA vacuums, fresh microfiber cloth sets, and specialized scrubbers.'
  },
  {
    q: 'Are your cleaners verified and trustworthy?',
    a: 'Yes, 100%. Every Subra team member undergoes formal identity and police background verification, and is accompanied by an on-site supervisor.'
  },
  {
    q: 'How long does a deep cleaning session take?',
    a: 'A standard 2–3 BHK apartment deep clean takes approximately 3.5 to 5 hours with our dedicated 2-to-3 person crew.'
  },
  {
    q: 'What is your satisfaction guarantee policy?',
    a: 'If any area within the agreed scope does not meet clinical standards, notify us within 24 hours and we will send a team to re-clean the area free of charge.'
  }
];
