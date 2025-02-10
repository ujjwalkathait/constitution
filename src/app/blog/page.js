import Link from 'next/link';

export default function BlogPage() {
  const recentUpdates = [
    {
      title: "New Amendment in Privacy Laws",
      excerpt: "Recent changes in data protection regulations across multiple jurisdictions...",
      category: "Law Updates",
      date: "March 15, 2024"
    },
    {
      title: "Constitutional Court Ruling Analysis",
      excerpt: "Breaking down the landmark decision on freedom of speech...",
      category: "Case Analysis",
      date: "March 14, 2024"
    },
  ];

  const latestArticles = [
    {
        
      title: "Understanding the Bill of Rights",
      excerpt: "A comprehensive guide to the first ten amendments...",
      category: "Constitution Basics",
      readTime: "8 min"
    },
    {
      title: "Comparative Constitutional Law",
      excerpt: "Examining different constitutional frameworks worldwide...",
      category: "Legal Theory",
      readTime: "12 min"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">LawHub</h1>
              <div className="hidden md:ml-6 md:flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
                <Link href="/blog" className="text-gray-700 hover:text-indigo-600">Blog</Link>
                <Link href="/about" className="text-gray-700 hover:text-indigo-600">About</Link>
                <Link href="/contact" className="text-gray-700 hover:text-indigo-600">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Featured Post */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:w-64"
                  src="https://picsum.photos/800/400"
                  alt="Featured post"
                />
              </div>
              <div className="p-8">
                <div className="uppercase text-sm text-indigo-600 font-semibold">Featured Update</div>
                <h2 className="mt-2 text-2xl font-bold">Recent Constitutional Reforms in Europe</h2>
                <p className="mt-3 text-gray-600">An in-depth analysis of the latest constitutional changes affecting EU member states...</p>
                <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Updates */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Law & Constitution Updates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentUpdates.map((update, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-sm text-indigo-600 font-semibold">{update.category}</div>
                <h3 className="mt-2 text-xl font-semibold">{update.title}</h3>
                <p className="mt-2 text-gray-600">{update.excerpt}</p>
                <div className="mt-4 text-sm text-gray-500">{update.date}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Did You Know? Section */}
        <section className="mb-12 bg-indigo-100 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Constitutional Fact of the Day</h2>
          <blockquote className="text-xl italic text-gray-800">
            "The U.S. Constitution has 4,400 words. It is the oldest and shortest written Constitution of any major government in the world."
          </blockquote>
        </section>

        {/* Latest Articles */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {latestArticles.map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  className="h-48 w-full object-cover"
                  src="https://picsum.photos/800/600"
                  alt="Article visual"
                />
                <div className="p-6">
                  <div className="text-sm text-indigo-600 font-semibold">{article.category}</div>
                  <h3 className="mt-2 text-xl font-semibold">{article.title}</h3>
                  <p className="mt-2 text-gray-600">{article.excerpt}</p>
                  <div className="mt-4 text-sm text-gray-500">{article.readTime} read</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-indigo-400">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-indigo-400">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-indigo-400">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li><Link href="/constitutional-law" className="hover:text-indigo-400">Constitutional Law</Link></li>
                <li><Link href="/legal-news" className="hover:text-indigo-400">Legal News</Link></li>
                <li><Link href="/case-studies" className="hover:text-indigo-400">Case Studies</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-indigo-400">Twitter</Link>
                <Link href="#" className="hover:text-indigo-400">LinkedIn</Link>
                <Link href="#" className="hover:text-indigo-400">Facebook</Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2024 LawHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}