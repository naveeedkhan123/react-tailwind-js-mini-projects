import { useState, useEffect } from "react";
import questions from "../data/questions";


function Quiz(){


  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState("");

  const [score, setScore] = useState(0);

  const [showResult, setShowResult] = useState(false);

const [timeLeft, setTimeLeft] = useState(15);


  const question = questions[currentQuestion];





  const handleAnswer = (option)=>{


    setSelectedAnswer(option);



    if(option === question.answer){

      setScore(score + 1);

    }


  };







 const nextQuestion = ()=>{


  if(currentQuestion < questions.length - 1){

    setCurrentQuestion(currentQuestion + 1);

    setSelectedAnswer("");

    setTimeLeft(15);

  }

  else{

    setShowResult(true);

  }

};






  const restartQuiz = ()=>{


    setCurrentQuestion(0);

    setScore(0);

    setSelectedAnswer("");

    setShowResult(false);


  };


useEffect(()=>{


  if(showResult) return;


  if(timeLeft === 0){

    nextQuestion();

    return;

  }



  const timer = setTimeout(()=>{

    setTimeLeft(timeLeft - 1);

  },1000);



  return ()=>clearTimeout(timer);



},[timeLeft, showResult]);




  // Result Screen

  if(showResult){


    return(

      <div className="
        min-h-screen
        bg-gradient-to-br
        from-blue-100
        to-slate-100
        flex
        items-center
        justify-center
        p-5
      ">


        <div className="
          bg-white
          rounded-3xl
          shadow-xl
          p-10
          text-center
          max-w-md
          w-full
        ">
<div className="
 flex
 justify-between
 mb-6
 font-semibold
 text-gray-600
"></div>

          <h1 className="
            text-4xl
            font-bold
            text-blue-600
            mb-5
          ">
            Quiz Completed 🎉
          </h1>



          <p className="
            text-2xl
            font-semibold
            text-gray-700
          ">

            Your Score

          </p>



          <p className="
            text-5xl
            font-bold
            text-green-500
            my-5
          ">

            {score}/{questions.length}

          </p>




          <button

            onClick={restartQuiz}

            className="
              bg-blue-600
              text-white
              px-8
              py-3
              rounded-xl
              hover:bg-blue-700
              transition
            "

          >

            Restart Quiz

          </button>




        </div>


      </div>

    );


  }







  return (

    <div className="
      min-h-screen
      bg-gradient-to-br
      from-blue-100
      to-slate-100
      flex
      items-center
      justify-center
      p-5
    ">



      <div className="
        bg-white
        w-full
        max-w-xl
        rounded-3xl
        shadow-xl
        p-8
      ">



        <h1 className="
          text-3xl
          font-bold
          text-center
          text-blue-600
          mb-5
        ">

          Quiz Master 🧠

        </h1>





        <div className="
          flex
          justify-between
          mb-6
          font-semibold
          text-gray-600
        ">

          <span>
            Question {currentQuestion + 1}/{questions.length}
          </span>


          <span>
            Score: {score}
          </span>


        </div>







        <h2 className="
          text-xl
          font-bold
          text-gray-700
          mb-6
        ">

          {question.question}

        </h2>






        <div className="space-y-4">


        {
          question.options.map((option)=>(


            <button

              key={option}

              onClick={()=>handleAnswer(option)}

              className={`

                w-full
                p-4
                rounded-xl
                border
                text-left
                font-medium
                transition


                ${
                  selectedAnswer === option

                  ?

                  option === question.answer

                  ?

                  "bg-green-500 text-white"

                  :

                  "bg-red-500 text-white"


                  :

                  "hover:bg-blue-50"

                }

              `}

            >

              {option}

            </button>


          ))
        }


        </div>






        <button

          disabled={!selectedAnswer}

          onClick={nextQuestion}

          className="
            w-full
            mt-8
            bg-blue-600
            text-white
            py-3
            rounded-xl
            font-semibold
            disabled:bg-gray-300
            hover:bg-blue-700
            transition
          "

        >

          {
            currentQuestion === questions.length - 1
            ?
            "Finish Quiz"
            :
            "Next Question"
          }


        </button>




      </div>


    </div>


  );


}


export default Quiz;