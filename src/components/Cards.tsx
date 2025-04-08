import Button from '@/components/Button';
import Typography from '@/components/Typography';
import { movie } from '@/types/movie';
import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';
import { useTranslations } from 'next-intl';

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
            <div className="flex gap-2 items-start text-[20px] text-amber-300">
              <Typography variant="2xl" color="secondary">
                {data?.imdbRating}
              </Typography>
              <FaStar size={25} />
            </div>
            <Button onClick={() => window.open(data?.URL, '_blank')}>
              <FaExternalLinkAlt size={25} />
            </Button>
          </div>

          <div className="w-full flex flex-col">
            <Typography
              variant="xl"
              weight="600"
              className="w-full"
              color="secondary"
            >
              {data?.Title}
            </Typography>
            <Typography
              variant="sm"
              weight="400"
              className="w-full text-justify"
              color="secondary"
            >
              {truncateDesc({ text: data?.Plot, wordLimit: 15 })}
            </Typography>
          </div>

          <Typography
            variant="xs"
            color="tertiary"
            className="w-full flex flex-nowrap overflow-hidden"
          >
            {data?.Genre}
          </Typography>
        </div>
      </div>
      `
    </>
  );
};

// Used at the top 10 recomendation
export const Card2 = ({ title, desc, poster, url }: CardProps) => {
  const t = useTranslations('card');
  return (
    <div className="basis-[18%] flex flex-col flex-shrink-0 text-black">
      <div className="h-96 relative overflow-hidden border border-black">
        <Image
          className="w-full h-full absolute z-20 object-cover"
          src={poster || '/default-poster.jpg'}
          alt={title || 'Poster'}
          layout="fill"
          objectFit="cover"
        />
        <Button className="absolute z-40 bottom-4 right-4 text-white">
          {' '}
          <FaExternalLinkAlt size={20} />{' '}
        </Button>
      </div>
      <div className="p-2 flex flex-col gap-2">
        <Typography variant="xl" color="secondary">
          {truncateDesc({ text: title, wordLimit: 4 })}
        </Typography>
        <Typography variant="sm" color="secondary">
          {truncateDesc({ text: desc, wordLimit: 10 })}
        </Typography>
        <div className="flex gap-2">
          <Button
            buttonType="outline"
            radius="lg"
            className="px-3 py-1 text-[12px] font-semibold"
            onClick={() =>
              window.open('/review', '_blank', 'noopener,noreferrer')
            }
          >
            {t('reviewHere')}
          </Button>
          <Button
            buttonType="ghost"
            className="px-3 py-1 text-[12px] font-semibold"
            onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
          >
            {t('imdb')}
          </Button>
        </div>
      </div>
    </div>
  );
};

// Used at actor and ph
export const Card3 = ({}) => {
  const t = useTranslations('card');
  return (
    <div className="w-40 flex flex-col gap-2">
      <div className="h-40 rounded-[10px] bg-gray-400"></div>
      <Typography variant="lg">{t('name')}</Typography>
    </div>
  );
};

//used at all ive watched
export const Card4 = ({ title, desc, poster }: CardProps) => {
  const t = useTranslations('card');
  return (
    <div className="basis-[23.5%] h-[400px] m-2 flex-shrink-0 relative flex flex-col items-end rounded-[10px] overflow-hidden bg-red-500">
      <Image
        className="w-full h-full absolute z-10 object-cover"
        src={poster || '/default-poster.jpg'}
        alt={title || 'Poster'}
        layout="fill"
        objectFit="cover"
      />
      <div className="w-full h-3/4 absolute bottom-0 z-20 bg-gradient-to-t from-black to-transparent"></div>
      <div className="w-full p-3 absolute bottom-0 z-30 flex flex-col gap-1">
        <Typography variant="lg" weight="600" color="primary">
          {title}
        </Typography>
        <Typography variant="sm" weight="400" color="primary">
          {truncateDesc({ text: desc, wordLimit: 10 })}
        </Typography>
        <Button
          buttonType="solid"
          variant="primary"
          radius="lg"
          className="flex gap-4"
        >
          {t('reviewHere')} <FaExternalLinkAlt />{' '}
        </Button>
      </div>
    </div>
  );
};

// TEST CARD
export const Card5 = ({ title, desc, poster }: CardProps) => {
  const t = useTranslations('card');

  const truncateDesc = ({ text, wordLimit }: truncateDescProps) => {
    if (text === undefined) {
      text = 'Undetected';
    }
    const words = text.split(' ');
    return words.length > (wordLimit || 0)
      ? words.slice(0, wordLimit).join(' ') + '...'
      : text;
  };

  return (
    <div className="basis-[23%] h-[550px] flex-shrink-0 relative flex flex-col items-end rounded-[10px] overflow-hidden">
      <Image
        className="w-full h-full absolute z-10 object-cover"
        src={poster || '/default-poster.jpg'}
        alt={title || 'Poster'}
        layout="fill"
        objectFit="cover"
      />
      <div className="w-full h-full absolute bottom-0 z-20 bg-gradient-to-t from-black to-transparent"></div>
      <div className="w-full p-5 absolute bottom-0 z-30 flex flex-col justify-between gap-2">
        <Typography variant='lg' weight='600' color='primary' className="flex flex-nowrap">
          {title}
        </Typography>
        <Typography variant='sm' weight='500' color='primary' className="text-justify">
          {truncateDesc({ text: desc, wordLimit: 15 })}
        </Typography>
        <Button className="py-2 px-6 flex justify-between gap-2 items-center text-[12px] font-semibold text-black border rounded-[20px] border-white bg-white">
          {t('reviewHere')} <FaExternalLinkAlt />{' '}
        </Button>
      </div>
    </div>
  );
};

export default Card1;
