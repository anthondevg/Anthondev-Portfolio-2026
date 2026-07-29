type SocialIconProps = {
  className?: string;
};

function LinkedInIcon({ className }: SocialIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5.12 3.5a2.12 2.12 0 1 1 0 4.24 2.12 2.12 0 0 1 0-4.24ZM3.3 9.2h3.64V20.5H3.3V9.2Zm5.92 0h3.49v1.54h.05c.49-.92 1.67-1.9 3.43-1.9 3.67 0 4.35 2.42 4.35 5.56v6.1H16.9v-5.41c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.86v5.5H9.22V9.2Z" />
    </svg>
  );
}

function GitHubIcon({ className }: SocialIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2.5a9.5 9.5 0 0 0-3 18.51c.47.09.64-.2.64-.45v-1.68c-2.62.57-3.17-1.11-3.17-1.11-.43-1.08-1.04-1.37-1.04-1.37-.85-.58.06-.57.06-.57.94.07 1.43.96 1.43.96.84 1.43 2.2 1.02 2.73.78.08-.6.33-1.02.6-1.25-2.1-.24-4.3-1.05-4.3-4.67 0-1.03.37-1.88.97-2.54-.1-.24-.42-1.2.1-2.5 0 0 .79-.25 2.61.97A9.1 9.1 0 0 1 12 6.75c.8 0 1.6.1 2.36.32 1.82-1.22 2.61-.97 2.61-.97.52 1.3.2 2.26.1 2.5.6.66.97 1.51.97 2.54 0 3.63-2.2 4.42-4.3 4.65.34.3.64.87.64 1.75v2.6c0 .25.17.54.64.45A9.5 9.5 0 0 0 12 2.5Z" clipRule="evenodd" />
    </svg>
  );
}

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anthondev/", Icon: LinkedInIcon },
  { label: "GitHub", href: "https://github.com/anthondevg", Icon: GitHubIcon },
];

export function HeroSocials() {
  return (
    <div className="mt-8 flex items-center gap-2" aria-label="Social profiles">
      {socials.map(({ label, href, Icon }) => (
        <a
          className="group grid h-9 w-9 place-items-center rounded-[7px] border border-transparent bg-white/[.035] text-[#d5d1d9] transition duration-200 hover:-translate-y-0.5 hover:border-white/10 hover:bg-white/[.12] hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-light"
          href={href}
          key={label}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit Anthony Gonzalez on ${label}`}
        >
          <Icon className="h-[18px] w-[18px] transition-transform duration-200 group-hover:scale-105" />
        </a>
      ))}
    </div>
  );
}
