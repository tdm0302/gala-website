"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  MapPin,
  ChevronDown,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const venueName = "Durham Convention Centre";
const venueAddress = "630 Beck Crescent, Ajax, Ontario";
const venueSearchQuery = "Durham Convention Centre Ajax Ontario";
const venueLatitude = "43.945062";
const venueLongitude = "-78.895891";
const venueDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(venueSearchQuery)}&travelmode=driving`;

type ConfettiPiece = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
  color: string;
};

const CONFETTI_SPAWN_WINDOW_SECONDS = 5;
const CONFETTI_PIECE_COUNT = 320;

function createConfettiPieces(count: number): ConfettiPiece[] {
  const confettiPalette = ["#f7d25c", "#f0c341", "#e8b92b", "#ffe7a3", "#d4af37"];

  return Array.from({ length: count }, (_, index) => ({
    id: index,
    left: Math.random() * 100,
    size: 5 + Math.random() * 6,
    duration: 3.2 + Math.random() * 4,
    delay: Math.random() * CONFETTI_SPAWN_WINDOW_SECONDS,
    drift: -90 + Math.random() * 180,
    opacity: 0.5 + Math.random() * 0.5,
    color: confettiPalette[Math.floor(Math.random() * confettiPalette.length)],
  }));
}

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
    title: "Dinner Service & Games",
    time: "7:45 - 9:00",
    description:
      "Full-course buffet style dinner service featuring the gala menu in a seated setting, with interactive games and contests to keep energy high between courses.",
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

const customDrinks = [
  {
    name: "Monte Carlo Royale (Signature Drink)",
    ingredients: ["Cranberry juice", "Lime juice", "Sparkling water or Perrier"],
    garnish: ["Lime wheel"],
    rim: "Regular rim",
  },
  {
    name: "Monaco Sunset",
    ingredients: ["Orange juice", "Sprite", "Grenadine"],
    garnish: ["Orange slice", "Cherry"],
  },
  {
    name: "Golden Monaco Fizz",
    ingredients: ["Pineapple juice", "Ginger ale", "Lemon juice"],
    garnish: ["Lemon twist", "Mint"],
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
    q: "Are tickets still available?",
    a: "Ticket sales are now closed.",
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
  const [isMounted, setIsMounted] = React.useState(false);
  const [confettiPieces, setConfettiPieces] = React.useState<ConfettiPiece[]>([]);
  const [showConfetti, setShowConfetti] = React.useState(true);

  React.useEffect(() => {
    setIsMounted(true);
    const generatedPieces = createConfettiPieces(CONFETTI_PIECE_COUNT);
    setConfettiPieces(generatedPieces);

    const timeUntilLastPieceFallsMs =
      Math.max(...generatedPieces.map((piece) => piece.delay + piece.duration), 0) * 1000 + 400;

    const hideConfettiTimer = window.setTimeout(() => {
      setShowConfetti(false);
    }, timeUntilLastPieceFallsMs);

    return () => window.clearTimeout(hideConfettiTimer);
  }, []);

  return (
    <div id="top" className="min-h-screen bg-[#060606] text-white">
      {isMounted && showConfetti ? (
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
          {confettiPieces.map((piece) => (
            <span
              key={piece.id}
              className="absolute -top-[12%] block rounded-sm"
              style={{
                left: `${piece.left}%`,
                width: `${piece.size}px`,
                height: `${piece.size * 0.56}px`,
                opacity: piece.opacity,
                backgroundColor: piece.color,
                boxShadow: "0 0 12px rgba(245, 200, 74, 0.28)",
                animation: `gold-confetti-fall ${piece.duration}s linear ${piece.delay}s 1 both`,
                ["--confetti-drift" as string]: `${piece.drift}px`,
              }}
            />
          ))}
        </div>
      ) : null}
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
            <a href="#venue" className="transition hover:text-amber-200">Directions</a>
            <a href="#program" className="transition hover:text-amber-200">Program</a>
            <a href="/seating-chart" className="transition hover:text-amber-200">Seating Chart</a>
            <a href="#awards" className="transition hover:text-amber-200">Awards</a>
            <a href="#faq" className="transition hover:text-amber-200">FAQ</a>
          </nav>
          <Button asChild className="rounded-xl bg-amber-300 px-8 py-6 text-base text-black hover:bg-amber-200">
            <a href="#menu">View Menu</a>
          </Button>
        </div>
      </header>

      <main>
        <section className="relative">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
            <motion.div variants={stagger} initial="hidden" animate="visible" className="mx-auto max-w-5xl">
              <motion.div variants={fadeUp} transition={{ duration: 0.55 }} className="text-center">
                <p className="text-xl font-light italic text-amber-100/90 md:text-2xl">Welcome to</p>
                <h1 className="mt-4 overflow-visible pb-[0.14em] text-4xl font-semibold sm:text-6xl md:pb-[0.18em] md:text-8xl">
                  <span className="font-slight block overflow-visible bg-gradient-to-b from-white via-amber-50 to-amber-200 bg-clip-text px-2 pb-[0.2em] pt-[0.2em] text-[1.05em] leading-[1.34] text-transparent sm:text-[1.08em] md:text-[1.12em]">
                    A Night in
                  </span>
                  <span className="block bg-gradient-to-b from-white via-amber-100 to-amber-400 bg-clip-text pb-[0.08em] leading-[1.06] text-transparent md:leading-[1.04]">
                    Monte Carlo
                  </span>
                </h1>
                <p className="mx-auto italic mt-5 max-w-3xl text-base leading-8 text-neutral-300 md:text-lg">
                  An evening of elegance, celebration, and unforgettable moments awaits. Explore tonight’s program and menu below.
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <Button asChild className="rounded-2xl bg-amber-300 px-6 py-6 text-sm uppercase tracking-[0.24em] text-black hover:bg-amber-200">
                    <a href="#program">View Program</a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-2xl border-white/15 bg-white/5 px-6 py-6 text-sm uppercase tracking-[0.24em] text-white hover:bg-white/10 hover:text-white">
                    <a href="#menu">View Menu</a>
                  </Button>
                </div>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }} className="mt-12 flex justify-center">
              <a href="#stats" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-neutral-400 hover:text-amber-200">
                Scroll
                <ChevronDown className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </section>

        <section id="stats"className="mx-auto max-w-7xl px-6 py-10 md:px-10">
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
              eyebrow="Buffet Style Menu"
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

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} className="mt-8">
              <Card className="rounded-3xl border-white/12 bg-gradient-to-b from-white/[0.08] to-white/[0.03] text-white shadow-[0_14px_34px_rgba(0,0,0,0.25)]">
                <CardContent className="p-6 md:p-8">
                  <p className="text-[10px] uppercase tracking-[0.36em] text-amber-200/80">Custom Drink Menu</p>
                  <h3 className="mt-3 text-2xl font-semibold text-amber-100 md:text-3xl">Signature Gala Drinks</h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-300 md:text-base">
                    Unlimited non-alcoholic drinks and a cash bar are available throughout the night.
                  </p>

                  <div className="mt-6 grid gap-4 lg:grid-cols-3">
                    {customDrinks.map((drink, index) => (
                      <div key={drink.name} className="rounded-2xl border border-white/10 bg-black/25 p-4 md:p-5">
                        <p className="text-[10px] uppercase tracking-[0.34em] text-amber-200/80">Drink {index + 1}</p>
                        <h4 className="mt-2 text-lg font-semibold text-white">{drink.name}</h4>

                        <p className="mt-4 text-xs uppercase tracking-[0.28em] text-neutral-400">Ingredients</p>
                        <ul className="mt-2 space-y-1 text-sm leading-7 text-neutral-200">
                          {drink.ingredients.map((ingredient) => (
                            <li key={`${drink.name}-${ingredient}`}>• {ingredient}</li>
                          ))}
                        </ul>

                        <p className="mt-4 text-xs uppercase tracking-[0.28em] text-neutral-400">Garnish</p>
                        <p className="mt-2 text-sm leading-7 text-neutral-200">{drink.garnish.join(", ")}</p>

                        {drink.rim ? (
                          <>
                            <p className="mt-4 text-xs uppercase tracking-[0.28em] text-neutral-400">Rim</p>
                            <p className="mt-2 text-sm leading-7 text-neutral-200">{drink.rim}</p>
                          </>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
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
              <a href="#program" className="transition hover:text-amber-200">Program</a>
              <a href="/seating-chart" className="transition hover:text-amber-200">Seating Chart</a>
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
