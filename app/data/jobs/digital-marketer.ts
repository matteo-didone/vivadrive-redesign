// app/data/jobs/digital-marketer.ts
import { JobPosition } from "@/app/careers/components/JobTypes";

const jobPosition: JobPosition = {
  id: "digital_marketer",
  slug: "digital-marketer",
  title: "Digital Marketer",
  subtitle: "Growth Marketing Specialist",
  location: "Remote/Warsaw, Poland",
  type: "FULL TIME",
  category: "MARKETING",
  department: "Marketing",
  postedDate: "2025-03-08T12:00:00Z",
  featured: true,
  description: `
    <p>We are looking for a Digital Marketer with at least 2 years experience.</p>

    <p>We are VivaDrive - #mobility #energy startup that helps companies introduce Electric Cars in a car park and manage them. We work with global brands across the globe (Europe & Asia).</p>
    
    <p>As we are growing and getting new exciting projects, we are looking for an experienced Digital Marketer who will strengthen our team.</p>
    
    <p>We are building our own products, so you will be able to have an impact on the product strategy, use cutting-edge technologies and participate in every aspect of product development.</p>
    
    <p>We are a versatile and international team with the main office in Warsaw and other offices in Belgium and in Portugal.</p>
    
    <p>We were selected as among the best EU deep-tech and Big Data Startups by The Next Web. We were also incubated by the European Space Agency 🚀🌌</p>
    
    <p>If you enjoy a good startup atmosphere, challenging tasks, intercultural experience and the possibility to grow your skills, JOIN US!</p>
  `,
  shortDescription: "Drive our digital marketing initiatives to grow our presence in the fleet electrification market across Europe.",
  requirements: [
    { required: true, text: "2+ years of experience in digital marketing" },
    { required: true, text: "Proven track record in B2B marketing campaigns" },
    { required: true, text: "Experience with SEO, SEM, and social media marketing" },
    { required: true, text: "Strong analytical skills and experience with marketing analytics tools" },
    { required: true, text: "Excellent written and verbal communication skills" },
    { required: false, text: "Experience with marketing automation platforms (HubSpot, Marketo, etc.)" },
    { required: false, text: "Knowledge of CRM systems and lead nurturing strategies" },
    { required: false, text: "Content creation experience for technical or cleantech industries" },
    { required: false, text: "Background in energy, mobility, or sustainability sectors is a plus" }
  ],
  responsibilities: [
    { text: "Plan and execute digital marketing campaigns across multiple channels" },
    { text: "Develop and optimize content for websites, blogs, and social media" },
    { text: "Manage SEO/SEM strategies to increase organic traffic and leads" },
    { text: "Track and analyze marketing metrics to improve campaign performance" },
    { text: "Create compelling marketing materials for fleet electrification solutions" },
    { text: "Collaborate with sales team to generate high-quality leads" },
    { text: "Maintain and enhance brand messaging across all digital touchpoints" },
    { text: "Stay current with digital marketing trends and best practices" }
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
    min: 12000,
    max: 18000,
    currency: "PLN"
  },
  translations: {
    pl: {
      slug: "digital-marketer",
      title: "Digital Marketer",
      subtitle: "Specjalista Growth Marketing",
      location: "Praca zdalna/Warszawa, Polska",
      description: `
        <p>Poszukujemy Digital Marketera z co najmniej 2-letnim doświadczeniem.</p>

        <p>Jesteśmy VivaDrive - #mobility #energy startupem, który pomaga firmom wprowadzać i zarządzać samochodami elektrycznymi. Współpracujemy z globalnymi markami na całym świecie (Europa i Azja).</p>
        
        <p>Ponieważ się rozwijamy i pozyskujemy nowe, ekscytujące projekty, poszukujemy doświadczonego Digital Marketera, który wzmocni nasz zespół.</p>
        
        <p>Budujemy własne produkty, więc będziesz mieć wpływ na strategię produktową, używać najnowocześniejszych technologii i uczestniczyć w każdym aspekcie rozwoju produktu.</p>
        
        <p>Jesteśmy wszechstronnym i międzynarodowym zespołem z głównym biurem w Warszawie oraz innymi biurami w Belgii i Portugalii.</p>
        
        <p>Zostaliśmy wybrani jako jedne z najlepszych startupów deep-tech i Big Data w UE przez The Next Web. Byliśmy również inkubowani przez Europejską Agencję Kosmiczną 🚀🌌</p>
        
        <p>Jeśli lubisz dobrą atmosferę startupową, wyzwania, doświadczenie międzykulturowe i możliwość rozwijania swoich umiejętności, DOŁĄCZ DO NAS!</p>
      `,
      shortDescription: "Kieruj naszymi inicjatywami marketingu cyfrowego, aby rozwijać naszą obecność na rynku elektryfikacji flot w całej Europie.",
      requirements: [
        { required: true, text: "2+ lat doświadczenia w marketingu cyfrowym" },
        { required: true, text: "Udokumentowane osiągnięcia w kampaniach B2B" },
        { required: true, text: "Doświadczenie z SEO, SEM i marketingiem w mediach społecznościowych" },
        { required: true, text: "Silne umiejętności analityczne i doświadczenie z narzędziami analityki marketingowej" },
        { required: true, text: "Doskonałe umiejętności komunikacji pisemnej i werbalnej" },
        { required: false, text: "Doświadczenie z platformami automatyzacji marketingu (HubSpot, Marketo, itp.)" },
        { required: false, text: "Znajomość systemów CRM i strategii pielęgnowania leadów" },
        { required: false, text: "Doświadczenie w tworzeniu treści dla branż technicznych lub czystych technologii" },
        { required: false, text: "Doświadczenie w sektorach energii, mobilności lub zrównoważonego rozwoju jest plusem" }
      ],
      responsibilities: [
        { text: "Planowanie i realizacja kampanii marketingu cyfrowego w wielu kanałach" },
        { text: "Tworzenie i optymalizacja treści dla stron internetowych, blogów i mediów społecznościowych" },
        { text: "Zarządzanie strategiami SEO/SEM w celu zwiększenia ruchu organicznego i pozyskiwania leadów" },
        { text: "Śledzenie i analiza metryk marketingowych w celu poprawy wydajności kampanii" },
        { text: "Tworzenie przekonujących materiałów marketingowych dla rozwiązań elektryfikacji floty" },
        { text: "Współpraca z zespołem sprzedaży w celu generowania wysokiej jakości leadów" },
        { text: "Utrzymywanie i wzmacnianie przekazu marki we wszystkich punktach styku cyfrowego" },
        { text: "Śledzenie na bieżąco trendów i najlepszych praktyk w marketingu cyfrowym" }
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
      department: "Marketing"
    }
  }
};

export default jobPosition;