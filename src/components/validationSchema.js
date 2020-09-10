import * as yup from "yup";

export const initialValue = {
  name: "",
  email: "",
  phone: "",
};

export const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required field!"),
  email: yup.string().email().required("Email is required field!"),
  phone: yup.number().nullable().required("Number is required field!"),
});
