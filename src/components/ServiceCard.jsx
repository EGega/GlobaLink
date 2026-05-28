function ServiceCard({ title, description, backgroundImage }) {
  const cardStyle = backgroundImage
    ? { backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.45), rgba(15, 23, 42, 0.45)), url(${backgroundImage})` }
    : undefined;

  return (
    <article
      className={`h-[400px] rounded-xl border p-5 shadow-sm ${
        backgroundImage
          ? "border-slate-300 bg-cover bg-center text-white"
          : "border-slate-200 bg-white"
      }`}
      style={cardStyle}
    >
      <h3 className={`text-lg font-semibold ${backgroundImage ? "text-white" : "text-brand"}`}>
        {title}
      </h3>
      <p className={`mt-2 text-sm leading-6 ${backgroundImage ? "text-slate-100" : "text-slate-600"}`}>
        {description}
      </p>
    </article>
  );
}

export default ServiceCard;
