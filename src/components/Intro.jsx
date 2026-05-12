function Intro() {

    const specs = [
        { value: '6.3"', label: 'Display Super Retina XDR', color: 'text-blue-600' },
        { value: 'A18 Pro', label: 'Chip mais rápido', color: 'text-orange-500'},
        { value: '48MP', label: 'Sistema de câmera', color: 'text-blue-600'},
        { value: '29h', label: 'Bateria', color: 'text-orange-500' },
    ];

    return (
        <section className="bg-black py-20 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6">iPhone 17 Pro</h1>
                <p className="text-xl md:text-2xl lg:text-4xl mb-4 text-gradient font-bold">Titânio. Tão forte. Tão leve. Tão Pro</p>
                <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">O design mais refinado que já criamos. Titânio de grau aeroespacial. Chip A18 Pro. Sistema de câmera Pro revolucionário</p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
                <button className="bg-blue-600 hover:bg-blue-700 px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/50 cursor-pointer w-full sm:w-auto">Compre Agora</button>
                <button className="border-2 border-white rounded-full hover:bg-white hover:text-black text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer w-full sm:w-auto">Saiba Mais</button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mx-auto max-w-5xl">
                {specs.map((spec, index) => (
                    <div key={index} className="bg-gray-900 rounded-2xl p-4 md:p-6 hover:bg-gray-800 transition-all duration-300 hover:scale-105 cursor-pointer">
                        <p className={`text-2xl md:text-3xl font-bold ${spec.color}`}>{spec.value}</p>
                        <p className="text-sm md:text-base">{spec.label}</p>
                    </div>
                ))  }
            </div>

        </section>
    );
}

export default Intro
