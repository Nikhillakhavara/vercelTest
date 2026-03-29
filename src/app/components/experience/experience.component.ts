import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Experience, Education } from '../../models/portfolio.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="experience">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Experience & Education</h2>
          <p class="section-subtitle">My professional journey</p>
        </div>
        
        <div class="timeline-container">
          <div class="timeline-section">
            <h3 class="timeline-title">
              <i class="fas fa-briefcase"></i>
              Work Experience
            </h3>
            
            <div class="timeline">
              <div *ngFor="let exp of experience" class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <div class="timeline-header">
                    <h4 class="position">{{ exp.position }}</h4>
                    <span class="company">{{ exp.company }}</span>
                    <span class="duration">
                      {{ formatDate(exp.startDate) }} - 
                      {{ exp.endDate ? formatDate(exp.endDate) : 'Present' }}
                    </span>
                  </div>
                  <p class="description">{{ exp.description }}</p>
                  <div class="technologies">
                    <span *ngFor="let tech of exp.technologies" class="tech-tag">
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="timeline-section">
            <h3 class="timeline-title">
              <i class="fas fa-graduation-cap"></i>
              Education
            </h3>
            
            <div class="timeline">
              <div *ngFor="let edu of education" class="timeline-item">
                <div class="timeline-marker education-marker"></div>
                <div class="timeline-content">
                  <div class="timeline-header">
                    <h4 class="degree">{{ edu.degree }}</h4>
                    <span class="institution">{{ edu.institution }}</span>
                    <span class="field">{{ edu.field }}</span>
                    <span class="duration">
                      {{ formatDate(edu.startDate) }} - {{ formatDate(edu.endDate) }}
                    </span>
                    <span *ngIf="edu.gpa" class="gpa">GPA: {{ edu.gpa }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="achievements">
          <h3>Key Achievements</h3>
          <div class="achievements-grid">
            <div class="achievement-item">
              <i class="fas fa-trophy"></i>
              <h4>Best Developer Award</h4>
              <p>Recognized for outstanding performance and code quality</p>
            </div>
            <div class="achievement-item">
              <i class="fas fa-users"></i>
              <h4>Team Leadership</h4>
              <p>Successfully led a team of 5 developers on major projects</p>
            </div>
            <div class="achievement-item">
              <i class="fas fa-rocket"></i>
              <h4>Performance Optimization</h4>
              <p>Improved application performance by 40% through optimization</p>
            </div>
            <div class="achievement-item">
              <i class="fas fa-certificate"></i>
              <h4>Certifications</h4>
              <p>AWS Certified Developer, Google Cloud Professional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .experience {
      padding: 100px 0;
      background: white;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .section-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 1rem;
    }

    .section-subtitle {
      font-size: 1.1rem;
      color: #6b7280;
    }

    .timeline-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      margin-bottom: 4rem;
    }

    .timeline-section {
      position: relative;
    }

    .timeline-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 2rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .timeline-title i {
      color: #2563eb;
    }

    .timeline {
      position: relative;
      padding-left: 2rem;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 2px;
      background: #e5e7eb;
    }

    .timeline-item {
      position: relative;
      margin-bottom: 2rem;
      padding-left: 2rem;
    }

    .timeline-marker {
      position: absolute;
      left: -2rem;
      top: 0.5rem;
      width: 12px;
      height: 12px;
      background: #2563eb;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 0 0 3px #e5e7eb;
    }

    .education-marker {
      background: #10b981;
      box-shadow: 0 0 0 3px #e5e7eb;
    }

    .timeline-content {
      background: #f8fafc;
      padding: 1.5rem;
      border-radius: 10px;
      border-left: 4px solid #2563eb;
    }

    .timeline-header {
      margin-bottom: 1rem;
    }

    .position,
    .degree {
      font-size: 1.2rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 0.25rem;
    }

    .company,
    .institution {
      display: block;
      font-weight: 500;
      color: #2563eb;
      margin-bottom: 0.25rem;
    }

    .field {
      display: block;
      color: #6b7280;
      margin-bottom: 0.25rem;
    }

    .duration {
      display: block;
      font-size: 0.9rem;
      color: #6b7280;
      margin-bottom: 0.25rem;
    }

    .gpa {
      display: block;
      font-size: 0.9rem;
      color: #10b981;
      font-weight: 500;
    }

    .description {
      color: #4b5563;
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    .technologies {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .tech-tag {
      background: #e0e7ff;
      color: #3730a3;
      padding: 0.25rem 0.75rem;
      border-radius: 15px;
      font-size: 0.8rem;
      font-weight: 500;
    }

    .achievements {
      text-align: center;
    }

    .achievements h3 {
      font-size: 2rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 2rem;
    }

    .achievements-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .achievement-item {
      background: #f8fafc;
      padding: 2rem;
      border-radius: 15px;
      text-align: center;
      transition: transform 0.3s ease;
    }

    .achievement-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    }

    .achievement-item i {
      font-size: 2.5rem;
      color: #2563eb;
      margin-bottom: 1rem;
    }

    .achievement-item h4 {
      font-size: 1.2rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 0.5rem;
    }

    .achievement-item p {
      color: #6b7280;
      line-height: 1.5;
    }

    @media (max-width: 768px) {
      .timeline-container {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .achievements-grid {
        grid-template-columns: 1fr;
      }

      .section-title {
        font-size: 2rem;
      }

      .timeline-item {
        padding-left: 1rem;
      }

      .timeline-marker {
        left: -1.5rem;
      }
    }
  `]
})
export class ExperienceComponent implements OnInit {
  experience: Experience[] = [];
  education: Education[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.portfolioService.experience$.subscribe(exp => {
      this.experience = exp;
    });

    this.portfolioService.education$.subscribe(edu => {
      this.education = edu;
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    });
  }
}