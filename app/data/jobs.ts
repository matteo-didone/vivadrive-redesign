// app/data/jobs.ts
// This file exports job positions data and utility functions

import { JobPosition } from "@/app/careers/components/JobTypes";
import frontendDeveloper from "./jobs/frontend-developer";
import pythonDjangoDeveloper from "./jobs/python-django-developer";
import dataScientist from "./jobs/data-scientist";
import digitalMarketer from "./jobs/digital-marketer";
import businessDeveloper from "./jobs/business-developer";
import uxUiDesigner from "./jobs/ux-ui-designer";
import differentPosition from "./jobs/different-position";

export const jobPositions: JobPosition[] = [
  frontendDeveloper,
  pythonDjangoDeveloper,
  dataScientist,
  digitalMarketer,
  businessDeveloper,
  uxUiDesigner,
  differentPosition
];

// Helper functions
export function getAllJobPositions(): JobPosition[] {
  return jobPositions;
}

export function getFeaturedJobs(count: number = 3): JobPosition[] {
  return [...jobPositions]
    .filter(job => job.featured)
    .slice(0, count);
}

export function getJobBySlug(slug: string): JobPosition | undefined {
  return jobPositions.find((job) => job.slug === slug);
}

export function getJobByKey(key: string): JobPosition | undefined {
  return jobPositions.find((job) => job.id === key);
}

export function getJobsByCategory(category: string): JobPosition[] {
  if (category === "all") {
    return jobPositions;
  }
  return jobPositions.filter((job) => job.category === category);
}

export function getJobsByType(type: string): JobPosition[] {
  if (type === "all") {
    return jobPositions;
  }
  return jobPositions.filter((job) => job.type === type);
}

export function getJobsByDepartment(department: string): JobPosition[] {
  if (department === "all") {
    return jobPositions;
  }
  return jobPositions.filter((job) => job.department === department);
}

export function getJobCategories(): string[] {
  return [...new Set(jobPositions.map(job => job.category))];
}

export function getJobTypes(): string[] {
  return [...new Set(jobPositions.map(job => job.type))];
}

export function getJobDepartments(): string[] {
  return [...new Set(jobPositions.map(job => job.department))];
}