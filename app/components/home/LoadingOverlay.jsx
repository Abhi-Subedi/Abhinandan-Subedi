"use client";

export default function LoadingOverlay({ show, fading = false }) {
  if (!show) return null;

  return (
    <div
      className={
        "fixed inset-0 z-50 flex items-center justify-center bg-zinc-950 transition-opacity duration-700 " +
        (fading ? "opacity-0" : "opacity-100")
      }
      aria-hidden="true"
    >
      <div className="mx-auto w-full max-w-md px-6">
        <div
          data-loader-card
          className={
            "rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 ring-1 ring-white/5 transition-transform duration-700 " +
            (fading ? "translate-y-2" : "translate-y-0")
          }
        >
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold tracking-tight text-zinc-50">
              Abhinandan Subedi
            </div>
            <div className="text-xs text-zinc-400">Loading</div>
          </div>
          <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-zinc-800">
            <div className="loader-progress h-full w-full rounded-full bg-linear-to-r from-indigo-500 via-fuchsia-500 to-pink-500" />
          </div>
          <p className="mt-4 text-sm text-zinc-300">
            Crafting a smooth experience…
          </p>
        </div>
      </div>
    </div>
  );
}
