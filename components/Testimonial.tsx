import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Testimonial({
  logoSrc,
  logoAlt,
  quote,
  author,
  role,
  company,
  companyHref,
}: {
  logoSrc: string;
  logoAlt: string;
  quote: React.ReactNode;
  author: string;
  role: string;
  company: string;
  companyHref?: string;
}) {
  return (
    <FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-10 md:gap-14 items-center">
        <div className="mx-auto md:mx-0 h-36 w-36 sm:h-44 sm:w-44 rounded-full overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center">
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={180}
            height={180}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-white/90 leading-relaxed text-[1.05rem] sm:text-lg">
          <div className="text-gold font-serif text-5xl leading-none mb-3">“</div>
          <div className="space-y-4">{quote}</div>
          <p className="mt-6 text-sm">
            —{" "}
            <span className="font-semibold text-white">{author}</span>,{" "}
            {role},{" "}
            {companyHref ? (
              <a
                href={companyHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                {company}
              </a>
            ) : (
              company
            )}
          </p>
        </div>
      </div>
    </FadeIn>
  );
}
