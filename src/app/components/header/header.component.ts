import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header" [class.scrolled]="isScrolled">
      <nav class="nav">
        <div class="nav-brand">
          <a href="#home" class="brand-link">
            <span class="brand-icon">⚡</span>
            Portfolio
          </a>
        </div>
        
        <div class="nav-menu" [class.active]="isMenuOpen">
          <a href="#home" class="nav-link" (click)="closeMenu()">
            <i class="fas fa-home"></i>
            <span>Home</span>
          </a>
          <a href="#about" class="nav-link" (click)="closeMenu()">
            <i class="fas fa-user"></i>
            <span>About</span>
          </a>
          <a href="#skills" class="nav-link" (click)="closeMenu()">
            <i class="fas fa-code"></i>
            <span>Skills</span>
          </a>
          <a href="#projects" class="nav-link" (click)="closeMenu()">
            <i class="fas fa-briefcase"></i>
            <span>Projects</span>
          </a>
          <a href="#experience" class="nav-link" (click)="closeMenu()">
            <i class="fas fa-graduation-cap"></i>
            <span>Experience</span>
          </a>
          <a href="#contact" class="nav-link" (click)="closeMenu()">
            <i class="fas fa-envelope"></i>
            <span>Contact</span>
          </a>
        </div>
        
        <div class="nav-toggle" [class.active]="isMenuOpen" (click)="toggleMenu()">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      
      <!-- Mobile overlay -->
      <div class="nav-overlay" [class.active]="isMenuOpen" (click)="closeMenu()"></div>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      z-index: 1000;
      transition: all 0.3s ease;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }

    .header.scrolled {
      background: rgba(255, 255, 255, 0.98);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    }

    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      max-width: 1400px;
      margin: 0 auto;
    }

    .brand-link {
      font-size: 1.5rem;
      font-weight: 700;
      color: #1a1a1a;
      text-decoration: none;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .brand-icon {
      font-size: 1.8rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .brand-link:hover {
      transform: translateY(-2px);
    }

    .nav-menu {
      display: flex;
      gap: 2rem;
      align-items: center;
    }

    .nav-link {
      color: #4a5568;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
      position: relative;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      border-radius: 12px;
    }

    .nav-link i {
      font-size: 0.9rem;
      opacity: 0.7;
    }

    .nav-link:hover {
      color: #667eea;
      background: rgba(102, 126, 234, 0.1);
      transform: translateY(-2px);
    }

    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 50%;
      width: 0;
      height: 2px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      transition: all 0.3s ease;
      transform: translateX(-50%);
    }

    .nav-link:hover::after {
      width: 80%;
    }

    .nav-toggle {
      display: none;
      flex-direction: column;
      cursor: pointer;
      gap: 4px;
      padding: 0.5rem;
      border-radius: 8px;
      transition: all 0.3s ease;
    }

    .nav-toggle:hover {
      background: rgba(102, 126, 234, 0.1);
    }

    .nav-toggle span {
      width: 25px;
      height: 3px;
      background: #4a5568;
      transition: all 0.3s ease;
      border-radius: 2px;
    }

    .nav-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      z-index: 998;
    }

    .nav-overlay.active {
      opacity: 1;
      visibility: visible;
    }

    @media (max-width: 768px) {
      .nav {
        padding: 1rem;
      }

      .nav-menu {
        position: fixed;
        top: 0;
        right: -100%;
        width: 280px;
        height: 100vh;
        background: white;
        flex-direction: column;
        padding: 6rem 2rem 2rem;
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
        z-index: 999;
        justify-content: flex-start;
        gap: 0;
      }

      .nav-menu.active {
        right: 0;
      }

      .nav-link {
        width: 100%;
        padding: 1rem;
        font-size: 1.1rem;
        border-radius: 12px;
        margin-bottom: 0.5rem;
        justify-content: flex-start;
      }

      .nav-link i {
        font-size: 1.2rem;
        opacity: 0.8;
        width: 24px;
      }

      .nav-link::after {
        display: none;
      }

      .nav-link:hover {
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
        transform: translateX(5px);
      }

      .nav-toggle {
        display: flex;
        z-index: 1000;
        position: relative;
      }

      .nav-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
        background: #667eea;
      }

      .nav-toggle.active span:nth-child(2) {
        opacity: 0;
      }

      .nav-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
        background: #667eea;
      }
    }

    @media (max-width: 480px) {
      .nav-menu {
        width: 100%;
        right: -100%;
      }

      .nav-menu.active {
        right: 0;
      }
    }
  `]
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  isMenuOpen = false;

  ngOnInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    if (window.innerWidth > 768 && this.isMenuOpen) {
      this.closeMenu();
    }
  }

  private checkScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    // Prevent body scroll when menu is open
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = 'auto';
  }
}