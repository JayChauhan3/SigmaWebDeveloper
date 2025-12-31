import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors,isSubmitting },
  } = useForm()

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
    resolve()
      }, d*1000);
    })
  }

// const onsubmit = async (data) => {
//     // await delay(4)  //Simulating network delay
//    let r = await fetch("http://localhost:3000/")
//     console.log(data,res)
//     // if(data.username !== "subham"){
//     //   setError("myform",{message:"Your form is not in good order because credentials is not valid"})
//     // }
//     //  if(data.username === "rohan"){
//     //   setError("blocked", {message: "Sorry this user is blocked"})
//     // }
//   }

const onsubmit = async (data) => {
  await delay(3)
  try {
    const r = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await r.text();
    console.log(data, res);
  } catch (err) {
    console.error("Fetch error:", err);
  }
};


  return (
    <>
    {isSubmitting && <div>Loading....</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onsubmit)}>
          <input {...register("username", { required: { value: true, message: "This field is required" }, minLength: { value: 3, message: "min length is 3" }, maxLength: { value: 8, message: "max length is 8" } })} type="text" placeholder='username' />
          <br />
          {errors.username && <span className='red'>{errors.username.message}</span>}
          <br />
          <input {...register("password",{required: { value: true, message: "This field is required" }, minLength: { value: 5, message: "min length is 5"} })} type="password" placeholder='password' />
          <br />
          {errors.password && <span className='red'>{errors.password.message}</span>}
          <br />
          <input disabled={isSubmitting} type="submit" />
          <br />
          {errors.myform && <span className='red'>{errors.myform.message}</span>}
          {errors.blocked && <div className='red'>{errors.blocked.message}</div>}
        </form>
      </div>
    </>
  )
}

export default App
