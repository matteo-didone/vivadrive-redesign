// app/data/jobs/ux-ui-designer.ts
import { JobPosition } from "@/app/careers/components/JobTypes";

const jobPosition: JobPosition = {
  id: "ux_ui",
  slug: "ux-ui-designer",
  title: "UX/UI Designer",
  subtitle: "Product Design Specialist",
  location: "Remote/Warsaw, Poland",
  type: "FULL TIME",
  category: "DESIGN",
  department: "Design",
  postedDate: "2025-03-04T12:00:00Z",
  featured: true,
  description: `
    <p>We are looking for a UX/UI designer with at least 2 years experience.</p>

    <p>We are VivaDrive - #mobility #energy startup that helps companies introduce Electric Cars in a car park and manage them. We work with global brands across the globe (Europe & Asia).</p>
    
    <p>As we are growing and getting new exciting projects, we are looking for an experienced UX/UI Designer who will strengthen our team.</p>
    
    <p>We are building our own products, so you will be able to have an impact on the product strategy, use cutting-edge technologies and participate in every aspect of product development.</p>
    
    <p>We are a versatile and international team with the main office in Warsaw and other offices in Belgium and in Portugal.</p>
    
    <p>We were selected as among the best EU deep-tech and Big Data Startups by The Next Web. We were also incubated by the European Space Agency 🚀🌌</p>
    
    <p>If you enjoy a good startup atmosphere, challenging tasks, intercultural experience and the possibility to grow your skills, JOIN US!</p>
  `,
  shortDescription: "Design intuitive user experiences and interfaces for our fleet electrification platform and mobile applications.",
  requirements: [
    { required: true, text: "2+ years of experience in UX/UI design" },
    { required: true, text: "Proficiency with design tools such as Figma, Sketch, or Adobe XD" },
    { required: true, text: "Experience designing B2B platforms or dashboards" },
    { required: true, text: "Strong portfolio demonstrating user-centered design approach" },
    { required: true, text: "Understanding of design systems and component-based design" },
    { required: false, text: "Experience with design for data visualization" },
    { required: false, text: "Knowledge of frontend technologies (HTML, CSS, JavaScript)" },
    { required: false, text: "Experience with design for mobile applications" },
    { required: false, text: "Background in energy, mobility, or sustainability sectors is a plus" }
  ],
  responsibilities: [
    { text: "Create intuitive user interfaces for web and mobile applications" },
    { text: "Develop user flows, wireframes, prototypes, and high-fidelity designs" },
    { text: "Design interactive dashboards and data visualization components" },
    { text: "Collaborate with product managers to understand user needs and requirements" },
    { text: "Work closely with frontend developers to ensure design implementation fidelity" },
    { text: "Conduct user research and usability testing" },
    { text: "Maintain and evolve the company's design system" },
    { text: "Stay current with UX/UI design trends and best practices" }
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
    min: 14000,
    max: 22000,
    currency: "PLN"
  },
  translations: {
    pl: {
      slug: "projektant-ux-ui",
      title: "UX/UI Designer",
      subtitle: "Specjalista Product Design",
      location: "Praca zdalna/Warszawa, Polska",
      description: `
        <p>Poszukujemy projektanta UX/UI z co najmniej 2-letnim doświadczeniem.</p>

        <p>Jesteśmy VivaDrive - #mobility #energy startupem, który pomaga firmom wprowadzać i zarządzać samochodami elektrycznymi. Współpracujemy z globalnymi markami na całym świecie (Europa i Azja).</p>
        
        <p>Ponieważ się rozwijamy i pozyskujemy nowe, ekscytujące projekty, poszukujemy doświadczonego Projektanta UX/UI, który wzmocni nasz zespół.</p>
        
        <p>Budujemy własne produkty, więc będziesz mieć wpływ na strategię produktową, używać najnowocześniejszych technologii i uczestniczyć w każdym aspekcie rozwoju produktu.</p>
        
        <p>Jesteśmy wszechstronnym i międzynarodowym zespołem z głównym biurem w Warszawie oraz innymi biurami w Belgii i Portugalii.</p>
        
        <p>Zostaliśmy wybrani jako jedne z najlepszych startupów deep-tech i Big Data w UE przez The Next Web. Byliśmy również inkubowani przez Europejską Agencję Kosmiczną 🚀🌌</p>
        
        <p>Jeśli lubisz dobrą atmosferę startupową, wyzwania, doświadczenie międzykulturowe i możliwość rozwijania swoich umiejętności, DOŁĄCZ DO NAS!</p>
      `,
      shortDescription: "Projektuj intuicyjne doświadczenia użytkownika i interfejsy dla naszej platformy elektryfikacji floty i aplikacji mobilnych.",
      requirements: [
        { required: true, text: "2+ lat doświadczenia w projektowaniu UX/UI" },
        { required: true, text: "Biegłość w narzędziach projektowych takich jak Figma, Sketch lub Adobe XD" },
        { required: true, text: "Doświadczenie w projektowaniu platform B2B lub dashboardów" },
        { required: true, text: "Silne portfolio demonstrujące podejście skoncentrowane na użytkowniku" },
        { required: true, text: "Zrozumienie systemów projektowych i projektowania opartego na komponentach" },
        { required: false, text: "Doświadczenie w projektowaniu wizualizacji danych" },
        { required: false, text: "Znajomość technologii frontendowych (HTML, CSS, JavaScript)" },
        { required: false, text: "Doświadczenie w projektowaniu aplikacji mobilnych" },
        { required: false, text: "Doświadczenie w sektorach energii, mobilności lub zrównoważonego rozwoju jest plusem" }
      ],
      responsibilities: [
        { text: "Tworzenie intuicyjnych interfejsów użytkownika dla aplikacji webowych i mobilnych" },
        { text: "Opracowywanie przepływów użytkownika, wireframe'ów, prototypów i projektów high-fidelity" },
        { text: "Projektowanie interaktywnych dashboardów i komponentów wizualizacji danych" },
        { text: "Współpraca z product managerami w celu zrozumienia potrzeb i wymagań użytkowników" },
        { text: "Ścisła współpraca z programistami frontend w celu zapewnienia wierności implementacji projektu" },
        { text: "Prowadzenie badań użytkowników i testów użyteczności" },
        { text: "Utrzymywanie i rozwijanie systemu projektowego firmy" },
        { text: "Śledzenie na bieżąco trendów i najlepszych praktyk w projektowaniu UX/UI" }
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
      department: "Design"
    }
  }
};

export default jobPosition;