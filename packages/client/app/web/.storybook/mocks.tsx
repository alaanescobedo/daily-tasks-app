import { TimeField } from "@ui/components";

const runMocks = () => {
  jest.mock('components/Form/Time/Time.tsx', () => ({
    Time: () => <TimeField defaultValue='12:00' id='time' handleChange={() => { }} />,
  }));
}

export default runMocks