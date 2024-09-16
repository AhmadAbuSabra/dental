import {
  IconAperture,
  IconCash,
  IconCopy,
  IconStethoscope,
  IconCalendar,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUsers,
  IconUserPlus,
  IconX,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Home",
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/",
  },
  {
    navlabel: true,
    subheader: "Utilities",
  },
  {
    id: uniqueId(),
    title: "Patient Information",
    icon: IconUsers,
    href: "/utilities/typography",
  },
  {
    id: uniqueId(),
    title: "Add Appointment",
    icon: IconCalendar,
    href: "/utilities/appointment",
  },
  {
    id: uniqueId(),
    title: "Cancel Appointment",
    icon: IconX,
    href: "/utilities/cancel-appointment",
  },
  {
    id: uniqueId(),
    title: "Add Consultation",
    icon: IconStethoscope,
    href: "/utilities/shadow",
  },
  {
    navlabel: true,
    subheader: "Auth",
  },
  {
    id: uniqueId(),
    title: "Logout",
    icon: IconLogin,
    href: "/authentication/login",
  },
  {
    id: uniqueId(),
    title: "Register",
    icon: IconUserPlus,
    href: "/authentication/register",
  },
  {
    navlabel: true,
    subheader: "Extra",
  },
  {
    id: uniqueId(),
    title: "Payment",
    icon: IconCash,
    href: "/utilities/payment",
  },
];

export default Menuitems;
