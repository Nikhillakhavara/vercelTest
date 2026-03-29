import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Project } from '../../models/portfolio.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="projects">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">My Projects</h2>
          <p class="section-subtitle">Some of my recent work</p>
        </div>
        
        <div class="projects-filter">
          <button 
            class="filter-btn" 
            [class.active]="activeFilter === 'all'"
            (click)="setFilter('all')"
          >
            All Projects
          </button>
          <button 
            class="filter-btn" 
            [class.active]="activeFilter === 'featured'"
            (click)="setFilter('featured')"
          >
            Featured
          </button>
        </div>
        
        <div class="projects-grid">
          <div 
            *ngFor="let project of filteredProjects" 
            class="project-card"
            [class.featured]="project.featured"
          >
            <div class="project-image">
              <img [src]="project.image" [alt]="project.title" />
              <div class="project-overlay">
                <div class="project-links">
                  <a 
                    *ngIf="project.liveUrl" 
                    [href]="project.liveUrl" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="project-link"
                    title="View Live"
                  >
                    <i class="fas fa-external-link-alt"></i>
                  </a>
                  <a 
                    *ngIf="project.githubUrl" 
                    [href]="project.githubUrl" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="project-link"
                    title="View Code"
                  >
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              
              <div class="project-technologies">
                <span 
                  *ngFor="let tech of project.technologies" 
                  class="tech-tag"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="projects-cta">
          <p>Want to see more of my work?</p>
          <a href="https://github.com/yourusername" target="_blank" class="btn btn-primary">
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects {
      padding: 100px 0;
      background: #f8fafc;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .section-header {
      text-align: center;
      margin-bottom: 3rem;
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

    .projects-filter {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 3rem;
    }

    .filter-btn {
      padding: 0.5rem 1.5rem;
      border: 2px solid #e5e7eb;
      background: white;
      color: #6b7280;
      border-radius: 25px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: 500;
    }

    .filter-btn:hover,
    .filter-btn.active {
      border-color: #2563eb;
      background: #2563eb;
      color: white;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }

    .project-card {
      background: white;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }

    .project-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }

    .project-card.featured {
      border: 2px solid #ffd700;
      position: relative;
    }

    .project-card.featured::before {
      content: 'Featured';
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: #ffd700;
      color: #333;
      padding: 0.25rem 0.75rem;
      border-radius: 15px;
      font-size: 0.8rem;
      font-weight: 600;
      z-index: 2;
    }

    .project-image {
      position: relative;
      height: 250px;
      overflow: hidden;
    }

    .project-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .project-card:hover .project-image img {
      transform: scale(1.1);
    }

    .project-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(37, 99, 235, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .project-card:hover .project-overlay {
      opacity: 1;
    }

    .project-links {
      display: flex;
      gap: 1rem;
    }

    .project-link {
      width: 50px;
      height: 50px;
      background: white;
      color: #2563eb;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .project-link:hover {
      background: #2563eb;
      color: white;
      transform: scale(1.1);
    }

    .project-content {
      padding: 1.5rem;
    }

    .project-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 0.75rem;
    }

    .project-description {
      color: #6b7280;
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    .project-technologies {
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

    .projects-cta {
      text-align: center;
      padding: 2rem;
      background: white;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    .projects-cta p {
      font-size: 1.1rem;
      color: #6b7280;
      margin-bottom: 1rem;
    }

    .btn {
      display: inline-block;
      padding: 0.75rem 2rem;
      background: #2563eb;
      color: white;
      text-decoration: none;
      border-radius: 50px;
      font-weight: 600;
      transition: all 0.3s ease;
    }

    .btn:hover {
      background: #1d4ed8;
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
    }

    @media (max-width: 768px) {
      .projects {
        padding: 60px 0;
      }

      .container {
        padding: 0 1rem;
      }

      .projects-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .project-card {
        margin: 0 auto;
        max-width: 400px;
      }

      .projects-filter {
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
      }

      .filter-btn {
        width: 200px;
        text-align: center;
      }

      .section-title {
        font-size: 2rem;
      }

      .project-image {
        height: 200px;
      }

      .project-content {
        padding: 1rem;
      }

      .project-title {
        font-size: 1.1rem;
      }

      .project-description {
        font-size: 0.9rem;
      }

      .projects-cta {
        padding: 2rem 1rem;
      }
    }

    @media (max-width: 480px) {
      .projects {
        padding: 40px 0;
      }

      .section-title {
        font-size: 1.8rem;
      }

      .project-card {
        max-width: 100%;
      }

      .project-image {
        height: 180px;
      }

      .tech-tag {
        font-size: 0.75rem;
        padding: 0.2rem 0.6rem;
      }

      .projects-cta p {
        font-size: 1rem;
      }
    }
  `]
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  activeFilter: string = 'all';

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.portfolioService.projects$.subscribe(projects => {
      this.projects = projects;
      this.filteredProjects = projects;
    });
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
    
    if (filter === 'all') {
      this.filteredProjects = this.projects;
    } else if (filter === 'featured') {
      this.filteredProjects = this.projects.filter(project => project.featured);
    }
  }
}