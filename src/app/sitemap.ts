import { MetadataRoute } from 'next'
import { projects } from '../data/projects'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aiportfolio-kappa.vercel.app";
  
  const projectUrls = projects.map(project => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...projectUrls
  ] as MetadataRoute.Sitemap
}
