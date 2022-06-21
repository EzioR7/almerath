// Steps Context
import React, { useContext, useState } from "react"

// To get step value
const Step = React.createContext()

// To Next step
const NextStep = React.createContext()

// To Reset steps
const ResetStep = React.createContext()

// To Last step
const LastStep = React.createContext()

// Custom Hooks To Access The Two Context Globally in the App
export function useStep() {
  return useContext(Step)
}

export function useNextStep() {
  return useContext(NextStep)
}

export function useResetStep() {
  return useContext(ResetStep)
}

export function useLastStep() {
  return useContext(LastStep)
}

// Steps Provider
export function StepsProvider({ children }) {
  // Active Step
  const [step, setStep] = useState(0)

  function nextStep() {
    // Go To Next Step
    setStep((previousState) => {
      return (previousState + 1)
    })
  }

  function lastStep() {
    // Go To Last Step
    setStep(6)
  }

  function resetSteps() {
    setStep(0)
  }
  return (
    <Step.Provider value={step}>
      <NextStep.Provider value={nextStep}>
        <ResetStep.Provider value={resetSteps}>
          <LastStep.Provider value={lastStep}>
            {children}
          </LastStep.Provider>
        </ResetStep.Provider>
      </NextStep.Provider>
    </Step.Provider>
  )
}