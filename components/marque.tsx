export function Marquee() {
  return (
    <div
      className="marquee text-black font-light text-3xl "
      aria-label="Technology skills carousel"
    >
      <ul className="marquee__content" role="list">
        <li>JavaScript</li>
        <li>Tailwind</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>AI</li>
        <li>SQL</li>
        <li>Python</li>
        <li>Machine Learning</li>
      </ul>
      <ul className="marquee__content" aria-hidden="true" role="presentation">
        <li>JavaScript</li>
        <li>Tailwind</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>AI</li>
        <li>SQL</li>
        <li>Python</li>
        <li>Machine Learning</li>
      </ul>
    </div>
  );
}
