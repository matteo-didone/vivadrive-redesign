// app/data/jobs/different-position.ts
import { JobPosition } from "@/app/careers/components/JobTypes";

const jobPosition: JobPosition = {
  id: "different",
  slug: "different-position",
  title: "Different position?",
  subtitle: "Open Application",
  location: "Remote/Warsaw, Poland",
  type: "FULL TIME",
  category: "OTHER",
  department: "Various",
  postedDate: "2025-03-01T12:00:00Z",
  featured: false,
  description: `
    <p>Is your skillset not on our list? Don't worry, we are always open for talents.</p>

    <p>We are VivaDrive - #mobility #energy startup that helps companies introduce Electric Cars in a car park and manage them. We work with global brands across the globe (Europe & Asia).</p>
    
    <p>As we are growing and getting new exciting projects, we are always looking for talented individuals who can contribute to our mission and strengthen our team in various departments and roles.</p>
    
    <p>We are building our own products, so you will be able to have an impact on the product strategy, use cutting-edge technologies and participate in every aspect of product development.</p>
    
    <p>We are a versatile and international team with the main office in Warsaw and other offices in Belgium and in Portugal.</p>
    
    <p>We were selected as among the best EU deep-tech and Big Data Startups by The Next Web. We were also incubated by the European Space Agency 🚀🌌</p>
    
    <p>If you enjoy a good startup atmosphere, challenging tasks, intercultural experience and the possibility to grow your skills, JOIN US!</p>
  `,
  shortDescription: "Don't see a role that matches your skills? We're always looking for talented individuals to join our team. Submit your open application.",
  requirements: [
    { required: true, text: "Passion for clean energy, mobility, or sustainability" },
    { required: true, text: "Strong skills in your area of expertise" },
    { required: true, text: "Good communication skills in English" },
    { required: true, text: "Ability to work in a fast-paced startup environment" },
    { required: true, text: "Problem-solving mindset and willingness to learn" },
    { required: false, text: "Experience in a startup or tech company" },
    { required: false, text: "Background in energy, mobility, or sustainability sectors" },
    { required: false, text: "Additional language skills (Polish, German, French, etc.)" }
  ],
  responsibilities: [
    { text: "Contribute to VivaDrive's mission in your area of expertise" },
    { text: "Collaborate with cross-functional teams to solve complex problems" },
    { text: "Participate in the development and improvement of our products" },
    { text: "Share your knowledge and skills with the team" },
    { text: "Adapt to a dynamic startup environment" },
    { text: "Help shape the future of electric mobility" }
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
  translations: {
    pl: {
      slug: "inna-pozycja",
      title: "Inna pozycja?",
      subtitle: "Aplikacja otwarta",
      location: "Praca zdalna/Warszawa, Polska",
      description: `
        <p>Twoje umiejętności nie są na naszej liście? Nie martw się, zawsze jesteśmy otwarci na talenty.</p>

        <p>Jesteśmy VivaDrive - #mobility #energy startupem, który pomaga firmom wprowadzać i zarządzać samochodami elektrycznymi. Współpracujemy z globalnymi markami na całym świecie (Europa i Azja).</p>
        
        <p>Ponieważ się rozwijamy i pozyskujemy nowe, ekscytujące projekty, zawsze poszukujemy utalentowanych osób, które mogą przyczynić się do realizacji naszej misji i wzmocnić nasz zespół w różnych działach i rolach.</p>
        
        <p>Budujemy własne produkty, więc będziesz mieć wpływ na strategię produktową, używać najnowocześniejszych technologii i uczestniczyć w każdym aspekcie rozwoju produktu.</p>
        
        <p>Jesteśmy wszechstronnym i międzynarodowym zespołem z głównym biurem w Warszawie oraz innymi biurami w Belgii i Portugalii.</p>
        
        <p>Zostaliśmy wybrani jako jedne z najlepszych startupów deep-tech i Big Data w UE przez The Next Web. Byliśmy również inkubowani przez Europejską Agencję Kosmiczną 🚀🌌</p>
        
        <p>Jeśli lubisz dobrą atmosferę startupową, wyzwania, doświadczenie międzykulturowe i możliwość rozwijania swoich umiejętności, DOŁĄCZ DO NAS!</p>
      `,
      shortDescription: "Nie widzisz roli pasującej do Twoich umiejętności? Zawsze szukamy utalentowanych osób do naszego zespołu. Złóż swoją otwartą aplikację.",
      requirements: [
        { required: true, text: "Pasja do czystej energii, mobilności lub zrównoważonego rozwoju" },
        { required: true, text: "Silne umiejętności w Twojej dziedzinie specjalizacji" },
        { required: true, text: "Dobre umiejętności komunikacyjne w języku angielskim" },
        { required: true, text: "Zdolność do pracy w szybko zmieniającym się środowisku startupowym" },
        { required: true, text: "Podejście do rozwiązywania problemów i chęć do nauki" },
        { required: false, text: "Doświadczenie w startupie lub firmie technologicznej" },
        { required: false, text: "Doświadczenie w sektorach energii, mobilności lub zrównoważonego rozwoju" },
        { required: false, text: "Dodatkowe umiejętności językowe (polski, niemiecki, francuski, itp.)" }
      ],
      responsibilities: [
        { text: "Przyczynianie się do misji VivaDrive w Twojej dziedzinie specjalizacji" },
        { text: "Współpraca z zespołami międzyfunkcyjnymi w celu rozwiązywania złożonych problemów" },
        { text: "Udział w rozwoju i ulepszaniu naszych produktów" },
        { text: "Dzielenie się swoją wiedzą i umiejętnościami z zespołem" },
        { text: "Adaptacja do dynamicznego środowiska startupowego" },
        { text: "Pomoc w kształtowaniu przyszłości elektromobilności" }
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
      department: "Różne"
    }
  }
};

export default jobPosition;