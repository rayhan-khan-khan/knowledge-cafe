import profile from "../../assets/images/profile.png"

const Header = () => {
    return (
        <header className="flex justify-between max-w-6xl p-4 mx-auto border-b-2 items-center mt-2">
            <h3 className="text-3xl font-bold">Knowladge caf</h3>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;