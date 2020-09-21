import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import './Form.scss';


const Form = () => {
    const [thanks, setThanks] = useState('');
    const { register, handleSubmit, errors, reset } = useForm();
    // const onSubmit = (value) => console.log(value);
    const onSubmit = (data, e) => {
      e.preventDefault();
      console.log(data);
      setThanks(`Thank you ${data.name} your tickets for ${data.event} will be emailed to ${data.email} Enjoy!`);
      reset();
    };
    return (
      <>
        <section className='section-signup'>
          <div className='grid'>
            <div className='signup'>
              <div className='signup__form'>
                  <p className='thanks'> {thanks}</p>
                <form onSubmit={handleSubmit(onSubmit)} className='form'>
                  <div className='title'>
                    <h2 className='f-heading'>Events</h2>
                  </div>
                  <div className='form__group'>
                    <label htmlFor='events'></label>
                    <select
                      ref={register({ required: true })}
                      className='form__select'
                      name='event'
                    >
                      <option ref={register}>Events</option>
                      <option ref={register} value='Beastie Boys'>
                        Beastie Boys - Oct. 21st 8p
                      </option>
                      <option ref={register} value='Queen'>
                        Queen - Oct. 29th 7p
                      </option>
                      <option ref={register} value='The Doors'>
                        The Doors - Dec. 15th 10pm
                      </option>
                      <option ref={register} value='Amy Winehouse'>
                        Amy Winehouse - Dec. 31st 10pm
                      </option>
                      <option ref={register} value='John Prine'>
                        John Prine - Jan. 15th 8pm
                      </option>
                      <option ref={register} value='Tom Petty'>
                        Tom Petty - Feb. 9th 9pm
                      </option>
                      <option ref={register} value='Jimi Hendrix'>
                        Jimi Hendrix - Feb. 19th 10pm
                      </option>
                      <option ref={register} value='Miles Davis'>
                        Miles Davis - Mar. 10th 8pm
                      </option>
                      <option ref={register} value='Classic Cars'>
                        Classic Car Show - May 14th 10a - 5p
                      </option>
                    </select>
                  </div>
                  <div className='form__group'>
                    <input
                      type='email'
                      aria-label='email'
                      aria-required='true'
                      className='form__input'
                      // value={email}
                      name='email'
                      ref={register({ required: true })}
                      //   onChange={handleChange}
                      placeholder='Email'
                    />
                    <label htmlFor='email' className='form__label'>
                      Email
                    </label>
                  </div>

                  <div className='form__group'>
                    <input
                      className='form__input'
                      name='name'
                      ref={register({ required: true })}
                      placeholder=' Full Name'
                    />
                    <label htmlFor='firstName' className='form__label'>
                      Name
                    </label>
                  </div>
                  <div className='form__group'>
                    <input
                      className='form__input'
                      name='phone'
                      ref={register({ required: false })}
                      placeholder='Phone'
                    />
                    <label htmlFor='phone' className='form__label'>
                      Phone
                    </label>
                  </div>
                  <div>
                   
                  </div>
                  <div className='form__group'>
                    <button type='submit' className='submit'>
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default Form;