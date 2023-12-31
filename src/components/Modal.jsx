
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
export const Modal = ({setIsOpen }) => {
    const form = useRef();
    const closeModal = () => {
        setIsOpen(false)
        setIssend(false)
    }
    const idService = 'service_9yskhqp';
    const idTemplate = 'template_ff1qbpg'
    const publicKey = 'xdjWxJM_gh9KGbhVK'

    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Subject, setSubject] = useState('')
    const [ValidNameForm, setValidNameForm] = useState(false)
    const [ValidEmailForm, setValidEmailForm] = useState(false)
    const [ValidSubjectForm, setValidSubjectForm] = useState(false)
    const [Issend, setIssend] = useState(false)

    const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const validName = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+(?:\s+[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+){1,5}(?<!\s)$/;
    const validSubject = /^[a-zA-Z ]{2,254}/;
    const saveChange = (e) =>{
        switch (e.target.id) {
            case 'name':
                setName(e.target.value)
                const testName = validName.test(Name)
                if(!testName){
                    e.target.classList.add('errorInput')
                    setValidNameForm(false)
                }else{
                    e.target.classList.remove('errorInput')
                    setValidNameForm(true)
                }
            break;
            case 'email':
                setEmail(e.target.value)
                const testEmail = validEmail.test(Email)
                if(!testEmail){
                    e.target.classList.add('errorInput')
                    setValidEmailForm(false)
                }else{
                    e.target.classList.remove('errorInput')
                    setValidEmailForm(true)
                }
            break;
            case 'subject':
                setSubject(e.target.value)
                const testSubject = validSubject.test(Subject)
                if(!testSubject){
                    e.target.classList.add('errorInput')
                    setValidSubjectForm(false)
                }else{
                    e.target.classList.remove('errorInput')
                    setValidSubjectForm(true)
                }
            break;
        }
    }
    const submitForm = (e)=>{
        e.preventDefault()
        if(Name != '' && Email != '' && Subject != ''){
            if (ValidNameForm && ValidEmailForm && ValidSubjectForm) {
                emailjs.sendForm(idService, idTemplate, form.current, publicKey)
                setIssend(true)
                setName('')
                setEmail('')
                setSubject('')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });

            }
        }
    }
    const success = ()=> {
        return(
            <div className='success'>
                <p>✔ Success</p>
            </div>
        )
    }
    return (
        <div className='modal-container'>
            <div className='modal-contact'>
            <p className='btn-closed' onClick={closeModal}>❌</p>
            <h2 className='contact-title'>contact me</h2>
            <div className='form-container'>
            <img src="src\img\typewrite.svg" alt="send email" />
            <form method='post' ref={form} >
                    <input name="user_name" id='name' required value={Name} onChange={saveChange} type="text"  placeholder='Name and last name' />
                    <input name="user_email" id='email' required value={Email} onChange={saveChange} type="email" placeholder='Email address' />
                    <textarea name="message" width = '100%' id='subject' required value={Subject} onChange={saveChange} placeholder='Subject' cols="30" rows="10" ></textarea>
                    <button onClick={submitForm} type='submit'>Send</button>
                </form>
            </div>
            {Issend? success() : ''}
            </div>
        </div>
    )
}
