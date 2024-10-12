import { FormContainer, TaskInput, MinutesAmountInput } from './styles'
import { useContext } from 'react'
import { CyclesContext } from '../..'
import { useFormContext } from 'react-hook-form'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">I'll work on</label>
      <TaskInput
        id="task"
        list="tasks-suggestions"
        placeholder="Name your project"
        {...register('task')}
        disabled={!!activeCycle}
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
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutes.</span>
    </FormContainer>
  )
}
