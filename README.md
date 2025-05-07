# Barbers Medayork - Frontend
## 📋 Descripción
Barbers Medayork es una aplicación web para la gestión de citas en barberías. Permite a los usuarios reservar citas con sus barberos favoritos, elegir servicios específicos y administrar sus reservas. Además, cuenta con un panel de administración para la gestión de citas, barberos y servicios.

## ✨ Características
- Reserva de citas : Los usuarios pueden seleccionar barbero, servicio, fecha y hora para sus citas.
- Panel de usuario : Interfaz personalizada donde los usuarios pueden ver sus citas programadas y su historial.
- Panel de administración : Gestión completa de citas, barberos y servicios disponibles.
- Diseño responsivo : Experiencia de usuario optimizada para dispositivos móviles y de escritorio.
- Autenticación : Sistema de inicio de sesión para usuarios y administradores.
## 🛠️ Tecnologías utilizadas
- React : Biblioteca JavaScript para construir interfaces de usuario
- React Router : Navegación entre páginas
- CSS : Estilos personalizados para cada componente
- SweetAlert2 : Notificaciones y alertas personalizadas
- Fetch API : Comunicación con el backend
## 📦 Estructura del proyecto
barbers-medayork/
├── public/
├── src/
│   ├── assets/           # Imágenes y recursos estáticos
│   ├── components/       # Componentes reutilizables
│   ├── helpers/          # Funciones auxiliares y rutas protegidas
│   ├── layout/           # Componentes de estructura (Header, AsidePanel, etc.)
│   ├── pages/            # Páginas principales
│   │   ├── auth/         # Componentes de autenticación
│   ├── router/           # Configuración de rutas
│   ├── main.jsx          # Punto de entrada de la aplicación
│   └── index.css         # Estilos globales
├── index.html
├── package.json
└── vite.config.js

## 🚀 Instalación y uso
1. Clona el repositorio:
git clone https://github.com/tu-usuario/barbers-medayork.git
cd barbers-medayork
2. Instala las dependencias:
npm install
3. Inicia la aplicación:
npm run dev
4. Abre tu navegador y visita

1. Abre tu navegador en http://localhost:5173
## 🔑 Credenciales de prueba
### Usuario cliente
- Usuario : cliente@test.com
- Contraseña : 123456
### Usuario administrador
- Usuario : admin@test.com
- Contraseña : admin123
## 📱 Vistas principales
### Página principal
Muestra información sobre la barbería, servicios ofrecidos y barberos disponibles. Desde aquí los usuarios pueden acceder al sistema de reservas.

### Panel de usuario
Permite a los usuarios ver su información personal, acceder al sistema de reservas y revisar su historial de citas.

### Sistema de reservas
Interfaz donde los usuarios pueden:

- Seleccionar un barbero
- Elegir un servicio
- Seleccionar fecha y hora
- Confirmar su reserva
### Panel de administración
Permite a los administradores:

- Ver todas las citas programadas
- Actualizar el estado de las citas (Confirmada, Completada, Cancelada)
- Gestionar barberos y servicios

- servicios
## 🔄 API y Backend
La aplicación se conecta a una API REST alojada en:
https://barbersfakeapi.onrender.com
Endpoints principales:

- /appointments : Gestión de citas
- /barbers : Información de barberos
- /services : Servicios disponibles
- /customers : Información de clientes

## 📞 Contacto
Para cualquier consulta o sugerencia, por favor contacta a:

- Email: cogolloguzmanesteban@gmail.com
- Teléfono: (+57) 315-742-0408
Desarrollado con ❤️ por el equipo de Barbers Medayork