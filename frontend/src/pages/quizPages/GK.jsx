import quizData from "./questions"


const GK = () =>{
    
return(
<>

    <h1 className="text-4xl md:text-5xl font-bold text-[#C83F12] mt-4 flex justify-center mb-4">GK</h1>
    

    <div className="flex justify-center">
       
   
    
    <div className="flex flex-col gap-6 w-full max-w-3xl flex justify-center">
        {quizData.GK.map((v, i) => (
          <div
            key={i}
            className="w-full bg-white p-6 rounded-2xl shadow-lg border hover:shadow-2xl transition-all duration-300"
          >
            <h2 className="text-lg font-semibold mb-4 text-[#8A0000]">
              Q{i + 1}: {v.question}
            </h2>

            <div className="space-y-3">
              {v.options.map((vv, ii) => (
                <div
                  key={ii}
                  className="bg-gray-100 p-3 rounded-lg hover:bg-[#C83F12] hover:text-white cursor-pointer transition-all duration-300"
                >
                  {vv}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      </div>

      {/* <div >
        {quizData.GK.map((v, i) => (
          <div key={i}>
            <h2> Q{i + 1}: {v.question} </h2>
            <div>
              {v.options.map((vv, ii) => (
                <div key={ii}>
                  {vv}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div> */}

</>
     

)
}
export default GK