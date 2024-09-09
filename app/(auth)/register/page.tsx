'use client';
import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { Label } from '@/app/ui/atoms/label/label.styles';
import { StyledButton } from '@/app/ui/atoms/button/button..styles';
import { StyledInput } from '@/app/ui/atoms/input/input.styles';
import styled from 'styled-components';
import { useIsClient } from '@/app/utils/hooks/isClient.hook';
import { REGISTER_MUTATION } from '../login/graphql/mutations';

const Wrapper = styled.section`
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
 height: 100svh;
`;

const Empty = styled.div`
 ${({ theme }) => theme.brakpoint.mobile} {
  background-color: red;
  display: none;
 }
`;

const LoginForm = styled.form`
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
`;

const FormField = styled.fieldset`
 display: flex;
 flex-direction: column;
 gap: 5px;
 background-color: ${({ theme }) => theme.opacity(theme.colors.accent, 0.2)};
 padding: 20px;
`;

const ButtonContainer = styled.div`
 display: flex;
 gap: 15px;
 height: 60px;
 margin-top: 15px;
`;

export default function Login() {
 const [register] = useMutation(REGISTER_MUTATION);
 const isClient = useIsClient();

 const registerForm = useFormik({
  initialValues: {
   username: '',
   password: '',
   rePassword: '',
   email: '',
  },
  onSubmit: async (values) => {
   try {
    if (values.password === values.rePassword) {
     const respone = await register({
      variables: {
       username: values.username,
       password: values.password,
       email: values.email,
      },
     });
     console.log(respone);
    } else {
     console.log('error');
    }
   } catch (error) {
    console.error(error);
   }
  },
 });

 return isClient ? (
  <Wrapper>
   <Empty></Empty>
   <LoginForm onSubmit={registerForm.handleSubmit}>
    <FormField>
     <Label htmlFor="username">Nazwa Użytkownia</Label>
     <StyledInput
      id="username"
      type="text"
      onChange={registerForm.handleChange}
      value={registerForm.values.username}
     />
    </FormField>
    <FormField>
     <Label htmlFor="password">Hasło</Label>
     <StyledInput
      id="password"
      type="password"
      onChange={registerForm.handleChange}
      value={registerForm.values.password}
     />
    </FormField>
    <FormField>
     <Label htmlFor="rePassword">Potwierdź Hasło</Label>
     <StyledInput
      id="rePassword"
      type="password"
      onChange={registerForm.handleChange}
      value={registerForm.values.rePassword}
     />
    </FormField>
    <FormField>
     <Label htmlFor="email">E-mail</Label>
     <StyledInput
      id="email"
      type="email"
      onChange={registerForm.handleChange}
      value={registerForm.values.email}
     />
    </FormField>
    <ButtonContainer>
     <StyledButton type="submit">Submit</StyledButton>
    </ButtonContainer>
   </LoginForm>
  </Wrapper>
 ) : (
  <div>LOADING...</div>
 );
}
