import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { PersonalInfo, SocialLink } from '../../models/portfolio.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            Hi, I'm <span class="highlight">{{ personalInfo?.name }}</span>
          </h1>
          <h2 class="hero-subtitle">{{ personalInfo?.title }}</h2>
          <p class="hero-description">{{ personalInfo?.bio }}</p>
          
          <div class="hero-buttons">
            <a href="#contact" class="btn btn-primary">Get In Touch</a>
            <a href="#projects" class="btn btn-secondary">View My Work</a>
          </div>
          
          <div class="social-links">
            <a 
              *ngFor="let link of socialLinks" 
              [href]="link.url" 
              target="_blank" 
              rel="noopener noreferrer"
              class="social-link"
              [title]="link.platform"
            >
              <i [class]="link.icon"></i>
            </a>
          </div>
        </div>
        
        <div class="hero-image">
          <div class="image-container">
            <img [src]="personalInfo?.profileImage" [alt]="personalInfo?.name" />
            <div class="image-overlay"></div>
          </div>
        </div>
      </div>
      
      <div class="scroll-indicator">
        <div class="scroll-arrow"></div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.05)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
      opacity: 0.3;
    }

    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      position: relative;
      z-index: 1;
    }

    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      line-height: 1.2;
    }

    .highlight {
      background: linear-gradient(45deg, #ffd700, #ffed4e);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-subtitle {
      font-size: 1.5rem;
      font-weight: 400;
      margin-bottom: 1.5rem;
      opacity: 0.9;
    }

    .hero-description {
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 2rem;
      opacity: 0.8;
    }

    .hero-buttons {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .btn {
      padding: 0.75rem 2rem;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      display: inline-block;
    }

    .btn-primary {
      background: #ffd700;
      color: #333;
    }

    .btn-primary:hover {
      background: #ffed4e;
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(255, 215, 0, 0.3);
    }

    .btn-secondary {
      background: transparent;
      color: white;
      border: 2px solid white;
    }

    .btn-secondary:hover {
      background: white;
      color: #333;
      transform: translateY(-2px);
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-link {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-decoration: none;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
    }

    .social-link:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-3px);
    }

    .social-link i {
      font-size: 1.2rem;
    }

    .hero-image {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .image-container {
      position: relative;
      width: 350px;
      height: 350px;
      border-radius: 50%;
      overflow: hidden;
      border: 5px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    }

    .image-container img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3));
    }

    .scroll-indicator {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      animation: bounce 2s infinite;
    }

    .scroll-arrow {
      width: 30px;
      height: 30px;
      border: 2px solid white;
      border-top: none;
      border-left: none;
      transform: rotate(45deg);
    }

    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateX(-50%) translateY(0);
      }
      40% {
        transform: translateX(-50%) translateY(-10px);
      }
      60% {
        transform: translateX(-50%) translateY(-5px);
      }
    }

    @media (max-width: 768px) {
      .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 2rem;
      }

      .hero-title {
        font-size: 2.5rem;
      }

      .hero-subtitle {
        font-size: 1.2rem;
      }

      .hero-buttons {
        flex-direction: column;
        align-items: center;
      }

      .image-container {
        width: 250px;
        height: 250px;
      }
    }
  `]
})
export class HeroComponent implements OnInit {
  personalInfo: PersonalInfo | null = null;
  socialLinks: SocialLink[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.portfolioService.personalInfo$.subscribe(info => {
      this.personalInfo = info;
    });

    this.portfolioService.socialLinks$.subscribe(links => {
      this.socialLinks = links;
    });
  }
}