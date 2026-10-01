/**
 * Reserves the exact space the live site's Cloudflare Turnstile widget takes
 * (300×65) so the form lines up. Replace the inner box with the real widget,
 * e.g. <Turnstile siteKey="..." /> from @marsidev/react-turnstile.
 */
export default function BotCheckSlot({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex h-[65px] w-[300px] max-w-full items-center rounded-[2px] border border-[#e0e0e0] bg-[#fafafa] px-3 ${className}`}
    >
      <span className="font-[Arial,sans-serif] text-[14px] text-[#595959]">Bot check</span>
    </div>
  );
}
