import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import DashboardCard from "@/app/(DashboardLayout)//components/shared/DashboardCard";

const products = [
  {
    id: "1",
    name: "John Michael Anderson",
    post: "Web Designer",
    pname: "(202) 555-0171",
    priority: "Low",
    pbg: "primary.main",
    budget: "Tonsillectomy",
  },
  {
    id: "2",
    name: "Emily Rose Thompson",
    post: "Project Manager",
    pname: "(305) 555-0123",
    priority: "Medium",
    pbg: "secondary.main",
    budget: "Cardiac Stent Placement",
  },
  {
    id: "3",
    name: "David Alexander Miller",
    post: "Project Manager",
    pname: "(415) 555-0198",
    priority: "High",
    pbg: "error.main",
    budget: "Gallbladder Removal",
  },
  {
    id: "4",
    name: "Sarah Elizabeth Collins",
    post: "Frontend Engineer",
    pname: "(718) 555-0147",
    priority: "Critical",
    pbg: "success.main",
    budget: "Cataract Surgery",
  },
  {
    id: "5",
    name: "Matthew James Peterson",
    post: "Frontend Engineer",
    pname: "(213) 555-0165",
    priority: "Critical",
    pbg: "success.main",
    budget: "Appendectomy",
  },
  {
    id: "6",
    name: "Olivia Grace Walker",
    post: "Frontend Engineer",
    pname: "(602) 555-0119",
    priority: "Critical",
    pbg: "success.main",
    budget: "Knee Arthroscopy",
  },
];

const ProductPerformance = () => {
  return (
    <DashboardCard title="Patients Details">
      <Box sx={{ overflow: "auto", width: { xs: "280px", sm: "auto" } }}>
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
            {products.map((product) => (
              <TableRow key={product.name}>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    {product.id}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Typography variant="subtitle2" fontWeight={600}>
                        {product.name}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography
                    color="textSecondary"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                    {product.pname}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">{product.budget}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </DashboardCard>
  );
};

export default ProductPerformance;
