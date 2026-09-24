import { getCollection } from "astro:content";

export async function GET({ request }) {
  const forms = await getCollection("forms");
  const vacancies = await getCollection("vacancies");
  const services = await getCollection("services");

  // Format data for search
  // Including hardcoded dummy services from services.astro just in case the collection is empty
  let searchData = [];
  
  if (forms) {
    searchData = [...searchData, ...forms.map(f => ({
      title: f.data.title,
      category: f.data.category,
      type: "form",
      url: `/en/forms`
    }))];
  }
  
  if (vacancies) {
    searchData = [...searchData, ...vacancies.map(v => ({
      title: v.data.title,
      category: v.data.category,
      type: "vacancy",
      url: `/en/vacancies`
    }))];
  }

  // Adding the default services mentioned in services.astro
  const defaultServices = [
    { title: "Income Certificate", category: "Certificate Services" },
    { title: "Caste Certificate", category: "Certificate Services" },
    { title: "Domicile Certificate", category: "Certificate Services" },
    { title: "e-Stamp", category: "Certificate Services" },
    { title: "Samagra e-KYC", category: "Banking & Revenue Services" },
    { title: "MP Bhulekh", category: "Banking & Revenue Services" },
    { title: "Khasra-Khatauni", category: "Banking & Revenue Services" },
    { title: "e-Registry", category: "Banking & Revenue Services" },
    { title: "Cash Withdrawal", category: "Banking & Revenue Services" },
    { title: "MP State Scholarship", category: "Admission & Scholarships" },
    { title: "College Admission", category: "Admission & Scholarships" },
    { title: "Counseling Forms", category: "Admission & Scholarships" },
    { title: "MP Police", category: "Government Recruitments" },
    { title: "Railway", category: "Government Recruitments" },
    { title: "SSC", category: "Government Recruitments" },
    { title: "Vyapam", category: "Government Recruitments" },
    { title: "Other Competitive Exam Forms", category: "Government Recruitments" },
    { title: "Aadhaar Services", category: "Other Services" },
    { title: "PAN Card", category: "Other Services" },
    { title: "Voter ID", category: "Other Services" },
    { title: "Ayushman Card", category: "Other Services" },
    { title: "Color Print & Photocopy", category: "Other Services" }
  ];

  const allServices = services && services.length > 0 ? services.map(s => s.data) : defaultServices;
  
  searchData = [...searchData, ...allServices.map(s => ({
    title: s.title,
    category: s.category,
    type: "service",
    url: `/en/services`
  }))];

  return new Response(JSON.stringify(searchData), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}
