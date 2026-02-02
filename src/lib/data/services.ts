import { Service } from "@/types/service";

export const servicesData: Service[] = [
  // Investment & Strategic Advisory Services
  {
    id: "investment-advisory-1",
    name: "Investment Readiness & Capital Structuring",
    shortDescription: "Business model refinement, pitch deck development, financial modeling, and investor engagement strategy.",
    longDescription: "We help startups and SMEs become investment-ready through business model refinement, pitch deck development, financial modeling, equity/debt/hybrid structuring, and investor engagement strategy.",
    category: "investment-advisory",
    url: "/services/investment-advisory",
  },
  {
    id: "investment-advisory-2",
    name: "Market Entry & Growth Strategy",
    shortDescription: "Ghana and Africa-focused market intelligence, regulatory landscape analysis, and strategic partnerships.",
    longDescription: "Comprehensive support for market entry including Ghana and Africa-focused market intelligence, regulatory landscape analysis, go-to-market strategy, and strategic partnerships.",
    category: "investment-advisory",
    url: "/services/investment-advisory",
  },
  {
    id: "investment-advisory-3",
    name: "Financial Modeling & Valuation",
    shortDescription: "Investment valuations, financial projections, and due diligence for projects.",
    longDescription: "Professional financial modeling and valuation services including investment valuations, financial projections, and comprehensive due diligence.",
    category: "investment-advisory",
    url: "/services/investment-advisory",
  },
  {
    id: "investment-advisory-4",
    name: "Due Diligence & Risk Assessment",
    shortDescription: "Comprehensive due diligence, risk analysis, and investment screening for informed decision-making.",
    longDescription: "Thorough due diligence and risk assessment services to help investors and institutions make informed decisions in African markets.",
    category: "investment-advisory",
    url: "/services/investment-advisory",
  },
  // Blockchain Education & Advocacy Services
  {
    id: "blockchain-education-1",
    name: "Blockchain & Digital Assets Courses",
    shortDescription: "Structured courses for beginners, professionals, entrepreneurs, and students on Blockchain fundamentals and Web3.",
    longDescription: "Comprehensive courses covering Blockchain fundamentals, digital assets & tokenization, Web3, DeFi & real-world use cases, risks, scams, and consumer protection, plus Ghana's VASP framework and compliance basics.",
    category: "blockchain-education",
    url: "/services/blockchain-education",
  },
  {
    id: "blockchain-education-2",
    name: "Corporate & Institutional Training",
    shortDescription: "Customized workshops for financial institutions, corporates, government agencies, and NGOs.",
    longDescription: "Tailored training programs covering Blockchain for business, digital assets policy awareness, emerging tech strategy, and regulatory alignment for organizations across sectors.",
    category: "blockchain-education",
    url: "/services/blockchain-education",
  },
  {
    id: "blockchain-education-3",
    name: "Blockchain & Digital Asset Advisory",
    shortDescription: "Blockchain use-case assessment, tokenization strategy, Web3 business models, and compliance considerations.",
    longDescription: "Expert guidance on blockchain use-case assessment, tokenization and digital asset strategy, Web3 business models, and risk, governance, and compliance considerations.",
    category: "blockchain-education",
    url: "/services/blockchain-education",
  },
  {
    id: "blockchain-education-4",
    name: "Public Advocacy & Ecosystem Engagement",
    shortDescription: "Public seminars, webinars, community education, and policy-aligned thought leadership.",
    longDescription: "Comprehensive public engagement including seminars, webinars, community education programs, thought leadership, collaboration with regulators, monthly Blockchain Literacy Series, and VASP framework whitepapers.",
    category: "blockchain-education",
    url: "/services/blockchain-education",
  },
  {
    id: "blockchain-education-5",
    name: "VASP Compliance Education",
    shortDescription: "Training for VASP license holders on Ghana's regulatory framework and compliance requirements.",
    longDescription: "Specialized compliance education for exchanges, wallets, and fintechs including free literacy content, paid certificate courses, corporate retainers, and government & donor-funded programs.",
    category: "blockchain-education",
    url: "/services/blockchain-education",
  },
];

export const investmentAdvisoryServices = servicesData.filter(
  (s) => s.category === "investment-advisory"
);

export const blockchainEducationServices = servicesData.filter(
  (s) => s.category === "blockchain-education"
);

// Service category overviews for pages
export const serviceCategories = {
  investmentAdvisory: {
    title: "Investment & Strategic Advisory",
    overview: "CAI provides bespoke advisory services to startups, SMEs, investors, and institutions operating in or entering Africa's digital economy. Our approach is hands-on, research-driven, and aligned with regulatory realities.",
  },
  blockchainEducation: {
    title: "Blockchain Education & Advocacy",
    overview: "Under Ghana's Virtual Asset Service Provider (VASP) framework, CAI operates within the Advocacy category, focusing on education, literacy, and public awareness. Our programs support Ghana's National Virtual Assets Literacy Initiative (NaVALI).",
    disclaimer: "Core Afrique Investment Ltd provides education, advocacy, and advisory services only. CAI does not offer custodial, trading, brokerage, or investment solicitation services related to virtual assets.",
  },
};
