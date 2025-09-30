# Event Booking Application - Backend Microservices

**Project Overview:**  
Designed and implemented a robust backend for an Event Booking Application using **Node.js**, **Express.js**, and **Supabase/PostgreSQL**. The backend follows a **microservices architecture** to handle users, venues, events, bookings, payments, and notifications efficiently. Authentication is secured using **JWT tokens**, and all services are modular for scalability.

---

## Database Design

The backend uses **PostgreSQL** as the primary database. Key tables include:

### Users
Stores user information with roles for **admin, owner, organizer, and customer**.
- `userId` (PK), `email` (unique), `password`, `fullName`, `username` (unique), `role`, `phone`
- `recoveryQuestion`, `recoveryQuestionAns`, `created_at`, `is_verified`

### Venue
Stores information about venues owned by users.
- `venueId` (PK), `ownerId` (FK → users.userId), `name`, `address`, `city`, `state`, `pincode`
- `capacity`, `amenities`, `price_per_hour`, `approved`, `status`, `created_at`, `updated_at`

### Venue Images
Stores multiple images for each venue.
- `imageId` (PK), `venueId` (FK → venue.venueId), `imageUrl`, `altText`, `created_at`

### Event
Stores events organized by users at a specific venue.
- `eventId` (PK), `organizerId` (FK → users.userId), `venueId` (FK → venue.venueId)
- `name`, `description`, `start_datetime`, `end_datetime`, `max_attendees`, `ticket_policy`, `status`, `created_at`, `updated_at`

### Ticket Type
Defines ticket categories for each event.
- `ticketTypeId` (PK), `eventId` (FK → event.eventId), `name`, `price`, `quantity_total`, `quantity_sold`
- `sale_starts`, `sale_ends`, `refundable`

### Booking
Tracks user bookings for events.
- `bookingId` (PK), `userId` (FK → users.userId), `eventId` (FK → event.eventId), `ticketTypeId` (FK → ticket_type.ticketTypeId)
- `quantity`, `total_amount`, `paymentId` (FK → payment.paymentId), `status`, `booked_at`

### Payment
Manages all payment transactions.
- `paymentId` (PK), `bookingId` (FK → booking.bookingId), `payment_gateway`, `gateway_payment_id`
- `amount`, `currency`, `status`, `paid_at`

### Attendance
Tracks check-in status of booked attendees.
- `attendanceId` (PK), `bookingId` (FK → booking.bookingId), `checked_in`, `checked_in_at`

### Reviews
Stores user feedback for venues.
- `reviewId` (PK), `userId` (FK → users.userId), `venueId` (FK → venue.venueId)
- `rating`, `comment`, `created_at`

### Notifications
Stores system notifications for users.
- `notificationId` (PK), `userId` (FK → users.userId), `type`, `message`, `read`, `created_at`

---

## Key Features

- **Authentication & Authorization:** JWT-based authentication for secure access.
- **User Roles:** Admin, Owner, Organizer, Customer with role-based access.
- **Event Management:** CRUD operations for events and ticket types.
- **Venue Management:** Venue approval workflow, images, and amenities handling.
- **Booking & Payments:** Booking confirmation, payment integration (Razorpay/Stripe/PayPal), refunds.
- **Attendance Tracking:** Check-in feature for event attendees.
- **Notifications:** System, booking, and payment notifications to users.
- **Reviews & Ratings:** Feedback system for venues.
- **Scalable Microservices:** Modular design for future enhancements.

---

## Technologies & Tools

- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL, Supabase
- **Authentication:** JWT
- **Payment Gateways:** Razorpay, Stripe, PayPal
- **Version Control:** Git & GitHub
- **Documentation:** dbdocs.io

---

## Database Schema Reference

View the full database schema here: [Event Booking DB Schema](https://dbdocs.io/manishkumar7543811190/Event-Bookig-application/v/1?view=table_structure.md)
