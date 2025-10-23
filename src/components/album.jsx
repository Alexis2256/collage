function Album({ titulo, imagenes }) {
    return (
        <div className="w-full max-w-7xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">{titulo}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg">
                {imagenes.map((imagen, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <img 
                            src={imagen.url} 
                            alt={imagen.alt} 
                            className="w-full h-48 object-contain hover:scale-105 transition-transform duration-300 bg-gray-200"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Album;