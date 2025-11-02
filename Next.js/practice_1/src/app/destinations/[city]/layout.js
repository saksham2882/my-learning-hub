const CityLayout = ({ children, info }) => {
    return (
        <div className="flex flex-col md:flex-row w-full h-full overflow-hidden">
            <div className="md:w-3/5 w-full border-yellow-900/40 max-md:border-b">
                {children}
            </div>

            <div className="md:w-2/5 w-full overflow-y-auto bg-black text-white flex justify-center items-center p-4">
                {info}
            </div>
        </div>
    );
};

export default CityLayout;
