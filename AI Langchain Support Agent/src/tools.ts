export const tools = [
  {
    name: "faq_lookup",
    description: "Search FAQs for common support questions",
    func: async (input: string) => {
      if (input.toLowerCase().includes("refund")) {
        return "Refunds take 5-7 business days.";
      }
      return "No FAQ found.";
    }
  }
];