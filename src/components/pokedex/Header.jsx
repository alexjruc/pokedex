const Header = () => {
    return (
        <header className="h-[80px] sm:h-[120px] md:h-[160px] lg:h-[180px] max-w-[1000px] mx-auto">
                
                <img src="/images/vector.svg" alt="" className="absolute w-screen max-w-[1000px] -translate-y-[25%]"/>
                
                <picture className="flex justify-between items-center">
                    <img
                        src="/images/pokedex.png"
                        alt=""
                        className="w-[120px] -translate-y-[25%] translate-x-[15%] z-10 sm:w-[270px]"
                    />
                    <img
                        src="/images/pokemon.png"
                        alt=""
                        className="-translate-y-[10%] -translate-x-[25%] w-[100px] z-10 sm:w-[240px]"
                    />
                </picture>
            </header>
    )
}
export default Header