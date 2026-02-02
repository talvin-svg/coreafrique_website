import { ClientCategory } from "@/types/client";

export const clientCategories: ClientCategory[] = [
  {
    id: "client-1",
    name: "Government Ministries, Departments, and Agencies",
    description: "Ministry of Trade & Industry, Ministry of Finance & Economic Planning, Ministry of Harbours & Railways, and other government entities.",
    clientCount: 10,
  },
  {
    id: "client-2",
    name: "International Lending",
    description: "IFC (International Finance Corporation) and APDF (African Project Development Fund).",
    clientCount: 2,
  },
  {
    id: "client-3",
    name: "Multinational Corporations",
    description: "Big 4 Accounting Firms and major international corporations operating in Africa.",
    clientCount: 20,
  },
  {
    id: "client-4",
    name: "State-Owned / Public Institutions",
    description: "Ghana National Petroleum Corporation (GNPC), SSNIT Pension Fund, ECG, GRIDco, and Chamber of Mines.",
    clientCount: 12,
  },
  {
    id: "client-5",
    name: "Other Reputable Organizations",
    description: "Various professional bodies and non-governmental organisations (NGOs).",
    clientCount: 25,
  },
];
