'use client';

interface OpenLinkButtonProps {
  url?: string;
  className?: string;
  text: string;
}

export function OpenLinkButton({ className, text }: OpenLinkButtonProps) {
  return (
    <button
      className={className}
      onClick={() =>
        window.open('https://fadhyoung.github.io/Portofolio1/', '_blank')
      }
    >
      {text}
    </button>
  );
}

export default OpenLinkButton;
