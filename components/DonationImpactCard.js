const DonationImpactCard = ({ icon, title, description }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-[#0C231B] mb-2">{title}</h3>
            <p className="text-[#0C231B]">{description}</p>
        </div>
    );
};

export default DonationImpactCard;