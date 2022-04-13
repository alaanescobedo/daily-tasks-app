import { Time } from '../src/components'

const runMocks = () => {
  jest.mock('components/Form/Time/Time.tsx', () => ({
    Time: () => <Time defaultValue='12:00' id='time' handleChange={() => { }} />,
  }));
}

export default runMocks