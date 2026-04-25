import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

type TableStatus = "VIP" | "Regular";

type TableGroup = {
  tableNumber?: number;
  tableName?: string;
  status: TableStatus;
  guests: string[];
};

type SeatingTable = {
  tableNumber: number;
  tableName: string;
  status: TableStatus;
  guests: string[];
};

type TablePalette = {
  card: string;
  header: string;
  row: string;
  seat: string;
  statusBadge: string;
};

const TOTAL_TABLES = 40;
const SEATS_PER_TABLE = 10;

const vipPalette: TablePalette = {
  card: "border-amber-300/45 bg-linear-to-b from-black via-amber-950/55 to-black",
  header: "border-amber-300/30 bg-black/80",
  row: "border-amber-200/25 bg-black/70",
  seat: "border-amber-300/45 text-amber-100",
  statusBadge: "border-amber-200/60 bg-amber-300/20 text-amber-100",
};

const regularPalette: TablePalette = {
  card: "border-amber-300/30 bg-linear-to-b from-black via-amber-950/35 to-black",
  header: "border-amber-300/20 bg-black/80",
  row: "border-amber-200/20 bg-black/65",
  seat: "border-amber-300/35 text-amber-100",
  statusBadge: "border-amber-200/45 bg-amber-300/15 text-amber-100",
};

function getTablePalette(table: SeatingTable): TablePalette {
  return table.status === "VIP" ? vipPalette : regularPalette;
}

const tableGroups: TableGroup[] = [
  {
    tableNumber: 1,
    tableName: "Nonquans Finest",
    status: "VIP",
    guests: [
      "Tommy D. Michailidis",
      "Lola Michailidis",
      "Almeena Manal",
      "Chris Panetta",
      "Ammar Syed",
      "Franceso Esposito",
      "Dian Kent",
      "Burhan Chattha",
      "Roger",
      "Roger + 1",
    ],
  },
  {
    tableNumber: 2,
    status: "VIP",
    guests: [
      "Faith Farayibi",
      "Tuirani Kerfelec",
      "Suraj Anup",
      "Anwoy Barua",
      "Marissa Devita",
      "Jamie Webb",
      "Melanie Pereira",
      "George Stamatiou",
    ],
  },
  {
    tableNumber: 3,
    tableName: "Toucan",
    status: "VIP",
    guests: [
      "Madison O'Shaughnessy",
      "Keirra Mills",
      "Sarah Rojas",
      "Jess Enhayes",
      "Zamordeen Youssef",
      "Zahra Bridgeman Morgan",
      "Kaanchi Sharma",
      "Sarah D Almeida",
      "Jeffery Antonraju",
      "Wania Bhati",
    ],
  },
  {
    tableName: "OTAA",
    status: "VIP",
    guests: [
      "Ishrak Tymus",
      "Yousaf Wardak",
      "Jenna Sigouin",
      "Amber Corcoran",
      "Ahmed Salih",
      "Sharon Abraham",
      "Tania Joseph",
      "Logan Hall",
      "Neeraja Santharuban",
      "Shone Mathew",
    ],
  },
  {
    tableName: "OT Media Pass",
    status: "VIP",
    guests: [
      "Nathaniel Ambedkar",
      "Nathaniel Ambedkar",
      "Nathaniel Ambedkar",
      "Nathaniel Ambedkar",
      "Nathaniel Ambedkar",
      "Nathaniel Ambedkar",
      "Nathaniel Ambedkar",
      "Nathaniel Ambedkar",
      "Nathaniel Ambedkar",
      "Nathaniel Ambedkar",
    ],
  },
  {
    status: "Regular",
    guests: [
      "Nathaniel Ambedkar",
      "Nathaniel Ambedkar",
      "Nathaniel Ambedkar",
      "Joshua Bharath",
      "Prayan Jegathees",
      "Nathan Tsang",
      "Alex Chan",
      "Alan Zhang",
      "Patrick Zhang",
      "Ethan Guan",
    ],
  },
  {
    tableNumber: 5,
    tableName: "67",
    status: "VIP",
    guests: [
      "Anthony Quezada",
      "Joshua Tran",
      "Anojan Paramedwaran",
      "Amalia Valles",
      "Isabela Valles",
      "Esha Lodhi",
      "Zoha Lodhi",
      "Laura Costantini-Pare",
      "Andrew Campitelli",
      "Shariq Abdul Wahid",
    ],
  },
  {
    status: "VIP",
    guests: [
      "Joshua Mather",
      "Daniel Roufail",
      "Kieran Rolfe",
      "Issa Suilaman",
      "Darin Satar",
      "Ifra Khan",
      "Iman Khurram",
      "Muhammed Usman",
      "Zahra Afzli",
      "Donya Afzali",
    ],
  },
  {
    tableNumber: 9,
    tableName: "SciCo",
    status: "Regular",
    guests: [
      "Tomasz Puzio",
      "Teerth Panchal",
      "Dhanvin Ramesh",
      "Humza Quresh",
      "Jasvy Thaseekaran",
      "Choula Patel",
      "Puvikaa Balakrishnan",
      "Sifatul Mostafi",
      "Purva Puri",
      "Areeba Azhar",
    ],
  },
  {
    status: "Regular",
    guests: [
      "Angelique Dack",
      "Michael Wilson",
      "Gabriel Villeneuve",
      "Umar Shahbaz",
      "Jo Ann Scott",
      "Kailey Haskell",
      "Alannis Davis",
      "Alannis Davis + 1",
      "Aiden Ellsworth",
      "Glen Ellsworth",
    ],
  },
  {
    tableNumber: 11,
    status: "Regular",
    guests: [
      "Rajsharan Jeetu",
      "Sarfaraaz Mohammed",
      "Farhan Khan",
      "Ebdullah Bin Owais",
      "Lucas Bujes",
      "Lucas Bujes",
      "Michael Kim",
      "Mya Jensen",
      "Liam Tjoen",
      "Nathaniel Ambedkar",
    ],
  },
  {
    status: "Regular",
    guests: [
      "Sharjeel Syed",
      "Diroek Omer",
      "Faiz Kerawala",
      "Javin Vilvarasan",
      "Shams Haroon",
      "Dilara Leamen",
      "Krisha Bharucha",
      "Krisha Bharucha + 1",
      "Nathaniel Ambedkar",
      "Nathaniel Ambedkar",
    ],
  },
  {
    tableNumber: 13,
    tableName: "The Profs",
    status: "VIP",
    guests: [
      "Amanda McEachern Gaudet",
      "Dr. Carolyn McGregor",
      "Camille Boate",
      "Lindsay Ristuccia",
      "Mehdi Hossein Nejad",
      "Sara Taghavi Motlagh",
      "Joseph Zhou",
      "Chen Shen",
    ],
  },
  {
    tableName: "The Physics Table",
    status: "VIP",
    guests: [
      "Luke Lassardo",
      "Caleb Layden",
      "Jessica Zheng",
      "Aneth Trejos",
      "Vishnu Rana",
      "Virul Abeysuriya",
      "Ellycea Burke",
      "Zoe Anna-Hemeon",
      "Ethan Fleming",
      "Darren Cameron",
    ],
  },
  {
    tableNumber: 7,
    tableName: "The CCC",
    status: "VIP",
    guests: [
      "Olivia Wood-Jolivet",
      "Eithan",
      "Maddy",
      "Lindsey",
      "Lucas",
      "Tyler",
      "Isabelle",
      "Nour",
      "Sahar",
      "Angela",
    ],
  },
  {
    tableName: "Math Students",
    status: "VIP",
    guests: [
      "Jennifer Zheng",
      "Jennifer Zheng",
      "Jennifer Zheng",
      "Jennifer Zheng",
      "Jennifer Zheng",
      "Jennifer Zheng",
      "Jennifer Zheng",
      "Jennifer Zheng",
      "Jennifer Zheng",
      "Jennifer Zheng",
    ],
  },
  {
    tableNumber: 9,
    tableName: "Gurt",
    status: "VIP",
    guests: [
      "Ethan",
      "JD",
      "Milan",
      "Arvin",
      "Gabe",
      "Evan",
      "Jade",
      "Ellaha",
      "Izell",
      "Justine",
    ],
  },
  {
    tableName: "CS Club",
    status: "VIP",
    guests: [
      "Maryam Baz",
      "Shahryar Naveed",
      "Edrees Amiri",
      "Kevin Massey",
      "Ana Massey",
      "Lee",
      "Zubair",
      "Taha Rana",
      "Craigton Corda",
      "Iqbal Khosti",
    ],
  },
  {
    tableNumber: 15,
    status: "Regular",
    guests: [
      "Amanda Mai",
      "Megan Benedict",
      "Joshua Juan",
      "Miracle Clarke-Jessamy",
      "Lauren Fisher",
      "Lauren Fisher + 1",
      "Kazim Abbas",
      "Salman Saleem",
      "Grace Quail",
    ],
  },
  {
    tableName: "ICEMAN",
    status: "VIP",
    guests: [
      "Sanhith Amarathunge",
      "Aakanksha",
      "Maryam",
      "Vib",
      "Samir",
      "Karan",
      "Tini",
      "Dani",
      "Jin",
      "Thanush",
    ],
  },
  {
    tableNumber: 27,
    status: "Regular",
    guests: [
      "Soroosh Seifi",
      "Maria Krstevski",
      "Zeiad Alarkan",
      "Dean Satine",
      "Aidan Waddell",
      "Lauren Olivier",
      "Lauren Olivier + 1",
      "Liara Faria",
      "Liara Faria + 1",
      "Swarupta Maharaj",
    ],
  },
  {
    tableName: "Teach me how to Dougie",
    status: "VIP",
    guests: [
      "Saksham Tejpal",
      "Mrudul Dubey",
      "Shiv Amin",
      "Aditi Jain",
      "Paul Joseph",
      "Sunny Patel",
      "Maya Subedar",
      "Helena A",
      "Meghana Augustine",
      "Mathew Sunderland",
    ],
  },
  {
    tableName: "IT Dropouts",
    status: "VIP",
    guests: [
      "Hiten Diwan",
      "Rimsha",
      "Zaynab",
      "Simran",
      "Sohail Baig",
      "Rachel Ayson",
      "Jacob Bryan",
      "Tharun Naveen",
      "Jeremy Alexander",
      "Daniel Borrell Diaz",
    ],
  },
  {
    status: "Regular",
    guests: [
      "Kimberley Taylor",
      "Jackson Barker",
      "Haneen Al Musowi",
      "Zahra Mirza",
      "Jayson AD",
      "Jayson AD",
      "Malachi Renawe",
      "Bradley Cameron",
      "Brendan Chau",
    ],
  },
  {
    tableNumber: 13,
    status: "Regular",
    guests: [
      "Baneen Ashgary",
      "Muhammad Hashim Shah Nawaz",
      "Nikhil",
      "Aviv Dad",
      "Aviv Dad + 1",
      "Hassan Butt",
      "Josefino Jr De Guzman",
      "Hadia Yosofi",
      "Lucas Macaulay",
    ],
  },
  {
    status: "VIP",
    guests: [
      "Matthew Putnam",
      "Hannah",
      "Alexis",
      "Marcelo",
      "Logan",
      "Cade",
      "Braeden",
      "Duncan",
      "Connor Hume",
      "Connor Hume + 1",
    ],
  },
  {
    status: "Regular",
    guests: [
      "Adoniel Smiley",
      "Ethan Wallace",
      "Ange Audran",
      "Ayokunle Awude",
      "Ikenna",
      "Muhmmad",
      "Kellan Hennessey",
      "Lucas",
      "Jericho Caparas",
      "Zamir Akhtari",
    ],
  },
  {
    status: "Regular",
    guests: [
      "Krishna Mallick",
      "Kianmehr Haddad",
      "Fareeha Rehman",
      "Haajrah Ahmad",
      "Ebaadurrub Awan",
      "Mir Mahdi Ali",
      "Muhammad Mir",
      "James Odgren",
      "James Odgren",
      "Addison DeDiana",
    ],
  },
  {
    status: "Regular",
    guests: [
      "Fanoula Novratidis",
      "Ezen Naqvi",
      "Cecilia Lang",
      "Farhan Khan",
      "Ebdullah Bin Owais",
      "Sarfaraaz Mohammed",
    ],
  },
  {
    status: "Regular",
    guests: [
      "Alan Thomas",
      "Sidharth Nair",
      "Nisa Mathew",
      "Evangelin Justin",
      "Jedidiah Dennis",
      "Aashish Vivekanand",
      "Fazina Mohamed",
      "Syed Ahmed",
      "Gabriel Pedraza Perez",
      "Maria Grazia Aquino Gavilanes",
    ],
  },
  {
    status: "Regular",
    guests: [
      "Tahoor",
      "Joaquin",
      "Jennifer",
      "Jayla",
      "Diego",
      "Shannon",
      "Saw",
      "Soupy",
      "Anya",
      "Sammy",
    ],
  },
  {
    status: "Regular",
    guests: [
      "Abdulla Warsi",
      "Pedro Santos",
      "Jessica Arruda",
      "Joao Silva Santos",
      "Jordyn Gougeon",
      "Nolan McGrayne",
      "Mikayla Burden",
      "Dylan Hunter",
      "Swarupta Maharaj",
    ],
  },
  {
    tableNumber: 33,
    tableName: "33",
    status: "Regular",
    guests: [],
  },
  {
    status: "Regular",
    guests: [
      "Guiseppa Sorbilli",
      "Guiseppa Sorbilli",
      "Guiseppa Sorbilli",
      "Michael Lane",
      "Sylvia Georgi",
      "Jamison Bentley",
      "Adyan Iqbal",
      "Melissa Gracez",
      "Kyle Jacob Crisostomo",
      "Pruthuvi Bandara",
    ],
  },
  {
    tableNumber: 35,
    tableName: "35",
    status: "Regular",
    guests: [],
  },
  {
    status: "Regular",
    guests: [
      "Claudia Bellman",
      "Lily Hamilton",
      "Darius Dogaru",
      "Lucine Avanesian",
      "Avinaash Mohan",
      "Rachel Ryan",
      "Madison Wilson",
      "Ava Stirpe",
      "Anusikka Sivackumar",
      "Shantosh Sivamahesan",
    ],
  },
  {
    tableNumber: 37,
    tableName: "37",
    status: "Regular",
    guests: [],
  },
  {
    status: "Regular",
    guests: [
      "Sumedha Gautam",
      "Riteesha Gautam",
      "Rylin Simpson",
      "Khadijah Khan",
      "Afrah Mirza",
      "Mei Zheng",
      "Ki Ki Chen",
      "Syeda Rida Rizvi",
      "Mysha Mirza",
      "Gwen Brazal",
    ],
  },
  {
    tableNumber: 39,
    tableName: "39",
    status: "Regular",
    guests: ["Michael Ispahani"],
  },
  {
    status: "Regular",
    guests: [
      "Bach Nguyen",
      "Hannah Cam",
      "Patricia Pena Garcia",
      "Jessica Brandhorst",
      "Surfairr",
      "Kendra Peace",
      "Payal Patel",
      "Erica Patel",
      "Klein Cafa",
      "Alyesha Singh",
    ],
  },
];

function normalizeGuests(guests: string[]) {
  return guests.map((guest) => guest.trim()).filter((guest) => guest.length > 0);
}

function withSeatPlaceholders(guests: string[]) {
  const normalized = normalizeGuests(guests).slice(0, SEATS_PER_TABLE);
  const missing = Math.max(SEATS_PER_TABLE - normalized.length, 0);
  return [...normalized, ...Array.from({ length: missing }, () => "Seat Open")];
}

function buildSeatingTables() {
  const tablesByNumber = new Map<number, TableGroup>();
  const unnumberedGroups: TableGroup[] = [];

  for (const group of tableGroups) {
    if (group.tableNumber && group.tableNumber >= 1 && group.tableNumber <= TOTAL_TABLES && !tablesByNumber.has(group.tableNumber)) {
      tablesByNumber.set(group.tableNumber, group);
    } else {
      unnumberedGroups.push(group);
    }
  }

  for (let tableNumber = 1; tableNumber <= TOTAL_TABLES; tableNumber += 1) {
    if (!tablesByNumber.has(tableNumber) && unnumberedGroups.length > 0) {
      tablesByNumber.set(tableNumber, unnumberedGroups.shift()!);
    }
  }

  const seatingTables: SeatingTable[] = [];

  for (let tableNumber = 1; tableNumber <= TOTAL_TABLES; tableNumber += 1) {
    const group = tablesByNumber.get(tableNumber);

    if (!group) {
      seatingTables.push({
        tableNumber,
        tableName: "Open Seating",
        status: "Regular",
        guests: Array.from({ length: SEATS_PER_TABLE }, () => "Seat Open"),
      });
      continue;
    }

    seatingTables.push({
      tableNumber,
      tableName: group.tableName ?? "General",
      status: group.status,
      guests: withSeatPlaceholders(group.guests),
    });
  }

  return seatingTables;
}

const seatingTables = buildSeatingTables();

export default function SeatingChartPage() {
  return (
    <div className="min-h-screen bg-[#060606] text-amber-100">
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.16),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.06),transparent_18%),linear-gradient(to_bottom,#090909,#050505,#090909)]" />
      <div className="fixed inset-0 -z-10 opacity-30 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[56px_56px]" />

      <main className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.36em] text-amber-200/80">Seating Chart</p>
            <h1 className="mt-4 text-4xl font-semibold text-amber-100 md:text-6xl">Table Assignments</h1>
            <p className="mt-5 text-base leading-8 text-amber-100/80 md:text-lg">
              Numbered tables were placed as provided. Groups without table numbers were auto-assigned to open tables.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex w-fit rounded-2xl border border-amber-300/30 bg-amber-300/10 px-6 py-4 text-sm uppercase tracking-[0.24em] text-amber-100 transition hover:bg-amber-300/20"
          >
            Back to Gala Site
          </Link>
        </div>

        <section className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {seatingTables.map((table) => {
            const palette = getTablePalette(table);

            return (
            <Card
              key={table.tableNumber}
              className={`h-full overflow-hidden rounded-3xl text-amber-100 shadow-[0_14px_34px_rgba(0,0,0,0.25)] ${palette.card}`}
            >
              <CardContent className="p-0">
                <div className={`border-b px-5 py-4 ${palette.header}`}>
                  <p className="text-[10px] uppercase tracking-[0.36em] text-amber-200/80">Table</p>
                  <h2 className="mt-2 text-xl font-semibold text-amber-100">Table {table.tableNumber}</h2>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className={`rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.18em] ${palette.statusBadge}`}>
                      {table.status}
                    </span>
                    <span className="rounded-full border border-amber-200/30 bg-amber-300/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-amber-100">
                      {table.tableName}
                    </span>
                  </div>
                </div>
                <ul className="p-3">
                  {table.guests.map((guest, index) => (
                    <li key={`${table.tableNumber}-${index + 1}`}>
                      <div className={`mb-2 flex items-center gap-3 rounded-xl border px-3 py-2.5 last:mb-0 ${palette.row}`}>
                        <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full border text-[11px] font-medium ${palette.seat}`}>
                          {index + 1}
                        </span>
                        <span className="text-sm leading-6 text-amber-100">{guest}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            );
          })}
        </section>
      </main>
    </div>
  );
}
