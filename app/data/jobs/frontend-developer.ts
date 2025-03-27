// app/data/jobs/frontend-developer.ts
import { JobPosition } from "@/app/careers/components/JobTypes";

const jobPosition: JobPosition = {
  id: "frontend",
  slug: "frontend-developer",
  title: "Front-end Developer",
  subtitle: "React Specialist",
  location: "Remote/Warsaw, Poland",
  type: "FULL TIME",
  category: "ENGINEERING",
  department: "Engineering",
  postedDate: "2025-03-10T12:00:00Z",
  featured: true,
  description: `
    <p>We are looking for an experienced Python/Django developer with at least 4 years Python experience.</p>

    <p>We are VivaDrive - #mobility #energy startup that helps companies introduce Electric Cars in a car park and manage them. We work with global brands across the globe (Europe & Asia).</p>
    
    <p>As we are growing and getting new exciting projects, we are looking for an experienced Python/Django Developer who will strengthen our team.</p>
    
    <p>We are building our own products, so you will be able to have an impact on the product strategy, use cutting-edge technologies and participate in every aspect of product development.</p>
    
    <p>We are a versatile and international team with the main office in Warsaw and other offices in Belgium and in Portugal.</p>
    
    <p>We were selected as among the best EU deep-tech and Big Data Startups by The Next Web. We were also incubated by the European Space Agency 🚀🌌</p>
    
    <p>If you enjoy a good startup atmosphere, challenging tasks, intercultural experience and the possibility to grow your skills, JOIN US!</p>
  `,
  shortDescription:
    "Join our engineering team to build frontend interfaces for our fleet electrification platform using React and modern frontend technologies.",
  requirements: [
    {
      required: true,
      text: "3+ years of experience with frontend development",
    },
    { required: true, text: "2+ years of experience with React.js" },
    { required: true, text: "Strong proficiency with JavaScript/TypeScript" },
    {
      required: true,
      text: "Experience with modern frontend tools (Webpack, Babel, etc.)",
    },
    { required: true, text: "Knowledge of responsive design principles" },
    {
      required: false,
      text: "Experience with state management libraries (Redux, Context API)",
    },
    {
      required: false,
      text: "Familiarity with data visualization libraries (D3.js, Chart.js)",
    },
    {
      required: false,
      text: "Experience with testing frameworks (Jest, React Testing Library)",
    },
    {
      required: false,
      text: "Background in energy, mobility, or sustainability sectors is a plus",
    },
  ],
  responsibilities: [
    { text: "Develop modern, responsive user interfaces using React.js" },
    { text: "Implement interactive features and data visualizations" },
    {
      text: "Collaborate with UX/UI designers to translate designs into functional code",
    },
    { text: "Work with backend developers to integrate frontend with APIs" },
    { text: "Optimize applications for maximum performance and scalability" },
    { text: "Write clean, maintainable, and well-documented code" },
    {
      text: "Participate in code reviews and contribute to frontend architecture decisions",
    },
    {
      text: "Stay current with emerging frontend technologies and best practices",
    },
  ],
  benefits: [
    {
      icon: "building",
      text: "Modern office in central Warsaw (with remote options)",
    },
    { icon: "globe", text: "International work environment" },
    {
      icon: "code",
      text: "Work on real-world projects with impactful outcomes",
    },
    {
      icon: "zap",
      text: "Professional growth opportunities and regular training",
    },
    { icon: "coffee", text: "Flexible working hours and work-life balance" },
    {
      icon: "users",
      text: "Collaborative team culture with regular team events",
    },
    { icon: "award", text: "Competitive salary and performance bonuses" },
    { icon: "umbrella", text: "Private healthcare and wellness program" },
  ],
  salary: {
    min: 15000,
    max: 24000,
    currency: "PLN",
  },
  translations: {
    pl: {
      slug: "frontend-developer",
      title: "Front-end Developer",
      subtitle: "Specjalista React",
      location: "Praca zdalna/Warszawa, Polska",
      description: `
        <p>Poszukujemy doświadczonego programisty Python/Django z co najmniej 4-letnim doświadczeniem w Pythonie.</p>

        <p>Jesteśmy VivaDrive - #mobility #energy startupem, który pomaga firmom wprowadzać i zarządzać samochodami elektrycznymi. Współpracujemy z globalnymi markami na całym świecie (Europa i Azja).</p>
        
        <p>Ponieważ się rozwijamy i pozyskujemy nowe, ekscytujące projekty, poszukujemy doświadczonego programisty Front-end Developer, który wzmocni nasz zespół.</p>
        
        <p>Budujemy własne produkty, więc będziesz mieć wpływ na strategię produktową, używać najnowocześniejszych technologii i uczestniczyć w każdym aspekcie rozwoju produktu.</p>
        
        <p>Jesteśmy wszechstronnym i międzynarodowym zespołem z głównym biurem w Warszawie oraz innymi biurami w Belgii i Portugalii.</p>
        
        <p>Zostaliśmy wybrani jako jedne z najlepszych startupów deep-tech i Big Data w UE przez The Next Web. Byliśmy również inkubowani przez Europejską Agencję Kosmiczną 🚀🌌</p>
        
        <p>Jeśli lubisz dobrą atmosferę startupową, wyzwania, doświadczenie międzykulturowe i możliwość rozwijania swoich umiejętności, DOŁĄCZ DO NAS!</p>
      `,
      shortDescription:
        "Dołącz do naszego zespołu inżynieryjnego, aby budować interfejsy frontendowe dla naszej platformy elektryfikacji floty przy użyciu React i nowoczesnych technologii frontendowych.",
      requirements: [
        { required: true, text: "3+ lat doświadczenia w rozwoju frontendu" },
        { required: true, text: "2+ lat doświadczenia z React.js" },
        { required: true, text: "Silna biegłość w JavaScript/TypeScript" },
        {
          required: true,
          text: "Doświadczenie z nowoczesnymi narzędziami frontendowymi (Webpack, Babel, itp.)",
        },
        { required: true, text: "Znajomość zasad projektowania responsywnego" },
        {
          required: false,
          text: "Doświadczenie z bibliotekami zarządzania stanem (Redux, Context API)",
        },
        {
          required: false,
          text: "Znajomość bibliotek wizualizacji danych (D3.js, Chart.js)",
        },
        {
          required: false,
          text: "Doświadczenie z frameworkami testowymi (Jest, React Testing Library)",
        },
        {
          required: false,
          text: "Doświadczenie w sektorach energii, mobilności lub zrównoważonego rozwoju jest plusem",
        },
      ],
      responsibilities: [
        {
          text: "Rozwój nowoczesnych, responsywnych interfejsów użytkownika przy użyciu React.js",
        },
        { text: "Implementacja interaktywnych funkcji i wizualizacji danych" },
        {
          text: "Współpraca z projektantami UX/UI w celu przekształcenia projektów w funkcjonalny kod",
        },
        {
          text: "Praca z programistami backend w celu integracji frontendu z API",
        },
        {
          text: "Optymalizacja aplikacji dla maksymalnej wydajności i skalowalności",
        },
        {
          text: "Pisanie czystego, łatwego w utrzymaniu i dobrze udokumentowanego kodu",
        },
        {
          text: "Udział w przeglądach kodu i przyczynianie się do decyzji dotyczących architektury frontendu",
        },
        {
          text: "Bycie na bieżąco z nowymi technologiami frontendowymi i najlepszymi praktykami",
        },
      ],
      benefits: [
        {
          icon: "building",
          text: "Nowoczesne biuro w centrum Warszawy (z opcjami pracy zdalnej)",
        },
        { icon: "globe", text: "Międzynarodowe środowisko pracy" },
        {
          icon: "code",
          text: "Praca nad projektami z realnego świata z znaczącymi rezultatami",
        },
        {
          icon: "zap",
          text: "Możliwości rozwoju zawodowego i regularne szkolenia",
        },
        {
          icon: "coffee",
          text: "Elastyczne godziny pracy i równowaga między pracą a życiem prywatnym",
        },
        {
          icon: "users",
          text: "Kultura pracy zespołowej z regularnymi wydarzeniami teamowymi",
        },
        {
          icon: "award",
          text: "Konkurencyjne wynagrodzenie i premie za wyniki",
        },
        {
          icon: "umbrella",
          text: "Prywatna opieka zdrowotna i program wellness",
        },
      ],
      department: "Inżynieria",
    },
  },
};

export default jobPosition;
