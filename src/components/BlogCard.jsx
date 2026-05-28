function BlogCard({ title, excerpt, date }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs text-slate-500">{date}</p>
      <h3 className="mt-2 text-lg font-semibold text-brand">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{excerpt}</p>
    </article>
  );
}

export default BlogCard;
