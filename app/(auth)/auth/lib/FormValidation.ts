interface formProps {
  username?: string;
  password?: string;
  email?: string;
}

export default function ValidateForm(formdata: any) {
  //validating the username

  const { username, password, email } = formdata;

  console.log(username, password, email);
}
