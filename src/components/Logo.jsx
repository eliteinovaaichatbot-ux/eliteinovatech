export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-full border border-amber-300/35 bg-white/5 p-1 shadow-[0_0_18px_rgba(62,200,255,0.18)]">
  <img
    src="/eliteinova-logo.png"
    alt="Eliteinova Tech Pvt Ltd logo"
    className="h-full w-full rounded-full object-contain"
  />
</span>
      <div className="leading-tight">
        <p className="text-base font-semibold tracking-tight">Eliteinova</p>
        <p className="text-sm text-white/80">Tech Pvt Ltd</p>
      </div>
    </div>
  );
}