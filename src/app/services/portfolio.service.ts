import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PersonalInfo, SocialLink, Skill, Project, Experience, Education, ContactForm } from '../models/portfolio.model';
import { PORTFOLIO_CONFIG } from '../config/portfolio.config';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  // Initialize with configuration data
  private personalInfoSubject = new BehaviorSubject<PersonalInfo>(PORTFOLIO_CONFIG.personal);
  private socialLinksSubject = new BehaviorSubject<SocialLink[]>(PORTFOLIO_CONFIG.socialLinks);
  private skillsSubject = new BehaviorSubject<Skill[]>(PORTFOLIO_CONFIG.skills);
  private projectsSubject = new BehaviorSubject<Project[]>(PORTFOLIO_CONFIG.projects);
  private experienceSubject = new BehaviorSubject<Experience[]>(PORTFOLIO_CONFIG.experience);
  private educationSubject = new BehaviorSubject<Education[]>(PORTFOLIO_CONFIG.education);

  // Getters
  get personalInfo$(): Observable<PersonalInfo> {
    return this.personalInfoSubject.asObservable();
  }

  get socialLinks$(): Observable<SocialLink[]> {
    return this.socialLinksSubject.asObservable();
  }

  get skills$(): Observable<Skill[]> {
    return this.skillsSubject.asObservable();
  }

  get projects$(): Observable<Project[]> {
    return this.projectsSubject.asObservable();
  }

  get experience$(): Observable<Experience[]> {
    return this.experienceSubject.asObservable();
  }

  get education$(): Observable<Education[]> {
    return this.educationSubject.asObservable();
  }

  // Update methods (for future backend integration)
  updatePersonalInfo(info: PersonalInfo): void {
    this.personalInfoSubject.next(info);
  }

  updateSocialLinks(links: SocialLink[]): void {
    this.socialLinksSubject.next(links);
  }

  updateSkills(skills: Skill[]): void {
    this.skillsSubject.next(skills);
  }

  updateProjects(projects: Project[]): void {
    this.projectsSubject.next(projects);
  }

  updateExperience(experience: Experience[]): void {
    this.experienceSubject.next(experience);
  }

  updateEducation(education: Education[]): void {
    this.educationSubject.next(education);
  }

  // Contact form submission (ready for Twilio integration)
  async submitContactForm(formData: ContactForm): Promise<boolean> {
    try {
      // TODO: Replace with your actual Supabase function URL
      const apiEndpoint = PORTFOLIO_CONFIG.contact.apiEndpoint;
      
      if (apiEndpoint === 'YOUR_SUPABASE_FUNCTION_URL') {
        // Development mode - simulate success
        console.log('Contact form submitted (development mode):', formData);
        await new Promise(resolve => setTimeout(resolve, 1000));
        return true;
      }
      
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      return response.ok;
    } catch (error) {
      console.error('Error submitting contact form:', error);
      return false;
    }
  }
}