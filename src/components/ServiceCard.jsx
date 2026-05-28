function ServiceCard({
  title,
  description,
  backgroundImage,
  textScale = 1,
  alignTopCenter = false,
}) {
  const cardStyle = backgroundImage
    ? { backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.45), rgba(15, 23, 42, 0.45)), url(${backgroundImage})` }
    : undefined;

  return (
    <article
      className={`h-[400px] rounded-xl border p-5 shadow-sm ${
        backgroundImage
          ? "border-slate-300 bg-cover bg-center text-white"
          : "border-slate-200 bg-white"
      } ${alignTopCenter ? "flex flex-col justify-start" : ""}`}
      style={cardStyle}
    >
      <h3
        className={`text-lg font-semibold ${alignTopCenter ? "text-center" : ""} ${backgroundImage ? "text-white" : "text-brand"}`}
        style={{ fontSize: `${1.125 * textScale}rem` }}
      >
        {title}
      </h3>
      <p
        className={`mt-2 text-sm leading-6 ${alignTopCenter ? "text-center" : ""} ${backgroundImage ? "text-slate-100" : "text-slate-600"}`}
        style={{ fontSize: `${0.875 * textScale}rem` }}
      >
        {description}
      </p>
    </article>
  );
}

export default ServiceCard;
