# College-Appointment-System
A backend API system for a college appointment booking system. Students can book appointments with professors, and professors can manage their availability and bookings. The project is built using the MERN stack backend (Node.js, Express.js, MongoDB).
# Features
A)User Authentication: Students and professors can register and log in securely.<br>
B)Role-Based Functionality:<br>
   1.Professors: Specify availability and manage time slots.<br>
   2.Students: View available slots and book appointments.<br>
C)Appointment Management: Handles time-slot availability and booking conflicts.<br>
D)API Testing: Includes one automated test case using Jest and Supertest.<br>
# Technologies Used
Node.js: JavaScript runtime for backend logic.<br>
Express.js: Web framework for API development.<br>
MongoDB: NoSQL database for data storage.<br>
Mongoose: ODM for MongoDB.<br>
JWT: Secure user authentication.<br>
Bcrypt.js: Password hashing for security.<br>
Jest & Supertest: Automated testing.<br>
# Getting Started:
git clone https://github.com/your-username/college-appointment-system.git <br>
cd college-appointment-system <br>
# Install Dependencies:
npm install express mongoose jsonwebtoken bcryptjs dotenv morgan cors
npm install --save-dev jest supertest
# Configure Environment Variables:
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/appointments <br>
JWT_SECRET=your_secret_key <br>
PORT=5000 <br>
# Start the Server:
node src/server.js <br>

