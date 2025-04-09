import Button from '@/components/Button';
import Typography from '@/components/Typography';
import { movie } from '@/types/movie';
import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';
import {
  CiShare2,
  CiHeart,
  CiBookmark,
  CiFlag1,
  CiChat1,
  CiStar,
} from 'react-icons/ci';
import { FaStar } from 'react-icons/fa6';
import { useTranslations } from 'next-intl';
import { TITLE } from '@/constants/routers';
import Avatar from '@/components/Avatar';
import { PiThumbsUpThin } from 'react-icons/pi';

interface truncateDescProps {
  text?: string;
  wordLimit?: number;
}

interface CardProps {
  width?: string;
  height?: string;
  data?: movie;
  title?: string;
  desc?: string;
  poster?: string;
  url?: string;
}

const truncateDesc = ({ text, wordLimit }: truncateDescProps) => {
  if (text === undefined) {
    text = 'Undetected';
  }
  const words = text.split(' ');
  return words.length > (wordLimit || 0)
    ? words.slice(0, wordLimit).join(' ') + '...'
    : text;
};

// Used at the best 3 section
export const Card1 = ({ width, height, data }: CardProps) => {
  console.log('data', data);
  return (
    <>
      <div
        className={`${width} ${height} p-1 flex flex-row justify-between overflow-hidden border rounded-[20px] border-black bg-white`}
      >
        <Image
          className="basis-[30%] h-full object-cover rounded-[20px]"
          src={data?.Poster || ''}
          alt={data?.Title || 'Poster'}
          width={150}
          height={225}
        />
        <div className="basis-[60%] p-5 flex flex-col items-start justify-between">
          <div className="w-full flex justify-between items-center">
            <div className="flex gap-2 items-center text-amber">
              <Typography type="title" color="tertiary">
                {data?.imdbRating}
              </Typography>
              <FaStar size={25} />
            </div>
            <Button onClick={() => window.open(data?.URL, '_blank')}>
              <FaExternalLinkAlt size={25} className="text-midBlue" />
            </Button>
          </div>

          <div className="w-full flex flex-col">
            <Typography
              type="subtitle"
              weight="600"
              className="w-full"
              color="primary"
            >
              {data?.Title}
            </Typography>
            <Typography
              type="body"
              weight="400"
              className="w-full text-justify"
              color="primary"
            >
              {truncateDesc({ text: data?.Plot, wordLimit: 15 })}
            </Typography>
          </div>

          <Typography
            type="caption"
            color="tertiary"
            className="w-full flex flex-nowrap overflow-hidden"
          >
            {data?.Genre}
          </Typography>
        </div>
      </div>
    </>
  );
};

// Used at the top 10 recomendation
export const Card2 = ({ title, desc, poster, url }: CardProps) => {
  const t = useTranslations('card');
  return (
    <div className="lg:basis-[22.5%] xs:basis-[70%] flex flex-col flex-shrink-0 border border-midBlue rounded-b-2xl">
      <div className="h-96 relative overflow-hidden">
        <Image
          className="w-full h-full absolute z-20 object-cover"
          src={poster || '/default-poster.jpg'}
          alt={title || 'Poster'}
          layout="fill"
          objectFit="cover"
        />
        <Button
          buttonType="ghost"
          className="absolute z-40 bottom-4 right-4 text-white"
        >
          <FaExternalLinkAlt size={20} />
        </Button>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <Typography type="subtitle" weight="600" color="primary" uppercase>
          {truncateDesc({ text: title, wordLimit: 4 })}
        </Typography>
        <Typography type="caption" color="primary">
          {truncateDesc({ text: desc, wordLimit: 10 })}
        </Typography>
        <div className="flex gap-2">
          <Button
            variant="primary"
            buttonType="outline"
            radius="lg"
            className="px-3 py-1 text-[12px] font-medium !border-midBlue"
            onClick={() => window.open(TITLE, '_blank', 'noopener,noreferrer')}
          >
            {t('review')}
          </Button>
          <Button
            buttonType="ghost"
            className="px-3 py-1 text-[12px] font-semibold text-midBlue"
            onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
          >
            {t('imdb')}
          </Button>
        </div>
      </div>
    </div>
  );
};

// Used at the review section
export const ReviewCards = ({ title, desc, poster }: CardProps) => {
  const t = useTranslations('card');
  return (
    <div className="w-full pb-10 flex flex-shrink-0 border-b border-darkBlue">
      <div className="w-56 h-full relative overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          src={poster || '/default-poster.jpg'}
          alt={title || 'Poster'}
          layout="fill"
          objectFit="cover"
        />
        <Button
          buttonType="ghost"
          className="absolute z-40 bottom-4 right-4 text-white"
        >
          <FaExternalLinkAlt size={20} />
        </Button>
      </div>
      <div className="w-full px-10 py-5 flex flex-col gap-5">
        <Typography type="title" weight="600" color="primary">
          {truncateDesc({ text: title, wordLimit: 4 })}
        </Typography>
        <Typography type="body" color="primary">
          {truncateDesc({ text: desc, wordLimit: 30 })}
        </Typography>
        <div className="w-full flex justify-between items-center text-midBlue">
          <div className='flex gap-5 items-center'>
            <Typography type="body" color="tertiary">
              wednesday, March 20, 2024
            </Typography>
            <Typography type='body' color='tertiary' className='flex gap-2'>
              <CiChat1 size={20} /> 2k
              <CiStar size={20} /> 100k
              <PiThumbsUpThin size={20} /> 60k
            </Typography>
          </div>
          <div className="flex gap-5">
            <CiShare2 size={20} />
            <CiHeart size={20} />
            <CiBookmark size={20} />
            <CiFlag1 size={20} />
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <Avatar
            id="user-123"
            size="md"
            color="bg-blue-500"
            username="John Doe"
            imageUrl="https://i.pravatar.cc/300"
            alt="John's Avatar"
          />
          <div>
            <Typography type="subtitle">Sansa Stark</Typography>
            <Typography type="subtitle" className='flex items-center'><CiStar size={20} className='text-amber' />/5.0</Typography>
          </div>
          <Button
            variant="tertiary"
            radius="lg"
            className="px-3 py-1 text-[12px] font-medium !border-midBlue"
            onClick={() => window.open(TITLE, '_blank', 'noopener,noreferrer')}
          >
            {t('review')}
          </Button>
        </div>
      </div>
    </div>
  );
};

//used at all ive watched
export const Card4 = ({ title, desc, poster }: CardProps) => {
  const t = useTranslations('card');
  return (
    <div className="lg:basis-[23.5%] xs:basis-[45%] h-[450px] flex-shrink-0 relative flex flex-col items-end rounded-[10px] overflow-hidden bg-red-500">
      <Image
        className="w-full h-full absolute z-10 object-cover"
        src={poster || '/default-poster.jpg'}
        alt={title || 'Poster'}
        layout="fill"
        objectFit="cover"
      />
      <div className="w-full h-3/4 absolute bottom-0 z-20 bg-gradient-to-t from-black to-transparent"></div>
      <div className="w-full p-3 absolute bottom-0 z-30 flex flex-col gap-2">
        <Typography type="subtitle" weight="1000" color="secondary" uppercase>
          {title}
        </Typography>
        <Typography type="caption" color="secondary">
          {truncateDesc({ text: desc, wordLimit: 12 })}
        </Typography>
        <Button
          buttonType="solid"
          variant="secondary"
          radius="lg"
          className="flex justify-between gap-4"
        >
          {t('reviewHere')} <FaExternalLinkAlt />{' '}
        </Button>
      </div>
    </div>
  );
};

export default Card1;
