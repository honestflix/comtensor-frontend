import { Card, CardBody, CardProps } from "@nextui-org/react";
import { FC } from "react";
import { clsx } from "@nextui-org/shared-utils";
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

export interface ItsaiProps extends CardProps {
    texts: string;
    predictions: boolean;
}

const ItsaiResult: FC<ItsaiProps> = ({ className, texts, predictions }) => {
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
                                <h1 className="text-lg font-medium mt-2"><AppRegistrationIcon />&nbsp;{predictions}</h1>
                            </div>
                            <h1 className="text-lg font-medium mt-2"><LightbulbIcon />&nbsp;1 : Content by Bot</h1>
                            <h1 className="text-lg font-medium mt-2"><LightbulbIcon />&nbsp;0 : Contnet by Human</h1>
                        </div>
                        <div className="flex flex-col mt-3 gap-1 justify-center items-center">
                            <p>{texts}</p>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default ItsaiResult;