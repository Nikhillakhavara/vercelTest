import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Skill } from '../../models/portfolio.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="skills">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Skills & Technologies</h2>
          <p class="section-subtitle">Technologies I work with</p>
        </div>
        
        <div class="skills-categories">
          <div *ngFor="let category of skillCategories" class="skill-category">
            <h3 class="category-title">{{ category }}</h3>
            <div class="skills-grid">
              <div 
                *ngFor="let skill of getSkillsByCategory(category)" 
                class="skill-item"
              >
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-percentage">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div 
                    class="skill-progress" 
                    [style.width.%]="skill.level"
                    [attr.data-level]="skill.level"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="skills-visual">
          <h3>Technical Proficiency</h3>
          <div class="skills-chart">
            <div *ngFor="let skill of featuredSkills" class="skill-circle">
              <div class="circle-progress" [attr.data-percentage]="skill.level">
                <svg class="circle-svg" width="120" height="120">
                  <circle 
                    cx="60" 
                    cy="60" 
                    r="50" 
                    stroke="#e5e7eb" 
                    stroke-width="8" 
                    fill="none"
                  />
                  <circle 
                    cx="60" 
                    cy="60" 
                    r="50" 
                    stroke="#2563eb" 
                    stroke-width="8" 
                    fill="none"
                    [style.stroke-dasharray]="314"
                    [style.stroke-dashoffset]="314 - (314 * skill.level / 100)"
                    class="progress-circle"
                  />
                </svg>
                <div class="circle-content">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-level">{{ skill.level }}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills {
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

    .skills-categories {
      margin-bottom: 4rem;
    }

    .skill-category {
      margin-bottom: 3rem;
    }

    .category-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 1.5rem;
      text-align: center;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .skill-item {
      background: #f8fafc;
      padding: 1.5rem;
      border-radius: 10px;
      transition: transform 0.3s ease;
    }

    .skill-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    }

    .skill-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
    }

    .skill-name {
      font-weight: 600;
      color: #1f2937;
    }

    .skill-percentage {
      font-weight: 600;
      color: #2563eb;
    }

    .skill-bar {
      height: 8px;
      background: #e5e7eb;
      border-radius: 4px;
      overflow: hidden;
    }

    .skill-progress {
      height: 100%;
      background: linear-gradient(90deg, #2563eb, #7c3aed);
      border-radius: 4px;
      transition: width 1s ease-in-out;
      animation: fillBar 2s ease-in-out;
    }

    @keyframes fillBar {
      from { width: 0; }
    }

    .skills-visual {
      text-align: center;
    }

    .skills-visual h3 {
      font-size: 2rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 2rem;
    }

    .skills-chart {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 2rem;
      justify-items: center;
    }

    .skill-circle {
      position: relative;
    }

    .circle-progress {
      position: relative;
      display: inline-block;
    }

    .circle-svg {
      transform: rotate(-90deg);
    }

    .progress-circle {
      transition: stroke-dashoffset 2s ease-in-out;
      stroke-linecap: round;
    }

    .circle-content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }

    .circle-content .skill-name {
      display: block;
      font-size: 0.9rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 0.25rem;
    }

    .circle-content .skill-level {
      font-size: 1.2rem;
      font-weight: 700;
      color: #2563eb;
    }

    @media (max-width: 768px) {
      .skills {
        padding: 60px 0;
      }

      .container {
        padding: 0 1rem;
      }

      .skills-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      .skill-item {
        padding: 1rem;
      }

      .skills-chart {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .category-title {
        font-size: 1.3rem;
      }

      .skills-visual h3 {
        font-size: 1.5rem;
      }
    }

    @media (max-width: 480px) {
      .skills {
        padding: 40px 0;
      }

      .section-title {
        font-size: 1.8rem;
      }

      .skills-chart {
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      .skill-circle {
        transform: scale(0.9);
      }

      .category-title {
        font-size: 1.2rem;
      }

      .skills-visual h3 {
        font-size: 1.3rem;
      }
    }
  `]
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];
  skillCategories: string[] = [];
  featuredSkills: Skill[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.portfolioService.skills$.subscribe(skills => {
      this.skills = skills;
      this.skillCategories = [...new Set(skills.map(skill => skill.category))];
      this.featuredSkills = skills.filter(skill => skill.level >= 85).slice(0, 4);
    });
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }
}