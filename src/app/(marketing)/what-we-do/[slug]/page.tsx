import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES_DETAILS_DATA } from "@/data/services/services";
import { ServiceDetailClient } from "./ServiceDetailClient";

export interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate dynamic SEO Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DETAILS_DATA.find((s) => s.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: "Valari Technologies | Powering Digital Growth",
    description: service.seo.description,
    keywords: service.seo.keywords,
    alternates: {
      canonical: `https://valari.co.in/what-we-do/${slug}`,
    },
    openGraph: {
      title: "Valari Technologies | Powering Digital Growth",
      description: service.seo.ogDescription,
      url: `https://valari.co.in/what-we-do/${slug}`,
      siteName: "Valari Technologies",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Valari Technologies | Powering Digital Growth",
      description: service.seo.ogDescription,
    },
  };
}

// Pre-render paths for static optimization
export async function generateStaticParams() {
  return SERVICES_DETAILS_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES_DETAILS_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Structured Service Schema for SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.overview.intro,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Valari Technologies",
      "url": "https://valari.co.in",
    },
  };

  // Structured Breadcrumb Schema for SEO
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://valari.co.in",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "What We Do",
        "item": "https://valari.co.in/what-we-do",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.title,
        "item": `https://valari.co.in/what-we-do/${slug}`,
      },
    ],
  };

  return (
    <>
      {/* Inject Structured Data Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <ServiceDetailClient service={service} />
    </>
  );
}
