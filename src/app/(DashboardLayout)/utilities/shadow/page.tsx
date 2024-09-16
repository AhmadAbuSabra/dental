"use client";
import { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  Autocomplete,
} from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Patient data
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

// Theme
const lightTheme = createTheme({ palette: { mode: "light" } });

const Shadow = () => {
  // Form state
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [consultationNotes, setConsultationNotes] = useState("");

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedPatient) {
      const formData = {
        patient: selectedPatient,
        consultationNotes,
      };
      console.log("Consultation Data:", formData);
      alert("Patient consultation inserted successfully");
    } else {
      alert("Please select a patient");
    }
  };

  return (
    <PageContainer
      title="Insert Patient Consultation"
      description="Add a new consultation for a patient"
    >
      <ThemeProvider theme={lightTheme}>
        <Box sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>
            Patient Consultation Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Autocomplete
                  options={patients}
                  getOptionLabel={(option) => option.name}
                  renderInput={(params) => (
                    <TextField {...params} label="Select Patient" required />
                  )}
                  onChange={(event, newValue) => setSelectedPatient(newValue)}
                  isOptionEqualToValue={(option, value) =>
                    option.id === value.id
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Consultation Notes"
                  name="consultationNotes"
                  multiline
                  rows={4}
                  value={consultationNotes}
                  onChange={(e) => setConsultationNotes(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </ThemeProvider>
    </PageContainer>
  );
};

export default Shadow;
