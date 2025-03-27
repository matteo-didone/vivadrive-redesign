// app/data/jobs/data-scientist.ts
import { JobPosition } from "@/app/careers/components/JobTypes";

const jobPosition: JobPosition = {
  id: "data_scientist",
  slug: "data-scientist",
  title: "Data Scientist",
  subtitle: "Machine Learning Specialist",
  location: "Remote/Warsaw, Poland",
  type: "FULL TIME",
  category: "DATA",
  department: "Data Science",
  postedDate: "2025-03-12T12:00:00Z",
  featured: true,
  description: `
    <p>We are looking for a Data Scientist with at least 3 years experience.</p>

    <p>We are VivaDrive - #mobility #energy startup that helps companies introduce Electric Cars in a car park and manage them. We work with global brands across the globe (Europe & Asia).</p>
    
    <p>As we are growing and getting new exciting projects, we are looking for an experienced Data Scientist who will strengthen our team.</p>
    
    <p>We are building our own products, so you will be able to have an impact on the product strategy, use cutting-edge technologies and participate in every aspect of product development.</p>
    
    <p>We are a versatile and international team with the main office in Warsaw and other offices in Belgium and in Portugal.</p>
    
    <p>We were selected as among the best EU deep-tech and Big Data Startups by The Next Web. We were also incubated by the European Space Agency 🚀🌌</p>
    
    <p>If you enjoy a good startup atmosphere, challenging tasks, intercultural experience and the possibility to grow your skills, JOIN US!</p>
  `,
  shortDescription: "Join our data science team to develop predictive models and analytics for our fleet electrification platform.",
  requirements: [
    { required: true, text: "3+ years of experience in data science or machine learning" },
    { required: true, text: "Proficiency in Python and data science libraries (NumPy, Pandas, Scikit-learn)" },
    { required: true, text: "Experience with statistical analysis and machine learning algorithms" },
    { required: true, text: "Strong SQL skills and experience with databases" },
    { required: true, text: "Ability to translate business problems into data problems" },
    { required: false, text: "Experience with big data technologies (Spark, Hadoop)" },
    { required: false, text: "Knowledge of deep learning frameworks (TensorFlow, PyTorch)" },
    { required: false, text: "Familiarity with cloud platforms (AWS, GCP, Azure)" },
    { required: false, text: "Experience in energy, mobility, or sustainability sectors is a plus" }
  ],
  responsibilities: [
    { text: "Develop and implement machine learning models for vehicle electrification predictions" },
    { text: "Analyze large datasets to extract actionable insights" },
    { text: "Create data visualization tools to communicate findings effectively" },
    { text: "Collaborate with engineering teams to integrate models into production" },
    { text: "Develop algorithms to optimize charging infrastructure planning" },
    { text: "Improve data collection and preprocessing techniques" },
    { text: "Research and implement new approaches to solve complex data problems" },
    { text: "Monitor and maintain model performance in production environments" }
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
    min: 16000,
    max: 26000,
    currency: "PLN"
  },
  translations: {
    pl: {
      slug: "data-scientist",
      title: "Data Scientist",
      subtitle: "Specjalista Machine Learning",
      location: "Praca zdalna/Warszawa, Polska",
      description: `
        <p>Poszukujemy Data Scientist z co najmniej 3-letnim doświadczeniem.</p>

        <p>Jesteśmy VivaDrive - #mobility #energy startupem, który pomaga firmom wprowadzać i zarządzać samochodami elektrycznymi. Współpracujemy z globalnymi markami na całym świecie (Europa i Azja).</p>
        
        <p>Ponieważ się rozwijamy i pozyskujemy nowe, ekscytujące projekty, poszukujemy doświadczonego Data Scientist, który wzmocni nasz zespół.</p>
        
        <p>Budujemy własne produkty, więc będziesz mieć wpływ na strategię produktową, używać najnowocześniejszych technologii i uczestniczyć w każdym aspekcie rozwoju produktu.</p>
        
        <p>Jesteśmy wszechstronnym i międzynarodowym zespołem z głównym biurem w Warszawie oraz innymi biurami w Belgii i Portugalii.</p>
        
        <p>Zostaliśmy wybrani jako jedne z najlepszych startupów deep-tech i Big Data w UE przez The Next Web. Byliśmy również inkubowani przez Europejską Agencję Kosmiczną 🚀🌌</p>
        
        <p>Jeśli lubisz dobrą atmosferę startupową, wyzwania, doświadczenie międzykulturowe i możliwość rozwijania swoich umiejętności, DOŁĄCZ DO NAS!</p>
      `,
      shortDescription: "Dołącz do naszego zespołu data science, aby rozwijać modele predykcyjne i analitykę dla naszej platformy elektryfikacji floty.",
      requirements: [
        { required: true, text: "3+ lat doświadczenia w data science lub machine learning" },
        { required: true, text: "Biegłość w Pythonie i bibliotekach data science (NumPy, Pandas, Scikit-learn)" },
        { required: true, text: "Doświadczenie z analizą statystyczną i algorytmami uczenia maszynowego" },
        { required: true, text: "Silne umiejętności SQL i doświadczenie z bazami danych" },
        { required: true, text: "Umiejętność przekładania problemów biznesowych na problemy danych" },
        { required: false, text: "Doświadczenie z technologiami big data (Spark, Hadoop)" },
        { required: false, text: "Znajomość frameworków deep learning (TensorFlow, PyTorch)" },
        { required: false, text: "Znajomość platform chmurowych (AWS, GCP, Azure)" },
        { required: false, text: "Doświadczenie w sektorach energii, mobilności lub zrównoważonego rozwoju jest plusem" }
      ],
      responsibilities: [
        { text: "Rozwijanie i implementacja modeli uczenia maszynowego do predykcji elektryfikacji pojazdów" },
        { text: "Analiza dużych zbiorów danych w celu uzyskania praktycznych wniosków" },
        { text: "Tworzenie narzędzi wizualizacji danych do efektywnego komunikowania wyników" },
        { text: "Współpraca z zespołami inżynieryjnymi w celu integracji modeli w produkcji" },
        { text: "Opracowywanie algorytmów do optymalizacji planowania infrastruktury ładowania" },
        { text: "Ulepszanie technik zbierania i przetwarzania wstępnego danych" },
        { text: "Badanie i wdrażanie nowych podejść do rozwiązywania złożonych problemów danych" },
        { text: "Monitorowanie i utrzymywanie wydajności modeli w środowiskach produkcyjnych" }
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
      department: "Data Science"
    }
  }
};

export default jobPosition;