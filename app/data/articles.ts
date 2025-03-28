// app/data/articles.ts
// This file exports article data and utility functions
import { Article } from "@/app/newsroom/components/NewsTypes";
import startupsPalacu from "./articles/vivadrive-among-the-most-innovative-startups-in-poland";
import mitefCee from "./articles/mitef-cee-vivadrive-wins-mit-acceleration-program";
import cesaAward from "./articles/cesa-vivadrive-best-social-impact-startup";
import pzuIFlota from "./articles/pzu-iflota-official-launch";
import doubleGreen from "./articles/vivadrive-partners-with-double-green";
import warsawEmobility from "./articles/warsaw-emobility-conference";
import nissanTownstar from "./articles/nissan-townstar-review";
import sagensoPartnership from "./articles/vivadrive-partners-with-sagenso";
import evWebinar from "./articles/ev-webinar-elektryfikacja-floty";
import vivadriveTermoPartnership from "./articles/vivadrive-tergo-partnership";
import vivadriveGreenkickPartnership from "./articles/vivadrive-partners-with-greenkick";
import pzuFleetElectrification from "./articles/pzu-iflota-fleet-electrification";

export const articles: Article[] = [
  startupsPalacu,
  mitefCee,
  cesaAward,
  pzuIFlota,
  doubleGreen,
  warsawEmobility,
  nissanTownstar,
  sagensoPartnership,
  evWebinar,
  vivadriveTermoPartnership,
  vivadriveGreenkickPartnership,
  pzuFleetElectrification,
];

// Helper functions
export function getAllArticles(): Article[] {
  return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getRecentArticles(count: number = 6): Article[] {
  return [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}
