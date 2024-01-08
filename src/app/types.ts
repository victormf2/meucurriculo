export interface ResumeInfo {
  profile: ProfileInfo
  contact: ContactInfo
  skills: SkillsInfo
  professional_experience: ProfessionalExperienceInfo[]
}

export interface ProfileInfo {
  name: string
  description: string
}

export interface ContactInfo {
  phone: string
  address: string
  email: string
  github: string
  linkedin: string
}

export interface SkillsInfo {
  spoken_languages: string[]
  programming_languages: string[]
  storage: string[]
  frameworks: string[]
  messaging: string[]
  cicd: string[]
  tests: string[]
  others: string[]
}

export interface ProfessionalExperienceInfo {
  job: JobInfo
  company: CompanyInfo
  main_projects_and_achievements: string[]
}

export interface JobInfo {
  title: string
  description: string
  from: string
  to: string
}

export interface CompanyInfo {
  name: string
  area: string
  website: string
}
