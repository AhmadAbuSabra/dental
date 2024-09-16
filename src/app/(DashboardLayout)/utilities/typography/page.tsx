"use client";
import { useState } from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Box,
  InputAdornment,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Collapse,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";

// Sample data for patients
const patients = [
  { id: 1, name: "John Doe", phone: "123-456-7890", lastProcedure: "Surgery" },
  {
    id: 2,
    name: "Jane Smith",
    phone: "987-654-3210",
    lastProcedure: "Check-up",
  },
  {
    id: 3,
    name: "Alice Johnson",
    phone: "555-123-4567",
    lastProcedure: "X-ray",
  },
  {
    id: 4,
    name: "Michael Brown",
    phone: "444-987-6543",
    lastProcedure: "Blood Test",
  },
  {
    id: 5,
    name: "Emily Davis",
    phone: "222-333-4444",
    lastProcedure: "MRI Scan",
  },
  {
    id: 6,
    name: "David Wilson",
    phone: "777-888-9999",
    lastProcedure: "Dental Check-up",
  },
  {
    id: 7,
    name: "Sophia Martinez",
    phone: "888-999-0000",
    lastProcedure: "Vaccination",
  },
  {
    id: 8,
    name: "Daniel Green",
    phone: "999-111-2222",
    lastProcedure: "CT Scan",
  },
  {
    id: 9,
    name: "Laura White",
    phone: "333-444-5555",
    lastProcedure: "Ultrasound",
  },
  {
    id: 10,
    name: "Chris Walker",
    phone: "666-777-8888",
    lastProcedure: "Physical Therapy",
  },
  {
    id: 11,
    name: "Maria Hall",
    phone: "444-555-6666",
    lastProcedure: "Eye Exam",
  },
  {
    id: 12,
    name: "James Lewis",
    phone: "111-222-3333",
    lastProcedure: "Heart Check-up",
  },
  {
    id: 13,
    name: "Anna Robinson",
    phone: "222-111-4444",
    lastProcedure: "Vaccination",
  },
  {
    id: 14,
    name: "Henry Lee",
    phone: "555-666-7777",
    lastProcedure: "Cancer Screening",
  },
  {
    id: 15,
    name: "Olivia Harris",
    phone: "888-222-1111",
    lastProcedure: "Dental Check-up",
  },
];

// Sample appointments data for each patient
const appointmentsData = {
  1: [
    { date: "2023-09-10", consultationNote: "Follow-up after surgery" },
    { date: "2023-08-25", consultationNote: "Pre-surgery consultation" },
  ],
  2: [{ date: "2023-09-12", consultationNote: "Routine check-up" }],
  3: [
    { date: "2023-09-13", consultationNote: "Post X-ray discussion" },
    { date: "2023-09-01", consultationNote: "X-ray scan performed" },
    { date: "2023-08-15", consultationNote: "Initial X-ray consultation" },
  ],
  4: [
    { date: "2023-07-22", consultationNote: "Blood test for cholesterol" },
    { date: "2023-05-30", consultationNote: "General health check-up" },
    {
      date: "2023-04-10",
      consultationNote: "Consultation for weight management",
    },
    { date: "2023-03-15", consultationNote: "Initial blood work" },
  ],
  5: [{ date: "2023-08-18", consultationNote: "MRI scan for back pain" }],
  6: [
    { date: "2023-09-05", consultationNote: "Dental check-up and cleaning" },
    { date: "2023-08-10", consultationNote: "Tooth extraction consultation" },
    { date: "2023-07-25", consultationNote: "Routine dental cleaning" },
  ],
  7: [
    { date: "2023-08-15", consultationNote: "First dose of COVID-19 vaccine" },
    { date: "2023-08-29", consultationNote: "Second dose of COVID-19 vaccine" },
  ],
  8: [
    { date: "2023-07-19", consultationNote: "CT scan results discussion" },
    { date: "2023-07-05", consultationNote: "CT scan for head injury" },
    {
      date: "2023-06-25",
      consultationNote: "Initial head injury consultation",
    },
  ],
  9: [
    { date: "2023-08-20", consultationNote: "Ultrasound for abdominal pain" },
  ],
  10: [
    { date: "2023-09-01", consultationNote: "Physical therapy session 1" },
    { date: "2023-09-08", consultationNote: "Physical therapy session 2" },
    { date: "2023-09-15", consultationNote: "Physical therapy session 3" },
  ],
  11: [
    {
      date: "2023-09-14",
      consultationNote: "Eye exam for prescription update",
    },
    { date: "2023-06-12", consultationNote: "Routine eye check-up" },
  ],
  12: [
    { date: "2023-07-25", consultationNote: "Heart check-up follow-up" },
    { date: "2023-06-15", consultationNote: "Cardiac stress test" },
    { date: "2023-05-10", consultationNote: "Initial heart consultation" },
    {
      date: "2023-03-25",
      consultationNote: "Routine check-up for heart health",
    },
  ],
  13: [{ date: "2023-09-01", consultationNote: "First dose of flu vaccine" }],
  14: [
    { date: "2023-08-05", consultationNote: "Cancer screening follow-up" },
    { date: "2023-07-12", consultationNote: "Cancer screening test" },
  ],
  15: [
    { date: "2023-09-10", consultationNote: "Routine dental check-up" },
    { date: "2023-08-20", consultationNote: "Cavity filling" },
  ],
};

const TypographyPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [newPatient, setNewPatient] = useState({
    name: "",
    phone: "",
    lastProcedure: "",
  });
  const [expandedPatient, setExpandedPatient] = useState<number | null>(null);

  const filteredPatients = patients.filter(
    (patient) =>
      patient.id.toString().includes(searchQuery) ||
      patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.phone.includes(searchQuery) ||
      patient.lastProcedure.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPatient({
      ...newPatient,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the logic to add a new patient here
    console.log("New Patient Data:", newPatient);
    setOpen(false);
  };

  const handleRowClick = (patientId: number) => {
    setExpandedPatient((prev) => (prev === patientId ? null : patientId));
  };

  return (
    <PageContainer title="Typography" description="this is Typography">
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
        {/* Search Input */}
        <TextField
          variant="outlined"
          placeholder="Search by Id, Name, Phone, or Last Procedure"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ width: "50%" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        {/* Add Patient Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpen}
          sx={{ alignSelf: "center" }}
        >
          Add Patient
        </Button>
      </Box>

      {/* Patient Table */}
      <Table
        aria-label="simple table"
        sx={{
          whiteSpace: "nowrap",
          mt: 2,
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={600}>
                Id
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={600}>
                Name
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={600}>
                Mobile Number
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="subtitle2" fontWeight={600}>
                Last Procedure
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredPatients.map((patient) => (
            <>
              <TableRow
                key={patient.id}
                onClick={() => handleRowClick(patient.id)}
                sx={{ cursor: "pointer" }}
              >
                <TableCell>
                  <Typography sx={{ fontSize: "15px", fontWeight: "500" }}>
                    {patient.id}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    {patient.name}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    color="textSecondary"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                    {patient.phone}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">{patient.lastProcedure}</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  colSpan={4}
                  style={{ paddingBottom: 0, paddingTop: 0 }}
                >
                  <Collapse
                    in={expandedPatient === patient.id}
                    timeout="auto"
                    unmountOnExit
                  >
                    <Box sx={{ margin: 1 }}>
                      <Typography variant="h6" gutterBottom>
                        Appointments
                      </Typography>
                      <List>
                        {appointmentsData[patient.id]?.map(
                          (appointment, index) => (
                            <ListItem key={index}>
                              <ListItemText
                                primary={`Date: ${appointment.date}`}
                                secondary={`Consultation Note: ${appointment.consultationNote}`}
                              />
                            </ListItem>
                          )
                        ) || (
                          <Typography variant="body2">
                            No appointments available
                          </Typography>
                        )}
                      </List>
                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>

      {/* Add Patient Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          Add New Patient
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                label="Id"
                name="lastProcedure"
                value={newPatient.lastProcedure}
                onChange={handleChange}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={newPatient.name}
                onChange={handleChange}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Mobile Number"
                name="phone"
                value={newPatient.phone}
                onChange={handleChange}
                sx={{ mb: 2 }}
              />
            </Box>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" variant="contained" color="primary">
                Add Patient
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </PageContainer>
  );
};

export default TypographyPage;
