'use client';

import Button from '@/components/Button';

interface OpenLinkButtonProps {
  url?: string;
  className?: string;
  text: string;
}

export function OpenLinkButton({ className, text }: OpenLinkButtonProps) {
  return (
    <Button
      className={className}
      onClick={() =>
        window.open('https://fadhyoung.github.io/Portofolio1/', '_blank')
      }
    >
      {text}
    </Button>
  );
}

export default OpenLinkButton;
