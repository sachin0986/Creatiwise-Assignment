// Dummy data for the dashboard component

// Article data for Generated tab
export const generatedArticles = [
  {
    id: 1,
    title: "How to Improve Your Skills in League of Legends",
    keyword: "league of legends [2240000]",
    words: 4575,
    createdOn: "20 hours ago",
    status: "generated"
  },
  {
    id: 2,
    title: "How to Master Last Hitting in League of Legends",
    keyword: "league of legends [2240000]",
    words: 3480,
    createdOn: "21 hours ago",
    status: "generated"
  },
  {
    id: 3,
    title: "7 Tips for Better Teamplay in League of Legends",
    keyword: "league of legends [2240000]",
    words: 2676,
    createdOn: "a day ago",
    status: "generated"
  },
  {
    id: 4,
    title: "Top Virtual Executive Assistant Services (2024)",
    keyword: "virtual executive assistant [2900]",
    words: 2408,
    createdOn: "1 Oct, 24",
    status: "generated"
  },
  {
    id: 5,
    title: "Unlimited Graphics Design Solutions",
    keyword: "unlimited graphic design services [390]",
    words: 1793,
    createdOn: "2 Oct, 24",
    status: "generated"
  },
  {
    id: 6,
    title: "Top Amazon Payment Methods for Quick Access to Funds",
    keyword: "amazon payment methods [3600]",
    words: 2647,
    createdOn: "5 Oct, 24",
    status: "generated"
  },
  {
    id: 7,
    title: "Backlinks 101: What are backlinks and why they're important [Free template]",
    keyword: "backlinks [8100]",
    words: 2261,
    createdOn: "7 Oct, 24",
    status: "generated"
  },
  {
    id: 8,
    title: "7 Leading AI SEO Tools in 2024 (Ranked & Compared)",
    keyword: "ai seo software [890]",
    words: 1543,
    createdOn: "8 Oct, 24",
    status: "generated"
  },
  {
    id: 9,
    title: "Unlimited Graphic Design Services You Can Rely On",
    keyword: "unlimited graphic design services [390]",
    words: 1974,
    createdOn: "12 Oct, 24",
    status: "generated"
  }
];

// Article data for Published tab
export const publishedArticles = [
  {
    id: 101,
    title: "10 Must-Know SEO Techniques for 2024",
    keyword: "seo techniques 2024 [4200]",
    words: 3245,
    createdOn: "15 Sep, 24",
    publishedOn: "18 Sep, 24",
    status: "published",
    views: 1245,
    backlinks: 8
  },
  {
    id: 102,
    title: "The Ultimate Guide to Content Marketing",
    keyword: "content marketing guide [5600]",
    words: 4320,
    createdOn: "10 Sep, 24",
    publishedOn: "14 Sep, 24",
    status: "published",
    views: 2378,
    backlinks: 12
  },
  {
    id: 103,
    title: "How to Choose the Best WordPress Hosting",
    keyword: "best wordpress hosting [6700]",
    words: 3560,
    createdOn: "2 Sep, 24",
    publishedOn: "5 Sep, 24",
    status: "published",
    views: 3421,
    backlinks: 15
  },
  {
    id: 104,
    title: "Social Media Marketing Strategies That Work",
    keyword: "social media marketing strategies [7800]",
    words: 3870,
    createdOn: "25 Aug, 24",
    publishedOn: "30 Aug, 24",
    status: "published",
    views: 5689,
    backlinks: 21
  },
  {
    id: 105,
    title: "Affiliate Marketing for Beginners: A Step-by-Step Guide",
    keyword: "affiliate marketing beginners [8200]",
    words: 4125,
    createdOn: "18 Aug, 24",
    publishedOn: "22 Aug, 24",
    status: "published",
    views: 6573,
    backlinks: 18
  }
];

// Article data for Scheduled tab
export const scheduledArticles = [
  {
    id: 201,
    title: "The Future of E-commerce in 2025",
    keyword: "future of ecommerce [3400]",
    words: 3150,
    createdOn: "10 Oct, 24",
    scheduledFor: "25 Oct, 24",
    status: "scheduled"
  },
  {
    id: 202,
    title: "5 AI Tools Every Content Creator Should Use",
    keyword: "ai tools content creation [2800]",
    words: 2760,
    createdOn: "12 Oct, 24",
    scheduledFor: "28 Oct, 24",
    status: "scheduled"
  },
  {
    id: 203,
    title: "How to Build a Successful Email Marketing Campaign",
    keyword: "email marketing campaign [5200]",
    words: 3450,
    createdOn: "14 Oct, 24",
    scheduledFor: "1 Nov, 24",
    status: "scheduled"
  }
];

// Article data for Archived tab
export const archivedArticles = [
  {
    id: 301,
    title: "Top Digital Marketing Trends of 2023",
    keyword: "digital marketing trends 2023 [4500]",
    words: 3280,
    createdOn: "5 Jan, 24",
    archivedOn: "15 Jul, 24",
    status: "archived"
  },
  {
    id: 302,
    title: "How to Optimize Your Website for Voice Search",
    keyword: "voice search optimization [3200]",
    words: 2950,
    createdOn: "12 Feb, 24",
    archivedOn: "20 Jul, 24",
    status: "archived"
  },
  {
    id: 303,
    title: "A Beginner's Guide to Google Analytics",
    keyword: "google analytics beginners [6400]",
    words: 3840,
    createdOn: "23 Mar, 24",
    archivedOn: "1 Aug, 24",
    status: "archived"
  },
  {
    id: 304,
    title: "The Impact of AI on Digital Marketing",
    keyword: "ai impact digital marketing [3800]",
    words: 3120,
    createdOn: "5 Apr, 24",
    archivedOn: "10 Aug, 24",
    status: "archived"
  }
];

// Combined articles object for easy access by status
export const allArticles = {
  generated: generatedArticles,
  published: publishedArticles,
  scheduled: scheduledArticles,
  archived: archivedArticles
};

// Sidebar navigation items with expanded subitems
export const navigation = [
  { 
    icon: "📄", 
    name: "Articles", 
    active: true,
    subItems: [
      { name: "Create Article", active: false, path: "/create-article" },
      { name: "Generated Articles", active: true, path: "/generated-articles" },
      { name: "Keyword Projects", active: false, path: "/keyword-projects" },
      { name: "AI Keyword to Article", active: false, path: "/ai-keyword-article" },
      { name: "Steal Competitor Keyword", active: false, path: "/competitor-keywords" },
      { name: "Import Keyword from GSC", active: false, path: "/import-gsc" },
      { name: "Manual Keyword to Article", active: false, path: "/manual-keyword" },
      { name: "Bulk Keyword to Article", active: false, path: "/bulk-keyword" },
      { name: "Longtail Keyword to Article", active: false, path: "/longtail-keyword" },
      { name: "Article Settings", active: false, path: "/article-settings" }
    ] 
  },
  { 
    icon: "📝", 
    name: "Auto Blog", 
    active: false,
    subItems: [
      { name: "Dashboard", active: false, path: "/auto-blog/dashboard" },
      { name: "New Auto Blog", active: false, path: "/auto-blog/new" },
      { name: "Auto Blog Settings", active: false, path: "/auto-blog/settings" }
    ]
  },
  { 
    icon: "🔗", 
    name: "Internal Links", 
    active: false,
    subItems: [
      { name: "Link Opportunities", active: false, path: "/internal-links/opportunities" },
      { name: "Link Structure", active: false, path: "/internal-links/structure" },
      { name: "Link Settings", active: false, path: "/internal-links/settings" }
    ]
  },
  { 
    icon: "🔄", 
    name: "Free Backlinks", 
    active: false,
    subItems: [
      { name: "Find Backlinks", active: false, path: "/backlinks/find" },
      { name: "Backlink Analysis", active: false, path: "/backlinks/analysis" },
      { name: "Backlink Reports", active: false, path: "/backlinks/reports" }
    ]
  },
  { 
    icon: "🧩", 
    name: "Integrations", 
    active: false,
    subItems: [
      { name: "WordPress", active: false, path: "/integrations/wordpress" },
      { name: "Google Analytics", active: false, path: "/integrations/google-analytics" },
      { name: "Google Search Console", active: false, path: "/integrations/google-search-console" },
      { name: "Ahrefs", active: false, path: "/integrations/ahrefs" },
      { name: "Semrush", active: false, path: "/integrations/semrush" }
    ]
  },
  { 
    icon: "🔔", 
    name: "Subscription", 
    active: false,
    subItems: [
      { name: "Plan Details", active: false, path: "/subscription/details" },
      { name: "Billing History", active: false, path: "/subscription/billing" },
      { name: "Upgrade Plan", active: false, path: "/subscription/upgrade" }
    ]
  },
  { 
    icon: "🔄", 
    name: "Affiliate Program", 
    active: false,
    subItems: [
      { name: "Overview", active: false, path: "/affiliate/overview" },
      { name: "Referrals", active: false, path: "/affiliate/referrals" },
      { name: "Payouts", active: false, path: "/affiliate/payouts" }
    ]
  },
  { 
    icon: "❓", 
    name: "Help Center", 
    active: false,
    subItems: [
      { name: "Documentation", active: false, path: "/help/docs" },
      { name: "Tutorials", active: false, path: "/help/tutorials" },
      { name: "FAQs", active: false, path: "/help/faqs" }
    ]
  },
  { 
    icon: "🔄", 
    name: "Updates", 
    active: false,
    subItems: [
      { name: "What's New", active: false, path: "/updates/whats-new" },
      { name: "Roadmap", active: false, path: "/updates/roadmap" },
      { name: "Changelog", active: false, path: "/updates/changelog" }
    ]
  },
  { 
    icon: "💬", 
    name: "Live Chat Support", 
    active: false,
    subItems: null // No subitems for Live Chat Support
  },
  { 
    icon: "👤", 
    name: "Profile", 
    active: false,
    subItems: [
      { name: "Account Settings", active: false, path: "/profile/settings" },
      { name: "Preferences", active: false, path: "/profile/preferences" },
      { name: "Team Members", active: false, path: "/profile/team" },
      { name: "Logout", active: false, path: "/logout" }
    ]
  }
];

// Dashboard tab options
export const tabOptions = [
  { id: "generated", label: "Generated Articles" },
  { id: "published", label: "Published Articles" },
  { id: "scheduled", label: "Scheduled Articles" },
  { id: "archived", label: "Archived Articles" }
];

// Pagination options
export const paginationOptions = [10, 25, 50];

// Account options (for the account selector dropdown)
export const accounts = [
  { id: 1, name: "amazon.com", primary: true },
  { id: 2, name: "myblog.com", primary: false },
  { id: 3, name: "ecommerce-store.com", primary: false },
];

// User profile data
export const userProfile = {
  name: "Sachin Arora",
  email: "sachin@example.com",
  avatar: null, // Placeholder for avatar image
  plan: "Non Pro",
  wordsRemaining: 12500,
  articlesPublished: 28,
  accountCreated: "May 21, 2025"
};