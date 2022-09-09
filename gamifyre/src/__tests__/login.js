import {render, fireEvent, waitFor} from '@testing-library/react-native'
import { Formik } from 'formik';
 
import LoginForm from '../components/LoginForm'

describe('Login', () => {
    describe('Login', () => {
      it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
        const onSubmit = jest.fn();

        const { getByText}  = render( <Formik><LoginForm onSubmit={() => onSubmit({

          Username: 'mohkula',
          Password: 'salainen'
        }
        )} /></Formik>)
  


      
    

       await fireEvent.press(getByText('Sign in'));
    
       await waitFor(() => {
         
            expect(onSubmit).toHaveBeenCalledTimes(1);
            expect(onSubmit.mock.calls[0][0]).toEqual({
                Username: 'mohkula',
                Password: 'salainen'
            })
           
        });


      });
    });
  });