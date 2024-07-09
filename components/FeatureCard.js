const FeatureCard = ({ icon, title, description }) => (
    <div className="bg-white rounded-lg shadow-md p-6 transform transition duration-300 hover:scale-105">
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-[#0C231B] mb-2 text-center">{title}</h3>
        <p className="text-[#0C231B] text-center">{description}</p>
    </div>
);

export default FeatureCard;