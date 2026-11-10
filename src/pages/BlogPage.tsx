import React, { useState } from 'react';
import {
  BookOpen,
  Clock,
  Calendar,
  User,
  ArrowRight,
  ArrowUpRight,
  Search,
  Tag,
  X,
  Share2
} from 'lucide-react';
import { PageId, BrandConfig, BlogPost } from '../types';
import { blogPosts } from '../data/blogData';

interface BlogPageProps {
  onNavigate: (page: PageId) => void;
  brandConfig: BrandConfig;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate, brandConfig }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const categories = ['all', 'Engineering & Performance', 'Architecture Strategy', 'UI/UX Design', 'SEO Optimization'];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-20 sm:space-y-28 pb-24 pt-6">
      {/* ===================== HERO ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9A44C]">
            <span>Technical Insights & Engineering Notes</span>
            <span aria-hidden="true">·</span>
            <span>By Umair Web Designer</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-[#17251C] dark:text-[#F8FAF7] leading-tight">
            ENGINEERING & <span className="text-[#102C23] dark:text-[#E3C477]">DIGITAL INSIGHTS.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#17251C]/80 dark:text-[#F8FAF7]/80 leading-relaxed">
            Practical essays, design system philosophies, and performance benchmarks for businesses striving to lead their industries online.
          </p>
        </div>
      </section>

      {/* ===================== SEARCH & FILTERS ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-2 rounded-2xl bg-white dark:bg-[#102C23] border border-[#102C23]/10 dark:border-[#C9A44C]/25">
          <div className="flex flex-wrap gap-1 p-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#102C23] text-white dark:bg-[#C9A44C] dark:text-[#081710] shadow-sm'
                    : 'text-[#17251C]/70 dark:text-[#F8FAF7]/70 hover:text-[#102C23] dark:hover:text-[#F8FAF7]'
                }`}
              >
                {cat === 'all' ? 'All Articles' : cat}
              </button>
            ))}
          </div>

          <div className="px-3 py-1">
            <input
              type="text"
              placeholder="Search articles or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-64 px-3 py-2 text-xs rounded-xl border border-[#102C23]/20 dark:border-[#C9A44C]/30 bg-[#F8FAF7] dark:bg-[#081710] text-[#17251C] dark:text-[#F8FAF7] focus:outline-none focus:ring-1 focus:ring-[#C9A44C]"
            />
          </div>
        </div>

        {/* ===================== ARTICLE LIST ===================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#102C23] border border-[#102C23]/10 dark:border-[#C9A44C]/25 hover:border-[#C9A44C] transition-all flex flex-col justify-between space-y-6 shadow-sm group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#17251C]/60 dark:text-[#F8FAF7]/60">
                  <span className="font-semibold text-[#102C23] dark:text-[#C9A44C]">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>

                <h2
                  onClick={() => setActiveArticle(post)}
                  className="font-display text-2xl font-bold text-[#17251C] dark:text-[#F8FAF7] group-hover:text-[#102C23] dark:group-hover:text-[#E3C477] transition-colors cursor-pointer"
                >
                  {post.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#17251C]/75 dark:text-[#F8FAF7]/75 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[11px] rounded bg-[#F8FAF7] dark:bg-[#081710] text-[#102C23] dark:text-[#E3C477] border border-[#102C23]/10 dark:border-[#C9A44C]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#102C23]/10 dark:border-[#C9A44C]/15 flex items-center justify-between">
                <div className="text-xs text-[#17251C]/60 dark:text-[#F8FAF7]/60">
                  By {post.author} · {post.date}
                </div>

                <button
                  onClick={() => setActiveArticle(post)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#102C23] dark:text-[#C9A44C] hover:underline cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ===================== ARTICLE READER MODAL ===================== */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-3xl bg-[#F8FAF7] dark:bg-[#102C23] border border-[#102C23]/20 dark:border-[#C9A44C]/30 rounded-3xl shadow-2xl p-6 sm:p-10 my-8 max-h-[85vh] overflow-y-auto space-y-6">
            <div className="flex items-center justify-between border-b border-[#102C23]/10 dark:border-[#C9A44C]/20 pb-4">
              <div className="flex items-center gap-2 text-xs text-[#C9A44C] font-semibold">
                <span>{activeArticle.category}</span>
                <span>·</span>
                <span>{activeArticle.readTime}</span>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="p-1 rounded-lg text-[#17251C]/70 dark:text-[#F8FAF7]/70 hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-[#17251C] dark:text-[#F8FAF7] leading-tight">
                {activeArticle.title}
              </h1>

              <div className="text-xs text-[#17251C]/60 dark:text-[#F8FAF7]/60 border-b border-[#102C23]/10 dark:border-[#C9A44C]/15 pb-4">
                Written by <strong className="text-[#102C23] dark:text-[#F8FAF7]">{activeArticle.author}</strong> on {activeArticle.date}
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#17251C]/80 dark:text-[#F8FAF7]/85 leading-relaxed pt-2">
                {activeArticle.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#102C23]/10 dark:border-[#C9A44C]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#17251C]/70 dark:text-[#F8FAF7]/70">
                Want to implement this standard in your business website?
              </div>
              <button
                onClick={() => {
                  setActiveArticle(null);
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#102C23] text-white dark:bg-[#C9A44C] dark:text-[#081710]"
              >
                <span>Discuss With Umair</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
