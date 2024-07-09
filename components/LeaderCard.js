import Image from 'next/image';

const LeaderCard = ({ name, role, image, bio }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 relative aspect-[4/3] md:aspect-auto">
                <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    priority
                />
            </div>
            <div className="w-full md:w-2/3 p-8">
                <div className="uppercase tracking-wide text-sm text-[#FF5402] font-semibold">{role}</div>
                <h3 className="block mt-1 text-lg leading-tight font-medium text-[#0C231B]">{name}</h3>
                <p className="mt-2 text-gray-500">{bio}</p>
            </div>
        </div>
    </div>
);


export default LeaderCard;