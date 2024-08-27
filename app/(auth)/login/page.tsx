'use client';
import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { LOGIN_MUTATION } from './graphql/mutations';
import { Label } from '@/app/ui/atoms/label/label.styles';
import { StyledButton } from '@/app/ui/atoms/button/button..styles';
import { StyledInput } from '@/app/ui/atoms/input/input.styles';

export default function Login() {
 const [login] = useMutation(LOGIN_MUTATION);
 const [isClient, setIsClient] = useState(false);

 useEffect(() => {
  setIsClient(true);
 }, []);

 const loginForm = useFormik({
  initialValues: {
   username: '',
   password: '',
  },
  onSubmit: (values) => {
   alert(JSON.stringify(values, null, 2));
  },
 });
 return isClient ? (
  <form
   onSubmit={(e) => {
    e.preventDefault();
    login({ variables: { ...loginForm.values } });
   }}
  >
   <div>
    <Label htmlFor="username">Justynka Sodziaczek</Label>
    <StyledInput
     id="username"
     type="text"
     onChange={loginForm.handleChange}
     value={loginForm.values.username}
    />
   </div>
   <div>
    <label htmlFor="password">Justynka Sodziaczek</label>
    <input
     id="password"
     type="password"
     onChange={loginForm.handleChange}
     value={loginForm.values.password}
    />
   </div>
   <div>
    <StyledButton type="submit">Submit</StyledButton>
    <StyledButton type="reset">Clear</StyledButton>
   </div>
  </form>
 ) : (
  <div>LOADING...</div>
 );
}
