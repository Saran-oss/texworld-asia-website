export interface ProductCategory {
  id: string
  name: string
  slug: string
  description: string
  imagePrompt: string
}

export interface ServiceItem {
  id: string
  name: string
  slug: string
  summary: string
  description: string
  value: string
}

export interface ProcessStep {
  id: string
  number: string
  title: string
  description: string
}

export interface BrandItem {
  id: string
  name: string
  category?: 'owned' | 'partner' | 'customer'
  note?: string
}

export interface CompanyInfo {
  name: string
  tagline: string
  experienceYears?: number
  ceoName: string
  address: string
  email: string
  phone: string
  markets: string[]
  policy: string[]
}

export interface WhyChooseUsItem {
  id: string
  title: string
  description: string
}
