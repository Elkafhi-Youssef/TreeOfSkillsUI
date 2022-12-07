import Logo from "../assets/logo.png";
import ImageLogo from "../assets/imagelogo.png";



function Login() {
  return (
    <>
      <div className=" w-screen h-screen bg-dr grid flex-col content-center ">
        <div className=" mb-24 mx-96">
          <div className="   mb-28  flex justify-center  items-center">
            <img className=" w-16" src={Logo} alt="" />
            <span className="text-green text-4xl text-b my-4">SKILLS</span>
          </div>
          <div className=" flex justify-around  items-center">
            <div className=" border-2 border-pri  rounded-xl w-96 pb-7 max-h-[380px] ">
              <form action="">
                <h3 className=" text-green text-4xl text-b my-4">Login </h3>
                <div className=" ">
                  <div className="form-control   max-w-sm mx-2">
                    <label className="label">
                      <span className="label-text text-primary-content">Enter Votre Email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Votre Email"
                      className="input input-bordered w-full bg-pri text-primary-content "
                    />
                  </div>
                  <div className="form-control  max-w-sm mx-2">
                    <label className="label">
                      <span className="label-text text-primary-content">Enter Votre Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Enter le mode de passe"
                      className="input input-bordered w-full  bg-pri text-primary-content "
                    />
                  </div>
                </div>
                <button className="btn bg-green mt-3">Login</button>
              </form>
            </div>
            <div className=" w-2/4">
                <img src={ImageLogo} alt="" />    
             </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
