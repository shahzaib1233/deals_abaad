<!-- <script>
    import { Button, TextInput, Text, NativeSelect } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useEffect, useState } from "react";
// import { DateInput } from '@mantine/dates';

const ProfileDetailsForm = () => {
  const [email, setEmail] = useState<string | null>("");
  const [fname, setfname] = useState<string | null>("");
  const [lname, setlname] = useState<string | null>("");
  const [contactno, setcontactno] = useState<string | null>("");
  const [value, setValue] = useState<Date | null>(null);
  useEffect(() => {
    const emailTemp = localStorage.getItem("email");
    const fnameTemp = localStorage.getItem("fname");
    const lnameTemp = localStorage.getItem("lname");
    const contactnoTemp = localStorage.getItem("contactno");
    setEmail(emailTemp);
    setfname(fnameTemp);
    setlname(lnameTemp);
    setcontactno(contactnoTemp);
  }, []);

</script>


   -->
