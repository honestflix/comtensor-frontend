import { Card, CardBody, Button, Link, Progress, CardProps } from "@nextui-org/react";
import { FC } from "react";
import { clsx } from "@nextui-org/shared-utils";

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ReplyIcon from '@mui/icons-material/Reply';
import TwitterIcon from '@mui/icons-material/Twitter';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export interface KaitoProps extends CardProps {
    username: string;
    text: string;
    favorite_count: number;
    quote_count: number;
    reply_count: number;
    retweet_count: number;
}

const KaitoResult: FC<KaitoProps> = ({ className, username, text, favorite_count, quote_count, reply_count, retweet_count }) => {
    return (
        <Card
            isBlurred
            className={clsx("border-none bg-background/60 dark:bg-default-100/50", className)}
            shadow="sm"
        >
            <CardBody>
                <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center border border-gray-10 py-4 px-8 rounded-md">
                    <div className="relative col-span-6 md:col-span-4">
                        <img
                            alt="Comtensor logo"
                            className="object-cover shadow-red-20 justify-start items-start"
                            src="images/com-logo.png"
                            style={{ width: '150px' }}
                        />
                    </div>
                    <div className="flex flex-col col-span-6 md:col-span-8">
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-0">
                                <h1 className="text-lg font-medium mt-2"><AccountCircleIcon />&nbsp;{username}</h1>
                            </div>
                            <Link href={"/"} className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Twitter">
                                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                                </svg>
                            </Link>
                        </div>
                        <div className="flex flex-col mt-3 gap-1 justify-center items-center">
                            <p>{text}</p>
                        </div>

                        <div className="flex w-full items-center justify-center gap-16">
                            <Button
                                isIconOnly
                                className="data-[hover]:bg-foreground/10 w-12"
                                radius="full"
                                variant="light"
                            >
                                <FormatQuoteIcon />&nbsp;{quote_count}
                            </Button>
                            <Button
                                isIconOnly
                                className="data-[hover]:bg-foreground/10 w-12"
                                radius="full"
                                variant="light"

                            >
                                <ReplyIcon />&nbsp;{reply_count}
                            </Button>
                            <Button
                                isIconOnly
                                className="data-[hover]:bg-foreground/10 w-12"
                                radius="full"
                                variant="light"
                            >
                                <TwitterIcon />&nbsp;{retweet_count}
                            </Button>
                            <Button
                                isIconOnly
                                className="data-[hover]:bg-foreground/10 w-12"
                                radius="full"
                                variant="light"
                            >
                                <ThumbUpIcon />&nbsp;{favorite_count}
                            </Button>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default KaitoResult;