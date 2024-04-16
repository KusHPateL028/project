const data = [
    {
        id: 1,
        name: "Dr. John Smith",
        specialty: "Cardiology",
        contact_info: "john.smith@example.com",
        qualification: "MD",
        experience: 15,
        address: "123 Main St, Cityville",
        hospital_affiliation: "City General Hospital",
        consultation_fee: 150.00,
        working_hours: "Mon-Fri: 9am-5pm",
        image_url: "https://www.shutterstock.com/image-photo/healthcare-medical-staff-concept-portrait-600nw-2281024823.jpg",
        description: "Dr. John Smith is a highly experienced cardiologist with expertise in heart diseases and cardiac interventions."
    },
    {
        id: 2,
        name: "Dr. Emily Johnson",
        specialty: "Pediatrics",
        contact_info: "emily.johnson@example.com",
        qualification: "MBBS, MD",
        experience: 10,
        address: "456 Oak St, Townsville",
        hospital_affiliation: "Townsville Children Hospital",
        consultation_fee: 120.00,
        working_hours: "Mon-Wed: 10am-3pm, Fri: 1pm-6pm",
        image_url: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg",
        description: "Dr. Emily Johnson specializes in pediatrics and is dedicated to providing comprehensive care for children of all ages."
    },
    {
        id: 3,
        name: "Dr. Michael Brown",
        specialty: "Dermatology",
        contact_info: "michael.brown@example.com",
        qualification: "MD",
        experience: 20,
        address: "789 Elm St, Villageton",
        hospital_affiliation: "Villageton Skin Clinic",
        consultation_fee: 180.00,
        working_hours: "Tue-Thu: 8am-4pm, Sat: 9am-12pm",
        image_url: "https://img.freepik.com/free-photo/doctor-standing-with-folder-stethoscope_1291-11.jpg?size=626&ext=jpg&ga=GA1.1.1489364864.1710409430&semt=ais",
        description: "Dr. Michael Brown is a renowned dermatologist known for his expertise in diagnosing and treating various skin conditions."
    },
    {
        id: 4,
        name: "Dr. Sarah Johnson",
        specialty: "Obstetrics and Gynecology",
        contact_info: "sarah.johnson@example.com",
        qualification: "MD, PhD",
        experience: 18,
        address: "321 Pine St, Metroville",
        hospital_affiliation: "Metroville Women's Hospital",
        consultation_fee: 170.00,
        working_hours: "Mon-Fri: 8am-6pm",
        image_url: "https://img.freepik.com/premium-photo/indian-female-doctor-white-coat-with-stethoscope-smiling_875825-49943.jpg?size=626&ext=jpg&ga=GA1.1.1489364864.1710409430&semt=ais",
        description: "Dr. Sarah Johnson is an expert in obstetrics and gynecology, providing compassionate care to women of all ages."
    },
    {
        id: 5,
        name: "Dr. David Lee",
        specialty: "Orthopedic Surgery",
        contact_info: "david.lee@example.com",
        qualification: "MD",
        experience: 22,
        address: "567 Oak Ave, Hilltown",
        hospital_affiliation: "Hilltown Orthopedic Center",
        consultation_fee: 200.00,
        working_hours: "Mon-Thu: 9am-5pm, Fri: 9am-12pm",
        image_url: "https://img.freepik.com/free-photo/male-doctor-with-stethoscope-standing-looking-camera_114579-72885.jpg?size=626&ext=jpg&ga=GA1.1.1489364864.1710409430&semt=ais",
        description: "Dr. David Lee is a highly skilled orthopedic surgeon specializing in the treatment of musculoskeletal injuries and conditions."
    },
    {
        id: 6,
        name: "Dr. Rachel Garcia",
        specialty: "Ophthalmology",
        contact_info: "rachel.garcia@example.com",
        qualification: "MD",
        experience: 12,
        address: "789 Elm St, Parkview",
        hospital_affiliation: "Parkview Eye Clinic",
        consultation_fee: 160.00,
        working_hours: "Tue-Fri: 10am-6pm, Sat: 9am-1pm",
        image_url: "https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg",
        description: "Dr. Rachel Garcia is an ophthalmologist dedicated to providing the highest quality eye care to her patients."
    },
    {
        id: 7,
        name: "Dr. Mark Wilson",
        specialty: "Neurology",
        contact_info: "mark.wilson@example.com",
        qualification: "MD, PhD",
        experience: 16,
        address: "890 Maple Ave, Lakeside",
        hospital_affiliation: "Lakeside Neurological Institute",
        consultation_fee: 190.00,
        working_hours: "Mon-Wed: 8am-4pm, Thu: 10am-6pm",
        image_url: "https://img.freepik.com/premium-photo/doctor-man-keeping-arms-crossed_1368-40089.jpg?size=626&ext=jpg&ga=GA1.1.1489364864.1710409430&semt=ais",
        description: "Dr. Mark Wilson is a neurologist specializing in the diagnosis and treatment of neurological disorders."
    },
    {
        id: 8,
        name: "Dr. Jessica Martinez",
        specialty: "Internal Medicine",
        contact_info: "jessica.martinez@example.com",
        qualification: "MD",
        experience: 14,
        address: "111 Pine St, Sunnyside",
        hospital_affiliation: "Sunnyside Medical Center",
        consultation_fee: 180.00,
        working_hours: "Mon-Fri: 8am-5pm",
        image_url: "https://t3.ftcdn.net/jpg/04/01/33/02/360_F_401330214_0gsrcf5OLkWbF5irM0doBDwafFbWQRVH.jpg",
        description: "Dr. Jessica Martinez provides comprehensive primary care services with a focus on preventive medicine and health promotion."
    },
    {
        id: 9,
        name: "Dr. Christopher Adams",
        specialty: "Urology",
        contact_info: "christopher.adams@example.com",
        qualification: "MD",
        experience: 19,
        address: "222 Oak St, Riverside",
        hospital_affiliation: "Riverside Urology Clinic",
        consultation_fee: 180.00,
        working_hours: "Mon-Thu: 9am-5pm, Fri: 9am-12pm",
        image_url: "https://img.freepik.com/free-photo/young-man-doctor-wearing-white-coat-stethoscope-looking-confident-with-crossed-arms-1_141793-12597.jpg?size=626&ext=jpg&ga=GA1.1.1489364864.1710409430&semt=ais",
        description: "Dr. Christopher Adams specializes in the diagnosis and treatment of urinary tract and male reproductive system disorders."
    },
    {
        id: 10,
        name: "Dr. Elizabeth Taylor",
        specialty: "Psychiatry",
        contact_info: "elizabeth.taylor@example.com",
        qualification: "MD",
        experience: 17,
        address: "333 Elm St, Hillcrest",
        hospital_affiliation: "Hillcrest Psychiatric Center",
        consultation_fee: 170.00,
        working_hours: "Tue-Fri: 10am-6pm, Sat: 9am-1pm",
        image_url: "https://img.freepik.com/free-photo/portrait-doctor_144627-39389.jpg?size=626&ext=jpg&ga=GA1.1.1489364864.1710409430&semt=ais",
        description: "Dr. Elizabeth Taylor is a psychiatrist committed to providing compassionate and effective mental health care."
    }
]


export default data;