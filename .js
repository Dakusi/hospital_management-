// Mock data
const doctors = [
    { name: 'Dr. John Smith', specialty: 'Cardiologist', experience: '15 years' },
    { name: 'Dr. Emily Jones', specialty: 'Neurologist', experience: '10 years' },
    { name: 'Dr. Michael Lee', specialty: 'General Physician', experience: '20 years' }
];

let patients = JSON.parse(localStorage.getItem('patients')) || [];
let appointments = JSON.parse(localStorage.getItem('appointments')) || [];

// Populate doctors list on doctors.html
if (document.getElementById('doctorsList')) {
    doctors.forEach(doctor => {
        const card = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${doctor.name}</h5>
                        <p class="card-text">Specialty: ${doctor.specialty}<br>Experience: ${doctor.experience}</p>
                        <a href="appointment.html" class="btn btn-primary">Book Appointment</a>
                    </div>
                </div>
            </div>
        `;
        document.getElementById('doctorsList').innerHTML += card;
    });
}

// Patient Registration Form
if (document.getElementById('registerForm')) {
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const patient = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value
        };
        patients.push(patient);
        localStorage.setItem('patients', JSON.stringify(patients));
        document.getElementById('registerMessage').innerHTML = '<div class="alert alert-success">Patient registered successfully!</div>';
        this.reset();
    });
}

// Appointment Booking Form
if (document.getElementById('appointmentForm')) {
    document.getElementById('appointmentForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const appointment = {
            patientName: document.getElementById('patientName').value,
            doctor: document.getElementById('doctor').value,
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            reason: document.getElementById('reason').value
        };
        appointments.push(appointment);
        localStorage.setItem('appointments', JSON.stringify(appointments));
        document.getElementById('appointmentMessage').innerHTML = '<div class="alert alert-success">Appointment booked successfully!</div>';
        this.reset();
    });
}

// Admin Login (Mock: username='admin', password='password')
if (document.getElementById('loginForm')) 
{
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();