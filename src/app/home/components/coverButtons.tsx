import Image from 'next/image';
import Button from '@/components/Button';
import Typography from '@/components/Typography';

interface OpenLinkButtonProps1 {
  area: string;
  alt: string;
  img?: string;
}

// Landing page button, button that contain image
export const CoverButton = ({ area, alt, img }: OpenLinkButtonProps1) => {
  return (
    <Button
      className="w-full h-full relative overflow-hidden "
      style={{ gridArea: area }}
    >
      <Typography variant='xs' color='primary' className='absolute z-10 bottom-2 right-2'>
        {alt}
      </Typography>
      <div className="w-full h-full absolute top-0 hover:scale-125 transition-all duration-300">
        <Image
          className="w-full h-full object-cover"
          src={`/FAMOVIE/images/${img}`}
          alt={img ? `Image for ${area}` : 'Decorative image'}
          fill
        />
      </div>
    </Button>
  );
};
