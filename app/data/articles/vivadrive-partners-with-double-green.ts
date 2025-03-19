// app/data/articles/vivadrive-partners-with-double-green.ts
import { Article } from "@/app/newsroom/components/NewsTypes";

const article: Article = {
  id: "double-green-partnership",
  slug: "vivadrive-partners-with-double-green",
  title: "VivaDrive partners with Double Green to help US logistic providers electrify their vehicle fleets",
  date: "2022-10-13T12:00:00Z",
  readTime: 3,
  image: "/newsroom/double-green/double-green-long.webp", // This is actually a logo image with both logos
  category: "PARTNERSHIP ANNOUNCEMENT",
  type: "PRESS",
  excerpt:
    "Double Green, the US food and beverage industry's one-stop-shop for sustainability solutions, has partnered with VivaDrive to help its customers optimize and future-proof their fleet.",
  content: `
    <p>Double Green, the US food and beverage industry's one-stop-shop for sustainability solutions, has partnered with VivaDrive to help its customers optimize and future-proof their fleet.</p>
    
    <figure class="article-image">
      <img src="/newsroom/double-green/double-green.webp" alt="VivaDrive and Double Green partnership illustration with electric logistics vehicles" class="w-full rounded-lg" />
    </figure>
    
    <p>Logistics customers will utilize the fleet expert's AI platform to evaluate their current fleet with their future needs and the evolving infrastructure and incentives.</p>
    
    <p>Double Green supports companies striving to meet consumer demand for sustainable products within supply chain operations under pressure from rising temperatures and energy costs. With over twenty years of experience serving global food and beverage brands, Double Green's team of efficiency analysts, engineers, and communication experts are adept at collaborating across departments and businesses to solve complex supply chain challenges. Double Green's extensive corporate social responsibility expertise ensures its customers meet, measure, and communicate their sustainability goals.</p>
    
    <blockquote>"Our mission is to reduce greenhouse gas emissions throughout the food and beverage industry while simultaneously reducing our customer's costs. It's all in our name – good for the environment and better for the bottom line. The infrastructure Bill provides $7.5 billion for 500,000 new chargers. A partnership between Double Green and VivaDrive provides our clients with the platform to know when to transition their fleet to zero-emissions while decreasing their costs, increasing safety, and delivering on their sustainability goals" said Molly Reilly, President of Double Green.</blockquote>
    
    <p>VivaDrive is a European mobility and cleantech startup that helps companies introduce electric and hybrid vehicles while optimizing them. VivaDrive's solutions aim to support the development of fleet electrification plans, assess charging site suitability, estimate the cost of infrastructure installation and drive transportation emissions down.</p>
    
    <p>As the fleet industry makes a rapid transformation into the sustainable industry, VivaDrive is providing fleet professionals with the building blocks to transform their companies into efficient and ecological organizations. Our fleet EV recommendation process results in an audit report showing which vehicles can be replaced by the EV, which drivers are suitable for EV, and what are the gaps in the EV charging infrastructure for a given fleet. We are thrilled to support Double Green on their mission of making the US fleets green and cost-effective", said Mateusz Maj, CEO of VivaDrive.</p>
    
    <h3>About Double Green</h3>
    
    <p>Double Green is a one-stop shop for sustainability solutions for the food and beverage industry. The agency delivers profit-positive, highly effective sustainability solutions to quantifiably reduce their client's adverse environmental impacts and costs while creating positive ESG motivating benefits.</p>
    
    <h3>About VivaDrive</h3>
    
    <p>VivaDrive helps to introduce EVs into a company's fleet. The system carries out detailed analyses and simulations for various scenarios for the introduction of new charging infrastructure and carries out a detailed business case for the implementation taking into account the company's transport tasks, vehicles, and drivers. The end result is a business model for the company's EV deployment and an implementation plan. When a company decides to fully or partially switch to EV, VivaDrive helps to manage the fleet (both electric and traditional cars) and the charging infrastructure.</p>
    
    <p>For more information:</p>
    
    <p><a href="https://www.doublegrn.com" target="_blank" class="text-emerald-600 hover:underline">https://www.doublegrn.com</a></p>
    
    <p><a href="https://vivadrive.io" target="_blank" class="text-emerald-600 hover:underline">https://vivadrive.io</a></p>
  `,
  partners: [], // Remove the partner section completely since it's causing duplication
  tags: ["partnership", "sustainability", "fleet electrification", "logistics", "USA", "Double Green"],
};

export default article;