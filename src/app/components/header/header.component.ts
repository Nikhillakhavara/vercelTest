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
          <a href="#home" class="brand-link">Portfolio</a>
        </div>
        
        <div class="nav-menu" [class.active]="isMenuOpen">
          <a href="#home" class="nav-link" (click)="closeMenu()">Home</a>
          <a href="#about" class="nav-link" (click)="closeMenu()">About</a>
          <a href="#skills" class="nav-link" (click)="closeMenu()">Skills</a>
          <a href="#projects" class="nav-link" (click)="closeMenu()">Projects</a>
          <a href="#experience" class="nav-link" (click)="closeMenu()">Experience</a>
          <a href="#contact" class="nav-link" (click)="closeMenu()">Contact</a>
        </div>
        
        <div class="nav-toggle" (click)="toggleMenu()">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      z-index: 1000;
      transition: all 0.3s ease;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    .header.scrolled {
      background: rgba(255, 255, 255, 0.98);
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }

    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .brand-link {
      font-size: 1.5rem;
      font-weight: 700;
      color: #2563eb;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .brand-link:hover {
      color: #1d4ed8;
    }

    .nav-menu {
      display: flex;
      gap: 2rem;
      align-items: center;
    }

    .nav-link {
      color: #374151;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
      position: relative;
    }

    .nav-link:hover {
      color: #2563eb;
    }

    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: #2563eb;
      transition: width 0.3s ease;
    }

    .nav-link:hover::after {
      width: 100%;
    }

    .nav-toggle {
      display: none;
      flex-direction: column;
      cursor: pointer;
      gap: 4px;
    }

    .nav-toggle span {
      width: 25px;
      height: 3px;
      background: #374151;
      transition: all 0.3s ease;
    }

    @media (max-width: 768px) {
      .nav-menu {
        position: fixed;
        top: 100%;
        left: 0;
        width: 100%;
        background: white;
        flex-direction: column;
        padding: 2rem;
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      }

      .nav-menu.active {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }

      .nav-toggle {
        display: flex;
      }

      .nav-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }

      .nav-toggle.active span:nth-child(2) {
        opacity: 0;
      }

      .nav-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
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

  private checkScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}