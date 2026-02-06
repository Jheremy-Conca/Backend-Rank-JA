# 🏆 Backend Rank JA

Backend para gestionar el **ranking por puntos del programa JA** de la iglesia.  
Permite administrar **grupos, personas, actividades y rankings** de forma automática mediante una **API REST**.

Este backend está diseñado para conectarse a un **frontend moderno** como **Vue 3** o **React**. 🚀

---

## 🚀 Tecnologías usadas

- **Node.js** + **Express**
- **MongoDB** con **Mongoose**
- **CORS** para manejo de requests desde distintos orígenes
- **dotenv** para variables de entorno

---

## 📂 Estructura del proyecto

```bash
src/
│── app.js
│── server.js
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── activity.controller.js
│   ├── group.controller.js
│   ├── person.controller.js
│   └── ranking.controller.js
│
├── models/
│   ├── Activity.js
│   ├── Group.js
│   └── Person.js
│
├── routes/
│   ├── activity.routes.js
│   ├── group.routes.js
│   ├── person.routes.js
│   └── ranking.routes.js
│
└── .env.example

⚙️ Configuración del entorno
1️⃣ Clonar el repositorio
git clone https://github.com/Jheremy-Conca/Backend-Rank-JA.git
cd Backend-Rank-JA

2️⃣ Instalar dependencias
npm install

3️⃣ Configurar variables de entorno

Crea un archivo .env en la raíz del proyecto:

PORT=4000
MONGO_URI=tu_uri_de_mongodb

4️⃣ Ejecutar el servidor
npm run dev   # Desarrollo con nodemon
npm start     # Producción


📍 El servidor se ejecutará en:
👉 http://localhost:4000

🧠 Modelos principales
👥 Person
Campo	Tipo	Descripción
fullName	String	Nombre completo
type	MIEMBRO | VISITA	Tipo de persona
points	Number	Puntos acumulados
group	ObjectId (Group)	Grupo al que pertenece
🏘️ Group
Campo	Tipo	Descripción
name	CHAIM | PABLO | EMMANUEL | SHALOM	Nombre del grupo
totalPoints	Number	Total de puntos
📝 Activity
Campo	Tipo	Descripción
description	String	Descripción de la actividad
points	Number	Puntos asignados
action	SUMA | RESTA	Tipo de acción
person	ObjectId (Person)	Persona asociada
group	ObjectId (Group)	Grupo asociado
date	Date	Fecha de la actividad
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

💡 Ejemplos de Requests (Postman / CURL)
➕ Crear grupo
POST /api/groups
Content-Type: application/json

{
  "name": "CHAIM"
}

➕ Agregar puntos a una persona
POST /api/persons/641f1c2e5a8c2b0012345678/add-points
Content-Type: application/json

{
  "points": 10
}

📊 Obtener ranking de grupos
GET /api/ranking/groups

🔗 Diagrama conceptual de modelos
Diagrama
classDiagram
    Group "1" --> "*" Person : tiene
    Person "1" --> "*" Activity : realiza
    Group "1" --> "*" Activity : registra

🔐 Seguridad

Variables sensibles protegidas con dotenv

Archivos ignorados en .gitignore:

node_modules

.env

🎯 Objetivo del proyecto

Automatizar el sistema de puntajes del programa JA, permitiendo llevar un control claro y ordenado de:

Puntos por persona

Puntos por grupo

Historial de actividades

Rankings en tiempo real

✨ Autor

Jheremy Conca
🎓 Estudiante de Computación e Informática

📌 Proyecto con fines educativos y comunitarios
