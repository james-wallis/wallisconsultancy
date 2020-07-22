import { useState, useReducer } from 'react'
import emailjs from 'emailjs-com'

const initialState = {
  name: '',
  email: '',
  message: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.value };
    case 'email':
      return { ...state, email: action.value };
    case 'message':
      return { ...state, message: action.value };
    default:
      throw new Error();
  }
}

export default function MessageForm() {

  const [formState, dispatch] = useReducer(reducer, initialState);
  const [showFormErr, setShowFormErr] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState({ title: '', paragraph: '' });
  const { name, email, message } = formState;

  const submitContactForm = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || message === '') {
      console.log('please fill out all the fields');
      setShowFormErr(true);
      return
    }

    setFormSubmitted({ title: 'Sending message...', paragraph: '' })
    emailjs.send(process.env.EMAIL_JS_SERVICE, process.env.EMAIL_JS_TEMPLATE, formState, process.env.EMAIL_JS_USER)
      .then((response) => {
        console.log('SUCCESS sending email!', response.status, response.text);
        setFormSubmitted({ title: 'Message has been sent', paragraph: 'Mike will be in contact with you soon.' })
      }, (error) => {
        console.log('FAILED sending email..', error);
        setFormSubmitted({ title: 'Error sending message, try again later', paragraph: 'Please contact Mike either by phone or email.' })
      });
  }

  return formSubmitted.title === '' ? (
    <div>
      <h3 className="text-lato text-2xl font-light text-white">Send me a message</h3>
      <form onSubmit={submitContactForm}>
        <div className="flex font-open-sans justify-start flex-col sm:flex-row">
          <div className="sm:mr-4 w-100 sm:w-1/2 md:w-2/5 flex flex-col items-end">
            <label className="block text-gray-500 font-bold my-2 w-full">
              Name:
              <input
                tabIndex="1"
                className="appearance-none border-2 border-gray-200 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:border-theme-green"
                type="text"
                value={name}
                onChange={(e) => dispatch({ type: 'name', value: e.target.value })}
                required
              />
            </label>
            <label className="block text-gray-500 font-bold my-2 w-full">
              Email:
              <input
                tabIndex="2"
                className="appearance-none border-2 border-gray-200 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:border-theme-green"
                type="email"
                value={email}
                onChange={(e) => dispatch({ type: 'email', value: e.target.value })}
                required
              />
            </label>
          </div>
          <div className="sm:mx-4 w-full sm:w-1/2 md:w-3/5">
            <label className="block text-gray-500 font-bold my-2">
              Message:
              <textarea
                tabIndex="3"
                rows="5"
                className="appearance-none border-2 border-gray-200 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:border-theme-green"
                type="text"
                value={message}
                onChange={(e) => dispatch({ type: 'message', value: e.target.value })}
                required
              />
            </label>
          </div>
        </div>
        <div className="w-full flex justify-end items-center flex-col sm:flex-row">
          {showFormErr ? <p className="sm:mr-4 text-red-400">Please fill in all three input boxes to send a message</p> : null}
          <button tabIndex="4" className="bg-theme-green text-white py-2 px-4 mt-6 sm:mr-4 rounded focus:outline-none focus:shadow-outline w-full md:w-1/4 lg:w-1/5" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  ) : (
    <div className="flex flex-col items-center">
      <h3 className="text-lato text-2xl font-light text-white">{formSubmitted.title}</h3>
      <p>{formSubmitted.paragraph}</p>
    </div>
  )
}