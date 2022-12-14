import * as yup from "yup";
// import y
const schema = yup.object().shape({
  login: yup.string().required(),
//   lastName: yup.string().required(),
//   email: yup.string().email().required(),
  password: yup.string().min(6).required()
});

export default schema;