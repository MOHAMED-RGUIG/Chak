import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../actions/orderActions';
import Loading from '../components/Loading';
import { toast } from 'react-toastify';
import Error from '../components/Error';
import Success from '../components/Success';
import emailjs from 'emailjs-com';


function Checkout({ subtotal, codeClient,rS, modalitePai, dateCmd , handleCheckout}) {
    const orderstate = useSelector(state => state.placeOrderReducer);
    const { loading, error, success } = orderstate;
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    const dispatch = useDispatch();
    const navigate = useNavigate();
    /*useEffect(() => {
        if (success) {
            emailjs.send(
                'service_svoqzhm', // Replace with your EmailJS service ID
                'template_haq01pk', // Replace with your EmailJS template ID
                {
                    subtotal: subtotal,
                    clientEmail: currentUser.EMAILUSR,
                    myEmail: 'rguigmed107@gmail.com',
                    codeClient: codeClient,
                    modalitePai: modalitePai,
                    dateCmd: dateCmd
                },
                'ODWQC3grl59lJk-Vs' // Replace with your EmailJS user ID
            ).then(response => {
                console.log('Email sent successfully!', response.status, response.text);
            }).catch(err => {
                console.error('Failed to send email. Error:', err);
            });
        }
    }, [success, subtotal, codeClient, modalitePai, dateCmd, currentUser.EMAILUSR]);*/

    function tokenHandler() {
        if (rS.trim() && modalitePai.trim() && dateCmd.trim() && localStorage.getItem('cartItems')) {
        dispatch(placeOrder(subtotal, codeClient,rS, modalitePai, dateCmd));
        localStorage.removeItem('cartItems');
        toast.success('Your order is added successfully!', {
            position: 'bottom-right',
            autoClose: 3000,
            hideProgressBar: false
        });
        navigate('/');
          // Call handleCheckout from Cartscreen
          handleCheckout();

    }else{
        toast.error('Oops ! Merci de remplir le formulaire !', {
            position: 'bottom-right',
            autoClose: 3000,
            hideProgressBar: false
        })
    }}

    return (
        <div className='col-12 col-md-12 text-center justify-content-end' >
            {loading && (<Loading />)}
            {error && (<Error error='Something went wrong' />)}
            {success && (<Success success='Your order placed successfully' />)}
            <button className='btn5 col-11 col-md-11 mt-2 p-2'  onClick={tokenHandler}>VALIDER</button>
        </div>
    );
}

export default Checkout;
