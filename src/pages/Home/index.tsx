import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
  CountDownContainer,
  Divider,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  StartCountdownButton,
  TaskInput,
} from './styles'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Task name is required'),
  minutesAmount: zod
    .number()
    .min(5, 'Cycle must have at least 5 minutes')
    .max(60, 'Cycle must have at most 60 minutes'),
})

// interface NewCycleFormData {
//   task: string
//   minutesAmount: number
// }

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { register, handleSubmit, watch } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  function handleCreateNewCycle(data: NewCycleFormData) {
    console.log(data)
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">I'll work on</label>
          <TaskInput
            id="task"
            list="tasks-suggestions"
            placeholder="Name your project"
            {...register('task')}
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
            {...register('minutesAmount', { valueAsNumber: true })}
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

        <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
          <Play size={24} />
          Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
