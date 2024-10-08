'use client';
import { ApolloError, useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { LOGIN_MUTATION } from './graphql/mutations';
import { Label } from '@/app/ui/atoms/label/label.styles';
import { StyledButton } from '@/app/ui/atoms/button/button..styles';
import { StyledInput } from '@/app/ui/atoms/input/input.styles';
import styled from 'styled-components';
import { useIsClient } from '@/app/utils/hooks/isClient.hook';
import { authUser } from '../auth';
import { useRouter } from 'next/navigation';

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
 const [login, { loading }] = useMutation(LOGIN_MUTATION);
 const isClient = useIsClient();
 const router = useRouter();

 const loginForm = useFormik({
  initialValues: {
   username: '',
   password: '',
  },
  onSubmit: async (values, { setSubmitting }) => {
   try {
    const response = await login({ variables: { ...values } });
    if (response.data) {
     const token = response.data.login;
     authUser(token);
     if (!response?.errors) {
      router.push('/');
     }
    }
   } catch (error) {
    const errorMessage = error as ApolloError;
    console.log(errorMessage);
   } finally {
    setSubmitting(false);
   }
  },
 });

 return isClient ? (
  <Wrapper>
   <Empty></Empty>
   <LoginForm onSubmit={loginForm.handleSubmit}>
    <FormField>
     <Label htmlFor="username">Justynka Sodziaczek</Label>
     <StyledInput
      id="username"
      type="text"
      onChange={loginForm.handleChange}
      value={loginForm.values.username}
     />
    </FormField>
    <FormField>
     <Label htmlFor="password">Justynka Sodziaczek</Label>
     <StyledInput
      id="password"
      type="password"
      onChange={loginForm.handleChange}
      value={loginForm.values.password}
     />
    </FormField>
    <ButtonContainer>
     <StyledButton type="submit" disabled={loginForm.isSubmitting || loading}>
      {loading ? 'Logging in...' : 'Submit'}
     </StyledButton>
    </ButtonContainer>
   </LoginForm>
  </Wrapper>
 ) : (
  <div>LOADING...</div>
 );
}
