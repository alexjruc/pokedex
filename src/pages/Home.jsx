const Home = () => {
    return (
        <main className="bg-[url('/images/bg-pokemon.png')] bg-cover bg-center w-full min-h-screen grid justify-center items-center font-home p-3 overflow-hidden">
            <section className="bg-white/75 w-11/12 mx-auto border-8 border-black relative grid gap-4 rounded-[3rem] pb-36 pt-10 px-6 justify-center">
                <img
                    src="/images/pokemon.png"
                    alt="logo pokemon"
                    className="absolute w-48 -top-16 right-1/2 translate-x-1/2"
                />
                <img src="/images/pokedex.png" alt="logo pokedex" className="p-4 sm:w-1/2 sm:mx-auto " />
                <h2 className="font-semibold text-center text-2xl">Hello trainer!</h2>
                <form className="grid gap-6 place-items-center">
                    <input
                        type="text"
                        placeholder="Give me your name to start"
                        className="bg-transparent border border-[#004280] outline-none rounded-xl p-4 placeholder:text-black sm:px-36"
                    />
                    <button type="submit" className="font-semibold bg-[#FF6B57] w-[150px] rounded-lg p-2 sm:w-[300px]">
                        Start
                    </button>
                </form>
                <img
                    src="/images/pokeball.png"
                    alt="pokeball"
                    className="absolute w-[120px] bottom-3 -right-[28%] sm:w-[230px] sm:-right-[25%]"
                />
            </section>
        </main>
    );
};
export default Home;
