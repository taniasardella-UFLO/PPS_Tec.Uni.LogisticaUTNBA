import { Asterisk } from "lucide-react";

export function UtnLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-2 text-[#111827]" aria-label="UTN Buenos Aires">
      <span className="grid size-9 shrink-0 place-items-center rounded-full border-2 border-[#1f1f1f] bg-white">
        <Asterisk aria-hidden="true" className="size-5 stroke-[3]" />
      </span>
      <span className="leading-none">
        <span className="block text-[1.62rem] font-black tracking-tight">
          UTN<span className="text-[#727272]">.BA</span>
        </span>
        {!compact ? (
          <span className="mt-0.5 block text-[0.42rem] font-bold uppercase tracking-tight text-[#333]">
            Universidad Tecnologica Nacional
            <br />
            Facultad Regional Buenos Aires
          </span>
        ) : null}
      </span>
    </div>
  );
}
