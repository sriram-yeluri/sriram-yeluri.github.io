// ─────────────────────────────────────────────
// Resume content — edit this file to update the page
// ─────────────────────────────────────────────
const RESUME = {

  // ── PERSONAL INFO ──────────────────────────
  name: "Sriram Yeluri",
  title: "IT Consultant · Cloud Solution Architect · DevSecOps",
  email: "sriram.yeluri@outlook.com",
  phone: "+31 647 624 430",
  phoneHref: "tel:+31647624430",
  linkedin: "linkedin.com/in/sriram-yeluri",
  linkedinHref: "https://www.linkedin.com/in/sriram-yeluri/",
  location: "Netherlands",

  // ── SUMMARY ────────────────────────────────
  summary: `DevOps Consultant with <strong>more than 20 years of hands-on experience</strong> designing and
    delivering solutions for large enterprise projects using Cloud technologies.
    Proven track record at ABN-AMRO in setting up container vulnerability scanning (Prisma Cloud),
    3rd-party component scanning (Nexus Lifecycle), and static code analysis (Fortify).
    Skilled in On-Premise to Cloud migrations (AWS &amp; Azure), CI/CD best practices,
    microservices development in Go, and Role-Based Access Control via OpenLDAP.`,

  // ── EXPERIENCE ─────────────────────────────
  experience: [
    {
      company: "ABN-AMRO Bank",
      role: "DevOps Consultant — Software Logistics",
      dates: "Aug 2015 – Present",
      location: "Netherlands",
      bullets: [
        "Central CI/CD team supporting all development squads across the bank (Java, Frontend, Python, Go).",
        "Designed and delivered AWS implementation of Prisma Cloud (Twistlock) for container vulnerability scanning; migrated to Azure Kubernetes Service (AKS) using Helm and Azure DevOps pipelines.",
        "Led setup of Sonatype Nexus Lifecycle for 3rd-party component scanning; migrated from On-Premise to Azure Cloud with Ansible-automated provisioning.",
        "Migrated SonarQube Data Center from On-Premise to Azure including CI/CD integration and regression testing.",
        "Architected Fortify static code scanning infrastructure (1 SSC + 25 scan machines); orchestrated migrations On-Premise → AWS → Azure.",
        "Designed and developed microservices in Go for the application onboarding workflow.",
        "Architected Atlassian Bitbucket On-Premise Data Center solution with full Ansible automation.",
        "Implemented RBAC using OpenLDAP, integrated across all CI tooling and pipelines.",
      ],
    },
    {
      company: "Bank of America (via Infosys)",
      role: "Technical Consultant — Customer Banking Technology & Production Services",
      dates: "Dec 2013 – May 2015",
      location: "India",
      bullets: [
        "Provided technical support for development teams in build management, migrations, regular and production deployments, and release management.",
      ],
    },
    {
      company: "Infosys Limited — Finacle Core Banking",
      role: "Software Engineer",
      dates: "Nov 2011 – Nov 2013",
      location: "India",
      bullets: [
        "Delivered end-to-end enhancement to the Loans module of Finacle, a core banking platform used by global financial institutions.",
      ],
    },
    {
      company: "Ericsson (via TCS)",
      role: "Software Engineer — BB OSS / Network Solutions",
      dates: "Mar 2007 – Nov 2011",
      location: "India · UK, Coventry (May 2009 – Feb 2010)",
      bullets: [
        "Automated build processes within BB OSS managing End-to-End Network solutions (Optical, Microwave, Ethernet).",
        "Developed enhancements to the Mini Link Microwave plugin; development, automation, and feature testing.",
        "Designed automated test scenarios for ECN (EDA Management Proxy) performance measurement.",
        "Developed test scenarios for Mobile @ Home Support Node (HSN) features.",
      ],
    },
    {
      company: "Emmosys Technologies",
      role: "Software Engineer",
      dates: "Jul 2006 – Feb 2007",
      location: "India",
      bullets: [],
    },
    {
      company: "IDRBT — Institute for Development & Research in Banking Technology",
      role: "Research Intern",
      dates: "Sep 2004 – Apr 2005",
      location: "India",
      bullets: [],
    },
  ],

  // ── SKILLS ─────────────────────────────────
  skills: [
    { label: "Cloud",           tags: ["AWS", "Azure"] },
    { label: "Containers",      tags: ["Kubernetes", "Docker", "Helm"] },
    { label: "IaC / Automation",tags: ["Ansible", "Terraform", "Bicep"] },
    { label: "CI/CD",           tags: ["Jenkins", "Azure DevOps"] },
    { label: "Security",        tags: ["Prisma Cloud", "Nexus Lifecycle", "Fortify"] },
    { label: "Programming",     tags: ["Go", "Python", "Shell"] },
    { label: "Version Control", tags: ["Git", "Bitbucket", "GitHub"] },
    { label: "Databases",       tags: ["MSSQL", "PostgreSQL"] },
    { label: "Platforms",       tags: ["Linux", "OpenLDAP", "Jira", "Confluence"] },
  ],

  // ── EDUCATION ──────────────────────────────
  education: [
    { degree: "Master of Technology",    field: "Applied Electronics" },
    { degree: "Bachelor of Engineering", field: "Electronics and Communication" },
  ],

  // ── CERTIFICATIONS ─────────────────────────
  certifications: [
    {
      name: "Certified Kubernetes Administrator (CKA)",
      verifyUrl: "https://www.credly.com/badges/dea7a756-8e0f-49c9-9987-dbfecc54c173/public_url",
    },
    {
      name: "Microsoft Azure Fundamentals (AZ-900)",
      verifyUrl: "https://www.credly.com/badges/8b5beb12-4bec-4c32-b895-ff0c183ff2c6/public_url",
    },
    {
      name: "Certified CloudBees Jenkins Engineer",
      verifyUrl: "https://certificates.cloudbees.com/yjc3ypcl",
    },
  ],
};
