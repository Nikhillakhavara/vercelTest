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
          <span class="section-badge">About Me</span>
          <h2 class="section-title">Crafting Digital Experiences</h2>
          <p class="section-subtitle">Passionate about creating innovative solutions that make a difference</p>
        </div>
        
        <div class="about-content">
          <div class="about-visual">
            <div class="image-wrapper">
              <img [src]="personalInfo?.profileImage" [alt]="personalInfo?.name" />
              <div class="image-decoration">
                <div class="decoration-1"></div>
                <div class="decoration-2"></div>
              </div>
            </div>
            
            <div class="experience-card">
              <div class="card-content">
                <h3>3+</h3>
                <p>Years of Experience</p>
              </div>
              <div class="card-icon">
                <i class="fas fa-code"></i>
              </div>
            </div>
          </div>
          
          <div class="about-text">
            <h3>Hello! I'm <span class="highlight">{{ personalInfo?.name }}</span></h3>
            <p class="bio">{{ personalInfo?.bio }}</p>
            
            <div class="about-details">
              <div class="detail-grid">
                <div class="detail-item">
                  <div class="detail-icon">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div class="detail-content">
                    <span class="detail-label">Email</span>
                    <a [href]="'mailto:' + personalInfo?.email" class="detail-value">{{ personalInfo?.email }}</a>
                  </div>
                </div>
                
                <div class="detail-item">
                  <div class="detail-icon">
                    <i class="fas fa-phone"></i>
                  </div>
                  <div class="detail-content">
                    <span class="detail-label">Phone</span>
                    <a [href]="'tel:' + personalInfo?.phone" class="detail-value">{{ personalInfo?.phone }}</a>
                  </div>
                </div>
                
                <div class="detail-item">
                  <div class="detail-icon">
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <div class="detail-content">
                    <span class="detail-label">Location</span>
                    <span class="detail-value">{{ personalInfo?.location }}</span>
                  </div>
                </div>
                
                <div class="detail-item">
                  <div class="detail-icon">
                    <i class="fas fa-calendar"></i>
                  </div>
                  <div class="detail-content">
                    <span class="detail-label">Availability</span>
                    <span class="detail-value status-available">Available</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="about-stats">
              <div class="stat-card">
                <div class="stat-icon">
                  <i class="fas fa-project-diagram"></i>
                </div>
                <div class="stat-content">
                  <h4>50+</h4>
                  <p>Projects Completed</p>
                </div>
              </div>
              
              <div class="stat-card">
                <div class="stat-icon">
                  <i class="fas fa-users"></i>
                </div>
                <div class="stat-content">
                  <h4>25+</h4>
                  <p>Happy Clients</p>
                </div>
              </div>
              
              <div class="stat-card">
                <div class="stat-icon">
                  <i class="fas fa-award"></i>
                </div>
                <div class="stat-content">
                  <h4>5+</h4>
                  <p>Awards Won</p>
                </div>
              </div>
            </div>
            
            <div class="about-actions">
              <a href="#contact" class="btn btn-primary">
                <i class="fas fa-paper-plane"></i>
                <span>Let's Talk</span>
              </a>
              <a href="#" class="btn btn-secondary">
                <i class="fas fa-download"></i>
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      padding: 120px 0;
      background: #fafbfc;
      position: relative;
    }

    .about::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.05) 0%, transparent 50%);
    }

    .container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 2rem;
      position: relative;
      z-index: 1;
    }

    .section-header {
      text-align: center;
      margin-bottom: 5rem;
    }

    .section-badge {
      display: inline-block;
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      padding: 0.5rem 1.5rem;
      border-radius: 50px;
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .section-title {
      font-size: 3rem;
      font-weight: 800;
      color: #1a202c;
      margin-bottom: 1rem;
      line-height: 1.2;
    }

    .section-subtitle {
      font-size: 1.2rem;
      color: #64748b;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }

    .about-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
      align-items: center;
    }

    .about-visual {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .image-wrapper {
      position: relative;
      width: 350px;
      height: 450px;
      border-radius: 30px;
      overflow: hidden;
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
      transform: rotate(-5deg);
      transition: transform 0.3s ease;
    }

    .image-wrapper:hover {
      transform: rotate(0deg) scale(1.02);
    }

    .image-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .image-decoration {
      position: absolute;
      top: -30px;
      left: -30px;
      right: -30px;
      bottom: -30px;
      z-index: -1;
    }

    .decoration-1 {
      position: absolute;
      top: 0;
      right: 0;
      width: 100px;
      height: 100px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      border-radius: 20px;
      transform: rotate(45deg);
      opacity: 0.8;
    }

    .decoration-2 {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, #ffd700, #ffed4e);
      border-radius: 50%;
      opacity: 0.9;
    }

    .experience-card {
      position: absolute;
      bottom: -20px;
      right: -20px;
      background: white;
      padding: 1.5rem;
      border-radius: 20px;
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      gap: 1rem;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .card-content h3 {
      font-size: 2rem;
      font-weight: 700;
      color: #667eea;
      margin: 0;
      line-height: 1;
    }

    .card-content p {
      font-size: 0.9rem;
      color: #64748b;
      margin: 0;
      white-space: nowrap;
    }

    .card-icon {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.2rem;
    }

    .about-text h3 {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1a202c;
      margin-bottom: 1.5rem;
      line-height: 1.3;
    }

    .highlight {
      background: linear-gradient(135deg, #667eea, #764ba2);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .bio {
      font-size: 1.1rem;
      line-height: 1.8;
      color: #4a5568;
      margin-bottom: 2.5rem;
    }

    .detail-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
      margin-bottom: 2.5rem;
    }

    .detail-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      background: white;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
      transition: transform 0.3s ease;
    }

    .detail-item:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    }

    .detail-icon {
      width: 45px;
      height: 45px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.1rem;
    }

    .detail-content {
      flex: 1;
    }

    .detail-label {
      display: block;
      font-size: 0.8rem;
      color: #64748b;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 0.25rem;
    }

    .detail-value {
      font-weight: 600;
      color: #1a202c;
      text-decoration: none;
    }

    .detail-value:hover {
      color: #667eea;
    }

    .status-available {
      color: #10b981;
      position: relative;
    }

    .status-available::before {
      content: '';
      width: 8px;
      height: 8px;
      background: #10b981;
      border-radius: 50%;
      position: absolute;
      left: -15px;
      top: 50%;
      transform: translateY(-50%);
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0% { opacity: 1; }
      50% { opacity: 0.5; }
      100% { opacity: 1; }
    }

    .about-stats {
      display: flex;
      gap: 1.5rem;
      margin-bottom: 2.5rem;
    }

    .stat-card {
      flex: 1;
      background: white;
      padding: 1.5rem;
      border-radius: 20px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
      display: flex;
      align-items: center;
      gap: 1rem;
      transition: transform 0.3s ease;
    }

    .stat-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    }

    .stat-icon {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.2rem;
    }

    .stat-content h4 {
      font-size: 1.8rem;
      font-weight: 700;
      color: #1a202c;
      margin: 0;
      line-height: 1;
    }

    .stat-content p {
      font-size: 0.9rem;
      color: #64748b;
      margin: 0;
    }

    .about-actions {
      display: flex;
      gap: 1rem;
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
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
    }

    .btn-primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
    }

    .btn-secondary {
      background: white;
      color: #667eea;
      border: 2px solid #667eea;
    }

    .btn-secondary:hover {
      background: #667eea;
      color: white;
      transform: translateY(-3px);
    }

    @media (max-width: 768px) {
      .about {
        padding: 80px 0;
      }

      .container {
        padding: 0 1rem;
      }

      .section-title {
        font-size: 2.2rem;
      }

      .about-content {
        grid-template-columns: 1fr;
        gap: 3rem;
        text-align: center;
      }

      .about-visual {
        order: 2;
      }

      .about-text {
        order: 1;
      }

      .image-wrapper {
        width: 280px;
        height: 350px;
        transform: rotate(0deg);
      }

      .experience-card {
        position: static;
        margin-top: 2rem;
        display: inline-flex;
      }

      .about-text h3 {
        font-size: 2rem;
      }

      .detail-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      .about-stats {
        flex-direction: column;
        gap: 1rem;
      }

      .about-actions {
        flex-direction: column;
        align-items: center;
      }

      .btn {
        width: 100%;
        max-width: 280px;
        justify-content: center;
      }
    }

    @media (max-width: 480px) {
      .section-title {
        font-size: 1.8rem;
      }

      .about-text h3 {
        font-size: 1.6rem;
      }

      .image-wrapper {
        width: 250px;
        height: 300px;
      }

      .detail-item {
        padding: 0.75rem;
      }

      .stat-card {
        padding: 1rem;
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