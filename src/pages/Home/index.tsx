import { Play } from "phosphor-react"
import {
  CountDownContainer,
  Divider,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  StartCountdownButton,
  TaskInput,
} from "./styles"

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">I'll work on</label>
          <TaskInput
            id="task"
            list="tasks-suggestions"
            placeholder="Name your project"
          />

          <datalist id="tasks-suggestions">
            <option value="Front-end project" />
            <option value="Back-end project" />
            <option value="Mobile project" />
            <option value="Design project" />
            <option value="Marketing project" />
            <option value="Research project" />
            <option value="Documentation project" />
            <option value="Testing project" />
            <option value="Deployment project" />
            <option value="Maintenance project" />
            <option value="Support project" />
            <option value="Meeting project" />
            <option value="Training project" />
            <option value="Learning project" />
            <option value="Personal project" />
            <option value="Open-source project" />
            <option value="Community project" />
            <option value="Other project" />
          </datalist>

          <label htmlFor="minutesAmount">for</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />
          <span>minutes.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Divider>:</Divider>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountdownButton type="submit" disabled>
          <Play size={24} />
          Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
