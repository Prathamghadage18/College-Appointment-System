# College-Appointment-System
A backend API system for a college appointment booking system. Students can book appointments with professors, and professors can manage their availability and bookings. The project is built using the MERN stack backend (Node.js, Express.js, MongoDB).
# Features
A)User Authentication: Students and professors can register and log in securely.
B)Role-Based Functionality:
   1.Professors: Specify availability and manage time slots.
   2.Students: View available slots and book appointments.
C)Appointment Management: Handles time-slot availability and booking conflicts.
D)API Testing: Includes one automated test case using Jest and Supertest.
# Technologies Used
Node.js: JavaScript runtime for backend logic.
Express.js: Web framework for API development.
MongoDB: NoSQL database for data storage.
Mongoose: ODM for MongoDB.
JWT: Secure user authentication.
Bcrypt.js: Password hashing for security.
Jest & Supertest: Automated testing.
# Getting Started:
git clone https://github.com/your-username/college-appointment-system.git
cd college-appointment-system
# Install Dependencies:
npm install express mongoose jsonwebtoken bcryptjs dotenv morgan cors
npm install --save-dev jest supertest
# Configure Environment Variables:
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/appointments
JWT_SECRET=your_secret_key
PORT=5000

Start the Server:
node src/server.js

