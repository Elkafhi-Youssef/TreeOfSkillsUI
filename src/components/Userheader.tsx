import React from "react";

function Userheader() {
  return (
    <>
      <div className=" border-2 border-pri w-screen bg-pri ">
        <div className=" px-72">
          <div className=" border-2 border-pri flex my-12 items-center justify-between text-primary-content">
            <div className=" flex flex-row items-center">
              <div className="avatar">
                <div className=" w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
              <div className=" flex flex-col  mx-9 text-left text-lg">
                <span className=" my-2 ">Youssef Elakfhi</span>
                <span className=" my-2 ">elkafhiyoussef@gmail.com</span>
                <span className=" my-2 ">@Y.Elkafhi</span>
              </div>
            </div>
            <div className=" text-lg">
              <span>Anner apprenent</span>
            </div>
            <div className=" text-lg mr-8">
              <span>Class name</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Userheader;
