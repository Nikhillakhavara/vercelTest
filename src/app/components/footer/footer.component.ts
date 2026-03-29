import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { PersonalInfo, SocialLink } from '../../models/portfolio.model';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>{{ personalInfo?.name }}</h3>
            <p>{{ personalInfo?.title }}</p>
            <p class="footer-bio">{{ personalInfo?.bio }}</p>
          </div>
          
          <div class="footer-section">
            <h4>Quick Links</h4>
            <ul class="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Services</h4>
            <ul class="footer-links">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
              <li>Consulting</li>
              <li>Code Review</li>
              <li>Technical Writing</li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Get In Touch</h4>
            <div class="contact-info">
              <p>
                <i class="fas fa-envelope"></i>
                <a [href]="'mailto:' + personalInfo?.email">{{ personalInfo?.email }}</a>
              </p>
              <p>
                <i class="fas fa-phone"></i>
                <a [href]="'tel:' + personalInfo?.phone">{{ personalInfo?.phone }}</a>
              </p>
              <p>
                <i class="fas fa-map-marker-alt"></i>
                {{ personalInfo?.location }}
              </p>
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
        </div>
        
        <div class="footer-bottom">
          <div class="footer-divider"></div>
          <div class="footer-bottom-content">
            <p>&copy; {{ currentYear }} {{ personalInfo?.name }}. All rights reserved.</p>
            <p>Built with <i class="fas fa-heart"></i> using Angular</p>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: #1f2937;
      color: white;
      padding: 4rem 0 2rem;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .footer-content {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1.5fr;
      gap: 3rem;
      margin-bottom: 3rem;
    }

    .footer-section h3 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: #ffd700;
    }

    .footer-section h4 {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: #e5e7eb;
    }

    .footer-section p {
      color: #9ca3af;
      line-height: 1.6;
      margin-bottom: 0.5rem;
    }

    .footer-bio {
      margin-top: 1rem;
      font-size: 0.9rem;
    }

    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-links li {
      margin-bottom: 0.5rem;
    }

    .footer-links a {
      color: #9ca3af;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-links a:hover {
      color: #ffd700;
    }

    .footer-links li:not(:has(a)) {
      color: #9ca3af;
    }

    .contact-info p {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.75rem;
    }

    .contact-info i {
      width: 16px;
      color: #ffd700;
    }

    .contact-info a {
      color: #9ca3af;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .contact-info a:hover {
      color: #ffd700;
    }

    .social-links {
      display: flex;
      gap: 1rem;
      margin-top: 1.5rem;
    }

    .social-link {
      width: 40px;
      height: 40px;
      background: #374151;
      color: #9ca3af;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .social-link:hover {
      background: #ffd700;
      color: #1f2937;
      transform: translateY(-3px);
    }

    .footer-divider {
      height: 1px;
      background: #374151;
      margin-bottom: 2rem;
    }

    .footer-bottom-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .footer-bottom-content p {
      color: #6b7280;
      margin: 0;
    }

    .footer-bottom-content .fas.fa-heart {
      color: #ef4444;
      animation: heartbeat 1.5s ease-in-out infinite;
    }

    @keyframes heartbeat {
      0% { transform: scale(1); }
      50% { transform: scale(1.1); }
      100% { transform: scale(1); }
    }

    @media (max-width: 768px) {
      .footer {
        padding: 3rem 0 1.5rem;
      }

      .container {
        padding: 0 1rem;
      }

      .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
      }

      .footer-bottom-content {
        flex-direction: column;
        text-align: center;
        gap: 0.5rem;
      }

      .contact-info p {
        justify-content: center;
      }

      .social-links {
        justify-content: center;
      }

      .footer-section h3 {
        font-size: 1.3rem;
      }

      .footer-section h4 {
        font-size: 1.1rem;
      }

      .footer-bio {
        font-size: 0.85rem;
        padding: 0 1rem;
      }
    }

    @media (max-width: 1024px) and (min-width: 769px) {
      .footer-content {
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
      }
    }

    @media (max-width: 480px) {
      .footer {
        padding: 2rem 0 1rem;
      }

      .footer-section h3 {
        font-size: 1.2rem;
      }

      .footer-section h4 {
        font-size: 1rem;
      }

      .social-link {
        width: 35px;
        height: 35px;
      }

      .footer-bio {
        font-size: 0.8rem;
      }

      .footer-bottom-content p {
        font-size: 0.8rem;
      }
    }
  `]
})
export class FooterComponent implements OnInit {
  personalInfo: PersonalInfo | null = null;
  socialLinks: SocialLink[] = [];
  currentYear = new Date().getFullYear();

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