"use client";
import { useState, ChangeEvent } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Card,
  CardContent,
} from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import { format } from "date-fns";

// Example patient data with appointment dates
const patients = [
  {
    id: 1,
    name: "John Doe",
    lastProcedure: "Surgery",
    hasAppointment: true,
    appointmentDate: new Date("2024-09-20T10:30"),
  },
  {
    id: 2,
    name: "Jane Smith",
    lastProcedure: "Check-up",
    hasAppointment: true,
    appointmentDate: new Date("2024-05-14T15:00"),
  },
  {
    id: 3,
    name: "Alice Johnson",
    lastProcedure: "X-ray",
    hasAppointment: true,
    appointmentDate: new Date("2024-09-22T12:00"),
  },
  {
    id: 4,
    name: "Michael Brown",
    lastProcedure: "Dental",
    hasAppointment: true,
    appointmentDate: new Date("2024-12-20T15:00"),
  },
  {
    id: 5,
    name: "Sarah Wilson",
    lastProcedure: "MRI",
    hasAppointment: true,
    appointmentDate: new Date("2024-09-23T15:00"),
  },
];

const CancelAppointment = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Filter patients based on search input
  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCancel = (patientName: string, appointmentDate: Date | null) => {
    if (appointmentDate) {
      console.log("Cancelling appointment for:", patientName);
      alert(
        `Appointment for ${patientName} on ${format(
          appointmentDate,
          "yyyy-MM-dd HH:mm"
        )} has been canceled.`
      );
    } else {
      alert(`${patientName} does not have an active appointment.`);
    }
  };

  return (
    <PageContainer
      title="Cancel Patient Appointment"
      description="Search and cancel an appointment for a patient"
    >
      <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
        <Card elevation={2}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Cancel Appointment
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              Use the search field below to find a patient and cancel their
              scheduled appointment.
            </Typography>

            <TextField
              fullWidth
              label="Search for a patient"
              variant="outlined"
              value={searchTerm}
              onChange={handleSearchChange}
              sx={{ mb: 3 }}
            />

            {/* Show list if search term is entered */}
            {searchTerm && (
              <>
                {filteredPatients.length > 0 ? (
                  <List>
                    {filteredPatients.map((patient) => (
                      <div key={patient.id}>
                        <ListItem
                          sx={{ py: 2 }}
                          onClick={() =>
                            handleCancel(patient.name, patient.appointmentDate)
                          }
                          button
                        >
                          <ListItemText
                            primary={patient.name}
                            secondary={
                              patient.hasAppointment && patient.appointmentDate
                                ? `Appointment: ${format(
                                    patient.appointmentDate,
                                    "yyyy-MM-dd HH:mm"
                                  )}`
                                : "No Appointment"
                            }
                          />
                          <Button
                            variant="contained"
                            color="error"
                            disabled={!patient.hasAppointment}
                            onClick={() =>
                              handleCancel(
                                patient.name,
                                patient.appointmentDate
                              )
                            }
                          >
                            Cancel
                          </Button>
                        </ListItem>
                        <Divider />
                      </div>
                    ))}
                  </List>
                ) : (
                  <Typography>No patients found.</Typography>
                )}
              </>
            )}
          </CardContent>
        </Card>
      </Box>
    </PageContainer>
  );
};

export default CancelAppointment;
