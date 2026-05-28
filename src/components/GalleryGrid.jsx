function GalleryGrid({ items }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <figure key={item.id} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <img alt={item.alt} className="h-56 w-full object-cover" loading="lazy" src={item.src} />
          <figcaption className="px-4 py-3 text-sm text-slate-700">{item.title}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export default GalleryGrid;
