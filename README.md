# 🏆 Backend Rank JA

Backend desarrollado para gestionar el **ranking por puntos del programa JA** de la iglesia, permitiendo administrar **grupos**, **personas**, **actividades** y **rankings** de manera automática mediante una **API REST**.

Este backend está pensado para conectarse a un **frontend (por ejemplo en Vue 3)**.

---

## 🚀 Tecnologías usadas

- Node.js
- Express
- MongoDB
- Mongoose
- Cors
- Dotenv

---

## 📂 Estructura del proyecto

## 📂 Estructura del proyecto

src/
│── app.js
│── server.js
│
├── config/
│ └── db.js
│
├── controllers/
│ ├── activity.controller.js
│ ├── group.controller.js
│ ├── person.controller.js
│ └── ranking.controller.js
│
├── models/
│ ├── Activity.js
│ ├── Group.js
│ └── Person.js
│
├── routes/
│ ├── activity.routes.js
│ ├── group.routes.js
│ ├── person.routes.js
│ └── ranking.routes.js
│
└── .env.example


---

## ⚙️ Configuración del entorno

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/Jheremy-Conca/Backend-Rank-JA.git
cd Backend-Rank-JA
2️⃣ Instalar dependencias
npm install
3️⃣ Configurar variables de entorno

Crea un archivo .env en la raíz del proyecto:
PORT=4000
MONGO_URI=tu_uri_de_mongodb

▶️ Ejecutar el servidor
npm run dev
o
npm start

📍 El servidor se ejecutará en:
http://localhost:4000
🧠 Modelos principales
👥 Person

fullName

type: MIEMBRO | VISITA

points

group

🏘️ Group

name: CHAIM | PABLO | EMMANUEL | SHALOM

totalPoints

📝 Activity

description

points

action: SUMA | RESTA

person

group

date

🔗 Endpoints de la API
📌 Grupos

POST /api/groups → Crear grupo

GET /api/groups → Listar grupos

POST /api/groups/:id/add-points → Sumar puntos al grupo

POST /api/groups/:id/subtract-points → Restar puntos al grupo

📌 Personas

POST /api/persons → Crear persona

GET /api/persons → Listar personas

GET /api/persons/:id → Obtener persona por ID

PUT /api/persons/:id → Actualizar persona

POST /api/persons/:id/add-points → Sumar puntos

POST /api/persons/:id/subtract-points → Restar puntos

📌 Actividades

GET /api/activities → Historial de actividades

📊 Rankings

GET /api/ranking/groups → Ranking por grupos

GET /api/ranking/persons → Ranking por personas

🔐 Seguridad

Variables sensibles protegidas con .env

Archivos ignorados con .gitignore:

node_modules

.env

🎯 Objetivo del proyecto

Automatizar el sistema de puntajes del programa JA, permitiendo llevar un control claro y ordenado de puntos por persona y grupo, así como visualizar rankings en tiempo real.

✨ Autor

👤 Jheremy Conca
🎓 Estudiante de Computación e Informática
📌 Proyecto con fines educativos y comunitarios
