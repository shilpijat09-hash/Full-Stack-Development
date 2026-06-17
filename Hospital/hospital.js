function Hospital() {

    let doctors = [];
    let patients = [];
    let appointments = [];

    return {

        addDoctor: function(id, name, specialization, status) {
            doctors.push({ id, name, specialization, status });
        },

        addPatient: function(id, name, disease) {
            patients.push({ id, name, disease });
        },

        bookAppointment: function(patient, doctor, time) {
            appointments.push({ patient, doctor, time });
        },

        showDoctors: function() {
            console.log("\n===== DOCTORS =====");

            for(let i = 0; i < doctors.length; i++) {
                console.log(doctors[i]);
            }
        },

        showPatients: function() {
            console.log("\n===== PATIENTS =====");

            for(let i = 0; i < patients.length; i++) {
                console.log(patients[i]);
            }
        },

        showAppointments: function() {
            console.log("\n===== APPOINTMENTS =====");

            for(let i = 0; i < appointments.length; i++) {
                console.log(appointments[i]);
            }
        }
    };
}

let hospital = Hospital();


// 10 Doctors
hospital.addDoctor(101,"Dr Sharma","Cardiology","Checking Patient");
hospital.addDoctor(102,"Dr Verma","Neurology","Available");
hospital.addDoctor(103,"Dr Khan","Orthopedic","On Break");
hospital.addDoctor(104,"Dr Gupta","ENT","Available");
hospital.addDoctor(105,"Dr Singh","Dermatology","In Surgery");
hospital.addDoctor(106,"Dr Jain","Pediatrics","Checking Patient");
hospital.addDoctor(107,"Dr Roy","Eye Specialist","Available");
hospital.addDoctor(108,"Dr Patel","Dentist","Waiting");
hospital.addDoctor(109,"Dr Mehta","General Physician","Available");
hospital.addDoctor(110,"Dr Das","Psychiatrist","On Break");


// 10 Patients
hospital.addPatient(1,"Rahul","Fever");
hospital.addPatient(2,"Priya","Cold");
hospital.addPatient(3,"Aman","Back Pain");
hospital.addPatient(4,"Neha","Migraine");
hospital.addPatient(5,"Rohit","Skin Allergy");
hospital.addPatient(6,"Pooja","Eye Infection");
hospital.addPatient(7,"Karan","Tooth Pain");
hospital.addPatient(8,"Anjali","Cough");
hospital.addPatient(9,"Vikas","Fracture");
hospital.addPatient(10,"Riya","Anxiety");


// Appointments
hospital.bookAppointment("Rahul","Dr Sharma","10:00 AM");
hospital.bookAppointment("Priya","Dr Verma","10:30 AM");
hospital.bookAppointment("Aman","Dr Khan","11:00 AM");
hospital.bookAppointment("Neha","Dr Gupta","11:30 AM");
hospital.bookAppointment("Rohit","Dr Singh","12:00 PM");
hospital.bookAppointment("Pooja","Dr Roy","12:30 PM");
hospital.bookAppointment("Karan","Dr Patel","01:00 PM");
hospital.bookAppointment("Anjali","Dr Mehta","02:00 PM");
hospital.bookAppointment("Vikas","Dr Khan","02:30 PM");
hospital.bookAppointment("Riya","Dr Das","03:00 PM");

hospital.showDoctors();
hospital.showPatients();
hospital.showAppointments();