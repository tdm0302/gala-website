"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  MapPin,
  ChevronDown,
  ArrowRight,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const galaCountdownTarget = new Date(2026, 3, 25, 18, 0, 0);
const venueName = "Durham Convention Centre";
const venueAddress = "630 Beck Crescent, Ajax, Ontario";
const venueSearchQuery = "Durham Convention Centre Ajax Ontario";
const venueLatitude = "43.945062";
const venueLongitude = "-78.895891";
const venueDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(venueSearchQuery)}&travelmode=driving`;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const tickets = [
  {
    title: "FBIT & FSc Student",
    price: "$45",
    description:
      "For undergraduate and graduate students in the Faculty of Business & IT and Faculty of Science.",
  },
  {
    title: "General Student",
    price: "$50",
    description:
      "For undergraduate and graduate students from all other faculties at Ontario Tech.",
  },
  {
    title: "Alumni",
    price: "$55",
    description:
      "For all Ontario Tech alumni attending the gala.",
  },
  {
    title: "External Guest",
    price: "$65",
    description:
      "For guests and students from outside Ontario Tech.",
  },
  {
    title: "VIP Table Ticket (10 Seats)",
    price: "$450",
    description:
      "Reserved VIP 10-seat table seating, perfect for friend groups, mixed guests, and those bringing external +1s.",
    featured: true,
  },
];

const highlights = [
  {
    title: "Cocktail Reception",
    text: "Signature mocktails, arrival photos, luxe lobby styling, and a polished welcome experience.",
  },
  {
    title: "Buffet Gala Dinner",
    text: "A fully dressed main hall with formal dining, elegant décor, and dramatic lighting.",
  },
  {
    title: "Awards & Scholarships",
    text: "A refined stage program celebrating standout students and society achievements.",
  },
  {
    title: "Gala Games & Contests",
    text: "Interactive games, raffle moments, and crowd contests that keep the energy high throughout the evening.",
  },
  {
    title: "Late-Night Energy",
    text: "A dance floor finale, music, social programming, and a memorable late-night reveal.",
  },
];

const programSchedule = [
  {
    title: "Cocktail Hour & Welcome Reception",
    time: "6:00 - 7:00",
    description:
      "Guest arrival, reception photos, and a polished welcome with signature non-alcoholic beverages and social mingling.",
  },
  {
    title: "Entertainment & Networking",
    time: "7:00 - 7:45",
    description:
      "Live atmosphere programming and open networking time before dinner service begins.",
  },
  {
    title: "Dinner Service",
    time: "7:45 - 9:00",
    description:
      "Full-course dinner service featuring the gala menu in a formal seated setting.",
  },
  {
    title: "Awards Presentation & Raffle Draw",
    time: "9:00 - 9:30",
    description:
      "Stage recognition for student achievements followed by raffle draws and celebration moments.",
  },
  {
    title: "Live Performance",
    time: "9:30 - 10:00",
    description:
      "Featured live performance segment to transition the evening from ceremony to celebration.",
  },
  {
    title: "After Party & Dancing",
    time: "10:00 - 1:00",
    description:
      "Dance floor, music, social programming, and late-night energy to close out the gala night.",
  },
];

const menuCategories = [
  {
    title: "Appetizers",
    items: [
      "Bruschetta",
      "Breaded Shrimp",
      "Chicken Souvlaki Skewers",
      "Vegetable Spring Rolls",
      "Oysters",
    ],
  },
  {
    title: "First Course",
    items: ["Garden Salad", "Caesar Salad"],
  },
  {
    title: "Main Entree (Served with Sides)",
    items: ["Chicken Parmesan", "Salmon Fillet", "Eggplant Parmesan"],
  },
  {
    title: "Sides",
    items: ["Penne with Rose Sauce", "Steamed Vegetables", "Roasted Potatoes"],
  },
  {
    title: "Dessert",
    items: ["Assorted Pastries", "Assorted Cakes", "Fresh Fruit Tray"],
  },
  {
    title: "Late Night Station",
    items: ["Poutine"],
  },
];

const faqs = [
  {
    q: "What is the dress code?",
    a: "Formal black tie attire with a subtle Monte Carlo influence. Bow ties are encouraged, and guests are invited to dress to impress. Think colours like black, white, gold, silver, red.",
  },
  {
    q: "Where is the event?",
    a: "Durham Convention Centre, 630 Beck Crescent, Ajax, Ontario.",
  },
  {
    q: "When do doors open?",
    a: "Doors open at 6:00 PM and the gala concludes at 1:00 AM.",
  },
  {
    q: "Where do I buy tickets?",
    a: "Tickets are available online through shop.otubitsoc.com.",
  },
  {
    q: "Who can attend?",
    a: "Ontario Tech students, alumni, staff, faculty, and external guests depending on ticket type.",
  },
  {
    q: "Will there be food?",
    a: "Yes. Guests will enjoy a buffet dinner, signature drinks, and a late-night snack service.",
  },
  {
    q: "Is the food marked for allergies?",
    a: "Yes. Food stations are clearly marked for allergies, and all food served is halal.",
  },
  {
    q: "Will there be drinks?",
    a: "Yes. There will be unlimited non-alcoholic drinks throughout the night, along with a cash bar for additional beverage purchases. Stay tuned for the customized drink menu.",
  },
  {
    q: "How do I get there?",
    a: "The Durham Convention Centre is accessible by car, public transit, and rideshare. We recommend carpooling or using rideshare services for the best experience.",
  },
  {
    q: "Is there parking available?",
    a: "Yes. Parking is available at the Durham Convention Centre free of charge.",
  },
  {
    q: "Are there any exams on the day of April 25th?",
    a: "April 25 falls within the exam period; however, no exams are currently scheduled, as it is designated as an emergency backup day. In the unlikely event that a ticket holder has an exam scheduled during the gala, they may be eligible for a refund. ",
  },
];

const galleryPhotos = [
  { src: "/bit_1.jpeg", alt: "BITSoc gala moment 1", label: "BITSoc" },
  { src: "/bit_2.jpeg", alt: "BITSoc gala moment 2", label: "BITSoc" },
  { src: "/bit_3.JPG", alt: "BITSoc gala moment 3", label: "BITSoc" },
  { src: "/bit_4.JPG", alt: "BITSoc gala moment 4", label: "BITSoc" },
  { src: "/sci_1.jpg", alt: "SciCo gala moment 1", label: "SciCo" },
  { src: "/sci_2.jpg", alt: "SciCo gala moment 2", label: "SciCo" },
  { src: "/sci_3.jpg", alt: "SciCo gala moment 3", label: "SciCo" },
  { src: "/sci_4.jpg", alt: "SciCo gala moment 4", label: "SciCo" },
];

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: React.ReactNode; text?: string }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="max-w-3xl"
    >
      <p className="text-xs uppercase tracking-[0.38em] text-amber-200/70">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold text-white md:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-base leading-8 text-neutral-300 md:text-lg">{text}</p> : null}
    </motion.div>
  );
}

function InfoPill({ icon: Icon, label, value }: { icon: React.ComponentType<any>; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <div className="flex items-center gap-2 text-amber-200/70">
        <Icon className="h-4 w-4" />
        <span className="text-[10px] uppercase tracking-[0.3em]">{label}</span>
      </div>
      <p className="mt-2 text-sm text-neutral-100 md:text-base">{value}</p>
    </div>
  );
}

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = React.useState(() => getTimeLeft());

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds },
  ];

  return (
    <div className="mx-auto mt-8 max-w-4xl">
      <p className="text-sm uppercase tracking-[0.35em] text-amber-200/80 md:text-base">
        The Biggest Night in Ontario Tech History Starts In...
      </p>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {timeBlocks.map((block) => (
          <div key={block.label} className="rounded-3xl border border-white/10 bg-white/5 px-4 py-5 text-center backdrop-blur-md">
            <p className="text-3xl font-semibold text-amber-300 md:text-4xl">{formatCountdownValue(block.value)}</p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.35em] text-neutral-400">{block.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function VenueDirectionsSection() {
  const [startingAddress, setStartingAddress] = React.useState("");

  function handleDirectionsSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedAddress = startingAddress.trim();
    const destination = encodeURIComponent(venueSearchQuery);

    if (!trimmedAddress) {
      window.open(venueDirectionsUrl, "_blank", "noopener,noreferrer");
      return;
    }

    const origin = encodeURIComponent(trimmedAddress);
    window.open(
      `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=driving`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  function handleUberBooking() {
    const trimmedAddress = startingAddress.trim();
    if (!trimmedAddress) {
      return;
    }

    const uberUrl = new URL("https://m.uber.com/go/pickup");
    uberUrl.searchParams.set("pickup[formatted_address]", trimmedAddress);
    uberUrl.searchParams.set("pickup[nickname]", "Pickup location");
    uberUrl.searchParams.set("dropoff[formatted_address]", venueAddress);
    uberUrl.searchParams.set("dropoff[nickname]", venueName);
    uberUrl.searchParams.set("dropoff[latitude]", venueLatitude);
    uberUrl.searchParams.set("dropoff[longitude]", venueLongitude);

    window.open(uberUrl.toString(), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="venue" className="border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto max-w-[88rem] px-6 py-20 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}>
            <div className="px-2 py-2 text-white">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-amber-200/70">Getting to the Venue</p>
                <h2 className="mt-4 max-w-none text-4xl font-semibold md:text-5xl xl:text-6xl">
                  Find Your Way to <span className="bg-gradient-to-b from-amber-100 via-amber-200 to-amber-400 bg-clip-text text-transparent">{venueName}</span>.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-300 md:text-lg">
                  Enter a starting address and we’ll open Google Maps with the route to the gala venue.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-amber-200/70">Venue</p>
                  <p className="mt-3 text-lg font-medium text-white"><a href="https://maps.app.goo.gl/M1MF951QBjapjHG97" target="_blank" rel="noopener noreferrer" className="text-inherit no-underline transition hover:text-amber-200">{venueName}</a></p>
                  <p className="mt-2 text-sm leading-7 text-neutral-300">{venueAddress}</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-amber-200/70">Map Access</p>
                  <a
                    href={venueDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex text-lg font-medium text-white no-underline transition hover:text-amber-200"
                  >
                    Open in Google Maps
                  </a>
                  <p className="mt-2 text-sm leading-7 text-neutral-300">Tap to view the location directly in Maps.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}>
            <div className="flex h-full flex-col px-2 py-2 text-white">
              <div>
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.2rem] border border-white/10">
                  <iframe
                    title="Durham Convention Centre map"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(venueSearchQuery)}&output=embed`}
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <form onSubmit={handleDirectionsSubmit} className="mt-6">
                <label htmlFor="starting-address" className="text-xs uppercase tracking-[0.35em] text-amber-200/70">
                  Starting address
                </label>
                <input
                  id="starting-address"
                  type="text"
                  value={startingAddress}
                  onChange={(event) => setStartingAddress(event.target.value)}
                  placeholder="Enter your starting address"
                  className="mt-3 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white outline-none transition placeholder:text-neutral-500 focus:border-amber-300/50 focus:bg-white/8"
                />
                <Button type="submit" className="mt-4 w-full rounded-2xl bg-amber-300 py-6 text-sm uppercase tracking-[0.24em] text-black hover:bg-amber-200">
                  Get Directions
                </Button>
                <Button
                  type="button"
                  onClick={handleUberBooking}
                  disabled={!startingAddress.trim()}
                  className="mt-3 w-full rounded-2xl border border-white/15 bg-white/5 py-6 text-sm uppercase tracking-[0.24em] text-white hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Book Uber to Venue
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function getTimeLeft() {
  const now = new Date().getTime();
  const distance = Math.max(galaCountdownTarget.getTime() - now, 0);

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / 1000 / 60) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  };
}

function formatCountdownValue(value: number) {
  return String(value).padStart(2, "0");
}

function PresidentsMessagesPage() {
  const placeholders = [
    {
      society: "BITSoc",
      accent: "from-amber-300/20 via-transparent to-transparent",
    },
    {
      society: "SciCo",
      accent: "from-sky-300/20 via-transparent to-transparent",
    },
  ];

  return (
    <section id="presidents-messages" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
      <SectionHeading
        eyebrow="Presidents’ Messages"
        title={
          <>
            A Look Back at a Defining <span className="bg-gradient-to-b from-amber-100 via-amber-200 to-amber-400 bg-clip-text text-transparent">Year</span>.
          </>
        }
        text="Read reflections from both societies on the moments, milestones, and student impact that led into gala night."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-12 grid gap-6 lg:grid-cols-2"
      >
        {placeholders.map((item) => (
          <motion.div key={item.society} variants={fadeUp} transition={{ duration: 0.45 }}>
            <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-black/40 text-white">
              <div className={`relative min-h-[280px] bg-gradient-to-br ${item.accent}`}>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(0,0,0,0.35))]" />
                <CardContent className="relative flex min-h-[280px] flex-col justify-end p-8">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-300">{item.society}</p>
                  <h3 className="mt-3 text-4xl font-semibold text-amber-200">Coming Soon</h3>
                  <p className="mt-4 text-sm leading-7 text-neutral-300">Messages will be added once final society statements are approved.</p>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default function ANightInMonteCarloSite() {
  return (
    <div id="top" className="min-h-screen bg-[#060606] text-white">
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.16),_transparent_28%),radial-gradient(circle_at_85%_20%,_rgba(255,255,255,0.06),_transparent_18%),linear-gradient(to_bottom,#090909,#050505,#090909)]" />
      <div className="fixed inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:56px_56px]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#top" className="inline-flex items-center" aria-label="Back to top">
            <Image
              src="/logo.png"
              alt="BITSoc and SciCo logo"
              width={240}
              height={72}
              priority
              className="h-16 w-auto md:h-20"
            />
          </a>
          <nav className="hidden items-center gap-6 text-md text-neutral-300 lg:flex">
            <a href="#about" className="transition hover:text-amber-200">About</a>
            <a href="#tickets" className="transition hover:text-amber-200">Tickets</a>
            <a href="#venue" className="transition hover:text-amber-200">Directions</a>
            <a href="#program" className="transition hover:text-amber-200">Program</a>
            <a href="#menu" className="transition hover:text-amber-200">Menu</a>
            <a href="#awards" className="transition hover:text-amber-200">Awards</a>
            <a href="#faq" className="transition hover:text-amber-200">FAQ</a>
          </nav>
          <Button asChild className="rounded-xl bg-amber-300 px-8 py-6 text-base text-black hover:bg-amber-200">
            <a href="https://shop.otubitsoc.com">Buy Tickets</a>
          </Button>
        </div>
      </header>

      <main>
        <section className="relative">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
            <motion.div variants={stagger} initial="hidden" animate="visible" className="mx-auto max-w-5xl">
              <motion.div variants={fadeUp} transition={{ duration: 0.55 }} className="text-center">
                <p className="text-xl font-light italic text-amber-100/90 md:text-2xl">Ontario Tech’s Luxury End-of-Year Gala</p>
                <h1 className="mt-4 overflow-visible pb-[0.14em] text-4xl font-semibold sm:text-6xl md:pb-[0.18em] md:text-8xl">
                  <span className="font-slight block overflow-visible bg-gradient-to-b from-white via-amber-50 to-amber-200 bg-clip-text px-2 pb-[0.2em] pt-[0.2em] text-[1.05em] leading-[1.34] text-transparent sm:text-[1.08em] md:text-[1.12em]">
                    A Night in
                  </span>
                  <span className="block bg-gradient-to-b from-white via-amber-100 to-amber-400 bg-clip-text pb-[0.08em] leading-[1.06] text-transparent md:leading-[1.04]">
                    Monte Carlo
                  </span>
                </h1>
                <CountdownTimer />
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <Button asChild className="rounded-2xl bg-amber-300 px-6 py-6 text-sm uppercase tracking-[0.24em] text-black hover:bg-amber-200">
                    <a href="https://shop.otubitsoc.com">Buy Tickets</a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-2xl border-white/15 bg-white/5 px-6 py-6 text-sm uppercase tracking-[0.24em] text-white hover:bg-white/10 hover:text-white">
                    <a href="#program">View Program</a>
                  </Button>
                </div>
                <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-12 grid gap-5 text-left sm:grid-cols-3">
                  {[
                    { icon: CalendarDays, label: "Date", value: "April 25, 2026" },
                    { icon: Clock3, label: "Time", value: "Doors 6:00 PM · Ends 1:00 AM" },
                    { icon: MapPin, label: "Venue", value: "Durham Convention Centre" },
                  ].map((item) => (
                    <motion.div key={item.label} variants={fadeUp} transition={{ duration: 0.45 }}>
                      {item.label === "Venue" ? (
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                          <div className="flex items-center gap-2 text-amber-200/70">
                            <MapPin className="h-4 w-4" />
                            <span className="text-[10px] uppercase tracking-[0.3em]">{item.label}</span>
                          </div>
                          <p className="mt-2 text-sm text-neutral-100 md:text-base">
                            <a
                              href="https://maps.app.goo.gl/M1MF951QBjapjHG97"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-inherit no-underline transition hover:text-amber-200"
                            >
                              {item.value}
                            </a>
                          </p>
                        </div>
                      ) : (
                        <InfoPill {...item} />
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }} className="mt-12 flex justify-center">
              <a href="#about" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-neutral-400 hover:text-amber-200">
                Scroll
                <ChevronDown className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 md:px-10">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="grid gap-6 md:grid-cols-4">
            {[
              ["350+", "Guests"],
              ["20+", "Awards"],
              ["2", "Societies"],
              ["∞", "Photo Moments"],
            ].map(([num, label]) => (
              <motion.div key={label} variants={fadeUp} transition={{ duration: 0.45 }}>
                <Card className="rounded-3xl border-white/10 bg-white/5 text-white backdrop-blur-xl">
                  <CardContent className="p-6 text-center">
                    <p className="text-4xl font-semibold text-amber-300">{num}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.35em] text-neutral-300">{label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <SectionHeading
              eyebrow="About the Event"
              title={
                <>
                  More than just a gala. It's a{" "}
                  <span className="bg-gradient-to-b from-amber-100 via-amber-200 to-amber-400 bg-clip-text text-transparent">
                    Cinematic
                  </span>{" "}
                  Experience.
                </>
              }
              text="A night designed to celebrate ambition, community, and achievement. Bringing together students, alumni, and leaders from both societies for an unforgettable evening of elegance, recognition, and energy."
            />
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  transition={{ duration: 0.45 }}
                  className={item.title === "Late-Night Energy" ? "sm:col-span-2" : ""}
                >
                  <Card className="h-full rounded-3xl border-white/10 bg-gradient-to-b from-white/8 to-white/4 text-white">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-medium text-amber-200">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-neutral-300">{item.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="tickets" className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <SectionHeading eyebrow="Tickets" title="Choose the Right Ticket for Your Night." text="All ticket holders receive access to A Night in Monte Carlo, including entry, formal programming, dining, and the gala experience." />
              <a href="https://shop.otubitsoc.com" className="text-sm uppercase tracking-[0.3em] text-amber-300 hover:text-amber-200">shop.otubitsoc.com</a>
            </div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {tickets.map((ticket) => (
                <motion.div key={ticket.title} variants={fadeUp} transition={{ duration: 0.45 }}>
                  <Card
                    className={`group relative h-full rounded-[2rem] border transition hover:-translate-y-1 ${
                      ticket.featured
                        ? "border-amber-200/70 bg-gradient-to-b from-amber-200 via-amber-300 to-amber-400 text-black shadow-[0_0_0_1px_rgba(255,214,102,0.3),0_24px_45px_rgba(0,0,0,0.35)] xl:-translate-y-2"
                        : "border-white/10 bg-black/40 text-white hover:border-amber-300/30 hover:bg-black/60"
                    }`}
                  >
                    {ticket.featured ? (
                      <span className="absolute right-5 top-5 z-10 rounded-full border border-black/20 bg-black/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-black/80">
                        Best Value
                      </span>
                    ) : null}
                    <CardContent className="flex h-full flex-col p-6">
                      <div className="flex items-start gap-3">
                        <p className={`text-[10px] uppercase tracking-[0.35em] ${ticket.featured ? "text-black/70" : "text-amber-200/70"}`}>A Night in Monte Carlo</p>
                      </div>
                      <h3 className="mt-4 text-2xl font-medium">{ticket.title}</h3>
                      <p className={`mt-5 text-5xl font-semibold ${ticket.featured ? "text-black" : "text-amber-300"}`}>{ticket.price}</p>
                      <p className={`mt-5 flex-1 text-sm leading-7 ${ticket.featured ? "text-black/85" : "text-neutral-300"}`}>{ticket.description}</p>
                      <Button
                        asChild
                        className={`mt-8 rounded-3xl ${
                          ticket.featured ? "bg-black text-amber-200 hover:bg-black/90" : "bg-amber-300 text-black hover:bg-amber-200"
                        }`}
                      >
                        <a href="https://shop.otubitsoc.com">Buy Ticket</a>
                      </Button>
                      {ticket.featured ? (
                        <div className="mt-4 inline-flex items-center justify-center gap-2 self-center rounded-full border border-black/20 bg-black/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.28em] text-black/80 shadow-sm">
                          <span>Few Left</span>
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      ) : null}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <VenueDirectionsSection />

        <section id="program" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <SectionHeading
            eyebrow="Program"
            title={
              <>
                A Run of Show Built to Keep the <span className="bg-gradient-to-b from-amber-100 via-amber-200 to-amber-400 bg-clip-text text-transparent">Night</span> Moving.
              </>
            }
            text="From arrival to final song, the evening is designed to feel seamless, elevated, and exciting without losing the party energy."
          />
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.45 }} className="mt-12">
            <Card className="rounded-3xl border-white/10 bg-white/5 text-white">
              <CardContent className="p-8 md:p-10">
                <p className="text-xs uppercase tracking-[0.35em] text-amber-200/70">Evening Schedule</p>
                <div className="mt-6 space-y-3">
                  {programSchedule.map((item) => (
                    <details key={item.title} className="group rounded-2xl border border-white/10 bg-black/30 px-4 py-4 md:px-5">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
                        <p className="text-sm font-medium text-neutral-100 md:text-base">{item.title}</p>
                        <div className="flex items-center gap-3">
                          <span className="inline-flex w-fit rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-semibold tracking-[0.08em] text-amber-200 md:text-sm">
                            {item.time}
                          </span>
                          <ChevronDown className="h-4 w-4 text-neutral-400 transition group-open:rotate-180" />
                        </div>
                      </summary>
                      <p className="mt-3 border-t border-white/10 pt-3 text-sm leading-7 text-neutral-300">
                        {item.description}
                      </p>
                    </details>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section id="menu" className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
            <SectionHeading
              eyebrow="Menu"
              title={
                <>
                  A Curated Gala <span className="bg-gradient-to-b from-amber-100 via-amber-200 to-amber-400 bg-clip-text text-transparent">Dining</span> Experience.
                </>
              }
              text="Explore the full night menu, from passed appetizers and plated courses to dessert and late-night comfort food."
            />
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {menuCategories.map((category) => (
                <motion.div key={category.title} variants={fadeUp} transition={{ duration: 0.45 }}>
                  <Card className="h-full overflow-hidden rounded-3xl border-white/12 bg-gradient-to-b from-white/[0.07] to-white/[0.03] text-white shadow-[0_14px_34px_rgba(0,0,0,0.25)]">
                    <CardContent className="p-0">
                      <div className="border-b border-white/10 bg-black/25 px-5 py-4">
                        <p className="text-[10px] uppercase tracking-[0.36em] text-amber-200/80">Course</p>
                        <h3 className="mt-2 text-xl font-semibold text-amber-100">{category.title}</h3>
                      </div>
                      <ul className="p-3">
                        {category.items.map((item, index) => (
                          <li key={`${category.title}-${item}`}>
                            <div className="mb-2 flex items-center gap-3 rounded-xl border border-white/10 bg-black/25 px-3 py-2.5 last:mb-0">
                              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-amber-300/35 text-[11px] font-medium text-amber-200">
                                {index + 1}
                              </span>
                              <span className="text-sm leading-6 text-neutral-100">{item}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="awards" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}>
              <Card className="rounded-[2rem] border-white/10 bg-gradient-to-b from-white/8 to-white/4 text-white">
                <CardContent className="p-8">
                  <p className="text-xs uppercase tracking-[0.35em] text-amber-200/70">Awards</p>
                  <h2 className="mt-4 text-4xl font-semibold">Celebrate Achievement in Style.</h2>
                  <p className="mt-6 text-base leading-8 text-neutral-300">The formal program will spotlight awards, scholarships, society recognition, and standout moments from across BITSoc & SciCo.</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid gap-4 sm:grid-cols-2">
              {[
                "Leadership Recognition",
                "Scholarship Recognition",
                "Society Appreciation Moments",
                "Memorable Closing Celebration",
              ].map((item) => (
                <motion.div key={item} variants={fadeUp} transition={{ duration: 0.45 }}>
                  <Card className="rounded-3xl border-white/10 bg-black/30 text-white">
                    <CardContent className="flex items-center gap-4 p-7">
                      <Star className="h-5 w-5 shrink-0 text-amber-300" />
                      <span className="text-lg font-medium tracking-tight text-white md:text-xl">{item}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <PresidentsMessagesPage />

        {/* <section id="gallery" className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
            <SectionHeading
              eyebrow="Gallery"
              title={
                <>
                  Captured Moments from a <span className="bg-gradient-to-b from-amber-100 via-amber-200 to-amber-400 bg-clip-text text-transparent">Defining Year</span>.
                </>
              }
              text="A preview of BITSoc and SciCo energy leading into gala night."
            />
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {galleryPhotos.map((photo, i) => (
                <motion.div key={photo.src} variants={fadeUp} transition={{ duration: 0.45 }}>
                  <Card className="group overflow-hidden rounded-[1.8rem] border-white/10 bg-black/30 text-white">
                    <CardContent className="relative p-0">
                      <div className="relative aspect-[16/10] md:aspect-[16/9]">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(0,0,0,0.72))]" />
                        <div className="absolute inset-x-0 bottom-0 p-4">
                          <p className="text-[10px] uppercase tracking-[0.34em] text-amber-200/80">{photo.label}</p>
                          <p className="mt-2 text-sm text-white/90">Photo {i + 1}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section> */}

        <section id="faq" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <SectionHeading
            eyebrow="FAQ"
            title={
              <>
                Everything Guests Need to Know Before the <span className="bg-gradient-to-b from-amber-100 via-amber-200 to-amber-400 bg-clip-text text-transparent">Night</span> Arrives.
              </>
            }
            text="Clear, simple details for attendees, ticket buyers, and anyone planning their gala look."
          />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mt-12 grid gap-4 lg:grid-cols-2">
            {faqs.map((item) => (
              <motion.div key={item.q} variants={fadeUp} transition={{ duration: 0.45 }}>
                <Card className="rounded-3xl border-white/10 bg-white/5 text-white">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium">{item.q}</h3>
                    <p className="mt-3 text-sm leading-7 text-neutral-300">{item.a}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55 }}>
            <Card className="rounded-[2rem] border-amber-300/20 bg-gradient-to-r from-amber-300/10 via-white/5 to-amber-300/10 text-white">
              <CardContent className="flex flex-col gap-6 p-8 md:flex-row md:items-end md:justify-between md:p-12">
                <div className="max-w-2xl">
                  <p className="text-xs uppercase tracking-[0.35em] text-amber-200/70">Reserve Your Spot</p>
                  <h2 className="mt-4 text-4xl font-semibold md:text-5xl">Join Ontario Tech’s Most Elegant Night of the Year.</h2>
                  <p className="mt-4 text-base leading-8 text-neutral-300">Buy tickets now, plan your look, and get ready for a fully designed gala experience built to replace the usual slideshow with something far more memorable.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button asChild className="rounded-2xl bg-amber-300 px-6 py-6 text-sm uppercase tracking-[0.24em] text-black hover:bg-amber-200">
                    <a href="https://shop.otubitsoc.com">Buy Tickets Today</a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-2xl border-white/15 bg-white/5 px-6 py-6 text-sm uppercase tracking-[0.24em] text-white hover:bg-white/10 hover:text-white">
                    <a href="#tickets">View Ticket Types</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/40">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-3 md:px-10">
          <div>
            <a href="#top" className="inline-flex items-center" aria-label="Back to top">
              <Image
                src="/logo.png"
                alt="BITSoc and SciCo logo"
                width={260}
                height={78}
                className="h-14 w-auto"
              />
            </a>
            <p className="mt-3 text-sm leading-7 text-neutral-400">A collaborative gala experience for the Ontario Tech community.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-amber-200/70">Event Details</p>
            <div className="mt-4 space-y-2 text-sm text-neutral-300">
              <p className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-amber-300" /> April 25, 2026</p>
              <p className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-amber-300" /> 6:00 PM – 1:00 AM</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-amber-300" /><a href="https://maps.app.goo.gl/M1MF951QBjapjHG97" target="_blank" rel="noopener noreferrer" className="text-inherit no-underline transition hover:text-amber-200">Durham Convention Centre</a></p>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-amber-200/70">Quick Links</p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-neutral-300">
              <a href="https://shop.otubitsoc.com" className="transition hover:text-amber-200">Buy Tickets</a>
              <a href="#venue" className="transition hover:text-amber-200">Directions</a>
              <a href="#awards" className="transition hover:text-amber-200">Awards</a>
              <a href="#presidents-messages" className="transition hover:text-amber-200">Presidents’ Messages</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
