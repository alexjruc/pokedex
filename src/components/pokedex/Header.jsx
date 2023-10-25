const Header = () => {
    return (
        <header className="max-w-[1440px] relative mx-auto min-[480px]:pb-8 sm:pb-0 lg:pb-12 min-[1440px]:pb-20">
                
                <img src="/images/vector.svg" alt="" className="absolute w-full max-h-[270px] -translate-y-[25%] "/>
                
                <picture className="flex justify-between items-center mx-auto">
                    <img
                        src="/images/pokedex.png"
                        alt=""
                        className="w-[120px] -translate-y-[25%] translate-x-[15%] min-[480px]:w-[150px] sm:w-[200px] lg:w-[280px]"
                    />
                    <img
                        src="/images/pokemon.png"
                        alt=""
                        className="-translate-y-[10%] -translate-x-[25%] w-[100px] min-[480px]:w-[150px] sm:w-[200px] lg:w-[280px]"
                    />
                </picture>
            </header>
    )
}
export default Header