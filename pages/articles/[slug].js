import Link from 'next/link';

// Your articles data (keep as a local variable, NOT an export)
const articles = [
  {
    slug: "finite-automata-text-search",
    title: "Applications of Finite Automata in Text Search and Pattern Matching",
    author: "Jass Sangale",
    subject: "Data Warehousing & Mining",
    desc: "Exploring how finite automata theory applies to text processing and pattern matching.",
     // Replace with your actual video URL
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
  },
  {
    slug: "dark-web-investigations",
    title: "Dark Web Investigations: Tools, Techniques, and Challenges",
    author: "Jass Sangale",
    subject: "Cyber Crime Investigation & Digital Forensics",
    desc: "Comprehensive insights into dark web investigations—including key tools, advanced forensic techniques, and the critical challenges investigators face in the cyberspace.",
    videoUrl: "",
    content: `
      <h2>Introduction</h2>
      <p>In today’s cybersecurity landscape, the dark web remains both a hub for illicit activities and a critical focus for investigators pursuing digital evidence. For cyber crime and digital forensics professionals, uncovering criminal footprints on the dark web demands not only specialized tools but also advanced investigative techniques and a deep understanding of unique challenges created by anonymous networks, encrypted platforms, and ever-evolving technologies.</p>
      <h2>The Dark Web: An Overview</h2>
      <p>Distinguished from the surface and deep web, the dark web refers to hidden online spaces accessible only via anonymizing networks like Tor and I2P. Here, illegal marketplaces, forums, and communication channels foster activities such as drug trading, identity theft, ransomware operations, and child exploitation, while users conceal identities and locations through layered encryption and privacy technologies. For investigators, this environment poses significant obstacles to identification, evidence collection, and prosecution.</p>
      <h2>Essential Tools for Dark Web Investigations</h2>
      <ul>
        <li><strong>Tor Browser:</strong> The primary gateway to .onion sites, providing anonymous routing and access to hidden services.</li>
        <li><strong>SL Crimewall:</strong> All-in-one OSINT platform for advanced search, cross-referencing, and behavioral analytics.</li>
        <li><strong>DarkOwl Vision:</strong> Real-time monitoring and mapping of hidden services, forums, and marketplaces.</li>
        <li><strong>OnionScan:</strong> Scans .onion sites for misconfigurations, data leaks, and metadata exposure.</li>
        <li><strong>Ahmia.fi & Deep Search:</strong> Specialized engines for discovering .onion domains and indexing dark web content.</li>
        <li><strong>Silo for Research:</strong> Secure browsing solution that isolates sessions and anonymizes activity.</li>
        <li><strong>OSINT suites (Intelligence X, Darkscope):</strong> Deanonymization, risk scoring, and connection mapping.</li>
        <li><strong>Forensics tools:</strong> EnCase, Autopsy, Magnet AXIOM, Wireshark for evidence and network analysis.</li>
      </ul>
      <h2>Techniques for Investigating the Dark Web</h2>
      <ul>
        <li><strong>Deanonymization and Link Analysis:</strong> Use graph mapping and cross-referencing to track identities.</li>
        <li><strong>Cryptocurrency Tracking:</strong> Blockchain analysis to follow financial transactions.</li>
        <li><strong>Threat Intelligence Gathering:</strong> Automated crawlers to detect new threats and breaches.</li>
        <li><strong>Evidence Collection and Chain of Custody:</strong> Best practices to maintain evidence integrity.</li>
        <li><strong>Social Engineering and Human Intelligence:</strong> Undercover community infiltration and covert research.</li>
        <li><strong>Metadata & Vulnerability Analysis:</strong> Expose infrastructure, IP leaks, and encryption flaws.</li>
      </ul>
      <h2>Challenges in Dark Web Investigations</h2>
      <ul>
        <li><strong>Anonymity & Encryption:</strong> Acquiring evidence and attribution is challenging due to multi-layered privacy.</li>
        <li><strong>Volume & Volatility:</strong> Frequent site changes and data bursts impede systematic investigation.</li>
        <li><strong>Legal & Ethical Boundaries:</strong> Issues with jurisdiction, privacy, and entrapment.</li>
        <li><strong>Technological Arms Race:</strong> Evolving countermeasures and anti-censorship tactics.</li>
        <li><strong>Human Factors:</strong> Risk of errors and need for multidisciplinary skills.</li>
      </ul>
      <h2>Case Study Highlights</h2>
      <p>Law enforcement uses OSINT tools to deanonymize ransomware groups, trace cryptocurrency, and leverage AI for clustering dark web user behavior. Success hinges on technology, sharing intel, and legal rigor.</p>
      <h2>Conclusion</h2>
      <p>Dark web investigations remain a formidable frontier in cyber crime investigation and digital forensics. Specialists must use sophisticated OSINT, forensic software, and adaptive methods to keep pace with organized cyber criminals and safeguard digital ecosystems.</p>
    `
  },
  {
  slug: "ooad-data-warehousing-mining",
  title: "Object-Oriented Analysis and Design (OOAD) in Data Warehousing and Mining",
  author: "Jass Sangale",
  subject: "Data Warehousing & Mining",
  desc: "Explore how OOAD principles streamline the design, modeling, and mining of large-scale data systems—making data warehousing robust, modular, and scalable.",
  videoUrl: "", // Optionally add a relevant video tutorial URL
  content: `
    <h2>Introduction</h2>
    <p>In today’s data-driven world, organizations depend heavily on large-scale data systems for decision-making, analysis, and business intelligence. As data grows exponentially, it becomes crucial to design systems that can efficiently handle storage, integration, and retrieval. This is where Object-Oriented Analysis and Design (OOAD) plays a significant role in Data Warehousing and Mining.</p>
    <p>OOAD is a modern approach to software design that models a system using real-world entities, called objects, which encapsulate both data and behavior. When applied to data warehousing and mining, OOAD helps in structuring data storage systems, simplifying data relationships, and enabling efficient mining processes. It provides a clear, modular, and reusable framework that aligns with the complex nature of large-scale data systems.</p>

    <h2>Understanding OOAD</h2>
    <p>Object-Oriented Analysis and Design (OOAD) is a process of identifying and defining system requirements using objects and their interactions. It combines two stages:</p>
    <ul>
      <li><strong>Object-Oriented Analysis (OOA):</strong> Focuses on understanding the problem and identifying entities, their attributes, and relationships.</li>
      <li><strong>Object-Oriented Design (OOD):</strong> Focuses on how those entities (objects) will interact to perform the required tasks efficiently.</li>
    </ul>
    <p>In data warehousing, this means defining how data is stored, related, and accessed. In data mining, it means modeling how patterns, clusters, or relationships are discovered and represented.</p>

    <h2>Core Concepts of OOAD</h2>
    <ul>
      <li>
        <strong>Objects and Classes:</strong><br/>
        An object represents a real-world entity—such as a Customer, Product, or Transaction.<br/>
        A class is a blueprint for objects, defining shared properties and behaviors.<br/>
        <pre>
class Customer {
    int customerID;
    String name;
    double totalPurchase;
    void displayData() { ... }
}
        </pre>
        In a data warehouse, each class can correspond to a table, and each object represents a record.
      </li>
      <li>
        <strong>Encapsulation:</strong><br/>
        Ensures data integrity by restricting direct access to data. In warehousing, similar to data abstraction, users access data through defined views rather than raw tables.
      </li>
      <li>
        <strong>Inheritance:</strong><br/>
        Promotes reusability. A class <em>PremiumCustomer</em> may inherit from <em>Customer</em>—mirroring data warehouse schemas that reuse and extend dimensions.
      </li>
      <li>
        <strong>Polymorphism:</strong><br/>
        Allows the same function to behave differently for different data types. In data mining, this can relate to using the same mining algorithm for different datasets.
      </li>
      <li>
        <strong>Abstraction:</strong><br/>
        Focuses on essential system features, creating data models that emphasize analytical relationships.
      </li>
    </ul>

    <h2>OOAD Phases in Data Warehousing and Mining</h2>
    <ul>
      <li><strong>Object-Oriented Analysis (OOA):</strong> Identify data sources and entities, define data flows, use use case diagrams to represent user interactions.</li>
      <li><strong>Object-Oriented Design (OOD):</strong> Define class structures, attributes, and methods to represent warehouse tables and mining algorithms; use class and sequence diagrams.</li>
      <li><strong>Implementation:</strong> Translate design into database structures and mining algorithms using languages like Java, Python, or C++ with frameworks such as Hadoop or Spark.</li>
      <li><strong>Testing and Optimization:</strong> Test data retrieval, query performance, and mining accuracy; optimize structures for access and analysis.</li>
    </ul>

    <h2>Example: Applying OOAD in a Retail Data Warehouse</h2>
    <p>
      <strong>Objects:</strong> Customer, Product, Sales, Store, Region<br/>
      <strong>Relationships:</strong><br/>
      A Customer can purchase many Products.<br/>
      A Product can be sold across multiple Stores.<br/>
      <strong>Simplified Class Diagram:</strong>
    </p>
    <pre>
+-------------------+          +-------------------+
|     Customer      |          |      Product      |
+-------------------+          +-------------------+
| - customerID      |          | - productID       |
| - name            |          | - name            |
| - totalPurchase   |          | - category        |
+-------------------+          +-------------------+
| + viewHistory()   |          | + calculateSales()|
+-------------------+          +-------------------+
    </pre>
    <p>
      Mining can be performed on Customer to find purchasing patterns or on Product to identify seasonal trends.
    </p>

    <h2>Real-Life Applications of OOAD in Data Systems</h2>
    <ul>
      <li><strong>Data Modeling:</strong> Classes map to data warehouse schema tables or dimensions.</li>
      <li><strong>ETL Process:</strong> Object-oriented design defines reusable classes for data extraction, transformation, and loading.</li>
      <li><strong>Data Mining Algorithms:</strong> Decision trees, clustering, association rules can be implemented using OO structures.</li>
      <li><strong>Business Intelligence Dashboards:</strong> OOAD organizes backend logic for analytics tools by defining relationships for data retrieval.</li>
      <li><strong>Big Data Systems:</strong> OOAD principles guide creation of reusable modules for distributed processing in Hadoop/Spark environments.</li>
    </ul>

    <h2>Importance of OOAD in Data Warehousing & Mining</h2>
    <ul>
      <li><strong>Reusability:</strong> Promotes reusable components across models and applications.</li>
      <li><strong>Maintainability:</strong> Changes in one class don't disrupt the entire system.</li>
      <li><strong>Scalability:</strong> Modular design supports growing data volumes.</li>
      <li><strong>Consistency:</strong> Unified models ensure design and workflow consistency.</li>
      <li><strong>Efficiency:</strong> Object models reduce redundancy and improve query/mining performance.</li>
    </ul>

    <h2>Conclusion</h2>
    <p>
      Object-Oriented Analysis and Design (OOAD) has become essential in developing efficient, modular, and scalable data warehousing and mining systems. OOAD bridges the gap between data architecture and analytical processing, ensuring massive datasets can be organized and mined for insights. Integrating OOAD means adaptability, precision, and long-term sustainability for modern data engineering and analytics.
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
