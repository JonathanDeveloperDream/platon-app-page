import React, { useState, useEffect } from 'react';
import { ChefHat, UtensilsCrossed, Wine, Leaf, Heart, Star, Moon, Sun, X, Check } from 'lucide-react';

const RestaurantMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [darkMode, setDarkMode] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // URL de la imagen de fondo para el hero - Puedes cambiarla por la foto de tu local
  const heroBackgroundImage = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600';

  // Detectar scroll para cambiar tamaño del botón
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Limpiar al desmontar el componente
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedItem]);

  const menuItems = [
    {
      id: 1,
      name: 'Bruschetta Italiana',
      category: 'entradas',
      price: 8.99,
      description: 'Tomate fresco, albahaca, ajo y aceite de oliva sobre pan tostado',
      image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400',
      rating: 4.8,
      vegetarian: true,
      fullDescription: 'Una deliciosa entrada italiana tradicional que combina la frescura de los tomates maduros con el aroma de la albahaca fresca. Servida sobre pan artesanal tostado y rociada con nuestro mejor aceite de oliva extra virgen.',
      includes: [
        'Pan artesanal tostado (4 piezas)',
        'Tomates cherry frescos',
        'Albahaca fresca del huerto',
        'Ajo rostizado',
        'Aceite de oliva extra virgen',
        'Sal marina y pimienta negra'
      ]
    },
    {
      id: 2,
      name: 'Salmón a la Parrilla',
      category: 'principales',
      price: 24.99,
      description: 'Filete de salmón con verduras asadas y salsa de limón',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400',
      rating: 4.9,
      fullDescription: 'Filete de salmón noruego fresco, perfectamente asado a la parrilla, acompañado de una selección de verduras de temporada y nuestra especial salsa de limón con hierbas finas.',
      includes: [
        'Filete de salmón fresco (200g)',
        'Verduras asadas de temporada',
        'Papas al romero',
        'Salsa de limón y eneldo',
        'Espárragos verdes',
        'Mantequilla de ajo'
      ]
    },
    {
      id: 3,
      name: 'Risotto de Hongos',
      category: 'principales',
      price: 18.99,
      description: 'Cremoso risotto con hongos silvestres y parmesano',
      image: 'https://images.unsplash.com/photo-1476124369491-c4b7d4d6e93c?w=400',
      rating: 4.7,
      vegetarian: true,
      fullDescription: 'Risotto cremoso preparado con arroz arborio italiano, una mezcla selecta de hongos silvestres y generosamente coronado con queso parmesano reggiano envejecido.',
      includes: [
        'Arroz arborio italiano',
        'Mezcla de hongos silvestres',
        'Queso parmesano reggiano',
        'Vino blanco',
        'Caldo de vegetales casero',
        'Trufa negra (opcional)',
        'Aceite de trufa'
      ]
    },
    {
      id: 4,
      name: 'Tiramisu Casero',
      category: 'postres',
      price: 7.99,
      description: 'Clásico postre italiano con café y mascarpone',
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400',
      rating: 5.0,
      vegetarian: true,
      fullDescription: 'El auténtico tiramisú italiano, preparado diariamente con nuestra receta familiar. Capas de bizcochos savoiardi bañados en espresso italiano y crema de mascarpone, espolvoreado con cacao puro.',
      includes: [
        'Bizcochos savoiardi artesanales',
        'Crema de mascarpone fresco',
        'Espresso italiano',
        'Cacao en polvo premium',
        'Licor amaretto',
        'Decoración de chocolate'
      ]
    },
    {
      id: 5,
      name: 'Ensalada Caesar',
      category: 'entradas',
      price: 9.99,
      description: 'Lechuga romana, crutones, parmesano y aderezo caesar',
      image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400',
      rating: 4.6,
      vegetarian: true,
      fullDescription: 'La clásica ensalada Caesar con lechuga romana fresca, crutones crujientes hechos en casa y nuestro aderezo Caesar preparado con la receta tradicional.',
      includes: [
        'Lechuga romana fresca',
        'Crutones caseros',
        'Queso parmesano en láminas',
        'Aderezo Caesar tradicional',
        'Anchoas (opcional)',
        'Limón fresco'
      ]
    },
    {
      id: 6,
      name: 'Filete Mignon',
      category: 'principales',
      price: 32.99,
      description: 'Filete de res premium con puré de papas trufado',
      image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400',
      rating: 4.9,
      fullDescription: 'El corte más tierno de res premium, cocido a tu término preferido. Acompañado de un suave puré de papas con aceite de trufa y verduras glaseadas.',
      includes: [
        'Filete mignon de res premium (250g)',
        'Puré de papas con trufa',
        'Verduras glaseadas',
        'Salsa de vino tinto reducida',
        'Mantequilla de hierbas',
        'Espárragos envueltos en tocino'
      ]
    },
    {
      id: 7,
      name: 'Cheesecake de Frutos Rojos',
      category: 'postres',
      price: 8.99,
      description: 'Cremoso cheesecake con coulis de frutos del bosque',
      image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=400',
      rating: 4.8,
      vegetarian: true,
      fullDescription: 'Cheesecake de estilo neoyorquino con una textura increíblemente cremosa, sobre una base de galleta graham. Coronado con un coulis de frutos rojos frescos.',
      includes: [
        'Cheesecake cremoso',
        'Base de galleta graham',
        'Coulis de frutos del bosque',
        'Fresas frescas',
        'Arándanos',
        'Frambuesas',
        'Crema batida'
      ]
    },
    {
      id: 8,
      name: 'Pasta Carbonara',
      category: 'principales',
      price: 16.99,
      description: 'Pasta fresca con panceta, huevo y queso pecorino',
      image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400',
      rating: 4.7,
      fullDescription: 'La auténtica carbonara romana preparada con pasta fresca hecha en casa, panceta italiana crujiente y una cremosa salsa de huevo y queso pecorino romano.',
      includes: [
        'Pasta fresca fettuccine',
        'Panceta italiana',
        'Yemas de huevo orgánicas',
        'Queso pecorino romano',
        'Pimienta negra recién molida',
        'Perejil fresco'
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'Todo', icon: UtensilsCrossed },
    { id: 'entradas', name: 'Entradas', icon: Leaf },
    { id: 'principales', name: 'Platos Principales', icon: ChefHat },
    { id: 'postres', name: 'Postres', icon: Heart }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <>
      <style>{`
        /* Scrollbar personalizado para modo oscuro */
        .dark-scrollbar::-webkit-scrollbar {
          width: 12px;
        }
        .dark-scrollbar::-webkit-scrollbar-track {
          background: #262626;
          border-radius: 10px;
        }
        .dark-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #57534e 0%, #78716c 100%);
          border-radius: 10px;
          border: 2px solid #262626;
        }
        .dark-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #78716c 0%, #a8a29e 100%);
        }

        /* Scrollbar personalizado para modo claro */
        .light-scrollbar::-webkit-scrollbar {
          width: 12px;
        }
        .light-scrollbar::-webkit-scrollbar-track {
          background: #f5f5f4;
          border-radius: 10px;
        }
        .light-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #d6d3d1 0%, #a8a29e 100%);
          border-radius: 10px;
          border: 2px solid #f5f5f4;
        }
        .light-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #a8a29e 0%, #78716c 100%);
        }

        /* Scrollbar para todo el body */
        body::-webkit-scrollbar {
          width: 14px;
        }
        body::-webkit-scrollbar-track {
          background: ${darkMode ? '#171717' : '#fafaf9'};
        }
        body::-webkit-scrollbar-thumb {
          background: ${darkMode ? 'linear-gradient(180deg, #57534e 0%, #78716c 100%)' : 'linear-gradient(180deg, #d6d3d1 0%, #a8a29e 100%)'};
          border-radius: 10px;
          border: 3px solid ${darkMode ? '#171717' : '#fafaf9'};
        }
        body::-webkit-scrollbar-thumb:hover {
          background: ${darkMode ? 'linear-gradient(180deg, #78716c 0%, #a8a29e 100%)' : 'linear-gradient(180deg, #a8a29e 0%, #78716c 100%)'};
        }
      `}</style>
      <div className={`min-h-screen transition-colors duration-500 ${
        darkMode 
          ? 'bg-gradient-to-br from-neutral-900 via-stone-900 to-neutral-900' 
          : 'bg-gradient-to-br from-stone-50 via-neutral-50 to-stone-100'
      }`}>
      {/* Botón de tema */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed z-50 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
          isScrolled ? 'top-3 right-3 p-2' : 'top-6 right-6 p-3'
        } ${
          darkMode 
            ? 'bg-neutral-800 text-amber-300 hover:bg-neutral-700' 
            : 'bg-white text-amber-600 hover:bg-stone-100'
        }`}
      >
        {darkMode ? (
          <Sun className={`transition-all duration-300 ${isScrolled ? 'w-4 h-4' : 'w-5 h-5'}`} />
        ) : (
          <Moon className={`transition-all duration-300 ${isScrolled ? 'w-4 h-4' : 'w-5 h-5'}`} />
        )}
      </button>

      {/* Modal de detalles del platillo */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300">
          <div className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl ${
            darkMode ? 'bg-neutral-800 dark-scrollbar' : 'bg-white light-scrollbar'
          }`}>
            {/* Botón cerrar */}
            <button
              onClick={() => setSelectedItem(null)}
              className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-all hover:scale-110 ${
                darkMode 
                  ? 'bg-neutral-700 text-stone-200 hover:bg-neutral-600' 
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Imagen grande */}
            <div className="relative h-80 overflow-hidden rounded-t-3xl">
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 ${
                darkMode 
                  ? 'bg-gradient-to-t from-neutral-800 via-transparent to-transparent' 
                  : 'bg-gradient-to-t from-white via-transparent to-transparent'
              }`}></div>
              
              {selectedItem.vegetarian && (
                <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                  <Leaf className="w-4 h-4" />
                  Vegetariano
                </div>
              )}
            </div>

            {/* Contenido del modal */}
            <div className="p-8 space-y-6">
              {/* Título y precio */}
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h2 className={`text-4xl font-serif ${
                    darkMode ? 'text-stone-100' : 'text-stone-800'
                  }`}>
                    {selectedItem.name}
                  </h2>
                </div>

                <div className={`px-4 py-3 rounded-full font-bold text-1xl shadow-lg ${
                  darkMode 
                    ? 'bg-stone-100 text-neutral-900' 
                    : 'bg-neutral-900 text-stone-50'
                }`}>
                  ${selectedItem.price}
                </div>
              </div>

              {/* Descripción completa */}
              <div>
                <h3 className={`text-xl font-semibold mb-3 ${
                  darkMode ? 'text-stone-200' : 'text-stone-700'
                }`}>
                  Descripción
                </h3>
                <p className={`text-lg leading-relaxed ${
                  darkMode ? 'text-stone-400' : 'text-stone-600'
                }`}>
                  {selectedItem.fullDescription}
                </p>
              </div>

              {/* Lo que incluye */}
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${
                  darkMode ? 'text-stone-200' : 'text-stone-700'
                }`}>
                  Este platillo incluye:
                </h3>
                <div className="grid gap-3">
                  {selectedItem.includes.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-3 p-3 rounded-lg ${
                        darkMode ? 'bg-neutral-700/50' : 'bg-stone-100'
                      }`}
                    >
                      <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        darkMode ? 'text-green-400' : 'text-green-600'
                      }`} />
                      <span className={`${
                        darkMode ? 'text-stone-300' : 'text-stone-700'
                      }`}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botón de ordenar
              <button className={`w-full font-semibold text-lg py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg ${
                darkMode 
                  ? 'bg-stone-100 text-neutral-900 hover:bg-stone-200' 
                  : 'bg-neutral-900 text-stone-50 hover:bg-neutral-800'
              }`}>
                Ordenar Ahora
              </button> */}
            </div>
          </div>
        </div>
      )}

      {/* Sección Hero */}
      <div className="relative h-[70vh] md:h-screen flex items-center justify-center overflow-hidden">
        {/* Imagen de fondo */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBackgroundImage})`
          }}
        ></div>
        
        {/* Overlay oscuro/claro sobre la imagen */}
        <div className={`absolute inset-0 transition-colors duration-500 ${
          darkMode 
            ? 'bg-neutral-900/75' 
            : 'bg-white/60'
        }`}></div>
        
        {/* Patrón decorativo sutil */}
        <div className={`absolute inset-0 opacity-5 ${
          darkMode ? 'bg-neutral-800' : 'bg-stone-300'
        }`} style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-2 2zm0-2v-2 2zm0-2v-2 2zm0-2v-2 2zm0-2v-2 2zm0-2v-2 2zm0-2v-2 2zm0-2v-2 2zm0-2v-2 2zm0-2v-2 2zm0-2v-2 2zm0-2v-2 2zm0-2v-2 2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative z-10 text-center px-4 space-y-3 md:space-y-4">
          <ChefHat className={`w-16 h-16 md:w-20 md:h-20 mx-auto ${
            darkMode ? 'text-stone-300' : 'text-stone-700'
          }`} />
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-wide ${
            darkMode 
              ? 'text-stone-100' 
              : 'text-stone-800'
          }`}>
            Nombre del negocio
          </h1>
          <div className={`w-20 md:w-24 h-0.5 mx-auto ${
            darkMode ? 'bg-stone-500' : 'bg-stone-400'
          }`}></div>
          <p className={`text-base md:text-lg lg:text-xl font-light max-w-2xl mx-auto ${
            darkMode ? 'text-stone-400' : 'text-stone-600'
          }`}>
            Este es un eslogan personalizado para el negocio
          </p>
        </div>

        <div className={`absolute bottom-0 left-0 right-0 h-24 md:h-32 ${
          darkMode 
            ? 'bg-gradient-to-t from-neutral-900 to-transparent' 
            : 'bg-gradient-to-t from-stone-50 to-transparent'
        }`}></div>
      </div>

      {/* Barra de categorías */}
      <div className={`sticky top-0 z-20 backdrop-blur-md shadow-lg transition-colors duration-500 ${
        darkMode 
          ? 'bg-neutral-900/95 border-b border-neutral-800' 
          : 'bg-white/95 border-b border-stone-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-3 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? darkMode 
                        ? 'bg-stone-100 text-neutral-900 shadow-lg'
                        : 'bg-neutral-900 text-stone-50 shadow-lg'
                      : darkMode
                        ? 'bg-neutral-800 text-stone-300 hover:bg-neutral-700'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Grid de platillos */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
                darkMode 
                  ? 'bg-neutral-800 border border-neutral-700' 
                  : 'bg-white border border-stone-200'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 ${
                  darkMode 
                    ? 'bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent' 
                    : 'bg-gradient-to-t from-white via-white/40 to-transparent'
                }`}></div>
                
                {item.vegetarian && (
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <Leaf className="w-3 h-3" />
                    Vegetariano
                  </div>
                )}
                
                <div className={`absolute bottom-4 right-4 px-4 py-2 rounded-full font-semibold text-lg shadow-lg ${
                  darkMode 
                    ? 'bg-stone-100 text-neutral-900' 
                    : 'bg-neutral-900 text-stone-50'
                }`}>
                  ${item.price}
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className={`text-2xl font-serif ${
                  darkMode 
                    ? 'text-stone-100 group-hover:text-stone-300' 
                    : 'text-stone-800 group-hover:text-stone-600'
                } transition-colors`}>
                  {item.name}
                </h3>
                
                <div className={`flex items-center gap-1 ${
                  darkMode ? 'text-stone-400' : 'text-stone-600'
                }`}>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(item.rating)
                          ? darkMode 
                            ? 'fill-stone-400 text-stone-400' 
                            : 'fill-stone-600 text-stone-600'
                          : darkMode 
                            ? 'text-neutral-700' 
                            : 'text-stone-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm font-medium">
                    {item.rating}
                  </span>
                </div>

                <p className={`leading-relaxed ${
                  darkMode ? 'text-stone-400' : 'text-stone-600'
                }`}>
                  {item.description}
                </p>

                <div className={`text-sm font-medium pt-2 ${
                  darkMode ? 'text-stone-500' : 'text-stone-500'
                }`}>
                  Clic para ver detalles completos →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className={`border-t py-12 transition-colors duration-500 ${
        darkMode 
          ? 'bg-neutral-950 border-neutral-800' 
          : 'bg-stone-100 border-stone-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
          <div className={`flex items-center justify-center gap-2 ${
            darkMode ? 'text-stone-400' : 'text-stone-600'
          }`}>
            <Wine className="w-6 h-6" />
            <ChefHat className="w-8 h-8" />
            <UtensilsCrossed className="w-6 h-6" />
          </div>
          <p className={`text-lg font-serif ${
            darkMode ? 'text-stone-300' : 'text-stone-700'
          }`}>
            Nombre del negocio
          </p>
          <p className={`text-sm ${
            darkMode ? 'text-stone-500' : 'text-stone-500'
          }`}>
            Eslogan del negocio
          </p>
          <p className={`text-sm ${
            darkMode ? 'text-stone-600' : 'text-stone-400'
          }`}>
            © {new Date().getFullYear()} nombre del negocio. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
    </>
  );
};

export default RestaurantMenu;