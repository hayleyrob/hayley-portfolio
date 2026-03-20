const ASSETS = 'public/assets/';

const projects = [
  { id:'prompt-library', num:'01', title:'AI Chat Prompt Library', type:'Product Feature', subtitle:'A built-in prompt library for AI chat environments \u2014 because the best prompts should live where you use them, not in a separate bookmarks folder.', image:ASSETS+'nova-light6.mp4', mediaType:'video', category:'AI / Productivity', tech:['React','UI Design','Claude'], year:'2025', link:'https://nova-prompt-library-light-lkdlacoqu-hayley-robinsons-projects.vercel.app/', linkLabel:'View Live Project',
    gallery:[ASSETS+'promptlibrary1.png',ASSETS+'promptlibrary-dark1.png',ASSETS+'promptlib-welcome-dark.png'],
    challenge:{ heading:'Prompt engineering has become essential to getting great AI outputs, but saving and reusing prompts means switching between tools, bookmarks, and scattered notes.', body:'Users were losing their best prompts across browser tabs, documents, and chat histories. There was no native way to build a personal prompt library within the AI environment itself \u2014 the place where prompts are actually used.' },
    strategy:{ heading:'I designed a prompt library that lives directly inside the chat interface \u2014 accessible with one click, searchable, and organized by category.', body:'The design prioritizes zero-friction access. Users can browse curated prompts, save their own, and insert them into conversations instantly. The interface stays minimal and unobtrusive so it enhances the chat experience rather than cluttering it.' },
    stats:[{number:'1-Click',label:'Prompt Access'},{number:'0',label:'Context Switching'},{number:'\u221e',label:'Saved Prompts'}]
  },
  { id:'museum-tour', num:'02', title:'Museum Audio Tour App', type:'UX Research & Design', subtitle:'An interactive audio tour app for the Legion of Honor Art Museum \u2014 enabling visitors to access self-paced guided tours of any artwork through their phone.', image:ASSETS+'museumlily.png', mediaType:'image', category:'UX Research', tech:['User Research','Figma','Prototyping'], year:'2024', link:null, linkLabel:null,
    gallery:[ASSETS+'storyboard-legion-app.png',ASSETS+'museumlily2.png',ASSETS+'museumlily.png'],
    role:'Lead UX Researcher & Product Designer \u2014 planned and directed each phase of the design thinking process.',
    responsibilities:'User research, problem definition, insight synthesis, persona creation, user journeys, empathy maps, user flows, low-fi and high-fi wireframes, prototyping, user testing, and product launch oversight.',
    painPoints:[
      {title:'Guided Tours',desc:'Booking a guide caused frustration \u2014 users couldn\u2019t choose which pieces to learn about, and questions weren\u2019t allowed until the end.'},
      {title:'Lack of Structure',desc:'Without a guide, the sheer volume of exhibits and collections felt overwhelming with no clear path.'},
      {title:'Time Efficiency',desc:'The average visit was 3 hours, but users left feeling they hadn\u2019t used their time efficiently to see what mattered most.'},
      {title:'Personalization',desc:'A one-size-fits-all experience left visitors feeling disconnected from the art and the museum itself.'}
    ],
    persona:{name:'Christina',age:'24',occupation:'Art History Grad Student',story:'Went on a tour to learn about Flemish masters and their use of iconography for her dissertation, but the guide highlighted irrelevant pieces and shared information she already knew.',goal:'Gain deeper information about iconography in Flemish paintings and the lives of Flemish masters for her dissertation.',frustration:'Guided tours highlight pieces that aren\u2019t relevant while ignoring the artworks she actually needs to study.'},
    problemStatement:'Christina is an Art History grad student who needs to learn more about specific pieces for her dissertation \u2014 she needs a self-directed way to access expert-level information about the art that matters to her.',
    challenge:{ heading:'Museum tours were historically declining. The museum introduced audio guides, but they were limited to special exhibits and too rigid \u2014 visitors weren\u2019t getting maximum value from the collection.', body:'The museum needed a way for visitors to get a self-paced guided experience of both showcase pieces and special exhibits \u2014 one that didn\u2019t require third-party services and could be easily managed and updated in-house.' },
    strategy:{ heading:'I conducted user research through interviews with the museum\u2019s target audience and past visitors to understand their frustrations, needs, and requirements.', body:'Research insights directly informed the design of a mobile-first audio tour experience. Users can scan any artwork, access rich audio content at their own pace, and build personalized tour paths based on their interests \u2014 whether that\u2019s Flemish masters or contemporary sculpture.' },
    stats:[{number:'4',label:'Pain Points Identified'},{number:'12+',label:'User Interviews'},{number:'100%',label:'Self-Paced Experience'}]
  },
  { id:'innovate-terms', num:'03', title:'Redesigning Terms of Service', type:'Add On Feature', subtitle:'The first step in the user journey of any app or website is viewing and agreeing to Terms of Service, yet according to a Deliotte study over 90% of people do not read them.', image:ASSETS+'tos-innovate.mp4', mediaType:'video', category:'Safety & Legal', tech:['Next.js','Claude Code','Vercel'], year:'2026', link:'https://innovateterms.vercel.app/', linkLabel:'View Live Project',
    gallery:[ASSETS+'innovateterms-1.png',ASSETS+'innovateterms-2.png',ASSETS+'innovateterms-3.png',ASSETS+'innovateterms-5.png'],
    challenge:{ heading:'Terms of Service are not read by ~90% of users.', body:'In 2017, Deliotte found 91% of U.S. consumers accepted terms of service agreements without reading them. This increases to 97% among the age bracket of 18-34. The goal was to create a better user experience for this initial step in the user journey by building a clean, functional overlay.' },
    strategy:{ heading:'I used Claude Code to scaffold, build, and iterate on a full Next.js Terms of Service prototype that meets the goal of being user friendly', body:' By making the reviewing and agreeing to Terms of Service experience more user friendly, users can better understand what they are consenting to, resulting in more safety and protecton for both the user and the company. The process demonstrated a new paradigm for building software: treating AI as a creative collaborator rather than just a code generator. Every component was developed through iterative prompting, refining the output until it met production standards.' },
    stats:[{number:'100%',label:'AI-Assisted Build'},{number:'Next.js',label:'Full-Stack Framework'},{number:'Live',label:'Deployed on Vercel'}]
  },
  { id:'ai-remix', num:'04', title:'AI Remix Associative Engine', type:'AI Platform', subtitle:'AI Remix uses semantic intelligence to generate contexually adjacent inspiration by extracting key concepts and emotional tone from the users current work.', image:ASSETS+'airemix-white.mp4', mediaType:'video', category:'AI / Productivity', tech:['Figma','UI Design','AI Research'], year:'2025', link:'https://ai-remix.figma.site/', linkLabel:'View Live Project',
    gallery:[ASSETS+'airemix-dark.png',ASSETS+'airemix-white.png',ASSETS+'airemix-card1.png'],
    challenge:{ heading:'Sometimes a lack of inspiration can put a lag on work tasks', body:'Creative thinking can help tackle real world problems and work challenges in novel ways, but sometimes its hard to get into that headspace. I was inspired by IDEO\u2019s design-thinking principle of "Build to Think" and wanted to create an easy to use digital tool that embodies this principle.' },
    strategy:{ heading:'A real-time associative engine that dynamically pulls contexually adjacent topics to a task to bring the user fresh inspiration and get into creative thinking', body:'AI extracts key concepts and emotional tone from the user\u2019s current work (text, visual, or task). A Semantic Remix Engine uses embeddings and associative models to find creative cousins \u2014 ideas from other fields that share structural or emotional similarity. Then, a Visual Remix Board displays these remixed concepts as glowing, interactive cards orbiting the central project focus. Finally in the interaction layer, the user explores connections, combines ideas, or saves those that spark inspiration.' },
    stats:[{number:'1-Click',label:'Prompt Access'},{number:'0',label:'Context Switching'},{number:'\u221e',label:'Saved Prompts'}]
  },
  { id:'expense-tracker', num:'06', title:'AI ExpenseChat', type:'AI-Built Web App', subtitle:'Instead of manually adding and categorizing expenses, simply message ExpenseChat the item and amount - it will be automatically categorized and added to your daily, weekly and monthly spending reports ', image:ASSETS+'expensechat.mp4', mediaType:'video', category:'Fintech / AI', tech:['Next.js','Claude Code','Vercel'], year:'2026', link:'https://expense-tracker-remix.vercel.app/', linkLabel:'View Live Project',
    gallery:[ASSETS+'expensetracker-1.png',ASSETS+'expense-tracker-2.png',ASSETS+'expense-tracker-3.png',ASSETS+'expense-tracker-5.png'],
    challenge:{ heading:'Most expense trackers are either too complex or too basic. The goal was to build a clean, functional financial tool entirely through AI-assisted development using Claude Code.', body:'This project was part of a prompt engineering course \u2014 the challenge was to demonstrate that thoughtful prompting and collaboration with AI can produce production-quality applications, not just code snippets.' },
    strategy:{ heading:'I used Claude Code to scaffold, build, and iterate on a full Next.js expense tracking application \u2014 from database schema to polished UI.', body:'We did feature iteration where different git branches were created with different versions of features. One included a AI chat environment to make logging and managing expenses easier, while another focused on an Export Hub of all different export types. The process demonstrated a new paradigm for building software: treating AI as a creative collaborator rather than just a code generator. Every component was developed through iterative prompting, refining the output until it met production standards.' },
    stats:[{number:'100%',label:'AI-Assisted Build'},{number:'Next.js',label:'Full-Stack Framework'},{number:'Live',label:'Deployed on Vercel'}]
  },
  { id:'promptworks', num:'05', title:'PromptWorks AI', type:'Generative AI Tool with OpenAI API', subtitle:'A generative tool that transforms a focus area into a structured prompt, workflow idea, and actionable output \u2014 built with Next.js and Codex leveraging the API from OpenAI.', image:ASSETS+'promptworks1.png', mediaType:'image', category:'AI / Productivity', tech:['Next.js','Vercel','Codex'], year:'2025', link:'https://prompt-works.xyz/', linkLabel:'View Live Project',
    gallery:[ASSETS+'promptworks3.png',ASSETS+'promptworks4.png',ASSETS+'promptworks5.png'],
    challenge:{ heading:'Most people know AI can help them, but struggle to articulate what they need in a way that produces useful output. The gap between intention and prompt is where most value is lost.', body:'Users needed a tool that could take a vague focus area \u2014 like \u201cimprove my onboarding flow\u201d or \u201cplan a content strategy\u201d \u2014 and transform it into a structured, actionable prompt with a clear workflow and tangible output.' },
    strategy:{ heading:'PromptWorks takes a single input and generates three things: a refined prompt, a suggested workflow, and a ready-to-use output \u2014 bridging the gap between idea and execution.', body:'Built with Next.js and powered by Codex, the tool uses intelligent prompt chaining to expand a user\u2019s focus area into structured, professional-grade outputs. The interface is deliberately simple \u2014 one input, three outputs, zero friction.' },
    stats:[{number:'3-in-1',label:'Prompt + Workflow + Output'},{number:'0',label:'Prompt Skills Required'},{number:'Live',label:'prompt-works.xyz'}]
  },
  { id:'crescent', num:'07', title:'Crescent', type:'Health & Wellness App', subtitle:'Nervous system regulation made simple \u2014 find the right exercises to get regulated when you need it, so you can show up as your best self.', image:ASSETS+'crescent-categories.png', mediaType:'image', category:'Health & Wellness', tech:['UI Design','Figma','Research'], year:'2025', link:null, linkLabel:null,
    gallery:[ASSETS+'crescent-home.png',ASSETS+'crescent-choosetime.png',ASSETS+'crescent-welcome.png'],
    challenge:{ heading:'\u201cNervous system regulation\u201d has become a buzzword \u2014 but what does it actually mean, and how do you do it? Most people know they should regulate but have no practical, accessible way to do it in the moment.', body:'Being stuck in fight-or-flight impairs cognitive function, floods your body with cortisol, weakens immunity, and makes you more susceptible to disease. Yet there was no simple tool to help people identify their state and find the right exercise to shift it.' },
    strategy:{ heading:'Crescent guides users from dysregulation to calm through targeted exercises matched to their current nervous system state.', body:'The app helps users identify whether they\u2019re in fight-or-flight, freeze, or a regulated state, then serves the right somatic exercises, breathing techniques, or grounding practices. The goal is to help users come from a place of curiosity and social engagement \u2014 enabling them to show up as their best self.' },
    stats:[{number:'3',label:'Nervous System States'},{number:'30+',label:'Regulation Exercises'},{number:'<5min',label:'Time to Regulate'}]
  },
];

function mediaTag(src, type, cls, alt) {
  if (type === 'video') return '<video src="'+src+'" muted autoplay loop playsinline class="'+cls+' smart-media"></video>';
  return '<img src="'+src+'" alt="'+(alt||'')+'" class="'+cls+' smart-media"/>';
}

function hideAll() {
  ['homePage','projectsPage','caseStudyPage','aboutPage','contactPage'].forEach(function(id){
    document.getElementById(id).classList.remove('active');
  });
}

function showHome() {
  window.scrollTo(0,0);
  hideAll();
  document.getElementById('homePage').classList.add('active');
}

function switchTab(tab) {
  document.querySelectorAll('.resume-tab').forEach(function(t){t.classList.remove('active')});
  document.querySelectorAll('.resume-panel').forEach(function(p){p.classList.remove('active')});
  document.querySelectorAll('.resume-tab').forEach(function(t){
    if(t.textContent.toLowerCase()===tab) t.classList.add('active');
  });
  document.getElementById('panel-'+tab).classList.add('active');
}

function showAboutPage() {
  window.scrollTo(0,0);
  hideAll();
  var ap = document.getElementById('aboutPage');
  ap.innerHTML = '<div class="about-page"><div class="ap-hero"><img src="'+ASSETS+'hayley-headshot.jpg" alt="Hayley Robinson" class="ap-hero-img"/><div class="ap-hero-content"><span class="ap-hero-tag">Nice to meet you \u2728</span><h1>I\u2019m Hayley \u2014<br>designer, developer<br>& <em>creative thinker</em></h1><p class="ap-intro">I\u2019m a digital anthropologist that blends design and development based in the San Francisco Bay Area. I build thoughtful digital experiences at the intersection of code, culture, and creativity. My background in tech sales, engineering, and design gives me a unique lens on how people connect with the things we make.</p></div></div><div class="ap-section"><div class="ap-section-inner"><div class="ap-section-label">My Approach</div><div class="ap-section-body"><h2>Design with depth, build with intention</h2><p>I believe every brand has an underlying story \u2014 an archetype, a cultural current, a psychological truth that makes it resonate. My work is about uncovering that truth and giving it a visual language that feels inevitable.</p><p>Whether I\u2019m writing code or crafting a visual identity, I approach every project as both a maker and a researcher. The best digital experiences aren\u2019t just beautiful \u2014 they\u2019re rooted in a real understanding of the people they\u2019re for.</p></div></div></div><div class="ap-section"><div class="ap-section-inner"><div class="ap-section-label">Values</div><div class="ap-section-body"><div class="ap-values"><div class="ap-value"><h3>Curiosity First</h3><p>Every project starts with questions, not assumptions. I dig into the culture, psychology, and context before touching a pixel.</p></div><div class="ap-value"><h3>Craft Matters</h3><p>Details are the difference between good and unforgettable. I obsess over typography, spacing, and the feeling a design creates.</p></div><div class="ap-value"><h3>Code + Design</h3><p>I don\u2019t just design things \u2014 I build them. This means my designs are always grounded in what\u2019s technically possible and performant.</p></div><div class="ap-value"><h3>Human-Centered</h3><p>Technology should serve people, not the other way around. Every interface I create prioritizes clarity and emotional connection.</p></div></div></div></div></div><div class="ap-section"><div class="ap-section-inner"><div class="ap-section-label">Skills</div><div class="ap-section-body"><h2>What I work with</h2><div class="ap-skills"><span class="ap-skill">React</span><span class="ap-skill">Next.js</span><span class="ap-skill">JavaScript</span><span class="ap-skill">Node.js</span><span class="ap-skill">Claude Code</span><span class="ap-skill">Prompt Engineering</span><span class="ap-skill">UI/UX Design</span><span class="ap-skill">User Research</span><span class="ap-skill">Figma</span><span class="ap-skill">Brand Identity</span><span class="ap-skill">Photography</span><span class="ap-skill">Vercel</span></div></div></div></div><div class="ap-cta-banner"><h2>Let\u2019s create something together</h2><p>I\u2019m always open to interesting projects, collaborations, and conversations.</p><a class="ap-cta-btn" onclick="showContactPage()">Get in touch \u2197</a></div></div><footer class="site-footer"><span>\u00a9 2026 Hayley Robinson</span><span>Designed with Kindred Studio</span></footer>';
  ap.classList.add('active');
}

function showContactPage() {
  window.scrollTo(0,0);
  hideAll();
  var cp = document.getElementById('contactPage');
  cp.innerHTML = '<div class="contact-page"><div class="cp-header"><div class="cp-header-tag">Let\u2019s talk \u2728</div><h1>Get in touch</h1><p>Whether you have a project in mind, want to collaborate, or just want to say hello \u2014 I\u2019d love to hear from you.</p></div><div class="cp-grid"><div class="cp-card"><div class="cp-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13L2 4"/></svg></div><h3>Email Me</h3><p>For project inquiries, collaborations, or just to say hi.</p><a href="mailto:hayley@harmoniacode.com">hayley@harmoniacode.com</a></div><div class="cp-card"><div class="cp-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg></div><h3>Book a Call</h3><p>Let\u2019s chat about your project over a 30-minute discovery call.</p><a href="https://calendly.com/hayleyerobinson">Schedule a time \u2192</a></div><div class="cp-card"><div class="cp-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></div><h3>LinkedIn</h3><p>Connect with me professionally and follow my journey.</p><a href="https://linkedin.com/in/hayleyerobinson" target="_blank">View Profile \u2192</a></div><div class="cp-card"><div class="cp-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg></div><h3>GitHub</h3><p>Check out my code, projects, and open-source contributions.</p><a href="https://github.com/hayleyrob" target="_blank">View Repos \u2192</a></div></div><div class="cp-form"><h2>Send a message</h2><p class="cp-form-sub">Fill out the form below and I\u2019ll get back to you within 48 hours.</p><div class="cp-row"><div class="cp-field"><label>First Name</label><input type="text" placeholder="Jane"/></div><div class="cp-field"><label>Last Name</label><input type="text" placeholder="Doe"/></div></div><div class="cp-field"><label>Email</label><input type="email" placeholder="jane@example.com"/></div><div class="cp-field"><label>Project Type</label><select><option value="">Select a category...</option><option>Brand Identity</option><option>Web Design & Development</option><option>Creative Direction</option><option>Consulting</option><option>Other</option></select></div><div class="cp-field"><label>Message</label><textarea placeholder="Tell me about your project, timeline, and what you\u2019re looking for..."></textarea></div><button class="cp-submit" onclick="alert(\u0027Thanks for reaching out! This is a demo.\u0027)">Send Message</button></div></div><footer class="site-footer"><span>\u00a9 2026 Hayley Robinson</span><span>Designed with Kindred Studio</span></footer>';
  cp.classList.add('active');
}

function showProjectsPage() {
  window.scrollTo(0,0);
  hideAll();
  var pp = document.getElementById('projectsPage');
  var cards = projects.map(function(p){
    return '<div class="pp-card" onclick="showProject(\''+p.id+'\')"><div class="pp-card-img-wrapper">'+mediaTag(p.image,p.mediaType,'pp-card-img',p.title)+'</div><div class="pp-card-info"><span class="pp-card-num">/'+p.num+'.</span><span class="pp-card-title">'+p.title+'</span><span class="pp-card-type">'+p.type+'</span></div></div>';
  }).join('');
  pp.innerHTML = '<div class="projects-page"><div class="pp-header"><span class="pp-header-tag">//What I\'ve built</span><h1>Projects</h1></div><div class="pp-grid">'+cards+'</div></div><footer class="site-footer"><span>&copy; 2026 Hayley Robinson</span><span>Codesigned with Claude Code</span></footer>';
  pp.classList.add('active');
}

function showProject(id) {
  var p = projects.find(function(proj){return proj.id===id});
  if (!p) return;
  window.scrollTo(0,0);
  hideAll();
  var cs = document.getElementById('caseStudyPage');

  var heroMedia = p.mediaType==='video'
    ? '<video src="'+p.image+'" muted autoplay loop playsinline class="smart-media" style="width:100%;aspect-ratio:16/9;object-fit:cover;display:block"></video>'
    : '<img src="'+p.image+'" alt="'+p.title+'" class="smart-media" style="width:100%;aspect-ratio:16/9;object-fit:cover;display:block"/>';

  var linkBtn = p.link ? '<div class="cs-project-btn-wrapper"><a href="'+p.link+'" target="_blank" class="cs-project-btn">'+p.linkLabel+'<span class="btn-dot"><svg viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="2"><path d="M4 12L12 4M12 4H6M12 4v6"/></svg></span></a></div>' : '';

  var extraSections = '';
  if (p.id === 'museum-tour') {
    var ppHtml = p.painPoints.map(function(pp){return '<div class="cs-pain-point"><h4>'+pp.title+'</h4><p>'+pp.desc+'</p></div>'}).join('');
    extraSections = '<div class="cs-content"><div class="cs-section"><div class="cs-section-label">My Role</div><div class="cs-section-body"><h3>'+p.role+'</h3><p>'+p.responsibilities+'</p></div></div><div class="cs-section"><div class="cs-section-label">Pain Points</div><div class="cs-section-body"><h3>What user research revealed</h3><div class="cs-pain-points">'+ppHtml+'</div></div></div><div class="cs-section"><div class="cs-section-label">Persona</div><div class="cs-section-body"><div class="cs-persona"><div class="cs-persona-header"><div class="cs-persona-avatar">'+p.persona.name[0]+'</div><div><div class="cs-persona-name">'+p.persona.name+', '+p.persona.age+'</div><div class="cs-persona-role">'+p.persona.occupation+'</div></div></div><p><strong>Story:</strong> '+p.persona.story+'</p><p style="margin-top:8px"><strong>Goal:</strong> '+p.persona.goal+'</p><p style="margin-top:8px"><strong>Frustration:</strong> '+p.persona.frustration+'</p></div></div></div><div class="cs-section"><div class="cs-section-label">Problem Statement</div><div class="cs-section-body"><h3>'+p.problemStatement+'</h3></div></div></div>';
  }

  var galleryHtml = '';
  if (p.gallery && p.gallery.length) {
    var imgs = p.gallery.map(function(img,i){return '<img src="'+img+'" alt="'+p.title+' screenshot '+(i+1)+'"'+(i===0?' class="cs-gallery-wide"':'')+'/>'}).join('');
    galleryHtml = '<div class="cs-gallery"><div class="cs-gallery-label">Project Gallery</div><div class="cs-gallery-grid">'+imgs+'</div></div>';
  }

  var statsHtml = p.stats.map(function(s){return '<div><div class="cs-stat-number">'+s.number+'</div><div class="cs-stat-label">'+s.label+'</div></div>'}).join('');

  cs.innerHTML = '<div class="case-study"><div class="cs-hero"><a class="cs-back" onclick="showProjectsPage()"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 4L4 12M4 12V6M4 12h6"/></svg> Back to all projects</a><h1>'+p.title+'</h1><p class="cs-hero-desc">'+p.subtitle+'</p><div class="cs-hero-image">'+heroMedia+'</div></div><div class="cs-meta"><div class="cs-meta-item"><div class="cs-meta-label">Category</div><div class="cs-meta-value">'+p.category+'</div></div><div class="cs-meta-item"><div class="cs-meta-label">Tech Stack</div><div class="cs-meta-value">'+p.tech.join(' &middot; ')+'</div></div><div class="cs-meta-item"><div class="cs-meta-label">Type</div><div class="cs-meta-value">'+p.type+'</div></div></div><div class="cs-content"><div class="cs-section"><div class="cs-section-label">The Challenge</div><div class="cs-section-body"><h3>'+p.challenge.heading+'</h3><p>'+p.challenge.body+'</p></div></div><div class="cs-section"><div class="cs-section-label">The Approach</div><div class="cs-section-body"><h3>'+p.strategy.heading+'</h3><p>'+p.strategy.body+'</p></div></div></div>'+extraSections+galleryHtml+linkBtn+'<div class="cs-results"><div class="cs-results-label">The Results</div><div class="cs-stats">'+statsHtml+'</div></div></div><footer class="site-footer"><span>&copy; 2026 Hayley Robinson</span><span>Designed with Kindred Studio</span></footer>';
  cs.classList.add('active');
}

function renderHomeProjects() {
  var grid = document.getElementById('homeProjectsGrid');
  grid.innerHTML = projects.slice(0,4).map(function(p){
    return '<div class="project-card" onclick="showProject(\''+p.id+'\')"><div class="project-card-img-wrapper">'+mediaTag(p.image,p.mediaType,'project-card-img',p.title)+'</div><div class="project-card-info"><div class="project-card-meta"><span class="project-card-number">/'+p.num+'.</span><span class="project-card-title">'+p.title+'</span><span class="project-card-desc">'+p.subtitle.substring(0,80)+'...</span><div class="project-card-tags">'+p.tech.map(function(t){return '<span class="project-tag">'+t+'</span>'}).join('')+'</div></div><span class="project-card-year">'+p.type+'</span></div></div>';
  }).join('');
}

function renderCarousel() {
  var track = document.getElementById('carouselTrack');
  var items = projects.map(function(p){
    return '<div class="carousel-item" onclick="showProject(\''+p.id+'\')">'+mediaTag(p.image,p.mediaType,'carousel-video',p.title)+'<div class="carousel-item-overlay">'+p.title+'</div></div>';
  });
  track.innerHTML = items.join('') + items.join('');
}

renderHomeProjects();
renderCarousel();
