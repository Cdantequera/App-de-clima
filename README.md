# 🌤️ Aplicación del Clima

Una aplicación web moderna y dinámica para consultar el clima en tiempo real, con fondos animados que se adaptan a las condiciones climáticas.

## ✨ Características

- 🌡️ **Clima en tiempo real** - Consulta el clima actual de San Miguel de Tucumán por defecto
- 🔍 **Buscador de ciudades** - Busca el clima de cualquier ciudad del mundo
- 🎨 **Fondos dinámicos** - El fondo cambia según las condiciones climáticas:
  - ☀️ Cielo diurno con sol y nubes
  - 🌙 Cielo nocturno con luna y estrellas
  - 🌧️ Efecto de lluvia animado
- ⏰ **Reloj en vivo** - Hora y fecha actualizadas en tiempo real
- 📱 **Diseño responsivo** - Se adapta a diferentes tamaños de pantalla

## 🛠️ Tecnologías

- **React** - Biblioteca de JavaScript para la interfaz
- **Vite** - Herramienta de construcción rápida
- **WeatherAPI** - API para datos meteorológicos
- **CSS3** - Animaciones y estilos personalizados

## 📋 Requisitos Previos

- Node.js (versión 14 o superior)
- npm o yarn
- Cuenta en [WeatherAPI](https://www.weatherapi.com/) para obtener una API key

## 🚀 Instalación

1. **Clona el repositorio**
```bash
git clone <url-del-repositorio>
cd <nombre-del-proyecto>
```

2. **Instala las dependencias**
```bash
npm install
```

3. **Configura la API Key**

Crea un archivo `.env` en la raíz del proyecto:
```env
VITE_WEATHER_API_KEY=tu_api_key_aqui
```

Para obtener tu API key:
- Visita [WeatherAPI.com](https://www.weatherapi.com/)
- Regístrate para obtener una cuenta gratuita
- Copia tu API key desde el dashboard

4. **Inicia el servidor de desarrollo**
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 📁 Estructura del Proyecto

```
src/
├── App.jsx                          # Componente principal
├── App.css                          # Estilos globales
├── components/
│   ├── Header/
│   │   └── Header.jsx              # Encabezado de la aplicación
│   ├── Footer/
│   │   └── Footer.jsx              # Pie de página
│   ├── LeftAside/
│   │   └── LeftAside.jsx           # Barra lateral con buscador
│   ├── MainContent/
│   │   └── MainContent.jsx         # Contenido principal con clima
│   ├── GlobosFlotadores/
│   │   ├── GlobosFlotadores.jsx    # Fondo animado día/noche
│   │   ├── GlobosFlotadores.css    # Estilos del fondo
│   │   └── DynamicBackground.jsx   # Gestor de fondos dinámicos
│   └── ModernCards.css             # Estilos de tarjetas del clima
```

## 🎯 Uso

### Clima Local
Al abrir la aplicación, verás automáticamente el clima de San Miguel de Tucumán en el centro de la pantalla.

### Buscar Otras Ciudades
1. Usa el buscador en la barra lateral izquierda
2. Escribe el nombre de una ciudad
3. Haz clic en "Buscar"
4. El clima de la ciudad aparecerá en la barra lateral

### Fondos Dinámicos
El fondo de la aplicación cambia automáticamente según:
- **Hora del día** - Sol durante el día, luna durante la noche
- **Condiciones climáticas** - Animación de lluvia cuando llueve

## 🎨 Personalización

### Cambiar la Ciudad por Defecto
Edita `App.jsx` línea 20:
```javascript
const response = await fetch(
  `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Tu Ciudad&aqi=no&lang=es`
);
```

### Modificar Colores y Estilos
- **Colores globales**: `App.css`
- **Tarjetas del clima**: `ModernCards.css`
- **Fondos animados**: `GlobosFlotadores.css`

## 🌐 API Utilizada

**WeatherAPI** - [weatherapi.com](https://www.weatherapi.com/)

Endpoint utilizado:
```
GET https://api.weatherapi.com/v1/current.json
```

Parámetros:
- `key` - Tu API key
- `q` - Ciudad a consultar
- `aqi` - Datos de calidad del aire (desactivado)
- `lang` - Idioma de respuesta (español)

## 🔧 Scripts Disponibles

```bash
npm run dev        # Inicia el servidor de desarrollo
npm run build      # Construye la aplicación para producción
npm run preview    # Previsualiza la versión de producción
```

## 📝 Notas

- La aplicación funciona con datos de ejemplo si no se configura la API key
- Los datos del clima se actualizan al cargar la página
- Se requiere conexión a internet para consultar el clima en tiempo real

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:
1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/NuevaCaracteristica`)
3. Commit tus cambios (`git commit -m 'Agrega nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia de The Goog.

## 👨‍💻 Autor

Desarrollado con ❤️ por DAnte.Dev

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
