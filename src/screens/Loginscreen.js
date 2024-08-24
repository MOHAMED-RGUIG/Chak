import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Loginscreen() {
  const [email, setEmail] = useState('');
  const [nom, setNom] = useState('');
  const [message, setMessage] = useState('');

  const [state, handleSubmit] = useForm("xzzpyzga");

  if (state.succeeded) {

      return ( <>
      <h2 className='text-center mt-5 pt-5  m-2 mb-5 pb-5' style={{ fontSize: '30px' }}>Contactez-nous!</h2>
      <p className='mt-6  pt-6 py-auto' style={{height:'200px'}}>Merci pour votre message!
      <br/>
      If you cannot provide a valid href, but still need the element to resemble a link, 
            use a button and change it with appropriate styles. </p>;
      </> )
  }

  return (
    <div className="login-page mx-auto mb-5 pb-5" style={{background: '#f9f9ff',width:'98%'}}> 
      <div className='row justify-content-center'>
        <div className='col-md-11 col-11 text-start p-3 mt-5 mb-3'>
          <h2 className='text-center m-2' style={{ fontSize: '30px' }}>Contact</h2>

          <p className='col-12 col-lg-9 mx-auto pb-5'>
            Line 63:13: The href attribute requires a valid value to be accessible. 
            Provide a valid, navigable address as the href value. 
            If you cannot provide a valid href, but still need the element to resemble a link, 
            use a button and change it with appropriate styles. 
            Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  
            jsx-a11y/anchor-is-valid navigable address as the href value. 
            If you cannot prov
          </p>

          <form className='container col-12 col-lg-10' onSubmit={handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              className='form-control'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />

            <label htmlFor="nom">Nom</label>
            <input
              id="nom"
              type="text"
              name="nom"
              className='form-control'
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
            <ValidationError 
              prefix="Nom" 
              field="nom"
              errors={state.errors}
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className='form-control'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />

            <button 
              type="submit" 
              disabled={state.submitting} 
              className='btn5 mt-3 mb-5 col-12 col-md-12 w-100' 
              style={{height:'50px'}}
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
