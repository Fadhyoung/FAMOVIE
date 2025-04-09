import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';

export type AvatarProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  imageUrl?: string;
  alt?: string;
  username?: string;
  id?: string;
  color?: string;
};

const sizeClasses: Record<NonNullable<AvatarProps['size']>, string> = {
  xs: 'w-6 h-6 text-xs',
  sm: 'w-8 h-8 text-sm',
  md: 'w-10 h-10 text-base',
  lg: 'w-12 h-12 text-lg',
  xl: 'w-16 h-16 text-xl',
};

const Avatar: React.FC<AvatarProps> = ({
  size = 'md',
  imageUrl,
  alt = 'avatar',
  username = '',
  id,
  color = 'bg-gray-300',
}) => {
  const initials = username?.slice(0, 2).toUpperCase();

  return (
    <div
      id={id}
      className={clsx(
        'relative inline-flex items-center justify-center rounded-full overflow-hidden text-white font-semibold',
        sizeClasses[size],
        color
      )}
    >
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={alt}
          className="object-cover"
          layout="fill"
        />
      ) : (
        <span>{initials || '👤'}</span>
      )}
    </div>
  );
};

export default Avatar;
