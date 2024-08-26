import React from 'react'


const Login = () => {
  return (
    <div> 
        <div>
            <h1 class="heading" ><i class="fa-solid fa-square-m"></i>REACHINBOX</h1>
        </div>
            <div class="container">
              <div>
                <h1>Create a new account</h1> <br/>
              </div>
              <div class="google">
                <a href="https://accounts.google.com/InteractiveLogin/signinchooser?hl=en_GB&ifkv=Ab5oB3pnGIKE-HuG2b9yeBpVso3Cy68--Z_4gVYoBHHESm-utpZDB9ouJX7MypRIGCKEYvRBRqMJIw&ddm=0&flowName=GlifWebSignIn&flowEntry=ServiceLogin"><i class="fab fa-google"></i>Sign up With Google</a>
              </div> <br/>
              <div>
                <button class="btn btn-primary">Create an Account </button>
                <h1>
                  Already have an account?Sign In
                </h1>
            </div>
      </div>
</div>
  )
}

export default Login










