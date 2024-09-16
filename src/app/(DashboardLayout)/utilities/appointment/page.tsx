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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
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

const appointment = () => {
  const [appointmentDate, setAppointmentDate] = useState<Date | null>(
    new Date()
  );
  const [selectedPatient, setSelectedPatient] = useState<{
    id: number;
    name: string;
    lastProcedure: string;
  } | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [notes, setNotes] = useState<string>("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleNotesChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNotes(e.target.value);
  };

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (appointmentDate && selectedPatient) {
      console.log(
        "Selected Date:",
        format(appointmentDate, "yyyy-MM-dd HH:mm")
      );
      console.log("Selected Patient:", selectedPatient);
      console.log("Notes:", notes);
      alert("Appointment created successfully");
    } else {
      alert("Please select a patient and an appointment date.");
    }
  };

  return (
    <PageContainer
      title="Create Patient Appointment"
      description="Schedule an appointment for a patient"
    >
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Appointment Date & Time
        </Typography>
        <form onSubmit={handleSubmit}>
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
                {filteredPatients.map((patient) => (
                  <MenuItem key={patient.id} value={patient.id}>
                    {patient.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ mb: 2 }}>
            <DatePicker
              selected={appointmentDate}
              onChange={(date: Date | null) => setAppointmentDate(date)}
              showTimeSelect
              dateFormat="Pp"
              timeIntervals={15}
              timeCaption="Time"
              inline
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              label="Notes"
              multiline
              rows={4}
              value={notes}
              onChange={handleNotesChange}
            />
          </Box>

          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 2 }}
          >
            Create Appointment
          </Button>
        </form>
      </Box>
    </PageContainer>
  );
};

export default appointment;
