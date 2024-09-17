"use client";
import { useState, ChangeEvent } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";

// Example patient data
const patients = [
  { id: 1, name: "John Doe", lastProcedure: "Surgery" },
  { id: 2, name: "Jane Smith", lastProcedure: "Check-up" },
  { id: 3, name: "Alice Johnson", lastProcedure: "X-ray" },
  { id: 4, name: "Michael Brown", lastProcedure: "Dental" },
  { id: 5, name: "Sarah Wilson", lastProcedure: "MRI" },
  { id: 6, name: "David Clark", lastProcedure: "Ultrasound" },
  { id: 7, name: "Laura Garcia", lastProcedure: "Surgery" },
  { id: 8, name: "Daniel Martinez", lastProcedure: "Physical Therapy" },
  { id: 9, name: "Jessica White", lastProcedure: "Check-up" },
  { id: 10, name: "Karen Green", lastProcedure: "Vaccination" },
  { id: 11, name: "Peter Evans", lastProcedure: "Blood Test" },
  { id: 12, name: "Emily Carter", lastProcedure: "Surgery" },
  { id: 13, name: "Anthony Walker", lastProcedure: "Eye Exam" },
];

const paymentMethods = [
  { value: "cash", label: "Cash" },
  { value: "insurance", label: "Insurance" },
];

const Payment = () => {
  const [selectedPatient, setSelectedPatient] = useState<{
    id: number;
    name: string;
    lastProcedure: string;
  } | null>(null);
  const [amount, setAmount] = useState<number | "">("");
  const [paymentMethod, setPaymentMethod] = useState<string>("");

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedPatient && amount && paymentMethod) {
      console.log("Payment Details:", {
        patient: selectedPatient,
        amount,
        paymentMethod,
      });
      alert("Payment processed successfully");
    } else {
      alert("Please complete all fields.");
    }
  };

  return (
    <PageContainer
      title="Patient Payment"
      description="Process payment for a patient"
    >
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Process Payment
        </Typography>
        <form onSubmit={handlePaymentSubmit}>
          <Box sx={{ mb: 2 }}>
            <FormControl fullWidth>
              <Select
                value={selectedPatient ? selectedPatient.id : ""}
                onChange={(e) => {
                  const patient = patients.find((p) => p.id === e.target.value);
                  setSelectedPatient(patient || null);
                }}
                displayEmpty
              >
                <MenuItem value="" disabled>
                  Select a patient
                </MenuItem>
                {patients.map((patient) => (
                  <MenuItem key={patient.id} value={patient.id}>
                    {patient.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              type="number"
              value={amount}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setAmount(Number(e.target.value))
              }
              placeholder="Enter amount"
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <FormControl fullWidth>
              <Select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                displayEmpty
              >
                <MenuItem value="" disabled>
                  Select Payment Method
                </MenuItem>
                {paymentMethods.map((method) => (
                  <MenuItem key={method.value} value={method.value}>
                    {method.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 2 }}
          >
            Process Payment
          </Button>
        </form>
      </Box>
    </PageContainer>
  );
};

export default Payment;
