import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service';
import { PersonalInfo, ContactForm } from '../../models/portfolio.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section id="contact" class="contact">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Get In Touch</h2>
          <p class="section-subtitle">Let's work together on your next project</p>
        </div>
        
        <div class="contact-content">
          <div class="contact-info">
            <h3>Contact Information</h3>
            <p>Feel free to reach out to me through any of the following methods:</p>
            
            <div class="contact-methods">
              <div class="contact-method">
                <i class="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <a [href]="'mailto:' + personalInfo?.email">{{ personalInfo?.email }}</a>
                </div>
              </div>
              
              <div class="contact-method">
                <i class="fas fa-phone"></i>
                <div>
                  <h4>Phone</h4>
                  <a [href]="'tel:' + personalInfo?.phone">{{ personalInfo?.phone }}</a>
                </div>
              </div>
              
              <div class="contact-method">
                <i class="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Location</h4>
                  <span>{{ personalInfo?.location }}</span>
                </div>
              </div>
            </div>
            
            <div class="availability">
              <h4>Availability</h4>
              <p>I'm currently available for freelance work and new opportunities. Response time is typically within 24 hours.</p>
            </div>
          </div>
          
          <div class="contact-form-container">
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form">
              <h3>Send me a message</h3>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    formControlName="name"
                    [class.error]="contactForm.get('name')?.invalid && contactForm.get('name')?.touched"
                    placeholder="Your full name"
                  />
                  <div 
                    *ngIf="contactForm.get('name')?.invalid && contactForm.get('name')?.touched" 
                    class="error-message"
                  >
                    Name is required
                  </div>
                </div>
                
                <div class="form-group">
                  <label for="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    formControlName="email"
                    [class.error]="contactForm.get('email')?.invalid && contactForm.get('email')?.touched"
                    placeholder="your.email@example.com"
                  />
                  <div 
                    *ngIf="contactForm.get('email')?.invalid && contactForm.get('email')?.touched" 
                    class="error-message"
                  >
                    <span *ngIf="contactForm.get('email')?.errors?.['required']">Email is required</span>
                    <span *ngIf="contactForm.get('email')?.errors?.['email']">Please enter a valid email</span>
                  </div>
                </div>
              </div>
              
              <div class="form-group">
                <label for="subject">Subject *</label>
                <input 
                  type="text" 
                  id="subject" 
                  formControlName="subject"
                  [class.error]="contactForm.get('subject')?.invalid && contactForm.get('subject')?.touched"
                  placeholder="What's this about?"
                />
                <div 
                  *ngIf="contactForm.get('subject')?.invalid && contactForm.get('subject')?.touched" 
                  class="error-message"
                >
                  Subject is required
                </div>
              </div>
              
              <div class="form-group">
                <label for="message">Message *</label>
                <textarea 
                  id="message" 
                  formControlName="message"
                  [class.error]="contactForm.get('message')?.invalid && contactForm.get('message')?.touched"
                  placeholder="Tell me about your project or inquiry..."
                  rows="6"
                ></textarea>
                <div 
                  *ngIf="contactForm.get('message')?.invalid && contactForm.get('message')?.touched" 
                  class="error-message"
                >
                  Message is required
                </div>
              </div>
              
              <button 
                type="submit" 
                class="submit-btn"
                [disabled]="contactForm.invalid || isSubmitting"
              >
                <span *ngIf="!isSubmitting">
                  <i class="fas fa-paper-plane"></i>
                  Send Message
                </span>
                <span *ngIf="isSubmitting">
                  <i class="fas fa-spinner fa-spin"></i>
                  Sending...
                </span>
              </button>
            </form>
            
            <div *ngIf="submitMessage" class="submit-message" [class.success]="submitSuccess" [class.error]="!submitSuccess">
              <i [class]="submitSuccess ? 'fas fa-check-circle' : 'fas fa-exclamation-circle'"></i>
              {{ submitMessage }}
            </div>
          </div>
        </div>
        
        <div class="contact-cta">
          <h3>Ready to start a project?</h3>
          <p>I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!</p>
          <div class="cta-buttons">
            <a href="#" class="btn btn-primary">Schedule a Call</a>
            <a href="#" class="btn btn-secondary">Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
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

    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      margin-bottom: 4rem;
    }

    .contact-info h3 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 1rem;
    }

    .contact-info p {
      color: #6b7280;
      line-height: 1.6;
      margin-bottom: 2rem;
    }

    .contact-methods {
      margin-bottom: 2rem;
    }

    .contact-method {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
      padding: 1rem;
      background: white;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    }

    .contact-method i {
      width: 50px;
      height: 50px;
      background: #2563eb;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
    }

    .contact-method h4 {
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 0.25rem;
    }

    .contact-method a {
      color: #2563eb;
      text-decoration: none;
    }

    .contact-method a:hover {
      text-decoration: underline;
    }

    .contact-method span {
      color: #6b7280;
    }

    .availability {
      background: white;
      padding: 1.5rem;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    }

    .availability h4 {
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 0.5rem;
    }

    .availability p {
      color: #6b7280;
      line-height: 1.6;
      margin: 0;
    }

    .contact-form-container {
      background: white;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .contact-form h3 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 1.5rem;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group label {
      display: block;
      font-weight: 500;
      color: #374151;
      margin-bottom: 0.5rem;
    }

    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 0.75rem;
      border: 2px solid #e5e7eb;
      border-radius: 8px;
      font-size: 1rem;
      transition: border-color 0.3s ease;
      box-sizing: border-box;
    }

    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: #2563eb;
    }

    .form-group input.error,
    .form-group textarea.error {
      border-color: #ef4444;
    }

    .error-message {
      color: #ef4444;
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }

    .submit-btn {
      width: 100%;
      padding: 1rem;
      background: #2563eb;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }

    .submit-btn:hover:not(:disabled) {
      background: #1d4ed8;
      transform: translateY(-2px);
    }

    .submit-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .submit-message {
      margin-top: 1rem;
      padding: 1rem;
      border-radius: 8px;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .submit-message.success {
      background: #d1fae5;
      color: #065f46;
      border: 1px solid #a7f3d0;
    }

    .submit-message.error {
      background: #fee2e2;
      color: #991b1b;
      border: 1px solid #fca5a5;
    }

    .contact-cta {
      text-align: center;
      background: white;
      padding: 3rem;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .contact-cta h3 {
      font-size: 2rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 1rem;
    }

    .contact-cta p {
      color: #6b7280;
      line-height: 1.6;
      margin-bottom: 2rem;
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
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
      background: #2563eb;
      color: white;
    }

    .btn-primary:hover {
      background: #1d4ed8;
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
    }

    .btn-secondary {
      background: transparent;
      color: #2563eb;
      border: 2px solid #2563eb;
    }

    .btn-secondary:hover {
      background: #2563eb;
      color: white;
      transform: translateY(-2px);
    }

    @media (max-width: 768px) {
      .contact {
        padding: 60px 0;
      }

      .container {
        padding: 0 1rem;
      }

      .contact-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .form-row {
        grid-template-columns: 1fr;
        gap: 0;
      }

      .cta-buttons {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }

      .btn {
        width: 100%;
        max-width: 250px;
        text-align: center;
      }

      .section-title {
        font-size: 2rem;
      }

      .contact-form-container {
        padding: 1.5rem;
      }

      .contact-method {
        padding: 0.75rem;
        flex-direction: column;
        text-align: center;
        gap: 0.5rem;
      }

      .contact-method i {
        width: 40px;
        height: 40px;
        font-size: 1rem;
      }

      .contact-cta {
        padding: 2rem 1rem;
      }

      .contact-cta h3 {
        font-size: 1.5rem;
      }
    }

    @media (max-width: 480px) {
      .contact {
        padding: 40px 0;
      }

      .section-title {
        font-size: 1.8rem;
      }

      .contact-form-container {
        padding: 1rem;
      }

      .contact-form h3 {
        font-size: 1.3rem;
      }

      .form-group input,
      .form-group textarea {
        padding: 0.6rem;
        font-size: 0.9rem;
      }

      .submit-btn {
        padding: 0.8rem;
        font-size: 0.9rem;
      }

      .contact-cta h3 {
        font-size: 1.3rem;
      }

      .contact-cta p {
        font-size: 0.9rem;
      }
    }
  `]
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  personalInfo: PersonalInfo | null = null;
  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;

  constructor(
    private fb: FormBuilder,
    private portfolioService: PortfolioService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.portfolioService.personalInfo$.subscribe(info => {
      this.personalInfo = info;
    });
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitMessage = '';

      const formData: ContactForm = this.contactForm.value;

      try {
        const success = await this.portfolioService.submitContactForm(formData);
        
        if (success) {
          this.submitSuccess = true;
          this.submitMessage = 'Thank you for your message! I\'ll get back to you within 24 hours.';
          this.contactForm.reset();
        } else {
          this.submitSuccess = false;
          this.submitMessage = 'Sorry, there was an error sending your message. Please try again or contact me directly.';
        }
      } catch (error) {
        this.submitSuccess = false;
        this.submitMessage = 'Sorry, there was an error sending your message. Please try again or contact me directly.';
      } finally {
        this.isSubmitting = false;
        
        // Clear message after 5 seconds
        setTimeout(() => {
          this.submitMessage = '';
        }, 5000);
      }
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
}