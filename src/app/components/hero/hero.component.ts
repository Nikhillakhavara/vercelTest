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
      <div class="hero-background">
        <div class="gradient-orb orb-1"></div>
        <div class="gradient-orb orb-2"></div>
        <div class="gradient-orb orb-3"></div>
      </div>
      
      <div class="hero-content">
        <div class="hero-text">
          <div class="hero-badge">
            <span class="badge-icon">👋</span>
            <span>Hello, I'm</span>
          </div>
          
          <h1 class="hero-title">
            <span class="title-line">{{ personalInfo?.name }}</span>
            <span class="title-gradient">{{ personalInfo?.title }}</span>
          </h1>
          
          <p class="hero-description">{{ personalInfo?.bio }}</p>
          
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-number">3+</span>
              <span class="stat-label">Years Experience</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">50+</span>
              <span class="stat-label">Projects Done</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">25+</span>
              <span class="stat-label">Happy Clients</span>
            </div>
          </div>
          
          <div class="hero-buttons">
            <a href="#contact" class="btn btn-primary">
              <span>Let's Work Together</span>
              <i class="fas fa-arrow-right"></i>
            </a>
            <a href="#projects" class="btn btn-secondary">
              <i class="fas fa-play"></i>
              <span>View My Work</span>
            </a>
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
        
        <div class="hero-visual">
          <div class="image-container">
            <div class="image-frame">
              <img [src]="personalInfo?.profileImage" [alt]="personalInfo?.name" />
              <div class="image-glow"></div>
            </div>
            <div class="floating-elements">
              <div class="floating-card card-1">
                <i class="fab fa-angular"></i>
                <span>Angular</span>
              </div>
              <div class="floating-card card-2">
                <i class="fab fa-react"></i>
                <span>React</span>
              </div>
              <div class="floating-card card-3">
                <i class="fab fa-node-js"></i>
                <span>Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="scroll-indicator">
        <div class="scroll-text">Scroll Down</div>
        <div class="scroll-arrow">
          <i class="fas fa-chevron-down"></i>
        </div>
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
      padding: 100px 0 60px;
    }

    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .gradient-orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(60px);
      opacity: 0.7;
      animation: float 6s ease-in-out infinite;
    }

    .orb-1 {
      width: 300px;
      height: 300px;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
      top: 10%;
      left: 10%;
      animation-delay: 0s;
    }

    .orb-2 {
      width: 200px;
      height: 200px;
      background: radial-gradient(circle, rgba(255, 215, 0, 0.4) 0%, transparent 70%);
      top: 60%;
      right: 20%;
      animation-delay: 2s;
    }

    .orb-3 {
      width: 150px;
      height: 150px;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
      bottom: 20%;
      left: 60%;
      animation-delay: 4s;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      33% { transform: translateY(-20px) rotate(120deg); }
      66% { transform: translateY(10px) rotate(240deg); }
    }

    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 2rem;
      position: relative;
      z-index: 2;
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(10px);
      padding: 0.5rem 1rem;
      border-radius: 50px;
      font-size: 0.9rem;
      margin-bottom: 2rem;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .badge-icon {
      font-size: 1.2rem;
    }

    .hero-title {
      font-size: 4rem;
      font-weight: 800;
      margin-bottom: 1.5rem;
      line-height: 1.1;
      display: flex;
      flex-direction: column;
    }

    .title-line {
      color: white;
    }

    .title-gradient {
      background: linear-gradient(45deg, #ffd700, #ffed4e, #fff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: shimmer 3s ease-in-out infinite;
    }

    @keyframes shimmer {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    .hero-description {
      font-size: 1.2rem;
      line-height: 1.7;
      margin-bottom: 2rem;
      opacity: 0.9;
      max-width: 500px;
    }

    .hero-stats {
      display: flex;
      gap: 2rem;
      margin-bottom: 2.5rem;
    }

    .stat-item {
      text-align: center;
    }

    .stat-number {
      display: block;
      font-size: 2rem;
      font-weight: 700;
      color: #ffd700;
      margin-bottom: 0.25rem;
    }

    .stat-label {
      font-size: 0.9rem;
      opacity: 0.8;
    }

    .hero-buttons {
      display: flex;
      gap: 1rem;
      margin-bottom: 2.5rem;
    }

    .btn {
      padding: 1rem 2rem;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      position: relative;
      overflow: hidden;
    }

    .btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.5s;
    }

    .btn:hover::before {
      left: 100%;
    }

    .btn-primary {
      background: linear-gradient(45deg, #ffd700, #ffed4e);
      color: #333;
      box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);
    }

    .btn-primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 40px rgba(255, 215, 0, 0.4);
    }

    .btn-secondary {
      background: rgba(255, 255, 255, 0.1);
      color: white;
      border: 2px solid rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(10px);
    }

    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-3px);
      border-color: rgba(255, 255, 255, 0.5);
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
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .social-link:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-5px) scale(1.1);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }

    .hero-visual {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    .image-container {
      position: relative;
      width: 400px;
      height: 400px;
    }

    .image-frame {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      overflow: hidden;
      border: 4px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    }

    .image-frame img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .image-glow {
      position: absolute;
      top: -20px;
      left: -20px;
      right: -20px;
      bottom: -20px;
      background: linear-gradient(45deg, #ffd700, #667eea, #764ba2);
      border-radius: 50%;
      z-index: -1;
      filter: blur(20px);
      opacity: 0.6;
      animation: pulse 3s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 0.6; }
      50% { transform: scale(1.1); opacity: 0.8; }
    }

    .floating-elements {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .floating-card {
      position: absolute;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 15px;
      padding: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.9rem;
      font-weight: 600;
      animation: floatCard 4s ease-in-out infinite;
    }

    .card-1 {
      top: 10%;
      right: -10%;
      animation-delay: 0s;
    }

    .card-2 {
      bottom: 20%;
      left: -15%;
      animation-delay: 1.5s;
    }

    .card-3 {
      top: 60%;
      right: -20%;
      animation-delay: 3s;
    }

    @keyframes floatCard {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-15px) rotate(5deg); }
    }

    .scroll-indicator {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      animation: bounce 2s infinite;
    }

    .scroll-text {
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
      opacity: 0.8;
    }

    .scroll-arrow {
      width: 30px;
      height: 30px;
      border: 2px solid rgba(255, 255, 255, 0.6);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
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
      .hero {
        padding: 100px 0 40px;
        min-height: 100vh;
      }

      .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 3rem;
        padding: 0 1rem;
      }

      .hero-title {
        font-size: 2.5rem;
        line-height: 1.2;
      }

      .hero-description {
        font-size: 1rem;
        max-width: 100%;
      }

      .hero-stats {
        justify-content: center;
        gap: 1.5rem;
      }

      .stat-number {
        font-size: 1.5rem;
      }

      .hero-buttons {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }

      .btn {
        width: 100%;
        max-width: 280px;
        justify-content: center;
      }

      .social-links {
        justify-content: center;
      }

      .image-container {
        width: 280px;
        height: 280px;
      }

      .floating-card {
        display: none;
      }

      .orb-1, .orb-2, .orb-3 {
        width: 150px;
        height: 150px;
      }
    }

    @media (max-width: 480px) {
      .hero-title {
        font-size: 2rem;
      }

      .hero-stats {
        flex-direction: column;
        gap: 1rem;
      }

      .image-container {
        width: 220px;
        height: 220px;
      }

      .btn {
        padding: 0.8rem 1.5rem;
        font-size: 0.9rem;
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