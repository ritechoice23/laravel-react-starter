import React, {ReactElement, ReactNode} from 'react';
import {getShareLink, ShareProvider} from "@/lib/share";
import {Button} from "@/components/ui/button";
import CopyIcon from "@/components/icons/CopyIcon";
import {MailIcon} from "lucide-react";
import TwitterIcon from "@/components/icons/TwitterIcon";
import WhatsappIcon from "@/components/icons/WhatsappIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";
import RedditIcon from "@/components/icons/RedditIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import TelegramIcon from "@/components/icons/TelegramIcon";

interface SocialShareButtonsProps {
    link: string;
    description: string;
    emailTitle?: string;
    isCopying?: boolean;

    onCopy?(): void;

    onNativeShare(): void;

    onClickSocial(provider: ShareProvider): void;

    shortenUrl?: boolean;
}


export function ShareButton({icon, label, onClick}: {
    icon: ReactNode,
    label: string,
    onClick?: () => void
}): ReactElement {
    return <Button
        variant={'secondary'}
        size={'sm'}
        className={'flex-col flex'}
        onClick={onClick}
    >
        {icon}
        <span className={'text-center text-xs'}>
            {label}
       </span>
    </Button>
}

export function SocialShareButtons({
                                       link,
                                       emailTitle,
                                       description,
                                       isCopying,
                                       onCopy,
                                       onNativeShare,
                                       onClickSocial,
                                       shortenUrl = true,
                                   }: SocialShareButtonsProps): ReactElement {

    const openShareLink = async (provider: ShareProvider) => {
        onClickSocial(provider);
        const shareLink = getShareLink({
            provider,
            link: link,
            text:
                provider === ShareProvider.Email
                    ? emailTitle ?? description
                    : description,
        });
        window.open(shareLink, '_blank');
    };

    return (
        <>
            {onCopy && (
                <ShareButton
                    onClick={onCopy}
                    icon={<CopyIcon/>}
                    label={isCopying ? 'Copied!' : 'Copy link'}
                />
            )}
            <ShareButton
                icon={<TwitterIcon/>}
                onClick={() => openShareLink(ShareProvider.Twitter)}
                label="X"
            />
            <ShareButton
                icon={<WhatsappIcon/>}
                onClick={() => openShareLink(ShareProvider.WhatsApp)}
                label="WhatsApp"
            />
            <ShareButton
                icon={<FacebookIcon/>}
                onClick={() => openShareLink(ShareProvider.Facebook)}
                label="Facebook"
            />
            <ShareButton
                icon={<RedditIcon/>}
                onClick={() => openShareLink(ShareProvider.Reddit)}
                label="Reddit"
            />
            <ShareButton
                icon={<LinkedInIcon/>}
                onClick={() => openShareLink(ShareProvider.LinkedIn)}
                label="LinkedIn"
            />
            <ShareButton
                icon={<TelegramIcon/>}
                onClick={() => openShareLink(ShareProvider.Telegram)}
                label="Telegram"
            />
            <ShareButton
                icon={<MailIcon/>}
                onClick={() => openShareLink(ShareProvider.Email)}
                label="Email"
            />
            {/*{'share' in globalThis?.navigator && (*/}
            {/*    <ShareButton*/}
            {/*        icon={<MenuIcon className=""/>}*/}
            {/*        onClick={onNativeShare}*/}
            {/*        label="Share via..."*/}
            {/*    />*/}
            {/*)}*/}
        </>
    );
}

