// Mock data for DKFS website

export const companyInfo = {
  name: "Dhruv Kothari Financial Services",
  shortName: "DKFS",
  tagline: "Wealth Creation Simplified",
  email: "dkfs.invest@gmail.com",
  phone: "+91 98765 43210",
  address: "Mumbai, Maharashtra, India"
};

export const aboutContent = {
  title: "About DKFS",
  description: "Dhruv Kothari Financial Services is your trusted partner in building long-term wealth through strategic investment planning. We specialize in mutual funds, systematic investment plans (SIPs), and comprehensive insurance solutions tailored to your financial goals.",
  experience: "10+ Years",
  clients: "500+",
  aum: "₹50+ Cr",
  certifications: [
    "AMFI Registered Mutual Fund Distributor",
    "NISM Certified Investment Advisor",
    "IRDAI Licensed Insurance Agent",
    "Certified Financial Planner (CFP)"
  ]
};

export const services = [
  {
    id: 1,
    title: "Mutual Funds",
    description: "Diversified portfolio solutions across equity, debt, and hybrid funds to match your risk appetite and financial objectives.",
    features: [
      "Expert fund selection",
      "Portfolio rebalancing",
      "Tax-efficient strategies",
      "Regular performance reviews"
    ]
  },
  {
    id: 2,
    title: "Systematic Investment Plans",
    description: "Build wealth systematically through disciplined monthly investments with the power of compounding and rupee cost averaging.",
    features: [
      "Start with as low as ₹500/month",
      "Flexible tenure options",
      "Auto-debit facility",
      "Goal-based planning"
    ]
  },
  {
    id: 3,
    title: "Insurance Solutions",
    description: "Comprehensive life and health insurance plans to protect your family's financial future and provide peace of mind.",
    features: [
      "Term insurance",
      "Health insurance",
      "Child education plans",
      "Retirement solutions"
    ]
  }
];

export const mockContactSubmit = (formData) => {
  // Mock contact form submission
  console.log("Contact form submitted:", formData);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: "Thank you for reaching out! We'll contact you within 24 hours."
      });
    }, 1000);
  });
};
