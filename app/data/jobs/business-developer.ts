// app/data/jobs/business-developer.ts
import { JobPosition } from "@/app/careers/components/JobTypes";

const jobPosition: JobPosition = {
  id: "business_developer",
  slug: "business-developer",
  title: "Business Developer",
  subtitle: "Fleet Electrification Specialist",
  location: "Remote/Warsaw, Poland",
  type: "FULL TIME",
  category: "BUSINESS",
  department: "Business Development",
  postedDate: "2025-03-05T12:00:00Z",
  featured: true,
  description: `
    <p>We are looking for a Business Developer with at least 5 years experience.</p>

    <p>We are VivaDrive - #mobility #energy startup that helps companies introduce Electric Cars in a car park and manage them. We work with global brands across the globe (Europe & Asia).</p>
    
    <p>As we are growing and getting new exciting projects, we are looking for an experienced Business Developer who will strengthen our team.</p>
    
    <p>We are building our own products, so you will be able to have an impact on the product strategy, use cutting-edge technologies and participate in every aspect of product development.</p>
    
    <p>We are a versatile and international team with the main office in Warsaw and other offices in Belgium and in Portugal.</p>
    
    <p>We were selected as among the best EU deep-tech and Big Data Startups by The Next Web. We were also incubated by the European Space Agency 🚀🌌</p>
    
    <p>If you enjoy a good startup atmosphere, challenging tasks, intercultural experience and the possibility to grow your skills, JOIN US!</p>
  `,
  shortDescription: "Develop new business opportunities and partnerships to expand our fleet electrification solutions across Europe and Asia.",
  requirements: [
    { required: true, text: "5+ years of experience in business development or sales" },
    { required: true, text: "Proven track record in B2B sales and partnership development" },
    { required: true, text: "Experience in the automotive, mobility, or energy sectors" },
    { required: true, text: "Strong negotiation and presentation skills" },
    { required: true, text: "Excellent communication and relationship-building abilities" },
    { required: false, text: "Knowledge of fleet management or electric vehicle technologies" },
    { required: false, text: "Experience with SaaS or technology solution sales" },
    { required: false, text: "International business development experience" },
    { required: false, text: "Language skills beyond English (Polish, German, French, etc.)" }
  ],
  responsibilities: [
    { text: "Identify and develop new business opportunities in the fleet electrification market" },
    { text: "Build and maintain relationships with key clients and partners" },
    { text: "Negotiate and close strategic partnerships and sales deals" },
    { text: "Represent VivaDrive at industry events and conferences" },
    { text: "Collaborate with product and marketing teams to refine value propositions" },
    { text: "Develop and execute business development strategies for different markets" },
    { text: "Monitor industry trends and competitive landscape" },
    { text: "Contribute to the company's overall growth and business strategy" }
  ],
  benefits: [
    { icon: "building", text: "Modern office in central Warsaw (with remote options)" },
    { icon: "globe", text: "International work environment" },
    { icon: "code", text: "Work on real-world projects with impactful outcomes" },
    { icon: "zap", text: "Professional growth opportunities and regular training" },
    { icon: "coffee", text: "Flexible working hours and work-life balance" },
    { icon: "users", text: "Collaborative team culture with regular team events" },
    { icon: "award", text: "Competitive salary and performance bonuses" },
    { icon: "umbrella", text: "Private healthcare and wellness program" }
  ],
  salary: {
    min: 18000,
    max: 30000,
    currency: "PLN"
  },
  translations: {
    pl: {
      slug: "business-developer",
      title: "Business Developer",
      subtitle: "Specjalista ds. Elektryfikacji Flot",
      location: "Praca zdalna/Warszawa, Polska",
      description: `
        <p>Poszukujemy Business Developera z co najmniej 5-letnim doświadczeniem.</p>

        <p>Jesteśmy VivaDrive - #mobility #energy startupem, który pomaga firmom wprowadzać i zarządzać samochodami elektrycznymi. Współpracujemy z globalnymi markami na całym świecie (Europa i Azja).</p>
        
        <p>Ponieważ się rozwijamy i pozyskujemy nowe, ekscytujące projekty, poszukujemy doświadczonego Business Developera, który wzmocni nasz zespół.</p>
        
        <p>Budujemy własne produkty, więc będziesz mieć wpływ na strategię produktową, używać najnowocześniejszych technologii i uczestniczyć w każdym aspekcie rozwoju produktu.</p>
        
        <p>Jesteśmy wszechstronnym i międzynarodowym zespołem z głównym biurem w Warszawie oraz innymi biurami w Belgii i Portugalii.</p>
        
        <p>Zostaliśmy wybrani jako jedne z najlepszych startupów deep-tech i Big Data w UE przez The Next Web. Byliśmy również inkubowani przez Europejską Agencję Kosmiczną 🚀🌌</p>
        
        <p>Jeśli lubisz dobrą atmosferę startupową, wyzwania, doświadczenie międzykulturowe i możliwość rozwijania swoich umiejętności, DOŁĄCZ DO NAS!</p>
      `,
      shortDescription: "Rozwijaj nowe możliwości biznesowe i partnerstwa w celu rozszerzenia naszych rozwiązań elektryfikacji flot w Europie i Azji.",
      requirements: [
        { required: true, text: "5+ lat doświadczenia w rozwoju biznesu lub sprzedaży" },
        { required: true, text: "Udokumentowane osiągnięcia w sprzedaży B2B i rozwoju partnerstw" },
        { required: true, text: "Doświadczenie w sektorach motoryzacyjnym, mobilności lub energetycznym" },
        { required: true, text: "Silne umiejętności negocjacyjne i prezentacyjne" },
        { required: true, text: "Doskonałe umiejętności komunikacyjne i budowania relacji" },
        { required: false, text: "Znajomość zarządzania flotą lub technologii pojazdów elektrycznych" },
        { required: false, text: "Doświadczenie w sprzedaży rozwiązań SaaS lub technologicznych" },
        { required: false, text: "Doświadczenie w międzynarodowym rozwoju biznesu" },
        { required: false, text: "Umiejętności językowe poza angielskim (polski, niemiecki, francuski, itp.)" }
      ],
      responsibilities: [
        { text: "Identyfikacja i rozwijanie nowych możliwości biznesowych na rynku elektryfikacji flot" },
        { text: "Budowanie i utrzymywanie relacji z kluczowymi klientami i partnerami" },
        { text: "Negocjowanie i zamykanie partnerstw strategicznych i umów sprzedaży" },
        { text: "Reprezentowanie VivaDrive na wydarzeniach i konferencjach branżowych" },
        { text: "Współpraca z zespołami produktowymi i marketingowymi w celu dopracowania propozycji wartości" },
        { text: "Opracowywanie i realizacja strategii rozwoju biznesu dla różnych rynków" },
        { text: "Monitorowanie trendów branżowych i krajobrazu konkurencyjnego" },
        { text: "Przyczynianie się do ogólnego wzrostu i strategii biznesowej firmy" }
      ],
      benefits: [
        { icon: "building", text: "Nowoczesne biuro w centrum Warszawy (z opcjami pracy zdalnej)" },
        { icon: "globe", text: "Międzynarodowe środowisko pracy" },
        { icon: "code", text: "Praca nad projektami z realnego świata z znaczącymi rezultatami" },
        { icon: "zap", text: "Możliwości rozwoju zawodowego i regularne szkolenia" },
        { icon: "coffee", text: "Elastyczne godziny pracy i równowaga między pracą a życiem prywatnym" },
        { icon: "users", text: "Kultura pracy zespołowej z regularnymi wydarzeniami teamowymi" },
        { icon: "award", text: "Konkurencyjne wynagrodzenie i premie za wyniki" },
        { icon: "umbrella", text: "Prywatna opieka zdrowotna i program wellness" }
      ],
      department: "Rozwój Biznesu"
    }
  }
};

export default jobPosition;