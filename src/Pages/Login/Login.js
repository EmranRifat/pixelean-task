import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  




  const handleLogin=(event)=>{
    
    event.preventDefault();
    const form=event.target; 
    const email=form.email.value;
    const password=form.password.value;
    // console.log(email,password);


    fetch("http://crm.softvalley.sveducrm.com/api/admin/login",{
      

    method:"POST",
    headers:{
        'Content-Type':'application/json', 
        //  Authorization: `Bearer ${token}` 
    },
    body:JSON.stringify({
      email : "admin@example.com",
      password : "password"
  
    }),
   
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
       localStorage.setItem ('access-token',JSON.stringify( data?.data?.token)  )      
    })
    .catch(err=>console.error(err))

    
}



    return (
        <div className="hero w-full">
        <div className="hero-content  grid lg:grid-cols-1 w-1/3 flex-col lg:flex-row">
          <div className="text-center">
           <img className='h-auto  w-3/4' src="" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-16  py-20">
          
          
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Login" />
              </div>
            </form>
            <p className='text-center'>New to Service Center <Link className='text-orange-600 ' to="/signup">SignUp</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;