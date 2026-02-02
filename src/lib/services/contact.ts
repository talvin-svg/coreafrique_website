import { companyInfo } from "@/lib/data/company";

// Configuration
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwvqnlnl";

// Types
export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

export interface ContactSubmissionResult {
  success: boolean;
  error?: string;
}

// Error messages
const ERROR_MESSAGES = {
  RATE_LIMIT: `Our contact form has reached its limit. Please email us directly at ${companyInfo.email}`,
  GENERIC: `Something went wrong. Please try again or email us directly at ${companyInfo.email}`,
};

/**
 * Submits contact form data to Formspree
 */
export async function submitContactForm(
  data: ContactFormData
): Promise<ContactSubmissionResult> {
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return { success: true };
    }

    if (response.status === 429) {
      return { success: false, error: ERROR_MESSAGES.RATE_LIMIT };
    }

    return { success: false, error: ERROR_MESSAGES.GENERIC };
  } catch {
    return { success: false, error: ERROR_MESSAGES.GENERIC };
  }
}

/**
 * Returns empty form data
 */
export function getEmptyFormData(): ContactFormData {
  return {
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  };
}
