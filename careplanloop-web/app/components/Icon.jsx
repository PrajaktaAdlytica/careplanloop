export default function Icon({ name, className = '', title }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden={title ? undefined : 'true'} role={title ? 'img' : undefined} aria-label={title}>
      <use href={'/assets/icons.svg#' + name} />
    </svg>
  );
}
