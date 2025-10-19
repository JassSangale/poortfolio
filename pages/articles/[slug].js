import Link from 'next/link';

// Your articles data (keep as a local variable, NOT an export)
const articles = [
  {
    slug: "finite-automata-text-search",
    title: "Applications of Finite Automata in Text Search and Pattern Matching",
    author: "Jass Sangale",
    subject: "Data Warehousing & Mining",
    desc: "Exploring how finite automata theory applies to text processing and pattern matching.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your actual video URL
    content: `
      <h2>Introduction</h2>
      <p>Finite automata represent a fundamental concept in computer science that bridges theoretical computation with practical applications in text processing. String matching algorithms build finite automata to scan text strings efficiently for pattern occurrences, making them essential for search engines, compilers, and data mining applications.</p>
      <h2>Understanding Finite Automata</h2>
      <p>A finite automaton consists of a mathematical model with several key components: a finite set of states (Q), a start state (q₀), a set of accepting states (F), and a transition function (δ) that moves between states based on input characters. For string matching applications, the automaton is constructed from the pattern, the text is processed through the automaton, and a match is found whenever the automaton reaches an accepting state.</p>
      <h2>Pattern Matching Algorithm</h2>
      <p>For a given pattern P of length m, the algorithm constructs an automaton with m+1 states (0 to m). Each state q represents the length of the current match, where state m is the accepting state indicating a complete pattern match. The transition function δ(q, a) computes the longest prefix of P that is a suffix of P[0..q-1]a, ensuring that potential matches are not missed when a partial match fails.</p>
      <p>The algorithm operates in two phases: preprocessing to build the transition table for the automaton, and matching to process the text using the constructed automaton. The search time for this approach is linear O(n), as each character in the text is examined exactly once.</p>
      <h2>Implementation and Efficiency</h2>
      <p>The finite automata algorithm examines each character of text exactly once, making it highly efficient for large-scale text processing. When the automaton reaches state m, a pattern is found and the position can be reported. The construction of the finite automaton transition table requires O(m*NO_OF_CHARS) time complexity, where m is the pattern length and NO_OF_CHARS is the alphabet size.</p>
      <h2>Real-World Applications</h2>
      <p>Finite automata algorithms are widely implemented in:</p>
      <ul>
        <li><strong>Text Editors:</strong> For find and replace operations with complex pattern matching capabilities.</li>
        <li><strong>Search Engines:</strong> Efficiently locating keywords and phrases in massive document collections.</li>
        <li><strong>Compilers:</strong> Lexical analysis and token recognition during code compilation.</li>
        <li><strong>Network Security:</strong> Deep packet inspection for identifying malicious patterns in network traffic.</li>
      </ul>
      <h2>Advantages Over Other Approaches</h2>
      <ul>
        <li>Linear time complexity O(n) for text scanning</li>
        <li>No backtracking required during the matching phase</li>
        <li>Particularly effective for applications requiring multiple searches with the same pattern</li>
        <li>Preprocessing cost is amortized over multiple searches</li>
      </ul>
      <h2>Conclusion</h2>
      <p>The reliability and efficiency of finite automata make them superior for string matching and search tasks in various software systems. Their theoretical foundation provides a robust framework for solving practical problems in text processing, making them an essential topic for computer science students and professionals working with data mining and pattern recognition.</p>
    `
  },
  {
    slug: "google-sites-data-portfolio",
    title: "Creating a Personalized Google Website Portfolio",
    author: "Jass Sangale",
    subject: "Data Warehousing & Mining",
    desc: "Learn how to create an impactful digital portfolio using Google Sites and relate it to core data warehousing and mining concepts.",
    videoUrl: "", // Optionally add your tutorial video URL here
    content: `
      <h2>Introduction</h2>
      <p>
        In the digital age, having an online presence is essential for students, data enthusiasts, and professionals. A portfolio website acts as your digital identity, presenting your skills, achievements, and projects globally in a structured and appealing way.
        Google Sites is a free, no-code, user-friendly tool that empowers you to build a personalized digital portfolio reflecting your journey and technical skills.
      </p>
      <h2>What is Google Sites?</h2>
      <p>
        Google Sites is part of Google Workspace—offering a drag-and-drop interface to design professional websites without coding. Seamlessly integrated with Google Docs, Sheets, Slides, Forms, and Drive, it enables direct embedding of documents, dashboards, and analytics.
      </p>
      <p>
        For Data Warehousing & Mining students, such integration is invaluable: you can showcase interactive analytics, dashboards, and project data easily on your site.
      </p>
      <h2>Why Create a Google Portfolio Website?</h2>
      <ul>
        <li><strong>No coding required:</strong> Quickly build and customize using ready templates and components.</li>
        <li><strong>Centralized info storage:</strong> Store projects, reports, certifications, and experiences—just like a data warehouse organizes business data.</li>
        <li><strong>Data integration:</strong> Embed Google Sheets dashboards and interactive reports to reflect data mining skills.</li>
        <li><strong>Professional appearance:</strong> Clean design and structure for recruiters and faculty.</li>
        <li><strong>Easy sharing & accessibility:</strong> One URL for your LinkedIn, resume, or GitHub profile.</li>
        <li><strong>Security & updates:</strong> Controlled access and instant updates via Google Drive.</li>
      </ul>
      <p>
        Your portfolio website functions as a personal data warehouse—organizing and presenting key professional data in an efficient, accessible format.
      </p>
      <h2>How to Build Your Portfolio: Step-by-Step</h2>
      <h3>Step 1: Access Google Sites</h3>
      <p>
        Go to <a href="https://sites.google.com">Google Sites</a>, sign in, and start a new blank site or use a template.
      </p>
      <h3>Step 2: Build the Home Page</h3>
      <p>
        Give a quick overview—who you are, professional title, your photo, and a brief intro about academic background, interests, and goals.
      </p>
      <h3>Step 3: Add Key Pages</h3>
      <ul>
        <li><strong>About Me:</strong> Education details, interests, and skills related to Data Warehousing & Mining</li>
        <li><strong>Projects:</strong> Showcase academic/personal projects, descriptions, technologies, screenshots, and links to repositories</li>
        <li><strong>Certifications:</strong> List certifications (Google Data Analytics, SQL, Python, ML, etc.)</li>
        <li><strong>Resume:</strong> Embed your resume directly from Google Drive for auto-updates</li>
        <li><strong>Contact:</strong> Professional contact info, LinkedIn/GitHub links</li>
      </ul>
      <h3>Step 4: Customize Your Design</h3>
      <p>
        Choose a clean, minimal theme for easy navigation. Use professional colors (blue, gray, white) and consistent fonts. Add a logo or banner if available.
      </p>
      <h3>Step 5: Embed Analytical Content</h3>
      <p>
        Demonstrate Data Warehousing & Mining concepts by embedding:
        <ul>
          <li>Google Sheets dashboards (project summaries, KPIs)</li>
          <li>Google Data Studio/Looker Studio reports (pattern visualization, analytics)</li>
          <li>Charts/graphs from data mining findings</li>
        </ul>
        This shows you can turn raw data into actionable knowledge—the heart of data mining.
      </p>
      <h3>Step 6: Publish and Share</h3>
      <p>
        Click <strong>Publish</strong>, choose a unique URL (e.g., <a href="https://sites.google.com/view/jasssangale">your Google Sites link</a>), and showcase it on LinkedIn, your resume, and email signature.
      </p>
      <h2>Connecting Portfolio to Data Warehousing & Mining Concepts</h2>
      <ul>
        <li><strong>Data Collection:</strong> Gather your achievements, skills, and experiences—like collecting data from various sources.</li>
        <li><strong>Data Cleaning & Organization:</strong> Structure your information—removing duplicates, formatting, and categorizing.</li>
        <li><strong>Data Integration:</strong> Combine multiple elements (projects, certifications, analytics) into one site.</li>
        <li><strong>Data Presentation:</strong> Use visuals, dashboards, and structured pages for clear insights.</li>
        <li><strong>Knowledge Discovery:</strong> Highlight results and insights, turning data into professional value.</li>
      </ul>
      <h2>Conclusion</h2>
      <p>
        Creating a Google Sites portfolio helps you present your professional journey and technical skills. It’s your digital resume, personal data warehouse, and analytics showcase. For students and data professionals, it bridges theory and practice—making your learning journey visible, meaningful, and available to the world.
        <br/>
        <br/>
        <strong>Ready to share your story?</strong> Start building your Google Sites portfolio today and let your data work for you.
      </p>
    `
  }
];

// Required for dynamic routing in Next.js
export async function getStaticPaths() {
  return {
    paths: articles.map(a => ({ params: { slug: a.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const article = articles.find(a => a.slug === params.slug);
  return {
    props: { article }
  };
}

// Default export must be a React component!
export default function ArticlePage({ article }) {
  if (!article) {
    return (
      <div style={{ minHeight: '100vh', background: '#101726', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#CBD9F1' }}>
        Article not found
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#101726', paddingTop: '5rem', paddingBottom: '3rem' }}>
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* Article Header */}
          <h1 style={{
            fontFamily: 'Orbitron, Poppins, sans-serif',
            color: '#00F0FF',
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}>
            {article.title}
          </h1>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.875rem',
            marginBottom: '1.5rem',
            color: '#CBD9F1'
          }}>
            <span style={{ fontFamily: 'Orbitron, sans-serif', color: '#00F0FF' }}>{article.subject}</span>
            <span>•</span>
            <span>By {article.author}</span>
          </div>
          <p style={{
            fontSize: '1.125rem',
            color: '#CBD9F1',
            marginBottom: '2rem',
            fontStyle: 'italic'
          }}>
            {article.desc}
          </p>
          {/* Video Embed */}
          {article.videoUrl && (
            <div style={{
              position: 'relative',
              width: '100%',
              paddingBottom: '56.25%',
              marginBottom: '2rem',
              borderRadius: '12px',
              overflow: 'hidden'
            }}>
              <iframe
                src={article.videoUrl}
                title={article.title}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%'
                }}
                allowFullScreen
              ></iframe>
            </div>
          )}
          {/* Full Article Content */}
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: article.content }}
            style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: '#CBD9F1',
              marginBottom: '3rem'
            }}
          />
          {/* Back Button */}
          <Link
            href="/#articles"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              background: '#00F0FF',
              color: '#101726',
              fontWeight: 'bold',
              borderRadius: '9999px',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
          >
            ← Back to Articles
          </Link>
        </div>
        {/* Scoped Styles */}
        <style jsx>{`
          .article-content h2 {
            color: #00F0FF;
            font-size: 1.8rem;
            font-weight: bold;
            margin-top: 2.5rem;
            margin-bottom: 1rem;
            font-family: 'Orbitron', 'Poppins', sans-serif;
          }
          .article-content h3 {
            color: #1EC8FF;
            font-size: 1.4rem;
            font-weight: 600;
            margin-top: 2rem;
            margin-bottom: 0.75rem;
          }
          .article-content p {
            margin-bottom: 1.25rem;
            color: #CBD9F1;
            line-height: 1.8;
          }
          .article-content ul, .article-content ol {
            margin-left: 2rem;
            margin-bottom: 1.5rem;
            color: #CBD9F1;
          }
          .article-content ul {
            list-style-type: disc;
          }
          .article-content ol {
            list-style-type: decimal;
          }
          .article-content li {
            margin-bottom: 0.75rem;
            color: #CBD9F1;
            line-height: 1.7;
          }
          .article-content strong {
            color: #00F0FF;
            font-weight: 600;
          }
          .article-content em {
            font-style: italic;
            color: #1EC8FF;
          }
          .article-content a {
            color: #00F0FF;
            text-decoration: underline;
          }
          .article-content a:hover {
            color: #1EC8FF;
          }
        `}</style>
      </section>
    </div>
  );
}
