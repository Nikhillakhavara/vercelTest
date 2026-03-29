import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { PersonalInfo } from '../../models/portfolio.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">About Me</h2>
          <p class="section-subtitle">Get to know me better</p>
        </div>
        
        <div class="about-content">
          <div class="about-text">
            <h3>Hello! I'm {{ personalInfo?.name }}</h3>
            <p>{{ personalInfo?.bio }}</p>
            
            <div class="about-details">
              <div class="detail-item">
                <i class="fas fa-envelope"></i>
                <span>{{ personalInfo?.email }}</span>
              </div>
              <div class="detail-item">
                <i class="fas fa-phone"></i>
                <span>{{ personalInfo?.phone }}</span>
              </div>
              <div class="detail-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>{{ personalInfo?.location }}</span>
              </div>
            </div>
            
            <div class="about-stats">
              <div class="stat-item">
                <h4>50+</h4>
                <p>Projects Completed</p>
              </div>
              <div class="stat-item">
                <h4>3+</h4>
                <p>Years Experience</p>
              </div>
              <div class="stat-item">
                <h4>25+</h4>
                <p>Happy Clients</p>
              </div>
            </div>
            
            <a href="#contact" class="btn btn-primary">Download CV</a>
          </div>
          
          <div class="about-image">
            <div class="image-wrapper">
              <img [src]="personalInfo?.profileImage" [alt]="personalInfo?.name" />
              <div class="image-decoration"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
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

    .about-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .about-text h3 {
      font-size: 2rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 1.5rem;
    }

    .about-text p {
      font-size: 1.1rem;
      line-height: 1.7;
      color: #4b5563;
      margin-bottom: 2rem;
    }

    .about-details {
      margin-bottom: 2rem;
    }

    .detail-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
      color: #4b5563;
    }

    .detail-item i {
      color: #2563eb;
      width: 20px;
    }

    .about-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      margin-bottom: 2rem;
      padding: 2rem 0;
      border-top: 1px solid #e5e7eb;
      border-bottom: 1px solid #e5e7eb;
    }

    .stat-item {
      text-align: center;
    }

    .stat-item h4 {
      font-size: 2rem;
      font-weight: 700;
      color: #2563eb;
      margin-bottom: 0.5rem;
    }

    .stat-item p {
      color: #6b7280;
      font-size: 0.9rem;
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

    .about-image {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .image-wrapper {
      position: relative;
      width: 400px;
      height: 500px;
    }

    .image-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }

    .image-decoration {
      position: absolute;
      top: -20px;
      right: -20px;
      width: 100px;
      height: 100px;
      background: linear-gradient(45deg, #2563eb, #7c3aed);
      border-radius: 20px;
      z-index: -1;
    }

    .image-decoration::before {
      content: '';
      position: absolute;
      bottom: -40px;
      left: -40px;
      width: 80px;
      height: 80px;
      background: linear-gradient(45deg, #ffd700, #ffed4e);
      border-radius: 50%;
      z-index: -1;
    }

    @media (max-width: 768px) {
      .about-content {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
      }

      .about-stats {
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      .image-wrapper {
        width: 300px;
        height: 400px;
      }

      .section-title {
        font-size: 2rem;
      }

      .about-text h3 {
        font-size: 1.5rem;
      }
    }
  `]
})
export class AboutComponent implements OnInit {
  personalInfo: PersonalInfo | null = null;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.portfolioService.personalInfo$.subscribe(info => {
      this.personalInfo = info;
    });
  }
}