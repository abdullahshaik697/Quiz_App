import { useState } from "react";
import { useNavigate } from "react-router-dom";


const HomePageFront =() =>{
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("");
  
    const categories = ["Maths", "GK", "IQ", "Computer Science", "ReactJS", "NodeJS"];
  
    const handleStartQuiz = () => {
      if (selectedCategory) {
        navigate(`/home/${selectedCategory}`); // Pass category in URL
      } else {
        alert("Please select a category to start the quiz!");
      }
    };
  
    return (
      <div className="flex items-center justify-center min-h-[80vh] bg-gradient-to-r from-orange-100 to-yellow-100 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-xl w-full border-2 border-[#C83F12]">
          <h1 className="text-4xl md:text-5xl font-bold text-[#C83F12] mb-4">Welcome to QuizMaster!</h1>
          <p className="text-gray-700 text-lg md:text-xl mb-6">
            Test your knowledge with fun and challenging quizzes.
          </p>
  
          {/* Category Selection */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-semibold border-2 ${
                  selectedCategory === category
                    ? "bg-[#C83F12] text-white border-[#C83F12]"
                    : "bg-white text-[#C83F12] border-[#C83F12]"
                } hover:bg-[#8A0000] hover:text-white transition-all duration-300`}
              >
                {category}
              </button>
            ))}
          </div>
  
          <button
            onClick={handleStartQuiz}
            className="bg-[#C83F12] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#8A0000] transition-all duration-300"
          >
            Start Quiz
          </button>
  
          {/* Decorative Element */}
          <div className="mt-8 flex justify-center">
            <svg className="w-16 h-16 text-[#C83F12] animate-bounce" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path>
            </svg>
          </div>
        </div>
      </div>
    );
  };  


export default HomePageFront