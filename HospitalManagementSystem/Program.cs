using System;

namespace HospitalManagementSystem
{
    public delegate double BillingStrategy(double amount);

    public class PatientEventArgs : EventArgs
    {
        public string PatientName { get; set; }
        public string PatientType { get; set; }
        public double BillAmount { get; set; }
    }

    abstract class Patient
    {
        public string Name { get; set; }
        public abstract double CalculateBill();
        public abstract string Type { get; }
    }

    class GeneralPatient : Patient
    {
        public override string Type => "General";

        public override double CalculateBill()
        {
            return 2000;
        }
    }

    class EmergencyPatient : Patient
    {
        public override string Type => "Emergency";

        public override double CalculateBill()
        {
            return 5000;
        }
    }

    class ICUPatient : Patient
    {
        public override string Type => "ICU";

        public override double CalculateBill()
        {
            return 10000;
        }
    }

    class Hospital
    {
        public event EventHandler<PatientEventArgs> PatientAdmitted;

        public void AdmitPatient(Patient patient, BillingStrategy billingStrategy)
        {
            double baseAmount = patient.CalculateBill();
            double finalAmount = billingStrategy(baseAmount);

            Console.WriteLine("\n--- BILL GENERATED ---");
            Console.WriteLine($"Patient Name : {patient.Name}");
            Console.WriteLine($"Patient Type : {patient.Type}");
            Console.WriteLine($"Total Bill   : ₹{finalAmount}");

            OnPatientAdmitted(patient, finalAmount);
        }

        protected virtual void OnPatientAdmitted(Patient patient, double bill)
        {
            PatientAdmitted?.Invoke(this, new PatientEventArgs
            {
                PatientName = patient.Name,
                PatientType = patient.Type,
                BillAmount = bill
            });
        }
    }

    class NotificationService
    {
        public void NotifyDepartments(object sender, PatientEventArgs e)
        {
            Console.WriteLine("\n--- HOSPITAL NOTIFICATIONS ---");
            Console.WriteLine($"Billing Dept notified for ₹{e.BillAmount}");
            Console.WriteLine($"Medical Dept notified for {e.PatientType} patient");
            Console.WriteLine($"Records updated for patient {e.PatientName}");
        }
    }

    class Program
    {
        static void Main()
        {
            Hospital hospital = new Hospital();
            NotificationService notification = new NotificationService();

            hospital.PatientAdmitted += notification.NotifyDepartments;

            Console.Write("Enter Patient Name: ");
            string name = Console.ReadLine();

            Console.WriteLine("\nSelect Patient Type");
            Console.WriteLine("1. General");
            Console.WriteLine("2. Emergency");
            Console.WriteLine("3. ICU");

            int choice = int.Parse(Console.ReadLine());

            Patient patient;
            switch (choice)
            {
                case 1:
                    patient = new GeneralPatient();
                    break;
                case 2:
                    patient = new EmergencyPatient();
                    break;
                case 3:
                    patient = new ICUPatient();
                    break;
                default:
                    Console.WriteLine("Invalid Choice");
                    return;
            }

            patient.Name = name;

            BillingStrategy billingStrategy = amount =>
            {
                if (patient.Type == "General")
                    return amount;
                else if (patient.Type == "Emergency")
                    return amount + 1000;
                else
                    return amount + 3000;
            };

            hospital.AdmitPatient(patient, billingStrategy);

            Console.ReadLine();
        }
    }
}
