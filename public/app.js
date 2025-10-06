// Application Data - Updated with comprehensive mentor information
const MENTORS_DATA = [
  {
    id: 1,
    name: "Rao Ahmar",
    role: "Growth & Marketing",
    company: "Adalfi",
    background: "Engineering, NUST",
    image: "https://raw.githubusercontent.com/RaoAhmar/Mentor-Pictures/main/me_400x400.jpg",
    expertise: ["Software Development", "System Architecture", "Career Transitions", "Technical Leadership"],
    experience: "8+ years",
    description: "Seasoned software engineer specializing in distributed systems and engineering leadership at Google.",
    bio: "Rao Ahmar is a seasoned software engineer with over 8 years of experience at leading tech companies. His journey began as a junior developer, where he quickly distinguished himself through his innovative problem-solving approach and commitment to clean, scalable code. At Google, Sarah has led multiple high-impact projects, including the development of core infrastructure components that serve millions of users daily.",
    mentoring: "Has mentored over 50 junior developers, focusing on practical skill development and career advancement.",
    philosophy: "Believes in practical skill development, career strategy, and building confidence in technical decision-making.",
    linkedinUrl: "https://www.linkedin.com/in/ahmarhassan/"
  },
  {
    id: 2,
    name: "Waqar Ali Ahsan",
    role: "Consultant, Brand Manager, Entrepreneur",
    company: "GoSAAS",
    background: "MBA LUMS",
    image: "https://raw.githubusercontent.com/RaoAhmar/Mentor-Pictures/main/waqar_400x400.jpg",
    expertise: ["Product Strategy", "Team Management", "Startup Growth", "Data-Driven Decisions"],
    experience: "10+ years",
    description: "Product management expert with proven track record of launching $100M+ products at Microsoft.",
    bio: "Builder at heart with a knack for turning fuzzy ideas into crisp products.Waqar blends systems thinking with creative storytelling to ship fast and iterate smarter.From roadmaps to rapid sprints, he helps you focus, test, and learn.Ready to move from “someday” to shipped? Waqar’s your launch partner.",
    mentoring: "Guided over 75 professionals through career transitions, especially engineers moving to product roles.",
    philosophy: "Emphasizes data-driven mentoring with measurable goals, strategic thinking, and stakeholder management.",
    linkedinUrl: "https://www.linkedin.com/in/waqaraliahsan/"
  },
  {
    id: 3,
    name: "Roshaan Arif",
    role: "Sales Consultant, Founder",
    company: "Glow, Blenwiq",
    background: "Engineering, NUST",
    image: "https://raw.githubusercontent.com/RaoAhmar/Mentor-Pictures/main/roshaan_400x400.jpg",
    expertise: ["Data Science", "Machine Learning", "Statistical Modeling", "AI Ethics"],
    experience: "12+ years",
    description: "Distinguished data scientist leading ML initiatives impacting 200+ million Netflix subscribers worldwide.",
    bio: "Roshaan turns outreach into outcomes—clarity in the message, discipline in the funnel.He’s a playbook guy: ICP, scripts, loops, and metrics that compound. From cold start to warm pipeline, he helps you build trust at scale. Come for the strategy, stay for the consistent wins.",
    mentoring: "Guided over 40 professionals into data science careers, specializing in academic-to-industry transitions.",
    philosophy: "Combines technical rigor with practical insights, focusing on building both hard skills and professional networks.",
    linkedinUrl: "https://www.linkedin.com/in/elenarodriguez"
  },
  {
    id: 4,
    name: "David Kim",
    role: "UX Design Director",
    company: "Airbnb",
    background: "Design, RISD",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&h=458&q=80",
    expertise: ["UX/UI Design", "Design Leadership", "User Research", "Design Systems"],
    experience: "9+ years",
    description: "Award-winning UX design leader with expertise in creating user-centered experiences at scale.",
    bio: "David Kim is an award-winning UX design leader with extensive experience in creating user-centered digital experiences. At Airbnb, he leads design initiatives that impact millions of users globally.",
    mentoring: "Mentored 30+ designers transitioning into senior and leadership roles in tech companies.",
    philosophy: "Design is about solving real human problems with empathy, creativity, and strategic thinking.",
    linkedinUrl: "https://www.linkedin.com/in/davidkim"
  },
  {
    id: 5,
    name: "Jennifer Wright",
    role: "VP of Marketing",
    company: "Stripe",
    background: "Marketing, Northwestern",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&h=458&q=80",
    expertise: ["Digital Marketing", "Brand Strategy", "Growth Marketing", "Team Leadership"],
    experience: "11+ years",
    description: "Marketing executive driving growth strategies for fintech industry leader Stripe.",
    bio: "Jennifer Wright is a marketing executive with over 11 years of experience driving growth strategies for leading technology companies. At Stripe, she oversees global marketing initiatives that support the company's mission to increase GDP of the internet.",
    mentoring: "Coached 60+ marketing professionals in career advancement and strategic marketing execution.",
    philosophy: "Great marketing combines data insights with creative storytelling to build meaningful connections.",
    linkedinUrl: "https://www.linkedin.com/in/jenniferwright"
  },
  {
    id: 6,
    name: "Alex Thompson",
    role: "Serial Entrepreneur",
    company: "TechCorp (Acquired by Meta)",
    background: "Engineering, UC Berkeley",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&h=458&q=80",
    expertise: ["Entrepreneurship", "Fundraising", "Scaling Teams", "Exit Strategies"],
    experience: "15+ years",
    description: "Serial entrepreneur with successful exits including acquisition by Meta. Expert in startup growth and scaling.",
    bio: "Alex Thompson is a serial entrepreneur with over 15 years of experience building and scaling technology companies. His most recent venture, TechCorp, was successfully acquired by Meta for $500M.",
    mentoring: "Guided 45+ entrepreneurs through startup journeys, from ideation to successful exits.",
    philosophy: "Entrepreneurship is about solving meaningful problems while building sustainable, impactful businesses.",
    linkedinUrl: "https://www.linkedin.com/in/alexthompson"
  }
];

// Process Steps Data - Updated to match the new requirements
const PROCESS_STEPS = [
  {
    step: 1,
    title: "Explore Our Mentors",
    description: "Browse through our expert mentors and find the right fit for your goals",
    icon: "search"
  },
  {
    step: 2, 
    title: "Request A Session",
    description: "Click to request a mentoring session with your chosen expert",
    icon: "calendar"
  },
  {
    step: 3,
    title: "We'll Contact You",
    description: "Our team will reach out to schedule your session at a convenient time", 
    icon: "phone"
  },
  {
    step: 4,
    title: "Get Personalized Guidance",
    description: "Connect with your mentor for career guidance and support",
    icon: "user-check"
  }
];

// Contact Email - Updated to the specified email
const CONTACT_EMAIL = "thefindyourfit@gmail.com";

// EmailJS Configuration
const EMAILJS_CONFIG = {
    PUBLIC_KEY: "fZgyznqC6_1RiNJ8g", // Replace with your EmailJS public key
    SERVICE_ID: "service_opi840e", // Replace with your EmailJS service ID
    TEMPLATE_ID: "Fyf_Form_replies" // Replace with your EmailJS template ID
};

// Application State
const AppState = {
  currentPage: 'home',
  currentMentorId: null,
  filteredMentors: [...MENTORS_DATA]
};

// DOM Elements
const app = document.getElementById('app');
const pages = document.querySelectorAll('.page');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navMobile = document.getElementById('nav-mobile');
const header = document.getElementById('header');
const logoLink = document.getElementById('logo-link');

// Modal elements
const waitlistModal = document.getElementById('waitlist-modal');
const getStartedModal = document.getElementById('get-started-modal');
const mentorRequestModal = document.getElementById('mentor-request-modal');
const successModal = document.getElementById('success-modal');

// Modal triggers
const joinWaitlistBtns = document.querySelectorAll('#join-waitlist-btn, #hero-cta-btn');
const getStartedBtns = document.querySelectorAll('#get-started-btn');

// Modal close buttons
const waitlistModalClose = document.getElementById('waitlist-modal-close');
const getStartedModalClose = document.getElementById('get-started-modal-close');
const mentorRequestModalClose = document.getElementById('mentor-request-modal-close');
const successModalClose = document.getElementById('success-modal-close');

// Forms
const waitlistForm = document.getElementById('waitlist-form');
const getStartedForm = document.getElementById('get-started-form');
const mentorRequestForm = document.getElementById('mentor-request-form');
const contactForm = document.getElementById('contact-form');

// Success message element
const successMessage = document.getElementById('success-message');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupRouter();
    setupMobileMenu();
    setupModals();
    setupForms();
    setupScrollAnimations();
    setupHeaderScroll();
    renderFeaturedMentors();
    setupViewAllMentorsButton();
    setupRevolvingHeader();
    initializeEmailJS();
    
    // Handle initial route
    const hash = window.location.hash || '#home';
    const route = hash.substring(1);
    navigateTo(route);
}

// Router Functions
function setupRouter() {
    // Handle navigation links
    document.addEventListener('click', function(e) {
        const link = e.target.closest('[data-route]');
        if (link) {
            e.preventDefault();
            const route = link.getAttribute('data-route');
            navigateTo(route);
        }
    });
    
    // Handle logo click
    logoLink.addEventListener('click', function() {
        navigateTo('home');
    });
    
    // Handle breadcrumb navigation
    document.addEventListener('click', function(e) {
        if (e.target.id === 'breadcrumb-home' || e.target.id === 'detail-breadcrumb-home') {
            e.preventDefault();
            navigateTo('home');
        }
        if (e.target.id === 'detail-breadcrumb-mentors') {
            e.preventDefault();
            navigateTo('mentors');
        }
    });
    
    // Handle browser back/forward
    window.addEventListener('popstate', function(e) {
        if (e.state && e.state.page) {
            showPage(e.state.page, e.state.mentorId, false);
        } else {
            const hash = window.location.hash || '#home';
            navigateTo(hash.substring(1), false);
        }
    });
}

function navigateTo(route, pushState = true) {
    const parts = route.split('/');
    const page = parts[0];
    const mentorId = parts[1];
    
    if (pushState) {
        const state = { page, mentorId };
        const url = mentorId ? `#${page}/${mentorId}` : `#${page}`;
        history.pushState(state, '', url);
    }
    
    showPage(page, mentorId);
    closeMobileMenu();
}

function showPage(pageName, mentorId, updateState = true) {
    // Hide all pages
    pages.forEach(page => {
        page.classList.remove('active');
        page.classList.add('hidden');
    });
    
    // Update nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkRoute = link.getAttribute('data-route');
        if (linkRoute === pageName || (pageName === 'home' && linkRoute === 'home') ||
            (pageName === 'mentors' && linkRoute === 'mentors')) {
            link.classList.add('active');
        }
    });
    
    // Show target page
    let targetPage;
    switch(pageName) {
        case 'mentors':
            targetPage = document.getElementById('mentors-page');
            // Ensure mentors directory is rendered after the page is shown
            setTimeout(() => {
                renderMentorsDirectory();
            }, 10);
            break;
        case 'mentor-detail':
            targetPage = document.getElementById('mentor-detail-page');
            setTimeout(() => {
                renderMentorDetail(mentorId);
            }, 10);
            break;
        case 'home':
        default:
            targetPage = document.getElementById('home-page');
            if (pageName !== 'home' && pageName !== 'mentor-detail' && pageName !== 'mentors') {
                // Scroll to specific section on home page
                setTimeout(() => {
                    const section = document.getElementById(pageName);
                    if (section) {
                        const headerHeight = header.offsetHeight;
                        const targetPosition = section.offsetTop - headerHeight - 20;
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }, 100);
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            break;
    }
    
    if (targetPage) {
        targetPage.classList.remove('hidden');
        targetPage.classList.add('active');
        
        // Scroll to top of new page
        if (pageName === 'mentors' || pageName === 'mentor-detail') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
    
    AppState.currentPage = pageName;
    AppState.currentMentorId = mentorId;
}

// Featured Mentors Functions
function renderFeaturedMentors() {
    const featuredMentorsGrid = document.getElementById('featured-mentors-grid');
    if (!featuredMentorsGrid) return;
    
    // Show first 3 mentors as featured
    const featuredMentors = MENTORS_DATA.slice(0, 3);
    
    const featuredMentorsHTML = featuredMentors.map(mentor => {
        return `
            <div class="featured-mentor-card" data-mentor-id="${mentor.id}">
                <div class="featured-mentor-image">
                    <img src="${mentor.image}" alt="Professional headshot of ${mentor.name}" loading="lazy" onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=\\'image-placeholder\\'><span>${getInitials(mentor.name)}</span></div>';">
                </div>
                <div class="featured-mentor-content">
                    <h3 class="featured-mentor-name">${mentor.name}</h3>
                    <p class="featured-mentor-company">${mentor.company}</p>
                    <p class="featured-mentor-education">${mentor.background}</p>
                    
                    <div class="featured-mentor-footer">
                        <a href="${mentor.linkedinUrl}" class="featured-mentor-linkedin" target="_blank" title="View LinkedIn Profile">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    featuredMentorsGrid.innerHTML = featuredMentorsHTML;
    
    // Add click handlers to featured mentor cards
    const featuredMentorCards = featuredMentorsGrid.querySelectorAll('.featured-mentor-card');
    featuredMentorCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't navigate if clicking the LinkedIn button
            if (e.target.classList.contains('featured-mentor-linkedin')) {
                return;
            }
            
            const mentorId = this.getAttribute('data-mentor-id');
            navigateTo(`mentor-detail/${mentorId}`);
        });
    });
}

function setupViewAllMentorsButton() {
    const viewAllMentorsBtn = document.getElementById('view-all-mentors');
    if (viewAllMentorsBtn) {
        viewAllMentorsBtn.addEventListener('click', function() {
            navigateTo('mentors');
        });
    }
}

// Mentor Rendering Functions
function renderMentorsDirectory() {
    const mentorsGrid = document.getElementById('mentors-directory-grid');
    if (!mentorsGrid) {
        console.error('Mentors grid not found');
        return;
    }
    
    // Clear existing content
    mentorsGrid.innerHTML = '';
    
    // Generate mentor cards with box layout (same as featured mentors)
    const mentorCardsHTML = AppState.filteredMentors.map(mentor => {
        return `
            <div class="mentor-card-box" data-mentor-id="${mentor.id}">
                <div class="mentor-card-image">
                    <img src="${mentor.image}" alt="Professional headshot of ${mentor.name}" loading="lazy" onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=\\'image-placeholder\\'><span>${getInitials(mentor.name)}</span></div>';">
                </div>
                <div class="mentor-card-content">
                    <h3 class="mentor-card-name">${mentor.name}</h3>
                    <p class="mentor-card-company">${mentor.company}</p>
                    <p class="mentor-card-education">${mentor.background}</p>
                    
                    <div class="mentor-card-footer">
                        <a href="${mentor.linkedinUrl}" class="mentor-card-linkedin" target="_blank" title="View LinkedIn Profile">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                        <button class="mentor-card-request-btn" data-mentor-name="${mentor.name}">
                            Request A Session
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    mentorsGrid.innerHTML = mentorCardsHTML;
    
    // Add click handlers to mentor cards (but not the request buttons)
    const mentorCards = mentorsGrid.querySelectorAll('.mentor-card-box');
    mentorCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't navigate if clicking the request button or LinkedIn icon
            if (e.target.classList.contains('mentor-card-request-btn') || 
                e.target.closest('.mentor-card-linkedin')) {
                return;
            }
            
            const mentorId = this.getAttribute('data-mentor-id');
            navigateTo(`mentor-detail/${mentorId}`);
        });
    });
    
    // Add click handlers to request session buttons
    const requestButtons = mentorsGrid.querySelectorAll('.mentor-card-request-btn');
    requestButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent card click
            const mentorName = this.getAttribute('data-mentor-name');
            openMentorRequestModal(mentorName);
        });
    });
    
}

function renderMentorDetail(mentorId) {
    const mentor = findMentorById(mentorId);
    if (!mentor) {
        navigateTo('mentors');
        return;
    }
    
    const mentorDetailContent = document.getElementById('mentor-detail-content');
    const breadcrumbCurrent = document.getElementById('detail-breadcrumb-current');
    
    if (breadcrumbCurrent) {
        breadcrumbCurrent.textContent = mentor.name;
    }
    
    if (!mentorDetailContent) return;
    
    mentorDetailContent.innerHTML = `
        <div class="mentor-detail-new">
            <div class="mentor-detail-image-new">
                <img src="${mentor.image}" alt="Professional headshot of ${mentor.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=\\'image-placeholder large\\'><span>${getInitials(mentor.name)}</span></div>';">
            </div>
            <div class="mentor-detail-content-new">
                <div class="mentor-header">
                    <div class="mentor-name-header">
                        <h1 class="mentor-detail-name-new">${mentor.name}</h1>
                        <a href="${mentor.linkedinUrl}" class="mentor-linkedin-circle" target="_blank" title="View LinkedIn Profile">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                
                <div class="mentor-info-simple">
                    <p class="mentor-education-simple">${mentor.background}</p>
                    <p class="mentor-work-simple">${mentor.company}</p>
                </div>
                
                <div class="mentor-bio">
                    <p>${mentor.bio}</p>
                    <p>${mentor.mentoring}</p>
                    <p>${mentor.philosophy}</p>
                </div>
                
                <div class="mentor-cta-new">
                    <button class="btn btn--primary btn--lg mentor-request-btn" data-mentor-name="${mentor.name}">
                        Request A Session
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Setup mentor request button
    const requestBtn = mentorDetailContent.querySelector('.mentor-request-btn');
    if (requestBtn) {
        requestBtn.addEventListener('click', function() {
            const mentorName = this.getAttribute('data-mentor-name');
            openMentorRequestModal(mentorName);
        });
    }
}

// Mentor Filter Functions
function setupMentorFilters() {
    const searchInput = document.getElementById('mentor-search');
    const expertiseFilter = document.getElementById('expertise-filter');
    
    if (searchInput) {
        searchInput.removeEventListener('input', filterMentors); // Remove existing listener
        searchInput.addEventListener('input', filterMentors);
    }
    
    if (expertiseFilter) {
        expertiseFilter.removeEventListener('change', filterMentors); // Remove existing listener
        expertiseFilter.addEventListener('change', filterMentors);
    }
}

function filterMentors() {
    const searchTerm = document.getElementById('mentor-search')?.value.toLowerCase() || '';
    const expertiseFilter = document.getElementById('expertise-filter')?.value || '';
    
    AppState.filteredMentors = MENTORS_DATA.filter(mentor => {
        const matchesSearch = mentor.name.toLowerCase().includes(searchTerm) ||
                            mentor.role.toLowerCase().includes(searchTerm) ||
                            mentor.company.toLowerCase().includes(searchTerm) ||
                            mentor.description.toLowerCase().includes(searchTerm);
        
        const matchesExpertise = !expertiseFilter || 
                               mentor.expertise.includes(expertiseFilter);
        
        return matchesSearch && matchesExpertise;
    });
    
    renderMentorsDirectory();
}

// Utility Functions
function findMentorById(id) {
    return MENTORS_DATA.find(mentor => mentor.id == id);
}

function getInitials(name) {
    return name.split(' ').map(part => part[0]).join('').toUpperCase();
}

// Mobile Menu Functions
function setupMobileMenu() {
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking on nav links
    const mobileNavLinks = navMobile.querySelectorAll('.nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
}

function toggleMobileMenu() {
    navMobile.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
    
    // Animate hamburger menu
    const spans = mobileMenuToggle.querySelectorAll('span');
    if (navMobile.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}

function closeMobileMenu() {
    navMobile.classList.remove('active');
    mobileMenuToggle.classList.remove('active');
    
    const spans = mobileMenuToggle.querySelectorAll('span');
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
}

// Modal Functions
function setupModals() {
    // Open waitlist modal
    joinWaitlistBtns.forEach(btn => {
        btn.addEventListener('click', () => openModal(waitlistModal));
    });
    
    // Open get started modal
    getStartedBtns.forEach(btn => {
        btn.addEventListener('click', () => openModal(getStartedModal));
    });
    
    // Close modals
    waitlistModalClose.addEventListener('click', () => closeModal(waitlistModal));
    getStartedModalClose.addEventListener('click', () => closeModal(getStartedModal));
    mentorRequestModalClose.addEventListener('click', () => closeModal(mentorRequestModal));
    successModalClose.addEventListener('click', () => closeModal(successModal));
    
    // Close modals when clicking overlay
    [waitlistModal, getStartedModal, mentorRequestModal, successModal].forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this || e.target.classList.contains('modal-overlay')) {
                closeModal(this);
            }
        });
    });
    
    // Close modals with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });
}

function openModal(modal) {
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    modal.classList.remove('active');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 250);
    document.body.style.overflow = '';
}

function closeAllModals() {
    [waitlistModal, getStartedModal, mentorRequestModal, successModal].forEach(modal => {
        if (modal.classList.contains('active')) {
            closeModal(modal);
        }
    });
}

function showSuccessModal(message) {
    successMessage.textContent = message;
    closeAllModals();
    setTimeout(() => {
        openModal(successModal);
    }, 300);
}

function openMentorRequestModal(mentorName) {
    document.getElementById('mentor-selection').value = mentorName;
    openModal(mentorRequestModal);
}

// Form Functions
function setupForms() {
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', function(e) {
            handleWaitlistSubmission(e, this);
        });
    }
    
    if (getStartedForm) {
        getStartedForm.addEventListener('submit', function(e) {
            handleGetStartedSubmission(e, this);
        });
    }
    
    if (mentorRequestForm) {
        mentorRequestForm.addEventListener('submit', function(e) {
            handleMentorRequestSubmission(e, this);
        });
    }
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            handleContactSubmission(e, this);
        });
    }
}

function handleWaitlistSubmission(e, form) {
    e.preventDefault();
    
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    addLoadingState(submitBtn, true);
    
    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        goals: formData.get('goals'),
        type: 'waitlist',
        sendTo: CONTACT_EMAIL
    };
    
    // Basic validation
    if (!data.name || !data.email) {
        alert('Please fill in all required fields.');
        submitBtn.textContent = originalText;
        addLoadingState(submitBtn, false);
        return;
    }
    
    if (!isValidEmail(data.email)) {
        alert('Please enter a valid email address.');
        submitBtn.textContent = originalText;
        addLoadingState(submitBtn, false);
        return;
    }
    
    // Simulate form submission
    simulateFormSubmission(data, 'waitlist')
        .then(() => {
            form.reset();
            submitBtn.textContent = originalText;
            addLoadingState(submitBtn, false);
            showSuccessModal('Thank you for reaching out! We\'ll be in touch soon to help you with your career goals.');
        })
        .catch(() => {
            submitBtn.textContent = originalText;
            addLoadingState(submitBtn, false);
            alert('Something went wrong. Please try again.');
        });
}

function handleGetStartedSubmission(e, form) {
    e.preventDefault();
    
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    addLoadingState(submitBtn, true);
    
    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        goals: formData.get('goals'),
        type: 'get-started',
        sendTo: CONTACT_EMAIL
    };
    
    // Basic validation
    if (!data.name || !data.email) {
        alert('Please fill in all required fields.');
        submitBtn.textContent = originalText;
        addLoadingState(submitBtn, false);
        return;
    }
    
    if (!isValidEmail(data.email)) {
        alert('Please enter a valid email address.');
        submitBtn.textContent = originalText;
        addLoadingState(submitBtn, false);
        return;
    }
    
    // Simulate form submission
    simulateFormSubmission(data, 'get-started')
        .then(() => {
            form.reset();
            submitBtn.textContent = originalText;
            addLoadingState(submitBtn, false);
            showSuccessModal('Thank you for getting started! We\'ll be in touch soon to help you begin your mentorship journey.');
        })
        .catch(() => {
            submitBtn.textContent = originalText;
            addLoadingState(submitBtn, false);
            alert('Something went wrong. Please try again.');
        });
}

function handleMentorRequestSubmission(e, form) {
    e.preventDefault();
    
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    addLoadingState(submitBtn, true);
    
    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        mentor: formData.get('mentor'),
        goals: formData.get('goals'),
        type: 'mentor-request',
        sendTo: CONTACT_EMAIL
    };
    
    // Basic validation
    if (!data.name || !data.email || !data.mentor) {
        alert('Please fill in all required fields.');
        submitBtn.textContent = originalText;
        addLoadingState(submitBtn, false);
        return;
    }
    
    if (!isValidEmail(data.email)) {
        alert('Please enter a valid email address.');
        submitBtn.textContent = originalText;
        addLoadingState(submitBtn, false);
        return;
    }
    
    // Simulate form submission
    simulateFormSubmission(data, 'mentor-request')
        .then(() => {
            form.reset();
            submitBtn.textContent = originalText;
            addLoadingState(submitBtn, false);
            showSuccessModal(`Your session request with ${data.mentor} has been submitted! We'll connect you within 24 hours.`);
        })
        .catch(() => {
            submitBtn.textContent = originalText;
            addLoadingState(submitBtn, false);
            alert('Something went wrong. Please try again.');
        });
}

function handleContactSubmission(e, form) {
    e.preventDefault();
    
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    addLoadingState(submitBtn, true);
    
    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
        type: 'contact',
        sendTo: CONTACT_EMAIL
    };
    
    // Basic validation
    if (!data.name || !data.email || !data.message) {
        alert('Please fill in all required fields.');
        submitBtn.textContent = originalText;
        addLoadingState(submitBtn, false);
        return;
    }
    
    if (!isValidEmail(data.email)) {
        alert('Please enter a valid email address.');
        submitBtn.textContent = originalText;
        addLoadingState(submitBtn, false);
        return;
    }
    
    // Simulate form submission
    simulateFormSubmission(data, 'contact')
        .then(() => {
            form.reset();
            submitBtn.textContent = originalText;
            addLoadingState(submitBtn, false);
            showSuccessModal('Thank you for your message! We\'ll get back to you within 24 hours.');
        })
        .catch(() => {
            submitBtn.textContent = originalText;
            addLoadingState(submitBtn, false);
            alert('Something went wrong. Please try again.');
        });
}

// Initialize EmailJS
function initializeEmailJS() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    }
}

function sendEmail(data, type) {
    return new Promise((resolve, reject) => {
        if (typeof emailjs === 'undefined') {
            console.error('EmailJS not loaded');
            reject(new Error('EmailJS not loaded'));
            return;
        }

        // Prepare email data
        const emailData = {
            to_email: CONTACT_EMAIL,
            from_name: data.name,
            from_email: data.email,
            phone: data.phone || 'Not provided',
            message: data.goals || data.message || 'No message provided',
            form_type: type,
            mentor_name: data.mentor || 'N/A',
            submission_date: new Date().toLocaleString()
        };

        // Send email using EmailJS
        emailjs.send(
            EMAILJS_CONFIG.SERVICE_ID,
            EMAILJS_CONFIG.TEMPLATE_ID,
            emailData
        ).then(
            function(response) {
                console.log('Email sent successfully:', response);
                resolve();
            },
            function(error) {
                console.error('Email failed to send:', error);
                reject(error);
            }
        );
    });
}

function simulateFormSubmission(data, type) {
    return new Promise((resolve, reject) => {
        // Try to send real email first, fallback to simulation
        if (EMAILJS_CONFIG.PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
            sendEmail(data, type)
                .then(resolve)
                .catch(() => {
                    // Fallback to simulation if email fails
                    console.log(`${type} submission to ${CONTACT_EMAIL}:`, data);
                    setTimeout(resolve, 1000);
                });
        } else {
            // Simulate network delay if EmailJS not configured
            console.log(`${type} submission to ${CONTACT_EMAIL}:`, data);
            setTimeout(resolve, 1000);
        }
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.step-card-dark, .about-content, .contact-content, .featured-mentor-card');
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
    
    // Set up staggered animations for step cards
    const stepCards = document.querySelectorAll('.step-card-dark');
    stepCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// Header Scroll Effect
function setupHeaderScroll() {
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove scrolled class for styling
        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });
}

// Add loading states for buttons
function addLoadingState(button, isLoading) {
    if (isLoading) {
        button.disabled = true;
        button.innerHTML = 'Loading... <div class="loading-spinner"></div>';
        button.style.opacity = '0.7';
    } else {
        button.disabled = false;
        button.style.opacity = '1';
    }
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Setup horizontal ticker functionality
function setupRevolvingHeader() {
    // The ticker animation is handled entirely by CSS
    // No JavaScript needed for the horizontal scrolling effect
    console.log('Horizontal ticker initialized');
}