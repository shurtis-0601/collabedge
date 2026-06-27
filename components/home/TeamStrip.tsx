import Image from "next/image";
import Link from "next/link";

type Member = {
  name: string;
  title: string;
  photoSrc: string;
  href?: string;
};

export default function TeamStrip({ members }: { members: Member[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {members.map((m) => {
        const inner = (
          <div className="bg-white border border-border rounded-lg overflow-hidden shadow-sm group">
            <div className="relative h-40 w-full bg-offwhite">
              <Image
                src={m.photoSrc}
                alt={m.name}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <p className="text-[14px] font-bold text-text-dark">{m.name}</p>
              <p className="text-[12px] text-slate mt-0.5">{m.title}</p>
            </div>
          </div>
        );
        return m.href ? (
          <Link key={m.name} href={m.href}>
            {inner}
          </Link>
        ) : (
          <div key={m.name}>{inner}</div>
        );
      })}
    </div>
  );
}
