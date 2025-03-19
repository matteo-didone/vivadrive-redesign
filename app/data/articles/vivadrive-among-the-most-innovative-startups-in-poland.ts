// app/data/articles/vivadrive-among-the-most-innovative-startups-in-poland.ts
import { Article } from "@/app/newsroom/components/NewsTypes";

const article: Article = {
  id: "startups-w-palacu",
  slug: "vivadrive-among-the-most-innovative-startups-in-poland",
  title: "VivaDrive among the most innovative startups in Poland!",
  date: "2019-12-08T12:00:00Z",
  readTime: 3,
  image: "/newsroom/startupy-palacu/startupy-palacu.png",
  category: "AWARD",
  type: "PRESS",
  excerpt:
    "VivaDrive was recognized as one of the most innovative startups in Poland in the 'Startups in the Palace' contest organized by the President of the Republic of Poland.",
  content: `
    <p>VivaDrive was recognized as one of the most innovative startups in Poland in the "Startups in the Palace" contest organized by the President of the Republic of Poland.</p>
    
    <p>The company reached the final of the contest and was recognized for developing groundbreaking technologies and ideas, that stand a real chance of entering global markets. "Startups in the Palace" is an initiative aimed at promoting Poland as an innovative economy, open to international cooperation. It also supports Polish startups in global expansion.</p>
    
    <p>VivaDrive offers #DigitalFleet, a cost-optimization solution for mixed fleets consisting of traditional and electric vehicles. DigitalFleet builds better and more practical car drivers leading to lower fuel/energy consumption, fewer car accidents and lower service and insurance costs for fleet companies.</p>
    
    <p>VivaDrive also developed EViRecommend, a recommendation tool that supports companies and local governments that would like to introduce electric vehicles in their car parks.</p>
    
    <blockquote>"Our goal is to offer our customers, companies and local governments, technical solutions that make their car fleets efficient and smart and their financial, energy and time costs as low as possible." - said Mateusz Maj, VivaDrive CEO</blockquote>
    
    <figure class="article-image">
      <img src="/newsroom/startupy-palacu/group-photo.png" alt="President of Poland with VivaDrive team" class="w-full rounded-lg" />
      <figcaption class="text-sm text-gray-600 mt-2">Andrzej Duda (President of the Republic of Poland), Piotr Płaszypski (Pied Program Director at Techmo), Mateusz Maj (CEO of VivaDrive)</figcaption>
    </figure>
    
    <p>VivaDrive is a new company recently established in Poland, but with a lot of experience in transportation and mobility. It started in Belgium, where in collaboration with the internationally recognized Transportation Research Institute – IMOB, created an innovative driving analytics system that combines driving analytics, personalized feedback, gamification and social aspects and is now being used by many companies, government organizations, NGOs and insurance to build better drivers, including KBC Group (BE), Mobilis Valipsi (BE), P&V Insurance (BE), Volvo (BE), Belgian Road Safety Institute (BE), Ministry of Transportation (BE), LCL Courange P&V, Levensplan (UK), etc.</p>
    
    <blockquote>"We are very excited about coming to Poland. Poland offers a lot of opportunities when we combine and how it is on the one hand the best computer developers and a very dynamic transportation business. On the other hand dangerous drivers and excessive car use. And finally Poland's running e-mobility plans. We cannot wait to 2020" – said Mateusz Maj, VivaDrive CEO</blockquote>
    
    <p>VivaDrive participates in Pittsburgh Roadmap (Electro Mobility), an accelerator program organized by AIP and conducted by Coollaborate, where it collaborates with Synerise, a leading AI-Driven Growth Operation System.</p>
    
    <p>VivaDrive is a technical partner of Marek Kamiński's #PowerofChange expedition. A famous Polish traveler intends to drive around the globe in an electric car. Our joint goal is to promote ecological and sustainable transportation.</p>
    
    <p><a href="https://youtu.be/5gNHnwv77g" target="_blank" class="text-emerald-600 hover:underline">https://youtu.be/5gNHnwv77g</a></p>
  `,
  partners: [
    {
      name: "Startups w Pałacu",
      logo: "/newsroom/startupy-palacu/startupy.png",
    },
  ],
  tags: ["awards", "innovation", "startups", "Poland", "electric mobility"],
};

export default article;
