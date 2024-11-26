import React from 'react';
import {SocialShareButtons} from "@/components/SocialShareButtons";
import {toast} from "react-toastify";

const InvitePeople = () => {
    const good = () => {
        // alert('ldjsalf')
    }
    const link = 'https://zionstack.com/register?ref=ritechoice23';
    const copyToClipboard = () => {
        navigator.clipboard?.writeText(link);
        toast.success('Link copied to clipboard!')
    };


    const handleNativeShare = async () => {
        const shareData = {
            title: 'Check this out!',
            text: 'Join me at Zionstack.com, and let\'s stay updated together',
            url: link,
        };
        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
            }
        }
    };
    return (
        <>
            <div className="p-4 bg-white rounded-lg shadow-lg mt-2">
                <h2 className="text-lg font-semibold mb-2">Invite friends</h2>
                <p className="text-sm text-gray-600 mb-4">
                    Invite other believers to discover how easy it is to stay updated with zionstack faith feed
                </p>
                <div className="flex items-center border border-blue-400 rounded-lg p-2">
        <span className="flex-grow text-sm text-gray-800 overflow-hidden overflow-ellipsis">
          {link}
        </span>
                    <button
                        onClick={copyToClipboard}
                        className="ml-4 bg-gray-900 text-white text-sm font-medium py-1 px-3 rounded-lg"
                    >
                        Copy link
                    </button>
                </div>
            </div>
            <div className={'flex  gap-2 flex-wrap mt-4 justify-center '}>
                <SocialShareButtons link={link}
                                    description={'Join me at Zionstack.com, and let\'s stay updated together'}
                                    onNativeShare={handleNativeShare}
                                    onClickSocial={good}/>
            </div>
        </>

    )
        ;
};

export default InvitePeople;
