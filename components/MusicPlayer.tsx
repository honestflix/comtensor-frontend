import { Card, CardBody, Button, Image, Progress, CardProps } from "@nextui-org/react";
import { useState, FC } from "react";
import { clsx } from "@nextui-org/shared-utils";

import PlayArrow from '@mui/icons-material/PlayArrow';
import PauseCircle from "@mui/icons-material/PauseCircle";
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatOnIcon from '@mui/icons-material/RepeatOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import AudioFileRounded from "@mui/icons-material/AudioFileRounded";

export interface MusicPlayerProps extends CardProps {
  title_pro: string;
  duration: number;
}

const MusicPlayer: FC<MusicPlayerProps> = ({ className, title_pro, duration }) => {
  const [liked, setLiked] = useState(false);
  const [isPlay, setPlay] = useState(true);

  return (
    <Card
      isBlurred
      className={clsx("border-none bg-background/60 dark:bg-default-100/50", className)}
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover shadow-black/20"
              height={100}
              shadow="lg"
              src="images/com-logo.png"
              width="50%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-foreground/90">Prompt context</h3>
                <p className="text-xl text-foreground/80">{title_pro}</p>
                <h1 className="text-lg font-medium mt-2"><AudioFileRounded />Listen generated audio</h1>
              </div>
              <Button
                isIconOnly
                className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                radius="full"
                variant="light"
                onPress={() => setLiked((v) => !v)}
              >
                {liked ? (<FavoriteIcon />) : (<FavoriteBorderOutlined />)}
              </Button>
            </div>

            <div className="flex flex-col mt-3 gap-1">
              <Progress
                aria-label="Music progress"
                classNames={{
                  indicator: "bg-default-800 dark:bg-white",
                  track: "bg-default-500/30",
                }}
                color="primary"
                size="sm"
                value={duration}
              />
              <div className="flex justify-between">
                <p className="text-sm">1:23</p>
                <p className="text-sm text-foreground/50">4:32</p>
              </div>
            </div>

            <div className="flex w-full items-center justify-center">
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <RepeatOnIcon className="text-foreground/80 w-12" />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <SkipPreviousIcon />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
                onPress={() => setPlay((v) => !v)}
              >
                {isPlay ? (<PlayArrow className="w-12" />):(<PauseCircle className="w-12"/>)}
                
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <SkipNextIcon />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <ShuffleIcon className="text-foreground/80 w-12" />
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default MusicPlayer;