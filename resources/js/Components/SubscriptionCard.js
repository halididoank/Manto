import Button from "@/Components/Button";
export default function SubscriptionCard({
    id,
    name,
    price,
    durationInMohth,
    features,
    isPremium,
    onSelectSubscription,
}) {
    return (
        <>
            {/* Basic */}
            {!isPremium && (
                <div className="flex flex-col gap-[30px] py-[30px] px-7 outline outline-1 outline-[#F1F1F1] rounded-[26px] text-black w-[300px] h-[max-content]">
                    <div>
                        <div className="text-sm mb-2">{name}</div>
                        <div className="text-[28px] font-bold">
                            IDR {price.toLocaleString()}
                        </div>
                        <p className="text-gray-1 text-xs font-light">
                            /{durationInMohth} months
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        {features.map((features, index) => (
                            <div
                                className="flex items-center gap-2"
                                key={`${index}-${id}-${features}`}
                            >
                                <img src="/icons/ic_tick.svg" alt="" />
                                <span className="text-sm">{features}</span>
                            </div>
                        ))}
                    </div>
                    <div onClick={onSelectSubscription}>
                        <Button
                            href="payment_status/failed.html"
                            className="rounded-2xl border border-[#F1F1F1] py-[13px] text-center grid"
                            type="button"
                            variant="white-outline"
                        >
                            <span className="text-base">Start {name}</span>
                        </Button>
                    </div>
                </div>
            )}

            {/* Premium */}
            {isPremium && (
                <div className="flex flex-col gap-[30px] py-[30px] px-7 outline outline-1 outline-[#F1F1F1] rounded-[26px] text-white w-[300px] bg-black">
                    <div className="bg-alerange rounded-full p-[13px] max-w-max">
                        <img src="/icons/ic_star.svg" width="24" alt="" />
                    </div>
                    <div>
                        <div className="text-sm mb-2">{name}</div>
                        <div className="text-[28px] font-bold">
                            IDR {price.toLocaleString()}
                        </div>
                        <p className="text-[#767676] text-xs font-light">
                            /{durationInMohth} months
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        {features.map((features, index) => (
                            <div
                                className="flex items-center gap-2"
                                key={`${index}-${id}-${features}`}
                            >
                                <img src="/icons/ic_tick.svg" alt="" />
                                <span className="text-sm">{features}</span>
                            </div>
                        ))}
                    </div>

                    <div onClick={onSelectSubscription}>
                        <Button
                            type="button"
                            href="payment_status/success.html"
                            className="rounded-2xl bg-alerange py-[13px] text-center grid"
                        >
                            <span className="text-base font-semibold">
                                Start {name}
                            </span>
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
}
