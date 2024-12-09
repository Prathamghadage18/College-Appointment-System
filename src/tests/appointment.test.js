const request = require("supertest");
const app = require("../app");

describe("Appointment Booking System", () => {
  it("should return 401 if unauthorized user attempts to book an appointment", async () => {
    const res = await request(app).post("/api/appointments/book").send({
      professor: "61a5c62f8c4e4411b4567890",
      date: "2024-12-10",
      timeSlot: "10:00 AM - 11:00 AM",
    });

    expect(res.status).toBe(401);
    expect(res.body.message).toBe("Authentication required");
  });
});
