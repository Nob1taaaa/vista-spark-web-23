export const CONTACT = {
  phone: "+91 6398867772",
  phoneRaw: "916398867772",
  email: "truvisoryhr@gmail.com",
  address: "Yamuna Expy, Sector 17A, Uttar Pradesh 203201",
};

export const whatsappLink = (text = "Hello TruVisory, I would like to discuss my HR, payroll and compliance requirements.") =>
  `https://wa.me/${CONTACT.phoneRaw}?text=${encodeURIComponent(text)}`;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/labour-codes", label: "Labour Codes" },
  { to: "/industries", label: "Industries" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
];

export const SERVICES = [
  {
    id: "payroll",
    no: "01",
    title: "Payroll Management",
    short: "Accurate, on-time payroll from CTC design to full & final settlement.",
    items: ["Monthly payroll processing", "Salary structure and CTC design", "Attendance, leave and LOP management", "Overtime, incentives and arrears", "Payslips and salary registers", "Full and final settlement", "Leave encashment calculations", "Payroll MIS and reporting"],
  },
  {
    id: "compliance",
    no: "02",
    title: "Statutory Compliance",
    short: "PF, ESI, PT, LWF, bonus, gratuity and minimum wages — handled end to end.",
    items: ["EPF registration and monthly compliance", "ESIC registration and contributions", "Professional Tax (PT)", "Labour Welfare Fund (LWF)", "Bonus and Gratuity", "Minimum Wages and VDA", "Maternity Benefit compliance", "TDS on salary", "Labour registers and returns"],
  },
  {
    id: "advisory",
    no: "03",
    title: "HR Advisory & Audit",
    short: "Policies, documentation and audits that keep you inspection-ready.",
    items: ["HR compliance audit", "HR policies and documentation", "Employee handbook preparation", "Appointment and offer letters", "HR process development", "POSH policy and process guidance", "Employee lifecycle management"],
  },
  {
    id: "staffing",
    no: "04",
    title: "Staffing & Recruitment",
    short: "Find, hire and deploy the right talent — permanent, contract or bulk.",
    items: ["Permanent recruitment", "Contract staffing", "IT and Non-IT recruitment", "Bulk hiring", "Blue-collar and white-collar hiring", "Recruitment process outsourcing", "Manpower outsourcing and deployment"],
  },
];

export const COMPLIANCE_CATALOGUE = [
  { t: "PF / EPFO", d: "Registration, UAN, KYC, ECR, challans, nominations, exit and transfer support." },
  { t: "ESI / ESIC", d: "Employer registration, IP registration, contributions, challans and employee support." },
  { t: "Professional Tax (PT)", d: "State-wise registration, salary deductions, returns and payments." },
  { t: "Labour Welfare Fund (LWF)", d: "State-specific applicability, contributions, returns and due-date tracking." },
  { t: "Minimum Wages & VDA", d: "State, zone and skill-wise wage mapping, revisions and payroll review." },
  { t: "Statutory Bonus", d: "Eligibility, calculation, annual working and payment documentation." },
  { t: "Gratuity", d: "Eligibility, calculation, provisions, claims and settlement support." },
  { t: "Leave & Encashment", d: "Annual leave, balances, carry-forward and encashment review." },
  { t: "Maternity Benefits", d: "Eligibility, maternity payments, leave and policy compliance." },
  { t: "TDS on Salary", d: "Declarations, projections, deductions, reconciliation and Form 16." },
  { t: "Full & Final Settlement", d: "Notice pay, pending salary, leave, recoveries and settlement statements." },
  { t: "Contract Labour", d: "Contractor documentation, wage checks and PF/ESI coordination." },
  { t: "Shops & Establishments", d: "State registration, renewals, working hours, leave and registers." },
  { t: "POSH Compliance", d: "Policy, awareness, Internal Committee and annual compliance coordination." },
];

export const EPFO_EXTRA = ["DSC registration and approval", "Digital signature support", "UAN activation and Aadhaar KYC", "PF transfer and withdrawal support", "Joint declaration", "Date of joining and exit corrections", "Higher pension-related assistance", "EDLI-related support", "PF nomination assistance"];
export const ESIC_EXTRA = ["Employer registration", "Employee IP registration", "Aadhaar authentication support", "Family details updates", "ESIC contribution calculations", "Accident and benefit documentation support"];

export const LABOUR_CODES = [
  { id: "wages", year: "2019", title: "Code on Wages", summary: "Minimum wages, floor wage framework, wage definition, timely salary payment, overtime, deductions and statutory bonus.", points: ["Uniform definition of wages", "Minimum wages and floor wages", "Salary structure implications (50% wage rule)", "Timely payment of wages", "Bonus provisions", "Equal remuneration"] },
  { id: "ir", year: "2020", title: "Industrial Relations Code", summary: "Industrial disputes, grievance redressal, standing orders, trade unions and employment-related processes.", points: ["Industrial dispute management", "Trade union provisions", "Standing orders", "Retrenchment and layoff", "Fixed-term employment", "Grievance redressal framework"] },
  { id: "ss", year: "2020", title: "Code on Social Security", summary: "EPF, ESI, gratuity, maternity benefits, employee compensation and social security coverage.", points: ["Provident Fund", "Employees' State Insurance", "Gratuity (incl. fixed-term employees)", "Maternity benefits", "Social security coverage", "Gig and platform workers"] },
  { id: "osh", year: "2020", title: "OSH & Working Conditions Code", summary: "Working hours, annual leave with wages, safety, welfare, contract labour and workplace conditions.", points: ["Workplace health and safety", "Working hours and overtime", "Mandatory appointment letters", "Contract labour provisions", "Welfare facilities", "Inter-state migrant workers"] },
];

export const EMPLOYER_IMPACT = [
  { t: "Minimum Wages", d: "State-wise applicable wages and VDA" },
  { t: "Salary Structure", d: "Wage definition and salary breakup" },
  { t: "Bonus", d: "Eligibility and calculation" },
  { t: "Gratuity", d: "Eligibility and calculation" },
  { t: "Leave Encashment", d: "Applicable rules and calculations" },
  { t: "Working Hours", d: "Working hours, overtime and weekly off" },
  { t: "Maternity", d: "Statutory maternity benefits" },
  { t: "Contract Labour", d: "Principal employer responsibilities" },
];

export const INDUSTRIES = ["Education & Universities", "Automobile & Dealerships", "Manufacturing & Engineering", "IT & IT-enabled Services", "Healthcare & Hospitals", "Retail & Hospitality", "Logistics & Transportation", "Startups & SMEs", "Corporate Offices", "Facility Management"];

export const WHY = [
  { t: "Reliable Compliance Support", d: "Every due date tracked, every challan reconciled." },
  { t: "Accurate Payroll Processing", d: "Error-free salaries, payslips and registers every month." },
  { t: "Dedicated HR Support", d: "A named HR professional who knows your organisation." },
  { t: "Organised Documentation", d: "Inspection-ready records, registers and returns." },
  { t: "Long-Term Partnership", d: "Solutions that scale from startups to large enterprises." },
];

export const FAQS = [
  { q: "What services does TruVisory provide?", a: "We provide payroll management, statutory compliance, HR advisory, HR audit and workforce solutions including staffing and recruitment." },
  { q: "Do you manage monthly PF and ESI compliance?", a: "Yes. We support PF and ESI registrations, employee onboarding, monthly contributions, ECR filing and challan processes." },
  { q: "Do you provide payroll outsourcing?", a: "Yes. We provide end-to-end payroll processing based on the client's requirements — from attendance inputs to payslips and statutory deductions." },
  { q: "Do you handle Professional Tax and Labour Welfare Fund?", a: "Yes. PT and LWF are state-specific; we manage registrations, deductions, returns and payments for each state you operate in." },
  { q: "Do you provide services to small businesses?", a: "Yes. Our services can be customised for startups, SMEs and large organisations." },
  { q: "Do you provide labour law compliance audits?", a: "Yes. We review applicable statutory requirements, records, registers and documentation, and help you close gaps before inspections." },
  { q: "Can you help us prepare for the four Labour Codes?", a: "Yes. We review salary structures, the wage definition, leave, gratuity and working-hour policies against the Codes and applicable Central and State rules." },
  { q: "Do you provide recruitment services?", a: "Yes. We support permanent recruitment, contract staffing, IT and Non-IT recruitment and bulk hiring." },
];

export const RESOURCES = [
  { cat: "Labour Codes", date: "21 Nov 2025", title: "Four Labour Codes take effect", desc: "What employers must review first: wage definition, appointment letters, leave and gratuity for fixed-term employees." },
  { cat: "Labour Codes", date: "May 2026", title: "Central Rules notified — what changes now", desc: "A practical summary of the Central Rules and why state rules still decide many details." },
  { cat: "EPFO", date: "Monthly", title: "ECR filing checklist for HR teams", desc: "UAN, KYC, contributions and exit dates — avoid the most common monthly ECR errors." },
  { cat: "ESIC", date: "Half-yearly", title: "ESIC contribution periods explained", desc: "Contribution periods, benefit periods and how coverage applies to new joiners." },
  { cat: "Minimum Wages", date: "Apr / Oct", title: "State-wise minimum wage & VDA revisions", desc: "How to map employees by state, zone and skill category after each revision." },
  { cat: "Payroll", date: "Annual", title: "Bonus, gratuity & leave encashment basics", desc: "Eligibility and calculation essentials every payroll team should know." },
];

export const CALENDAR = [
  { day: "7th", t: "TDS deposit on salaries (previous month)" },
  { day: "15th", t: "PF ECR filing & payment; ESIC contribution payment" },
  { day: "Monthly / Quarterly", t: "Professional Tax payment & returns (state-specific)" },
  { day: "Half-yearly / Annual", t: "Labour Welfare Fund contributions (state-specific)" },
  { day: "Quarterly", t: "TDS returns (Form 24Q)" },
  { day: "Annual", t: "Bonus payment, Form 16 issue & annual labour returns" },
];
