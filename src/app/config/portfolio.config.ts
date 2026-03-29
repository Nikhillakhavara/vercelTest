// Portfolio Configuration
// Update this file to customize your portfolio content

export const PORTFOLIO_CONFIG = {
  // Personal Information
  personal: {
    name: 'Nikhil Lakhavara',
    title: 'Full Stack Developer',
    bio: 'Passionate developer with expertise in modern web technologies. I love creating innovative solutions and bringing ideas to life through code.',
    email: 'lakhavara5233@gmail.com',
    phone: '+910000000000',
    location: 'Ahmedabad, Gujarat',
    profileImage: 'assets/images/placeholder.svg'
  },

  // Social Media Links
  socialLinks: [
    { platform: 'GitHub', url: 'https://github.com/Nikhillakhavara', icon: 'fab fa-github' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: 'fab fa-linkedin' },
    { platform: 'Twitter', url: 'https://twitter.com/yourusername', icon: 'fab fa-twitter' },
    { platform: 'Instagram', url: 'https://instagram.com/nikhil_lakhavara', icon: 'fab fa-instagram' }
  ],

  // Skills (name, level 1-100, category)
  skills: [
    { name: 'Angular', level: 90, category: 'Frontend' },
    { name: 'React', level: 85, category: 'Frontend' },
    { name: 'Vue.js', level: 75, category: 'Frontend' },
    { name: 'TypeScript', level: 88, category: 'Programming' },
    { name: 'JavaScript', level: 92, category: 'Programming' },
    { name: 'Python', level: 75, category: 'Programming' },
    { name: 'Node.js', level: 80, category: 'Backend' },
    { name: 'Express.js', level: 78, category: 'Backend' },
    { name: 'PostgreSQL', level: 78, category: 'Database' },
    { name: 'MongoDB', level: 72, category: 'Database' },
    { name: 'AWS', level: 70, category: 'Cloud' },
    { name: 'Docker', level: 68, category: 'DevOps' },
    { name: 'Git', level: 85, category: 'Tools' },
    { name: 'Figma', level: 70, category: 'Design' }
  ],

  // Projects
  projects: [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built with modern technologies for optimal performance.',
      image: 'assets/images/project-placeholder.svg',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project1',
      featured: true
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.',
      image: 'assets/images/project-placeholder.svg',
      technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project2',
      featured: true
    },
    {
      id: '3',
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with location-based forecasts, historical data visualization, and responsive design for all devices.',
      image: 'assets/images/project-placeholder.svg',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project3',
      featured: false
    },
    {
      id: '4',
      title: 'Social Media Analytics',
      description: 'Comprehensive analytics platform for social media performance tracking with automated reporting and insights generation.',
      image: 'assets/images/project-placeholder.svg',
      technologies: ['Angular', 'D3.js', 'Python', 'FastAPI', 'Redis'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project4',
      featured: false
    }
  ],

  // Work Experience
  experience: [
    {
      id: '1',
      company: 'Tech Company Inc.',
      position: 'Senior Full Stack Developer',
      startDate: '2022-01',
      description: 'Led development of multiple web applications, mentored junior developers, and implemented best practices for code quality and performance. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'AWS', 'Docker']
    },
    {
      id: '2',
      company: 'Startup Solutions',
      position: 'Frontend Developer',
      startDate: '2020-06',
      endDate: '2021-12',
      description: 'Developed responsive web applications, collaborated with design team to implement pixel-perfect UIs, and optimized application performance for better user experience.',
      technologies: ['React', 'TypeScript', 'Redux', 'SASS', 'Jest']
    },
    {
      id: '3',
      company: 'Digital Agency',
      position: 'Junior Web Developer',
      startDate: '2019-03',
      endDate: '2020-05',
      description: 'Built client websites using modern web technologies, maintained existing applications, and learned industry best practices in a fast-paced environment.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'PHP']
    }
  ],

  // Education
  education: [
    {
      id: '1',
      institution: 'University of Technology',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      startDate: '2016-09',
      endDate: '2020-05',
      gpa: '3.8'
    },
    {
      id: '2',
      institution: 'Tech Bootcamp',
      degree: 'Certificate',
      field: 'Full Stack Web Development',
      startDate: '2019-01',
      endDate: '2019-06'
    }
  ],

  // Website Configuration
  website: {
    title: 'Portfolio - Your Name',
    description: 'Professional portfolio of [Your Name] - Full Stack Developer specializing in modern web technologies',
    keywords: 'web developer, full stack, angular, react, portfolio, javascript, typescript',
    author: 'Your Name',
    url: 'https://yourportfolio.com',
    ogImage: 'https://yourportfolio.com/assets/images/og-image.jpg'
  },

  // Contact Form Configuration
  contact: {
    // This will be replaced with your Supabase function URL
    apiEndpoint: 'YOUR_SUPABASE_FUNCTION_URL',
    // Success message after form submission
    successMessage: 'Thank you for your message! I\'ll get back to you within 24 hours.',
    // Error message if submission fails
    errorMessage: 'Sorry, there was an error sending your message. Please try again or contact me directly.'
  }
};

// Helper function to get configuration
export function getPortfolioConfig() {
  return PORTFOLIO_CONFIG;
}