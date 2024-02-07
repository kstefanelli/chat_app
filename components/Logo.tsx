import LogoImage from '@logos/chat.svg';
import Link from 'next/link';
import { AspectRatio } from './ui/aspect-ratio';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" prefetch={false} className="overflow-hidden">
      <div className="flex items-center w-72 h-14">
        <AspectRatio ratio={16 / 9} className="flex items-center">
          <Image
            priority
            src={LogoImage}
            alt="logo"
            className="dark:filter dark:invert w-16 h-16"
          />
        </AspectRatio>
      </div>
    </Link>
  );
}
