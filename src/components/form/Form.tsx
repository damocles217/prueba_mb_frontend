import Input from '../input/Input';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  firstSection,
  fivethSection,
  fourthSection,
  secondSection,
  thirdSection,
} from './data';
import styles from './Form.module.css';
import { Props } from '../../interfaces/input';
import { allInputNamesObject } from '../utils/validate';

function Form() {
  const [state, setState] = useState<{ [key: string]: Props[] }>({
    firstSection,
    secondSection,
    thirdSection,
    fourthSection,
    fivethSection,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validator = [];

    Object.keys(state).forEach((section) => {
      allInputNamesObject[section].forEach((validation) => {
        const input = state[section].find(
          (field) => field.inputName === validation.inputName
        );
        if (input)
          validator.push(validation.validation(input.value, input.inputName));
      });
    });

    let isValid = true;
    validator.forEach((validation) => {
      if (validation && validation.errorMessage) {
        toast.error(validation.errorMessage);
        isValid = false;
      }
    });

    if (isValid) {
      toast.success('Formulario enviado con exito');
      fetch('http://httpbin.org/post', {
        method: 'POST',
        body: JSON.stringify({
          infoUsuario: {
            ...state.firstSection,
            ...state.secondSection,
          },
          Domicilio: {
            ...state.thirdSection,
            ...state.fourthSection,
            ...state.fivethSection,
          },
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const split = e.target.name.split('-');
    const section = split[0];
    const inputName = split[1];

    setState((prev) => ({
      ...prev,
      [section]: prev[section].map((field) => {
        if (field.inputName === inputName) {
          return {
            ...field,
            value: e.target.value,
          };
        }
        return field;
      }),
    }));
  };

  return (
    <div className={styles.form}>
      <h3 className={styles.title}>Identificacion</h3>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className={styles.formContainer}
        onChange={(e: React.ChangeEvent<HTMLFormElement>) => handleChange(e)}
      >
        <section className={styles.section}>
          {state.firstSection.map((field, index) => (
            <Input
              inputName={`firstSection-${field.inputName}`}
              inputType={field.inputType}
              title={field.title}
              value={field.value}
              key={index}
            />
          ))}
        </section>
        <section className={styles.section}>
          {state.secondSection.map((field, index) => (
            <Input
              inputName={`secondSection-${field.inputName}`}
              inputType={field.inputType}
              title={field.title}
              value={field.value}
              key={index}
            />
          ))}
        </section>
        <section className={styles.section}>
          {state.thirdSection.map((field, index) => (
            <Input
              inputName={`thirdSection-${field.inputName}`}
              inputType={field.inputType}
              title={field.title}
              value={field.value}
              key={index}
            />
          ))}
        </section>
        <section className={styles.section}>
          {state.fourthSection.map((field, index) => (
            <Input
              inputName={`fourthSection-${field.inputName}`}
              inputType={field.inputType}
              title={field.title}
              value={field.value}
              key={index}
            />
          ))}
        </section>
        <section className={styles.section}>
          {state.fivethSection.map((field, index) => (
            <Input
              inputName={`fivethSection-${field.inputName}`}
              inputType={field.inputType}
              title={field.title}
              value={field.value}
              key={index}
            />
          ))}
        </section>
        <button type='submit' className={styles.button}>
          Guardar
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
export default Form;
